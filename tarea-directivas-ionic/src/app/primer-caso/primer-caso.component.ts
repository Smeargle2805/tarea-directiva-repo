import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonButton, IonItem, IonLabel } from "@ionic/angular/standalone";

@Component({
  selector: 'app-primer-caso',
  templateUrl: './primer-caso.component.html',
  styleUrls: ['./primer-caso.component.scss'],
  standalone: true,
  imports: [IonItem, IonButton, IonLabel, CommonModule, FormsModule],
})
export class PrimerCasoComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

  contador: number = 0;

  sumar() {
    this.contador++;
  }

}
