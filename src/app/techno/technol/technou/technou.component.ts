
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Techno } from '../../techno.model';
import { TechnosService } from '../../techno.service';
import { ActivatedRoute } from '@angular/router';
import { Params } from '@angular/router';

@Component({
  selector: 'app-technou',
  templateUrl: './technou.component.html',
  styleUrls: ['./technou.component.css']
})
export class TechnouComponent implements OnInit {
  tecForm: FormGroup;
	the1: Techno;
	index: number;

  constructor(
    private tS: TechnosService,
		private route: ActivatedRoute
  ) {  };

  ngOnInit() {
    this.route.params.subscribe(
			(params: Params) => {
				this.index = +params['id'];
				this.the1 = this.tS.findId(this.index);
				this.tecForm = new FormGroup({
					'appnr' : new FormControl(this.the1.appnr),
					'appowner' : new FormControl(this.the1.appowner),
					'name' : new FormControl(this.the1.name),
					'vendor' : new FormControl(this.the1.vendor),
					'description' : new FormControl(this.the1.description),
					'budgetowner' : new FormControl(this.the1.budgetowner),
					'version' : new FormControl(this.the1.version),
					'nrofUsers' : new FormControl(this.the1.nrofUsers),
					'criticallity' : new FormControl(this.the1.criticallity),
					'y1maintCost' : new FormControl(this.the1.y1maintCost),
					'y2maintCost' : new FormControl(this.the1.y2maintCost),
					'y3maintCost' : new FormControl(this.the1.y3maintCost),
					'y4maintCost' : new FormControl(this.the1.y4maintCost),
					'y5maintCost' : new FormControl(this.the1.y5maintCost),
					'y1licCost' : new FormControl(this.the1.y1licCost),
					'y2licCost' : new FormControl(this.the1.y2licCost),
					'y3licCost' : new FormControl(this.the1.y3licCost),
					'y4licCost' : new FormControl(this.the1.y4licCost),
					'y5licCost' : new FormControl(this.the1.y5licCost),
					'yearlyIncr' : new FormControl(this.the1.yearlyIncr)
				});
			}
		) 
  }

}