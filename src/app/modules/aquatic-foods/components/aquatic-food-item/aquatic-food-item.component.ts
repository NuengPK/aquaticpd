import { Component, Input, OnDestroy, OnInit, } from '@angular/core';
import { concatMap, Subject, subscribeOn, Subscription, takeUntil, tap } from 'rxjs';
import { AquaticFood } from 'src/app/core/models/aquaticFood.model';
import { AquaticFoodService } from 'src/app/core/services/aquatic-food.service';
import { DataStorageService } from 'src/app/core/services/data-storage.service';

@Component({
  selector: 'app-aquatic-food-item',
  templateUrl: './aquatic-food-item.component.html',
  styleUrls: ['./aquatic-food-item.component.css']
})
export class AquaticFoodItemComponent implements OnInit, OnDestroy {

  isLoad: boolean = true;
  @Input() aquaticFood?: AquaticFood[] = [];

  private _unsubscribeAll = new Subject<any>();

  constructor(
    private aquaticFoodService: AquaticFoodService,
    private dataStorage: DataStorageService
  ) { }

  ngOnInit(): void {

    // this.aquaticFood = this.aquaticFoodService.getAquaticFoods();

    this.aquaticFoodService.aquaticLoadingSubject
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe((check) =>{
          // this.aquaticFood = aquaticFood;
          this.isLoad = check;
          // ควรจะเรียกไปที่ db เลย
          //this.aquaticFood = this.aquaticFoodService.getAquaticFoods();

      });
  }

  ngOnDestroy(): void {
    this._unsubscribeAll.next('');
    this._unsubscribeAll.complete();
  }
}
