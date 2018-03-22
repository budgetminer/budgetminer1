import { Component, OnInit } from '@angular/core';
import { LicensesService } from '../license.service'
import { License } from '../license.model';

@Component({
  selector: 'app-license',
  templateUrl: './license.component.html',
  styleUrls: ['./license.component.css']
})

export class LicenseComponent implements OnInit {
  licenses: License[] = [];
  constructor (private lS: LicensesService) {};
  
  ngOnInit() {
    this.licenses = this.lS.Licenses;
  }
}
