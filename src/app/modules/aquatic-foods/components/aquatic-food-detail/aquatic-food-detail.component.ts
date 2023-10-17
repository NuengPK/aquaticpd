import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data, Params } from '@angular/router';
import { faCartPlus, faStoreAlt, faBarsStaggered } from '@fortawesome/free-solid-svg-icons';

import { AquaticFood } from '../../../../core/models/aquaticFood.model';
import { Distribution } from 'src/app/core/models/distribution.model';
import { AquaticFoodService } from 'src/app/core/services/aquatic-food.service';
import { DataStorageService } from 'src/app/core/services/data-storage.service';
import { DistributionService } from 'src/app/core/services/distridution.service';
import { concatMap, tap, timeout } from 'rxjs';

@Component({
  selector: 'app-aquatic-food-detail',
  templateUrl: './aquatic-food-detail.component.html',
  styleUrls: ['./aquatic-food-detail.component.css'],
})

export class AquaticFoodDetailComponent implements OnInit {
  aquaticFood?: AquaticFood;
  distribution?: Distribution;
  checkItemOrRoute: boolean = false;
  faCartPlus = faCartPlus;
  faStoreAlt = faStoreAlt;
  faBarsStaggered = faBarsStaggered;
  disQty = 0;

  constructor(
    private route: ActivatedRoute,
    private aquaticFoodService: AquaticFoodService,
    private dataStorageService: DataStorageService,
    private distributionService: DistributionService
  ) { }

  ngOnInit(): void {
    this.route.params
     .pipe(
      tap((params: Params) => console.log(params)),
      concatMap((params: Params) => {
         return this.dataStorageService.fetchAquaticById(params['id']);
      })
     )
     .subscribe((aquaticFood) => {
      console.log(aquaticFood);
      this.aquaticFood = aquaticFood;
     });

    // if (this.aquaticFoodService.getAquaticFoods().length !== 0) {
    //   this.route.params.subscribe((params: Params) => {

    //     if (+params['name']) {
    //       this.aquaticFood = this.aquaticFoodService.addAquaticByNum(
    //         +params['name']
    //       )!;
    //     } else {
    //       this.aquaticFood = this.aquaticFoodService.openDescription(
    //         params['name']
    //       )!;
    //     }

    //     this.distribution = this.distributionService.addValueOnInput(this.aquaticFood.name)!
    //     this.disQty = this.distribution ? this.distribution.quantity : 0;
    //   });

    // } else this.dataStorageService.fetchAquatic().subscribe(() => {
    //   this.route.params.subscribe((params: Params) => {

    //     if (+params['name']) {
    //       this.aquaticFood = this.aquaticFoodService.addAquaticByNum(
    //         +params['name']
    //       )!;
    //     } else {
    //       this.aquaticFood = this.aquaticFoodService.openDescription(
    //         params['name']
    //       )!;
    //     }

    //     this.distribution = this.distributionService.addValueOnInput(this.aquaticFood.name)!
    //     this.disQty = this.distribution ? this.distribution.quantity : 0;
    //   });
    // });
  }

  onDeleteAquatic(): void {
    if (this.aquaticFood?._id) {

      this.dataStorageService.deleteInDB(this.aquaticFood._id)
        .pipe(concatMap( () =>  this.dataStorageService.fetchAquatic() ))
        .subscribe(() => {
          console.log('ลบ : ', this.aquaticFood);
          this.dataStorageService.dataChangeSubject.next(true);
        });

    } else {
      console.log("ไม่พบรายการที่ต้องการลบ");
    }
  }
}
