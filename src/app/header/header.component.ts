import { Component, OnInit} from '@angular/core';
import { AquaticFoodService } from '../shared/aquatic-food.service';
import { DataStorageService } from '../shared/data-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class headerComponent implements OnInit {
  constructor(private dataStorageService: DataStorageService,private aquaticFoodService:AquaticFoodService) {}

  ngOnInit(): void {
  }

  onCreatePosts(){
    this.dataStorageService.createPost()
  }
  onFetchPost(){
    this.dataStorageService.fetchPost()
  }
};
