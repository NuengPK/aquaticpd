import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AquaticFoodService } from 'src/app/shared/aquatic-food.service';
import { DataStorageService } from 'src/app/shared/data-storage.service';
import { AquaticFood } from '../AquaticFood.model';

@Component({
  selector: 'app-aquatic-food-list',
  templateUrl: './aquatic-food-list.component.html',
  styleUrls: ['./aquatic-food-list.component.css']
})
export class AquaticFoodListComponent implements OnInit {
  constructor(private dataStorageService: DataStorageService) { }
  ngOnInit(): void {
  }
  onFetchAquatic(){
    this.dataStorageService.fetchAquatic().subscribe()
  }
}
