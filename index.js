	(function(){
	 console.log("DZ_2_2");	
		
	//	var message = "Привет! Как дела?";
	//	
	//	console.log(message.length);
	//	console.log(message.toUpperCase());
	//	console.log(message.toLowerCase());
	//	console.log(isFinite("56"));
	//	console.log();
	//	console.log();
		
		
	//	
	//	var arrayOne = ["Nastya","Rio", "Julya", "Bella"];
	//	var stringArray = ["apple", "melon", "onion"];
	//	function getLength(array){
	//		
	//		var newArray = [];
	//			
	//		for(var i = 0; i < array.length; i++){
	//				newArray.push(array[i].length);
	//		}
	//		console.log(newArray);
	//		
	//	}
	//	getLength(stringArray);
	//	getLength(arrayOne);
	//	 
		
	//	for(var n =0; n < arrayOne.length; n++){
		
	//}
	//		console.log(arrayOne);
	//		console.log(arrayOne[arrayOne.length -2]);
	//		console.log(arrayOne, n);
	//		console.log(n);
	//		console.log(arrayOne[n].length);
	//		console.log(arrayOne[arrayOne.length - 1]);
	//		console.log(arrayOne[arrayOne.length[n]]);
	//		arrayOne.push("Max");
	//		console.log(arrayOne);
	//		
	
	//	var salaries = {
	//		"Вася": 100,
	//		"Петя": 300,
	//		"Даша": 250
	//	}
	//	function salary(obj){
	//		
	//		var max = 0;
	//		var name = "";
	//		for(var k in obj){
	//			if(max > obj[k]){
	//			max = obj[k];
	//			name = k;
	//			}
	//		}
	//		console.log(name);
	//		//console.log(obj[k]);
	//		
			
	//	}
	//	salary(salaries);
	//
	
	
	//var stringArray = ["apple", "limon", "berry", "banana"];
    //
	//function getLength(array){
	//	
	//	var arrayNew = [];
	//	for(var i = 0; i < array.length; i++){
	//		arrayNew.push(array[i].length);
	//	}
	//	console.log(arrayNew);
	//}
	//getLength(stringArray);
	
	//var salaries = {
	//	"Петя": 3000,
	//	"Вася": 5000,
	//	"Дима": 8000,
	//	"Паша": 11000,
	//	"Миша": 1000
	//}
	//function salary (obj){
	//	var sum = 0;
	//	for(var k in obj){
	//		sum = sum + obj[k];
	//	}
	//	console.log(sum);
	//}
	//salary(salaries);
	
	//var salaries = {
	//	"Миша":2000,
	//	"Вася":8000,
	//	"Паша":2000,
	//	"Петя":15000,
	//	"Коля":1000
	//}
	//function salary(obj){
	//	var name = "";
	//	var max = 15000;
	//	for(var k in obj){
	//		if(max > obj[k]){
	//			max = obj[k];
	//			name = k;
	//		}
	//		
	//	}
	//	console.log(name);
	//}
	//salary(salaries);
	
	//var arr = [ 2, "Яблоко", { name: "Таня" }, true ];
	//console.log(arr[2].name);
	//console.log(arr[1]);
	//console.log(arr[0]);
	
	//		var currentCount = 1;
	//	
	//	function makeCounter() {
	//	return function() {
	//		return currentCount++;
	//	};
	//	}
	//	
	//	var counter = makeCounter();
	//	var counter2 = makeCounter();
	//	
	//	//console.log( counter() ); 
	//	console.log( counter() ); 
	//	
	//	console.log( counter2() );
	//	console.log( counter2() );
	
	//		function makeCounter() {
	//		var currentCount = 1;
	//	
	//			return { // возвратим объект вместо функции
	//			getNext: function() {
	//			return currentCount++;
	//			},
	//		
	//			set: function(value) {
	//			currentCount = value;
	//			},
	//		
	//			reset: function() {
	//			currentCount = 1;
	//		}
	//	};
	//	}
	//			var counter = makeCounter();
    //
	//			console.log( counter.getNext() ); // 1
	//			console.log( counter.getNext() ); // 2
	//			
	//			counter.set(5);
	//			console.log( counter.getNext() ); // 5
	
	
		//		var a = 90100; 
		//	function someFunc(){ 
		//	if(false){ 
		//		var a = 1; 
		//	} else { 
		//		var b = 2; 
		//	} 
		//	console.log(b); 
		//	console.log(a); //(1) 
		//	} 
		//	someFunc();
		//	console.log(a); //(1) 
			
		//	myname = "global"; 
		//	function func() { 
		//		console.log(myname); 
		//		var myname = "local"; 
		//		console.log(myname); 
		//	} 
		//	func(); 
		//
		//		function test() { 
		//		this; 
		//		} 
		//		test();


	var a = ["a", "b", "c"];
a.forEach(function(entry) {
    console.log(entry);
});
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
		
	}())