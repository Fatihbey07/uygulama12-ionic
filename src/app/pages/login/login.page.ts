import { Observable } from 'rxjs';
import { MytoastService } from './../../services/mytoast.service';
import { FbservisService } from './../../services/fbservis.service';
import { Component, OnInit } from '@angular/core';
import { HotToastService } from '@ngneat/hot-toast';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  constructor(
    public fbServis: FbservisService,
    public htoast: HotToastService,
    public router: Router
  ) {}

  ngOnInit() {}
  OturumAc(mail: string | any, parola: string | any) {
    console.log(mail, parola);
    this.fbServis
      .OturumAc(mail, parola)
      .pipe(
        this.htoast.observe({
          success: 'Oturum Açıldı',
          loading: 'Oturum Açılıyor...',
          error: ({ message }) => `${message}`,
        })
      )
      .subscribe(() => {
        this.router.navigate(['home']);
      });
  }
}
