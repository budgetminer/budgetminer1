import { Component, OnInit } from '@angular/core';
import { TechnosService } from './techno.service';
import { Techno } from './techno.model';

@Component({
  selector: 'app-techno',
  templateUrl: './techno.component.html',
  styleUrls: ['./techno.component.css'],
  providers: [TechnosService]
})
export class TechnoComponent implements OnInit {

  technos: Techno[] = [];
  constructor (private tS: TechnosService) {};

  ngOnInit() {
    this.technos = this.tS.Technos;
    
        this.tS.addTechno('Middleware','IBM', 'IBM Websphere');
        this.tS.addTechno('Database','Oracle', 'Prime and Disaster recovery');
        this.tS.addTechno('AIX Operating System', 'IBM', 'OS middleware servers');
        this.tS.addTechno('Redhat', 'Oracle', 'OS database servers');
        this.tS.addTechno('Monitoring SW','HP', 'System load monitoring');
  }
}