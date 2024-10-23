export class Customer {
    custId: number ;
    name: string ;
    mobile:string ;
    emailid?: string ; // ? -> means optional 
    address?: string ; // ? -> means optional 

    constructor (){
        this.custId = 0 ;
        this.name = "" ;
        this.mobile = "" ;
    }
}