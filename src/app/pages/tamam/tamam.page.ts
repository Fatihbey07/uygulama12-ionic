import { MytoastService } from './../../services/mytoast.service';
import { Router } from '@angular/router';
import { FbservisService } from './../../services/fbservis.service';
import { Sonuc } from './../../models/Sonuc';
import { Gorev } from './../../models/Gorev';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tamam',
  templateUrl: './tamam.page.html',
  styleUrls: ['./tamam.page.scss'],
})
export class TamamPage implements OnInit {
  eskiGorevler: Gorev[] = [];
  mevcutGorevler: Gorev[] = [];
  isModalOpen = false;
  constructor(
    public fbservis: FbservisService,
    public router: Router,
    public toast: MytoastService
  ) {}

  ngOnInit() {
    this.GorevListele();
  }
  ionViewWillEnter() {
    this.GorevListele();
  }
  GorevListele() {
    this.fbservis.GorevListele().subscribe((d) => {
      this.mevcutGorevler = d.filter(
        (s) => s.tamam == false || s.tamam == null
      );
      this.eskiGorevler = d.filter((s) => s.tamam == true);
    });
  }
  TamamIptal(gorev: Gorev, d: boolean) {
    gorev.tamam = d;
    this.fbservis.GorevDuzenle(gorev).then(() => {
      var s: Sonuc = new Sonuc();
      s.islem = true;
      s.mesaj = 'Görev Güncellendi';
      this.toast.toastUygula(s.mesaj);
    });
  }
  Sil(gorev: Gorev) {
    this.fbservis.GorevSil(gorev).then(() => {
      var s: Sonuc = new Sonuc();
      s.islem = true;
      s.mesaj = 'Görev Silindi';
      this.toast.toastUygula(s.mesaj);
    });
  }
  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
    this.GorevListele()
  }
}
