
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

