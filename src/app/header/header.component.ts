import { Component, OnInit} from '@angular/core';
import { Subscription } from 'rxjs';
import { AquaticFoodService } from '../shared/aquatic-food.service';
import { AuthService } from '../shared/auth.service';
import { DataStorageService } from '../shared/data-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class headerComponent implements OnInit {
  userSubscription = new Subscription();
  isAuthenticate = false;

  constructor(private dataStorageService: DataStorageService,private aquaticFoodService:AquaticFoodService,
    private authService: AuthService) {}

  ngOnInit(): void {
    this.userSubscription = this.authService.userSubject
    .subscribe(
      user => {
        this.isAuthenticate = !!user
      }
    )
  }
  onCreateAquatic(){
    console.log(this.dataStorageService.createAquatic())
  }
  onFetchAquatic(){
    this.dataStorageService.fetchAquatic()
  }
  onLogout(){
    this.authService.logout();
  }
};
