import { Router } from '@angular/router';
import { FbservisService } from './../../services/fbservis.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  uye = this.fbServis.AktifUyeBilgi;

  constructor(
    public fbServis: FbservisService,
    public router: Router
  ) {

  }

  OturumKapat() {
    this.fbServis.OturumKapat().subscribe(() => {
      this.router.navigate(['login']);
    });
  }
}
