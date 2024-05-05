import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonInput } from '@ionic/angular/standalone';

@Component({
  selector: 'app-tercer-caso',
  templateUrl: './tercer-caso.component.html',
  styleUrls: ['./tercer-caso.component.scss'],
  standalone: true,
  imports: [IonInput, CommonModule, FormsModule]
})
export class TercerCasoComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

  phoneNumber: string = '';

}
