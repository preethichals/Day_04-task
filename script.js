
var request=new XMLHttpRequest();
request.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
request.send();
request.onload=function(){
    var result = JSON.parse(request.response);
    console.log(result);

// Display all the countries flag in console

for(var i=0;i<result.length;i++){
    console.log(result[i].flag);
}

// Use the same rest countries and print all countries names, regions, sub-region and populations

// countries names
    for(var i=0;i<result.length;i++){
        console.log(result[i].name);
    }
//countries regions, sub-region and populations

for(var i=0;i<result.length;i++){
    console.log(result[i].region,result[i].subregion, result[i].population);
}

}
// Objects

class person {
    constructor(firstName, lastName, age, place){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.place = place;
    }
    getDetails(){
        return(`the name of the person is ${this.firstName} ${this.lastName} with age ${this.age} born at ${this.place})`);
    }
}
let person1 = new person("Guvi", "Geek", "10", "Chennai");
let person2 = new person("John", "Joseph", "24", "Bangalore");

console.log(person1.getDetails());
