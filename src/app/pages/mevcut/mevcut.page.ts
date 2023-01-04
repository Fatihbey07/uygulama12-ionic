import { Sonuc } from './../../models/Sonuc';
import { FbservisService } from './../../services/fbservis.service';
import { MytoastService } from './../../services/mytoast.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Gorev } from './../../models/Gorev';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mevcut',
  templateUrl: './mevcut.page.html',
  styleUrls: ['./mevcut.page.scss'],
})
export class MevcutPage implements OnInit {
  mevcutGorevler: Gorev[] = [];
  eskiGorevler: Gorev[] = [];
  frm: FormGroup = new FormGroup({
    baslik: new FormControl(),
    aciklama: new FormControl(),
    tamam: new FormControl(),
  });
  constructor(public fbservis: FbservisService,
    public toast: MytoastService,) { }

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
}
