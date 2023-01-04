import { HotToastService } from '@ngneat/hot-toast';
import { FbservisService } from './../../services/fbservis.service';
import { Gorev } from './../../models/Gorev';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-ekle',
  templateUrl: './ekle.page.html',
  styleUrls: ['./ekle.page.scss'],
})
export class EklePage implements OnInit {
  mevcutGorevler: Gorev[] = [];
  eskiGorevler: Gorev[] = [];
  frm: FormGroup = new FormGroup({
    baslik: new FormControl(),
    aciklama: new FormControl(),
    tamam: new FormControl()
  });
  constructor( public fbservis: FbservisService,
    public htoast: HotToastService) { }

  ngOnInit() {
    
  }
  Kaydet() {
    console.log(this.frm.value);
    this.fbservis.GorevEkle(this.frm.value)
      .pipe(
        this.htoast.observe({
          success: 'Görev Eklendi',
          loading: 'Görev Ekleniyor...',
          error: ({ message }) => `${message}`
        })
      )
      .subscribe();
  }
}
