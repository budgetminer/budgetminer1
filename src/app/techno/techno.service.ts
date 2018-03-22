import { Injectable } from "@angular/core";
import { Techno } from './techno.model';

@Injectable()
export class TechnosService {
    Technos: Techno [] = [];

    addTechno(n: string, v: string, d:string) {
        this.Technos.push(new Techno(n, v, d));
    }

    oneTechno() {
        return new Techno('testje', 'The Best', 'Simply');
    }

    findId(id: number) {
        return this.Technos[id]
    }
}