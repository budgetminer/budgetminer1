import { Component, OnInit } from '@angular/core';
import { CustomsService } from '../custom.service'
import { Custom } from '../custom.model';

@Component({
  selector: 'app-custom',
  templateUrl: './custom.component.html',
  styleUrls: ['./custom.component.css']
})
export class CustomComponent implements OnInit {
  customs: Custom[] = []
  constructor(private cS: CustomsService) { }
 
  ngOnInit() {
    this.customs = this.cS.Customs;
  }
}
