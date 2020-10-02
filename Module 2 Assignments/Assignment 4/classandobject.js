
    
    function Car(TypeofCar) {
        this.TypeofCar = TypeofCar;
    }


    function SUV(BrandModel) {

        this.BrandModel = BrandModel;
 
    }

    function MPV(BrandModel) {

        this.BrandModel = BrandModel;
    }

    function Hatchback(BrandModel){
        this.BrandModel = BrandModel;
    }

    SUV.prototype = new Car();
    SUV.prototype.constructor = SUV;
    var mySUV = new SUV("MercedesGLA,"+ " " + "BMWX3");
    MPV.prototype = new Car();
    MPV.prototype.constructor = MPV;
    var myMPV = new MPV("Honda Odessy,"+ " " + "Toyota Sienta");
    Hatchback.prototype = new Car();
    Hatchback.prototype.constructor = Hatchback;
    var myHatchback = new Hatchback("Ford Fiesta,"+ " " + "Mazda 3");



    //var MercedesGLA = new SUV(true);
  
 
    /*class SUV extends Car{
        constructor(Brand, Model){
        super(this.Brand,this.Model);
        this.TypeofCar = 'SUV';
        this.Brand = 'Mercedes'+ 'BMW';
        this.Model = 'GLA'+'X3';

    }
}
    class MPV extends Car{
        constructor(Brand, Model){
        super(this.Brand,this.Model);
        this.TypeofCar = 'MPV';
        this.Brand = 'Honda';
        this.Model = 'Oddessy';
    }
}
    class Hatchback extends Car{
        constructor(Brand, Model){
        super(this.Brand,this.Model);
        this.TypeofCar = 'Hatchback';
        this.Brand = 'Ford';
        this.Model = 'Fiesta';
    }
}

SUV.prototype = Object.create(Car.prototype);
MPV.prototype = Object.create(Car.prototype);
Hatchback.prototype = Object.create(Car.prototype);



/**function SUV (TypeofCar){
    Car.call(this,TypeofCar)
}

    var MercedesGLA = new SUV;

    SUV.prototype = new Car;
    SUV.prototype = Object.create(Car.prototype);
    Object.defineProperty(SUV.prototype, 'constructor', {
        value: SUV, enumerable: false, writable: true
    })

function MPV (TypeofCar) {
    Car.call(this, TypeofCar)
}

MPV.prototype = Object.create(Car.prototype);

function Hatchback(TypeofCar) {
    Car.call(this,TypeofCar)
}

Hatchback.prototype = Object.create(Car.prototype);




/**function CarModel (SUV, MPV, Hatchback, MercedesGLA, BMWX3){
    Car.call(this, SUV, MPV, Hatchback)
    this.MercedesGLA = MercedesGLA;
    this.BMWX3 = BMWX3;
    SUV.prototype = new SUV;
    SUV.prototype.constructor = SUV;
    
}


// sub class
/**function CarModel (SUV, MPV, Hatchback,MercedesGLA, BMWX3){
    Car.call(this, SUV, MPV, Hatchback);
    this.MercedesGLA = MercedesGLA;
    this.BMWX3 = BMWX3;
}
// sub class
function SUV (MercedesGLA, BMWX3){
    SUV.call(this);
    SUV.prototype = new SUV;
    SUV.prototype.constructor = SUV;
    var SUV = new SUV (MercedesGLA,BMWX3);

}
*/
  
/**SUV.prototype = new SUV;
SUV.prototype.constructor = SUV;
var SUV = new SUV (MercedesGLA,BMWX3);*/
