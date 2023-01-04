import { Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import { FbservisService } from './../../services/fbservis.service';
import { Component, OnInit } from '@angular/core';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  constructor(
    public fbServis: FbservisService,
    public htoast: HotToastService,
    public router: Router
  ) { }

  ngOnInit() {
  }
  UyeOl(adsoyad: any, email: any, parola: any) {
    this.fbServis.
      KayitOl(email, parola)
      .pipe(
        switchMap(({ user: { uid } }) =>
          this.fbServis.UyeEkle({ uid, email, displayName: adsoyad })
        ),
        this.htoast.observe({
          success: 'Tebrikler Kayıt Yapıldı',
          loading: 'Kayıt Yapılıyor...',
          error: ({ message }) => `${message}`,
          
        })
      )
      .subscribe(() => {
        this.router.navigate(['']);
      });
  }


}
