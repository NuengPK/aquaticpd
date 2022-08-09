import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { AquaticFood } from '../aquatic-foods/AquaticFood.model';
import { AquaticFoodService } from './aquatic-food.service';
@Injectable({
  providedIn: 'root',
})
export class DataStorageService {
  url =
    'https://aquatic-example-default-rtdb.asia-southeast1.firebasedatabase.app/post.json';
  loadedPost!: AquaticFood[];

  constructor(
    private http: HttpClient,
    private aquaticFoodService: AquaticFoodService
  ) {}

  createPost() {
    return this.http.put(this.url, this.aquaticFoodService.getAquaticFoods()).subscribe(() => {});
  }

  fetchPost() {
    this.aquaticFoodService.onfetchPostToArray()
        this.http
          .get<{ [key: string]: AquaticFood }>(this.url)
          .pipe(
            map((responseData) => {
              for (let key in responseData) {
                if (responseData.hasOwnProperty(key)) {
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
            })
          )
          .subscribe(() => {});
        return this.loadedPost;
      }
  deletePost(){
    return this.http.delete(this.url)
  }
}
// import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { map } from 'rxjs';
// import { AquaticFood } from '../aquatic-foods/AquaticFood.model';
// import { AquaticFoodService } from './aquatic-food.service';
// @Injectable({
//   providedIn: 'root',
// })
// export class DataStorageService {
//   url =
//     'https://aquatic-example-default-rtdb.asia-southeast1.firebasedatabase.app/post.json';
//   loadedPost!: AquaticFood[];

//   constructor(
//     private http: HttpClient,
//     private aquaticFoodService: AquaticFoodService
//   ) {}

//   createPost() {
//     return this.aquaticFoodService.getAquaticFoods().map((value: AquaticFood) => {
//       this.http.post(this.url, value).subscribe(() => {});
//     });
//   }

//   fetchPost() {
//     this.http
//       .get<{ [key: string]: AquaticFood }>(this.url)
//       .pipe(
//         map((responseData) => {
//           for (let key in responseData) {
//             if (responseData.hasOwnProperty(key)) {
//               this.aquaticFoodService.addAquaticFood(
//                 responseData[key].name,
//                 responseData[key].quantity,
//                 responseData[key].imagePath,
//                 responseData[key].description,
//                 responseData[key].menu,
//                 responseData[key].onHand
//               );
//             }
//           }
//         })
//       )
//       .subscribe(() => {});
//     return this.loadedPost;
//   }
//   deletePost(){
//     return this.http.delete(this.url)
//   }
// }
