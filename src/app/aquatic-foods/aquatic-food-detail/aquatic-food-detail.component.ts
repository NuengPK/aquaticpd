import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data, Params } from '@angular/router';
import { AquaticFoodService } from 'src/app/shared/aquatic-food.service';
import { DataStorageService } from 'src/app/shared/data-storage.service';
import { Distribution } from 'src/app/shared/distribution.model';
import { DistributionService } from 'src/app/shared/distridution.service';
import { AquaticFood } from '../AquaticFood.model';

@Component({
  selector: 'app-aquatic-food-detail',
  templateUrl: './aquatic-food-detail.component.html',
  styleUrls: ['./aquatic-food-detail.component.css'],
})
export class AquaticFoodDetailComponent implements OnInit {
  aquaticFood!: AquaticFood;
  distribution!: Distribution;
  checkItemOrRoute:boolean = false;

  constructor(
    private route: ActivatedRoute,
    private aquaticFoodService: AquaticFoodService,
    private dataStorageService: DataStorageService,
    private distributionService:DistributionService
  ) {}

  ngOnInit(): void {
    if(this.aquaticFood){
      this.route.params.subscribe((params: Params) => {
        this.aquaticFood = this.aquaticFoodService.OpenDescription(
            params['name']
          )!;
      })
    }else this.dataStorageService.fetchAquatic().subscribe(() => {
      this.route.params.subscribe((params: Params) => {
        if (+params['name']) {
          this.aquaticFood = this.aquaticFoodService.addAquaticByNum(
            +params['name']
          )!;
          this.distribution = this.distributionService.addValueOnInput(this.aquaticFood.name)!
        } else {
          this.aquaticFood = this.aquaticFoodService.OpenDescription(
            params['name']
          )!;
          this.distribution = this.distributionService.addValueOnInput(this.aquaticFood.name)!
        }
      });
    });
  }
  onDeleteAquatic() {
    this.aquaticFoodService.deleteAquatic(this.aquaticFood.name);
  }
}
