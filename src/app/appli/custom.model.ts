export class Custom {
    public cid: number;
    public appnr: number;
    public appowner: string;
    public name: string;
    public description: string;
    public budgetowner: string;
    public bench: CustomDetail;
    public years: CustomDetail[];

    constructor (cid: number, n: string, d: string) {
        this.cid = cid;
        this.name = n;
        this.description = d;
    }
}

export class CustomDetail {
    public cid: number
    public year: number;
    public nocustom: number;
    public addnocustom: number;
    public nofte: number;
    public addnofte: number;
    public becostfte: number;

    constructor (cid: number, y: number) {
        this.cid = cid;
        this.year = y;
    }
}