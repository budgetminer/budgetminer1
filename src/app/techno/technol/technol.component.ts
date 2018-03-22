import { Component, OnInit } from '@angular/core';

import { TechnosService } from '../techno.service'
import { Techno } from '../techno.model';

@Component({
  selector: 'app-technol',
  templateUrl: './technol.component.html',
  styleUrls: ['./technol.component.css']
})
export class TechnolComponent implements OnInit {

  technos: Techno[] = [];
  constructor (private lS: TechnosService) {};

  ngOnInit() {
    this.technos = this.lS.Technos;
  }
}