export class Techno {
    public appnr: number;
    public appowner: string;
    public name: string;
    public vendor: string;
    public description: string;
    public budgetowner: string;
    public version: string;
    public nrofUsers: number;
    public criticallity: number;
    public y1maintCost: number;
    public y2maintCost: number;
    public y3maintCost: number;
    public y4maintCost: number;
    public y5maintCost: number;
    public y1licCost: number;
    public y2licCost: number;
    public y3licCost: number;
    public y4licCost: number;
    public y5licCost: number;
    public yearlyIncr: number;

    constructor (n: string, v: string, d: string) {
        this.appnr = 100;
        this.appowner = 'Company';
        this.description = d;
        this.budgetowner = "me";
        this.version = '1.0';
        this.nrofUsers = 100;
        this.criticallity = 3;
        this.name = n;
        this.vendor =  v;
        this.y1maintCost = 0;
        this.y2maintCost = 0;
        this.y3maintCost = 0;
        this.y4maintCost = 0;
        this.y5maintCost = 0;
        this.y1licCost = 0;
        this.y2licCost = 0;
        this.y3licCost = 0;
        this.y4licCost = 0;
        this.y5licCost = 0;
        this.yearlyIncr = 0;
    }
}