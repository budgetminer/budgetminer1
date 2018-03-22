import { Injectable } from "@angular/core";
import { Custom, CustomDetail } from './custom.model';

@Injectable()
export class CustomsService {
    Customs: Custom [] = [];

    addCust(cid: number, n: string, d: string) {
        let c: Custom = new Custom(cid,n,d);
        c.bench = new CustomDetail(cid,0);
        this.Customs.push(c);
    }

    addCustDetail(cid: number, id: number, y: number) {
        this.Customs[cid].years.push(new CustomDetail(cid,y));
    }

    findId(id: number) {
        return this.Customs[id]
    }
}