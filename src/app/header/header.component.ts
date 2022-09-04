import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';
import { Subscription } from 'rxjs';
import { AquaticFoodService } from '../shared/aquatic-food.service';
import { AuthService } from '../shared/auth.service';
import { DataStorageService } from '../shared/data-storage.service';

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
  onCreateAquatic() {
    this.dataStorageService.createAquatic();
  }
  onFetchAquatic() {
    this.dataStorageService.fetchAquatic().subscribe();
  }
  onLogout() {
    this.authService.logout();
  }
}
