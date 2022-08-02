# Day_04-task

// how to compare two JSON have the same properties without order?
var obj1 = {name:"person 1", age:5};
var obj2 = { age:5, name:"Person 1"};

JSON.stringify(obj1) === JSON.stringify(obj2)
    
 To convert javascript into a string with JSON.stringify() is used
 
 const myJSON = JSON.stringify(obj1);
 const myJSON = JSON.stringfy(obj2);

object.key(obj1).sort().forEach(key => {
	orderdbj1[key] = obj1[key];});
	
object.key(obj2).sort().forEach(key => {
	orderdbj2[key] = obj2[key];});
	
	console.log(JSON.stringify(obj1) === JSON.stringify(obj2);
	now both the key and value of the objects were compared
