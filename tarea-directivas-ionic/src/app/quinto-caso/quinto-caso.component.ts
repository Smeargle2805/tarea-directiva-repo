import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonLabel } from '@ionic/angular/standalone';

@Component({
  selector: 'app-quinto-caso',
  templateUrl: './quinto-caso.component.html',
  styleUrls: ['./quinto-caso.component.scss'],
  standalone: true,
  imports: [IonLabel, CommonModule, FormsModule]
})
export class QuintoCasoComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

  colorTexto: string = '#2aff2b';

}
