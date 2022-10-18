import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { concatMap } from 'rxjs';
import { AquaticFood } from 'src/app/core/models/aquaticFood.model';
import { DataStorageService } from 'src/app/core/services/data-storage.service';

@Component({
  selector: 'app-aquatic-foods',
  templateUrl: './aquatic-foods.component.html',
  styleUrls: ['./aquatic-foods.component.css']
})
export class AquaticFoodsComponent implements OnInit {

  aquaticFood?: AquaticFood[];

  constructor(
    private activatedRoute: ActivatedRoute,
    private _dataStorageService:DataStorageService
    ) { };

  ngOnInit(): void {
   this.aquaticFood = this.activatedRoute.snapshot.data['aquaticFood'];
  this._dataStorageService.dataChangeSubject.pipe(
    concatMap(
      () => this._dataStorageService.fetchAquatic()
    )
  ).subscribe(
        (aquatic) => console.log(this.aquaticFood = aquatic)

    );
  }
}
