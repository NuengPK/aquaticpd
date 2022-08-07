import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { AquaticFood } from '../aquatic-foods/AquaticFood.model';
import { AquaticFoodService } from '../shared/aquatic-food.service';

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
  checkNewOrEdit!: string;
  aquaticInput!: AquaticFood | undefined;
  constructor(
    private route: ActivatedRoute,
    private aquaticFoodService: AquaticFoodService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.checkNewOrEdit = params['name']!;
    });
    this.aquaticInput = this.aquaticFoodService.OpenDescription(
      this.checkNewOrEdit
    );
    if (!this.aquaticInput) {
      this.signupForm = new FormGroup({
        name: new FormControl(null, Validators.required),
        quantity: new FormControl(null, Validators.required),
        url: new FormControl(null, Validators.required),
        detail: new FormControl(null, Validators.required),
        menu: new FormArray([]),
      });
    } else {
      this.signupForm = new FormGroup({
        name: new FormControl(this.aquaticInput.name, Validators.required),
        quantity: new FormControl(
          this.aquaticInput.onHand,
          Validators.required
        ),
        url: new FormControl(this.aquaticInput.imagePath, Validators.required),
        detail: new FormControl(
          this.aquaticInput.description,
          Validators.required
        ),
        menu: new FormArray([]),
      });
    }
  }

  onSubmit() {
    if (this.aquaticInput) {
      const upDateAquatic: AquaticFood =
        {name:this.signupForm.value.name,
        description:this.signupForm.value.detail,
        imagePath:this.signupForm.value.url,
        onHand:this.signupForm.value.quantity,
        quantity:0,
        menu:this.signupForm.value.menu
      };
      console.log(upDateAquatic)
      this.aquaticFoodService.upDateAquatic(this.checkNewOrEdit,upDateAquatic);
    } else {
      const addAquatic: AquaticFood =
        {name:this.signupForm.value.name,
        description:this.signupForm.value.detail,
        imagePath:this.signupForm.value.url,
        onHand:this.signupForm.value.quantity,
        quantity:0,
        menu:this.signupForm.value.menu//เตรียมใส่ข้อมูลให้กับAddAq
      };
      this.aquaticFoodService.addAquaticFood(
        this.signupForm.value.name,
        this.signupForm.value.quantity,
        this.signupForm.value.url,
        this.signupForm.value.detail,
        this.signupForm.value.menu
      );
    }

    console.log(this.signupForm);
    this.signupForm.reset();
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
