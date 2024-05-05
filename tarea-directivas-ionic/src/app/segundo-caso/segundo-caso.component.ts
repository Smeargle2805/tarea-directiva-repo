import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonList, IonItem } from "@ionic/angular/standalone";

@Component({
  selector: 'app-segundo-caso',
  templateUrl: './segundo-caso.component.html',
  styleUrls: ['./segundo-caso.component.scss'],
  standalone: true,
  imports: [IonItem, IonList, IonList, IonItem, CommonModule, FormsModule]
})
export class SegundoCasoComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

  names: string[] = ['Perro', 'Gato', 'Loro', 'Tigre', 'Elefante'];
}
