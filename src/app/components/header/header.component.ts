import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';
import { Subscription } from 'rxjs';
import { AquaticFoodService } from 'src/app/core/services/aquatic-food.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { DataStorageService } from 'src/app/core/services/data-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})

export class headerComponent implements OnInit {
  userSubscription = new Subscription();
  isAuthenticate = false;
  showDataAqutic: boolean = false;

  constructor(
    private dataStorageService: DataStorageService,
    private authService: AuthService,
    private route: ActivatedRoute,
    private aquaticFoodService: AquaticFoodService
  ) {}

  ngOnInit(): void {
    this.userSubscription = this.authService.userSubject.subscribe((user) => {
      this.isAuthenticate = !!user;
      this.aquaticFoodService.aquaticDataSubject.subscribe((d) => {
        this.showDataAqutic = d;
      });
    });
  }

  // onCreateAquatic(): void {
  //   this.dataStorageService.createAquatic();
  // }

  // onFetchAquatic(): void {
  //   this.dataStorageService.fetchAquatic().subscribe();
  // }

  onLogout(): void {
    this.authService.logout();
  }
}
