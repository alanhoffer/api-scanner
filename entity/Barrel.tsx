type TBarrel = {
    id: string;
    code: string | string[];
    weight: string;
    tare: string;

}


class Barrel<TBarrel> {
    id = Date.now().toString();
    code;
    weight;
    tare;

    constructor(code: string | string[], weight: string, tare:string){
        this.code = code;
        this.weight = weight;
        this.tare = tare;
    }

    getId(){
        return this.id;
    }

    setId(id: string){
        this.id = id;
    }


    getCode(){
        return this.code;
    }

    setCode(code: string){
        this.code = code;
    }

    getWeight(){
        return parseFloat(this.weight);
    }

    setWeight(weight: string){
        this.weight = weight;
    }

    getTare(){
        return parseFloat(this.tare);
    }

    setTare(tare: string){
        this.tare = tare;
    }
}