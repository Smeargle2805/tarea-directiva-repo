import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cuarto-caso',
  templateUrl: './cuarto-caso.component.html',
  styleUrls: ['./cuarto-caso.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class CuartoCasoComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

  calificacion: number = 87;

}
