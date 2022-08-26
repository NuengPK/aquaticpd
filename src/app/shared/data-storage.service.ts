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
    return this.authService.userSubject
      .pipe(
        take(1),
        exhaustMap((user) => {
          return this.http.get<AquaticFood[]>(this.url, {
            params: new HttpParams().set('auth', <string>user?.token),
          });
        }),
        map((responseData) => {
          const postArray: AquaticFood[] = [];
          this.aquaticFoodService.resetAquaticFood()
          this.aquaticFoodService.aquaticFoodSubject.next(false);
          for (let key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              postArray.push({ ...responseData[key] });
              this.aquaticFoodService.addAquaticFood(
                responseData[key].name,
                responseData[key].quantity,
                responseData[key].imagePath,
                responseData[key].description,
                responseData[key].menu,
                responseData[key].onHand
              );
            }
          }
          return this.aquaticFoodService.aquaticFoodSubject.next(true);
        })
      )
  }
  deletePost() {
    return this.http.delete(this.url);
  }
}
