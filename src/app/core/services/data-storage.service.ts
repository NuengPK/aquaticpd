import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, take, tap } from 'rxjs';
import { AquaticFood } from '../models/aquaticFood.model';
import { AquaticFoodService } from './aquatic-food.service';

@Injectable({
  providedIn: 'root',
})

export class DataStorageService {

  url = 'http://localhost:3000/aquatic';
  // 'https://aquatic-example-default-rtdb.asia-southeast1.firebasedatabase.app/post.json';
  aquaticFoods!: AquaticFood[];
  dataChangeSubject = new Subject<boolean>();


  constructor(
    private _http: HttpClient,
    private _aquaticFoodService: AquaticFoodService,) { }

  createAquaticDB(aquaticd: AquaticFood): Observable<AquaticFood> {
    return this._http.post<AquaticFood>(this.url, aquaticd);
  }

  updateDB(name: string, aquaticd: AquaticFood): Observable<AquaticFood> {
    const url = `${this.url}/${name}`;
    return this._http.patch<AquaticFood>(url, aquaticd);
  }

  fetchAquaticById(id: string): Observable<AquaticFood> {
    return this._http.get<AquaticFood>(`${this.url}/${id}`);
  }

  fetchAquatic(): Observable<AquaticFood[]> {
    this._aquaticFoodService.aquaticLoadingSubject.next(false);
    //return this.authService.userSubject
    return this._http.get<AquaticFood[]>(this.url)
      .pipe(
        take(1),
        // exhaustMap((user) => {
        //   return this.http.get<AquaticFood[]>(this.url, {
        //     params: new HttpParams().set('auth', <string>user?.token),
        //   });
        // }),
        tap((aquatic) => {
          if (aquatic) {
            this._aquaticFoodService.setAquatic(aquatic);
          }
          //setTimeout(()=>{
          this._aquaticFoodService.aquaticLoadingSubject.next(true);
          //}, 2000)
        })
      );
    // .pipe(
    //   take(1),
    //   // exhaustMap((user) => {
    //   //   return this.http.get<AquaticFood[]>(this.url, {
    //   //     params: new HttpParams().set('auth', <string>user?.token),
    //   //   });
    //   // }),
    //   map((aquatic: AquaticFood[]) => {
    //     if (aquatic) {
    //       this.aquaticFoodService.getAquatic(aquatic);
    //     }
    //     console.log(aquatic);
    //     //setTimeout(()=>{
    //     return this.aquaticFoodService.aquaticLoadingSubject.next(true);
    //     //}, 2000)
    //   })
    // )
  }

  deleteInDB(name: string): Observable<string> {
    const url = `${this.url}/${name}`;
    return this._http.delete<string>(url);
  }
}
