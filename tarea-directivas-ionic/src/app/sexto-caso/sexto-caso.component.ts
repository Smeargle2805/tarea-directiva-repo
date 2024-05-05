import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonIcon, IonLabel, IonButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-sexto-caso',
  templateUrl: './sexto-caso.component.html',
  styleUrls: ['./sexto-caso.component.scss'],
  standalone: true,
  imports: [IonButton, IonIcon, IonLabel, CommonModule, FormsModule]
})
export class SextoCasoComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

  colorButton: string = 'dark';
}
