/*const whiskers = {
    animal: "cat",
    age: "3",
    breed: "bengal",
    color: "golden",
    tail: "short",
    gender: "male",
    sound: function () {
      console.log("Meow");
    },
    play: function () {
      console.log("Oohh Yarn Toy!");
    },
};

//   Prompt 1
whiskers.animal;
// Prompt 2
whiskers.age;
// Prompt 3
whiskers.sound;
// Prompt 4
whiskers["breed"];
// Prompt 5
whiskers["color"];
//Prompt 6
whiskers["play"];
// Prompt 7
x = whiskers["tail"];
// Prompt 8
whiskers.color = "white";
// Prompt 9
whiskers["gender"] = "female";
// Prompt 10
whiskers.size = "small";
// Prompt 11
whiskers["diet"] = "kitty mix";*/


// Classes Prompts
/*// Prompt 1: Create a class called Smartphone and add an empty constructor method to the Smartphone class.
class Smartphone {
    constructor() {  }
  }

// Prompt 2: Add the following parameters to the constructor method and set it equal to the parameters. OS, model, app market, company.
class Smartphone {
    constructor(OS, model, app_market, company) { 
        this.OS = OS;
        this.model = model;
        this.app_market = app_market;
        this.company = company;
     }}

// Prompt 3: Create 1 new instance named phone1 for the Smartphone class.
class Smartphone {
    constructor(OS, model, app_market, company) { 
        this.OS = OS;
        this.model = model;
        this.app_market = app_market;
        this.company = company;
     }}

  const phone1 = new Smartphone('ios, iphone 12, app store, apple');

// Prompt 4: Create another new instance named phone2 for the Smartphone class, make it a different device from phone1.
class Smartphone {
    constructor(OS, model, app_market, company) { 
        this.OS = OS;
        this.model = model;
        this.app_market = app_market;
        this.company = company;
     }}

  const phone1 = new Smartphone('ios', 'iphone 12', 'app store', 'apple');

  const phone2 = new Smartphone('android', 'Galaxy S20 FE 5G', 'play store', 'Samsung');

//  Prompt 5: Print the OS property of phone1 to the console using dot notation.
class Smartphone {
    constructor(OS, model, app_market, company) { 
        this.OS = OS;
        this.model = model;
        this.app_market = app_market;
        this.company = company;
     }}

  const phone1 = new Smartphone('ios', 'iphone 12', 'app store', 'apple');

  const phone2 = new Smartphone('android', 'Galaxy S20 FE 5G', 'play store', 'Samsung');
  
phone1.OS;

// Prompt 6: Print the model property of phone2 to the console using bracket notation.
class Smartphone {
    constructor(OS, model, app_market, company) { 
        this.OS = OS;
        this.model = model;
        this.app_market = app_market;
        this.company = company;
     }}

  const phone1 = new Smartphone('ios', 'iphone 12', 'app store', 'apple');

  const phone2 = new Smartphone('android', 'Galaxy S20 FE 5G', 'play store', 'Samsung');
  
phone2["model"];

// Prompt 7: Add a method called Call to the Smartphone class. This means you will also have to add another parameter called ringtone to the constructor to hold the value/sound the call method would make.
class Smartphone {
    constructor(OS, model, app_market, company, ringtone) { 
        this.OS = OS;
        this.model = model;
        this.app_market = app_market;
        this.company = company;
        this.ringtone = ringtone;
     }

     call () {
    console.log(this.ringtone);  
     }}

  const phone1 = new Smartphone('ios', 'iphone 12', 'app store', 'apple', 'beep beep');

  const phone2 = new Smartphone('android', 'Galaxy S20 FE 5G', 'play store', 'Samsung', 'Mmm Mmm');

//   Prompt 8: Use dot notation to call the call method for phone1 and print it to the console.
class Smartphone {
    constructor(OS, model, app_market, company, ringtone) { 
        this.OS = OS;
        this.model = model;
        this.app_market = app_market;
        this.company = company;
        this.ringtone = ringtone;
     }

     call () {
    console.log(this.ringtone);  
     }}

  const phone1 = new Smartphone('ios', 'iphone 12', 'app store', 'apple', 'beep beep');

  const phone2 = new Smartphone('android', 'Galaxy S20 FE 5G', 'play store', 'Samsung', 'Mmm Mmm');

  phone1.call();

//   Prompt 9: Use bracket notation to call the call method for phone2 and print it to the console.
class Smartphone {
    constructor(OS, model, app_market, company, ringtone) { 
        this.OS = OS;
        this.model = model;
        this.app_market = app_market;
        this.company = company;
        this.ringtone = ringtone;
     }

     call () {
    console.log(this.ringtone);  
     }}

  const phone1 = new Smartphone('ios', 'iphone 12', 'app store', 'apple', 'beep beep');

  const phone2 = new Smartphone('android', 'Galaxy S20 FE 5G', 'play store', 'Samsung', 'Mmm Mmm');

  phone2["call"]();

//   Prompt 10: Add a method to the Smartphone class called changeRingtone. This method should receive one parameter, representing the new ringtone. It shouldn’t return anything. The object of the method is to change the value of the ringtone property.
class Smartphone {
    constructor(OS, model, app_market, company, ringtone) { 
        this.OS = OS;
        this.model = model;
        this.app_market = app_market;
        this.company = company;
        this.ringtone = ringtone;
     }

     call () {
    console.log(this.ringtone);  
     }

     changeRingtone(ringtone) {
        this.ringtone = ringtone;
     }}

  const phone1 = new Smartphone('ios', 'iphone 12', 'app store', 'apple', 'beep beep');

  const phone2 = new Smartphone('android', 'Galaxy S20 FE 5G', 'play store', 'Samsung', 'Mmm Mmm');

//   Prompt 11: Call the changeRingtone method and change the ringtone to “Beyonce” for phone1 using dot notation.
class Smartphone {
    constructor(OS, model, app_market, company, ringtone) { 
        this.OS = OS;
        this.model = model;
        this.app_market = app_market;
        this.company = company;
        this.ringtone = ringtone;
     }

     call () {
    console.log(this.ringtone);  
     }

     changeRingtone(ringtone) {
        this.ringtone = ringtone;
     }}

  const phone1 = new Smartphone('ios', 'iphone 12', 'app store', 'apple', 'beep beep');

  const phone2 = new Smartphone('android', 'Galaxy S20 FE 5G', 'play store', 'Samsung', 'Mmm Mmm');

  phone1.changeRingtone() = 'Beyonce';

//   Prompt 11: Call the changeRingtone method and change the ringtone to “Drake” for phone2 using bracket notation.
class Smartphone {
    constructor(OS, model, app_market, company, ringtone) { 
        this.OS = OS;
        this.model = model;
        this.app_market = app_market;
        this.company = company;
        this.ringtone = ringtone;
     }

     call () {
    console.log(this.ringtone);  
     }

     changeRingtone(ringtone) {
        this.ringtone = ringtone;
     }}

  const phone1 = new Smartphone('ios', 'iphone 12', 'app store', 'apple', 'beep beep');

  const phone2 = new Smartphone('android', 'Galaxy S20 FE 5G', 'play store', 'Samsung', 'Mmm Mmm');

  phone1["changeRingtone"]() = 'Drake';*/


 //   Getters & Setter Prompts
// Prompt 12
class Smartphone {
    constructor(OS, model, app_market, company) { 
        this.OS = OS;
        this.model = model;
        this.app_market = app_market;
        this.company = company;
     }

    get businessCalls() {
        const today = new Date();
        const hour = today.getHours();
    }
  }

//   Prompt 12
class Smartphone {
    constructor(OS, model, app_market, company) { 
        this.OS = OS;
        this.model = model;
        this.app_market = app_market;
        this.company = company;
     }

    get businessCalls() {
        const today = new Date();
        const hour = today.getHours();
         
        if (hour > 10 && hour <= 21) {
            return "phone has been ringing all day!"
        } else {
            return "phone on nighttime mode"
        }}}

//   Prompt 12
class Smartphone {
    constructor(OS, model, app_market, company) { 
        this.OS = OS;
        this.model = model;
        this.app_market = app_market;
        this.company = company;
     }

    get businessCalls() {
        const today = new Date();
        const hour = today.getHours();
         
        if (hour > 10 && hour <= 21) {
            return "phone has been ringing all day!"
        } else {
            return "phone on nighttime mode"
        }}}

  const phone1 = new Smartphone('ios', 'iphone 12', 'app store', 'apple', 'beep beep');

  const phone2 = new Smartphone('android', 'Galaxy S20 FE 5G', 'play store', 'Samsung', 'Mmm Mmm');

  phone1.businessCalls;

  phone1["businessCalls"];

//   Prompt 13
class Smartphone {
    constructor(OS, model, app_market, company) { 
        this.OS = OS;
        this.model = model;
        this.app_market = app_market;
        this.company = company;
     }

    get businessCalls() {
        const today = new Date();
        const hour = today.getHours();
         
        if (hour > 10 && hour <= 21) {
            return "phone has been ringing all day!"
        } else {
            return "phone on nighttime mode"
        }}

    set phoneOwner(phoneOwner){

    }}

//   Prompt 14
class Smartphone {
    constructor(OS, model, app_market, company) { 
        this.OS = OS;
        this.model = model;
        this.app_market = app_market;
        this.company = company;
     }

    get businessCalls() {
        const today = new Date();
        const hour = today.getHours();
         
        if (hour > 10 && hour <= 21) {
            return "phone has been ringing all day!"
        } else {
            return "phone on nighttime mode"
        }}
    set phoneOwner(phoneOwner){
        this._phoneOwner = phoneOwner;
        console.log(`setter called: ${phoneOwner}`);
    }}

//   Prompt 15
class Smartphone {
    constructor(OS, model, app_market, company) { 
        this.OS = OS;
        this.model = model;
        this.app_market = app_market;
        this.company = company;
     }

    get businessCalls() {
        const today = new Date();
        const hour = today.getHours();
         
        if (hour > 10 && hour <= 21) {
            return "phone has been ringing all day!"
        } else {
            return "phone on nighttime mode"
        }}

    get phoneOwner(){

    }

    set phoneOwner(phoneOwner){
        this._phoneOwner = phoneOwner;
        console.log(`setter called: ${phoneOwner}`);
    }}

//   Prompt 16
class Smartphone {
    constructor(OS, model, app_market, company) { 
        this.OS = OS;
        this.model = model;
        this.app_market = app_market;
        this.company = company;
     }

    get businessCalls() {
        const today = new Date();
        const hour = today.getHours();
         
        if (hour > 10 && hour <= 21) {
            return "phone has been ringing all day!"
        } else {
            return "phone on nighttime mode"
        }}

    get phoneOwner(){

    }

    set phoneOwner(phoneOwner){
        this._phoneOwner = phoneOwner;
        console.log(`setter called: ${phoneOwner}`);
    }}

  const phone1 = new Smartphone('ios', 'iphone 12', 'app store', 'apple', 'beep beep');

  const phone2 = new Smartphone('android', 'Galaxy S20 FE 5G', 'play store', 'Samsung', 'Mmm Mmm');

  phone1["phoneOwner"] = 'John'
  console.log(phone1.phoneOwner)

  phone2.phoneOwner = 'Jane'
  console.log(phone2.phoneOwner)