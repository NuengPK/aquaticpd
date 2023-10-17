import { identifierName } from '@angular/compiler';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { concatMap, of, take, tap } from 'rxjs';
import { AquaticFood } from 'src/app/core/models/aquaticFood.model';
import { AquaticFoodService } from 'src/app/core/services/aquatic-food.service';
import { DataStorageService } from 'src/app/core/services/data-storage.service';

@Component({
  selector: 'app-aquatic-edit',
  templateUrl: './aquatic-edit.component.html',
  styleUrls: ['./aquatic-edit.component.css'],
})
export class AquaticEditComponent implements OnInit {

  @ViewChild('nameInput') name!: ElementRef;
  @ViewChild('quantityInput') quantity!: ElementRef;
  @ViewChild('urlInput') url!: ElementRef;
  @ViewChild('detailTextarea') detail!: ElementRef;

  signupForm!: FormGroup;
  aquaticInput?: AquaticFood | undefined;
  submitEvent: boolean = false;
  isNew?: boolean;

  constructor(
    private _route: ActivatedRoute,
    private _dataStorageService: DataStorageService
  ) { }

  ngOnInit(): void {

    this._route.params
      .pipe(
        tap((params: Params) => console.log(params)),
        concatMap((params: Params) => {
          const id = params['id'];
          this.isNew = (id === 'new')
          console.log(id);
          console.log(this.isNew);
          return (this.isNew) ? of (undefined)
            : this._dataStorageService.fetchAquaticById(id);
        })
      )
      .subscribe((aquatic) => {
        if (this.isNew) {
          this.signupForm = new FormGroup({
            name: new FormControl(null, Validators.required),
            quantity: new FormControl(null, Validators.required),
            url: new FormControl(null, Validators.required),
            detail: new FormControl(null, Validators.required),
            menu: new FormArray([]),
          });
        } else {
          this.aquaticInput = aquatic;
          if (this.aquaticInput) {
            this.signupForm = new FormGroup({
              name: new FormControl(this.aquaticInput.name, Validators.required),
              quantity: new FormControl(
                this.aquaticInput.quantity,
                Validators.required
              ),
              url: new FormControl(
                this.aquaticInput.imagePath,
                Validators.required
              ),
              detail: new FormControl(
                this.aquaticInput.description,
                Validators.required
              ),
              menu: new FormArray([]),
            });
          }
        }
      });
  }

  onSubmit(): void {
    let action$;
    let checkMode = '';

    let inputAquatic: AquaticFood = {
      name: this.signupForm.value.name,
      description: this.signupForm.value.detail,
      imagePath: this.signupForm.value.url,
      quantity: this.signupForm.value.quantity,
      onHand: 0,
      menu: this.signupForm.value.menu,
    };

    if (this.aquaticInput) {
      checkMode = 'บันทึก';
      action$ = this._dataStorageService.updateDB(this.aquaticInput.name, inputAquatic);

    } else {
      checkMode = 'สร้าง';
      action$ = this._dataStorageService.createAquaticDB(inputAquatic);
    }

    action$.pipe(concatMap(() => this._dataStorageService.fetchAquatic()))
      .subscribe(() => {
        this.aquaticInput = inputAquatic;
        this.submitEvent = true;
        this._dataStorageService.dataChangeSubject.next(true);

        console.log(checkMode, ' : ', inputAquatic);
      })
  }

  onAddMenu(): void {
    const controls = new FormControl(null, Validators.required);
    (<FormArray>this.signupForm.get('menu')).push(controls);
  }

  onDeleteMenu(i: number): void {
    (<FormArray>this.signupForm.get('menu')).removeAt(i);
  }

  get controls(): AbstractControl[] {
    return (this.signupForm.get('menu') as FormArray).controls;
  }

}
