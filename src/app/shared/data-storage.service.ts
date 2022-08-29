import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { exhaustMap, map, take } from 'rxjs';
import { AquaticFood } from '../aquatic-foods/AquaticFood.model';
import { User } from '../auth/user.model';
import { AquaticFoodService } from './aquatic-food.service';
import { AuthService } from './auth.service';
@Injectable({
  providedIn: 'root',
})
export class DataStorageService {
  url =
    'https://aquatic-example-default-rtdb.asia-southeast1.firebasedatabase.app/post.json';
  aquaticFoods!: AquaticFood[];

  constructor(
    private http: HttpClient,
    private aquaticFoodService: AquaticFoodService,
    private authService: AuthService
  ) {}

  createAquatic() {
        return this.http.put<AquaticFood[]>(this.url, this.aquaticFoodService.getAquaticFoods())
        .subscribe((responseData)=>{
          return responseData? 'บันทึกสำเร็จ':'บันทึกไม่สำเร็จ'
        })
  }
  fetchAquatic() {
          this.aquaticFoodService.aquaticFoodSubject.next(false);
    return this.authService.userSubject
      .pipe(
        take(1),
        exhaustMap((user) => {
          return this.http.get<AquaticFood[]>(this.url, {
            params: new HttpParams().set('auth', <string>user?.token),
          });
        }),
        map((aquatic) => {
            if (aquatic) {
              this.aquaticFoodService.getAquatic(aquatic) ;
          }
          //setTimeout(()=>{
            return this.aquaticFoodService.aquaticFoodSubject.next(true);
          //}, 2000)
        })
      )
  }
  deletePost() {
    return this.http.delete(this.url);
  }
}
