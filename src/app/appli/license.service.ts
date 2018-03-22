import { Injectable } from "@angular/core";
import { License } from './license.model';

@Injectable()
export class LicensesService {
    Licenses: License [] = [];

    addLicense(n: string, v: string, d:string) {
        this.Licenses.push(new License(n, v, d));
    }

    oneLicense() {
        return new License('testje', 'The Best', 'Simply');
    }

    findId(id: number) {
        return this.Licenses[id]
    }
}