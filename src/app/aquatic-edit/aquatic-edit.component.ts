import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { AquaticFoodService } from '../shared/aquatic-food.service';

@Component({
  selector: 'app-aquatic-edit',
  templateUrl: './aquatic-edit.component.html',
  styleUrls: ['./aquatic-edit.component.css']
})
export class AquaticEditComponent implements OnInit {
  @ViewChild('nameInput') name!:ElementRef;
  @ViewChild('quantityInput') quantity!:ElementRef;
  @ViewChild('urlInput') url!:ElementRef;
  @ViewChild('detailTextarea') detail!:ElementRef;
  img!:string;
  signupForm!:FormGroup;
  constructor(private route:ActivatedRoute,
              private aquaticFoodService:AquaticFoodService) { }

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      'name': new FormControl(null,Validators.required),
      'quantity': new FormControl(null,Validators.required),
      'url': new FormControl(null,Validators.required),
      'detail': new FormControl(null,Validators.required),
    })
  }

  onSubmit(){
    this.aquaticFoodService.addAquaticFood(this.signupForm.value.name,this.signupForm.value.quantity,this.signupForm.value.url,this.signupForm.value.detail)
    console.log(this.signupForm)
  }
  onClear(){
    this.name.nativeElement.value = ''
    this.quantity.nativeElement.value = ''
    this.url.nativeElement.value = ''
    this.detail.nativeElement.value = ''
  }
}
