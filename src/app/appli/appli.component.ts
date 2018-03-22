import { Component, OnInit } from '@angular/core';
import { LicensesService } from './license.service';
import { License } from './license.model';
import { CustomsService } from './custom.service';
import { Custom } from './custom.model';

@Component({
  selector: 'app-appli',
  templateUrl: './appli.component.html',
  styleUrls: ['./appli.component.css'],
  providers: [LicensesService, CustomsService]
})

export class AppliComponent {
  constructor (private lS: LicensesService, private cS: CustomsService) {};

  ngOnInit() {
    this.lS.addLicense('Finance','SAP', 'Ledger, Treasury, Assets');
    this.lS.addLicense('Human Resources','SAP', 'Payroll');
    this.lS.addLicense('Recruitement','Taleo', 'On-line (cloud) recruitement');
    this.lS.addLicense('Manufacturing', 'SAP', 'MRP');
    this.lS.addLicense('Business Inelligence', 'Business Objects', 'Standard financial reporting');

    this.cS.addCust(100,'Localization','Implementation of legal requirements');
    this.cS.addCust(200,'Interfaces','Connections to other systems');
    this.cS.addCust(300,'Report','Canned BI reorts');
  }
}