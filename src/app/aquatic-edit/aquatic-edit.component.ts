import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { AquaticFood } from '../aquatic-foods/AquaticFood.model';
import { AquaticFoodService } from '../shared/aquatic-food.service';
import { DataStorageService } from '../shared/data-storage.service';

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
  img!: string;
  signupForm!: FormGroup;
  aquaticInput!: AquaticFood | undefined;
  submitEvent: boolean = false;
  constructor(
    private route: ActivatedRoute,
    private aquaticFoodService: AquaticFoodService,
    private dataStorageService: DataStorageService
  ) {}

  ngOnInit(): void {
    this.dataStorageService.fetchAquatic().subscribe(() => {
      this.route.params.subscribe((params: Params) => {
        if (+params['name']!) {
          this.aquaticInput = this.aquaticFoodService.addAquaticByNum(
            +params['name']!
          );
        }
        if (params['name']!) {
          this.aquaticInput = this.aquaticFoodService.OpenDescription(
            params['name']!
          );
        }

        if (!this.aquaticInput) {
          this.signupForm = new FormGroup({
            name: new FormControl(null, Validators.required),
            quantity: new FormControl(null, Validators.required),
            url: new FormControl(null, Validators.required),
            detail: new FormControl(null, Validators.required),
            menu: new FormArray([]),
          });
        } else {
          //this.aquaticInput.menu.map((value: string, index: number, array: string[]) =>)
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
          if (this.aquaticInput.menu) {
            this.aquaticInput.menu.map(
              (value: string, index: number, array: string[]) => {
                const controls = new FormControl(value, Validators.required);
                (<FormArray>this.signupForm.get('menu')).push(controls);
              }
            );
          }
        }
      });
    });
  }

  onSubmit() {
    if (this.aquaticInput) {
      const upDateAquatic: AquaticFood = {
        name: this.signupForm.value.name,
        description: this.signupForm.value.detail,
        imagePath: this.signupForm.value.url,
        quantity: this.signupForm.value.quantity,
        onHand: 0,
        menu: this.signupForm.value.menu,
      };
      console.log(upDateAquatic);
      this.aquaticFoodService.upDateAquatic(
        this.aquaticInput.name,
        upDateAquatic
      );
    } else {
      const addAquatic: AquaticFood = {
        name: this.signupForm.value.name,
        description: this.signupForm.value.detail,
        imagePath: this.signupForm.value.url,
        quantity: 0,
        onHand: this.signupForm.value.quantity,
        menu: this.signupForm.value.menu, //เตรียมใส่ข้อมูลให้กับAddAq
      };
      this.aquaticFoodService.addAquaticFood(
        this.signupForm.value.name,
        this.signupForm.value.quantity,
        this.signupForm.value.url,
        this.signupForm.value.detail,
        this.signupForm.value.menu,
        0
      );
    }
    this.submitEvent = true;
    console.log(this.signupForm);
  }
  onAddMenu() {
    const controls = new FormControl(null, Validators.required);
    (<FormArray>this.signupForm.get('menu')).push(controls);
  }
  onDeleteMenu(i: number) {
    (<FormArray>this.signupForm.get('menu')).removeAt(i);
  }
  get controls() {
    return (this.signupForm.get('menu') as FormArray).controls;
  }
}
