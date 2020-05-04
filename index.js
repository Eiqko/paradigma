// class Shipyard{
//      constructor(senditem, quantity){    
//        this.senditem = senditem;
//        this.quantity = quantity;
//   }
  
// barang(){
//     return `${this.senditem} sedang discan`
//   }  

// jumlah(){
//   return `Jumlah kiriman barang anda ada: ${this.quantity}`
// }
// }
//  class Kapal extends Shipyard{
//       constructor(senditem, quantity, tipekapal){
//         super(senditem, quantity);
//          this.tipekapal = tipekapal;
// }
//   tipe(){
//    return `${this.tipekapal} sedang berlayar ketujuan anda`
// }
// }

// let anton = new Kapal('Mobil esemka' ,33,  'perahu motor');
// let budi = new Kapal('CD game', 900 , 'kapal pesiar')
// console.log(anton.barang());
// console.log(anton.tipe());


class Shipyard {
    constructor() {
       this.kapal = {a:'perahu motor', b: 'perahu layar', c: 'kapal pesiar'}
      if (new.target == Shipyard) {
        throw new TypeError("Abstrak classes can't be create.");
      }
    }
   
    get Kapal (){
        return this.kapal;
    }
}

class Kapal extends Shipyard {
    constructor(){
     super()
  }
}

let data = new Kapal();
console.log(data.kapal.a)
console.log(data.kapal.b)

