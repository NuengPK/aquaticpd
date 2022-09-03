import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, catchError, Observable, Subject, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../auth/user.model';
import { AquaticFoodService } from './aquatic-food.service';

export interface AuthUpResponseData {
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  apiKey = environment.firebaseAPIKey;
  userSubject = new BehaviorSubject<User | null>(null);
  private tokenExpirationTimer: any = null;

  constructor(private http: HttpClient, private router: Router, private aquaticFoodService:AquaticFoodService) {}

  signUp(email: string, password: string) {
    const signUpURL =
      'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=' +
      this.apiKey;
    return this.http
      .post<AuthUpResponseData>(signUpURL, {
        email: email,
        password: password,
        returnSecureToken: true,
      })
      .pipe(
        catchError(this.handleError),
        tap((respData) => {
          this.handleAuthentication(
            respData.email,
            respData.localId,
            respData.idToken,
            +respData.expiresIn
          );
        })
      );
  }

  login(email: string, password: string) {
    const signInUrl =
      'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=' +
      this.apiKey;
    return this.http
      .post<AuthUpResponseData>(signInUrl, {
        email: email,
        password: password,
        returnSecureToken: true,
      })
      .pipe(
        catchError(this.handleError),
        tap((respData) => {
          this.handleAuthentication(
            respData.email,
            respData.localId,
            respData.idToken,
            +respData.expiresIn
          );
        })
      );
  }

  logout() {
    this.userSubject.next(null);
    this.router.navigate(['auth']);
    localStorage.removeItem('userData');
    if (this.tokenExpirationTimer) {
      clearTimeout(this.tokenExpirationTimer);
    }
    this.tokenExpirationTimer = null;
    this.aquaticFoodService.resetAquaticFood()
  }

  autoLogin() {
    const userData = localStorage.getItem('userData');
    if (!userData) {
      return;
    }
    const user: {
      email: string;
      id: string;
      _token: string;
      _tokenExprirationDate: string;
    } = JSON.parse(userData);
    const loadedUser = new User(
      user.email,
      user.id,
      user._token,
      new Date(user._tokenExprirationDate)
    );
    if (loadedUser.token) {
      this.userSubject.next(loadedUser);
      const duratoinToExpire =
        new Date(user._tokenExprirationDate).getTime() - new Date().getTime();
      this.autoLogout(duratoinToExpire);
    }
  }

  autoLogout(expirationDuration: number) {
    this.tokenExpirationTimer = setTimeout(() => {
      this.logout();
    }, expirationDuration);
  }

  private handleAuthentication(
    email: string,
    localId: string,
    idToken: string,
    expiresIn: number
  ) {
    const expirationDate = new Date(new Date().getTime() + +expiresIn * 1000);
    const user = new User(email, localId, idToken, expirationDate);
    this.userSubject.next(user);
    this.autoLogout(expiresIn * 1000);
    localStorage.setItem('userData', JSON.stringify(user));
  }

  private handleError(
    errorResponse: HttpErrorResponse
  ): Observable<AuthUpResponseData> {
    let errorMessage = 'An unknown errer occurred!';
    if (!errorResponse.error || !errorResponse.error.error) {
      throw new Error(errorMessage);
    }
    switch (errorResponse.error.error.message) {
      case 'EMAIL_EXISTS':
        errorMessage = 'อีเมล์นี้ถูกใช้ไปแล้ว';
        break;
      case 'EMAIL_NOT_FOUND':
        errorMessage = 'อีเมล์นี้ยังไม่ได้ลงทะเบียน';
        break;
      case 'INVALIDID_PASSWORD':
        errorMessage = 'รหัสผ่านไม่ถูกต้อง';
        break;
      case 'INVALID_PASSWORD':
        errorMessage = 'รหัสผ่านไม่ถูกต้อง';
        break;
      case 'USER_DISABLED':
        errorMessage = 'ท่านถูกระงับการใช้งาน กรุณาติดต่อผู้ดูเเลระบบ';
        break;
      case 'OPERATION_NOT_ALLOWED':
        errorMessage = 'รหัสผ่านของท่าน ถูกระงับ ไม่สามารถใช้งานได้';
        break;
      case 'TOO_MANY_ATTEMPTS_TRY_LATER':
        errorMessage =
          'ท่านพยายามลงทะเบียนเกินจำนวนครั้งที่กำหนด ถูกระงับการใช้งานสำหรับอุปกรณ์นี้';
        break;
    }
    throw new Error(errorMessage);
  }
}
