/**
 * Created by ayveren on 2/8/17.
 */
(function () {

	var contentDiv = document.getElementById("content");
	var createButton = document.getElementById("create");
	var result = document.createElement("p");

	createButton.addEventListener("click", function () { //добавить клик на кнопку
		contentDiv.removeChild(createButton);            //при клике кнопка исчезает
		
		var inputFirst = document.createElement('input');//создать элемент
		var inputSecond = document.createElement('input');//создать элемент

		var buttonSum = document.createElement("button");//в документе создать элемент
		buttonSum.innerHTML = "+";                       //добавиь в HTML
		
		var buttonDeduc = document.createElement('button');
		buttonDeduc.innerHTML = '-';
		
		var buttonMult = document.createElement('button');
		buttonMult.innerHTML = '*';
	
		var buttonDivid = document.createElement('button');
		buttonDivid.innerHTML = '/';

		contentDiv.appendChild(inputFirst); //присоединить ребенка
		contentDiv.appendChild(inputSecond);
		contentDiv.appendChild(buttonSum);
		contentDiv.appendChild(buttonDeduc);
		contentDiv.appendChild(buttonMult);
		contentDiv.appendChild(buttonDivid);
		contentDiv.appendChild(result);
		


		addSumListener(buttonSum, inputFirst, inputSecond);
		addDeducListener(buttonDeduc, inputFirst, inputSecond);
		addMultListener(buttonMult, inputFirst, inputSecond);
		addDividListener(buttonDivid, inputFirst, inputSecond);
	});
		
		
		
	function addSumListener(btn, inp1, inp2) {
		
		btn.addEventListener("click", function () {
			/** проверять какой тип приходит в inp1.value**/
			result.innerHTML = (+inp1.value + +inp2.value);
		});
	};
	
	function addDeducListener(btn, inp1, inp2){
		
		btn.addEventListener("click", function(){
			if(typeof(inp1.value && inp2.valye) !== "number"){
			alert("введите число")
		}else{
            
        };
			result.innerHTML = (inp1.value - inp2.value);
		});
	};
	
	function addMultListener(btn, inp1, inp2){
		
		btn.addEventListener("click", function(){
			
			result.innerHTML = (inp1.value * inp2.value);	
		});
	};
	
	function addDividListener(btn, inp1, inp2){
		
		btn.addEventListener("click", function(){
			
			result.innerHTML = (inp1.value / inp2.value);
		});
	};


})();