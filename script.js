(function(){
    
    console.log('sadfghj');
    var tempNumber = 0;
    var action = null;
    
    var numberDiv = document.getElementById("number");
    var input = document.getElementsByTagName("input")[0];
    var expressionDiv = document.getElementById("expression");
    
    numberDiv.addEventListener("click", function(event){
        
//        input.value = input.value + e.target.innerHTML;
        input.value += event.target.innerHTML;
        console.log(event.target.innerHTML);
    });
    expressionDiv.addEventListener("click", function(event){
    
       switch(event.target.innerHTML) {
          case 'C':  // if (x === 'value1')
            clearInput();
            break; 
           
           case '+/-':  // if (x === 'value1')
               if(input.value.charAt(0) == "-"){
                    input.value = input.value.substr(1);
               }else{
                   input.value = "-" + input.value;
               }
            break;
           
           case '+':  // if (x === 'value2')
            tempNumber = input.value;
            action = 'sum';
            clearInput();
            break;
        
           case '-':  // if (x === 'value2')
            tempNumber = input.value;
            action = 'div';
            clearInput();
            break; 
           
           case 'x':  // if (x === 'value2')
            tempNumber = input.value;
            action = 'mult';
            clearInput();
            break;
               
           case '/':  // if (x === 'value2')
            tempNumber = input.value;
            action = 'divide';
            clearInput();
            break;
        case '=':  // if (x === 'value2')
            if(tempNumber != 0){
                if(action == 'sum'){
                    input.value = +tempNumber + +input.value;
                } else if(action == 'div'){
                    input.value = +tempNumber - +input.value;
                }else if(action == 'mult'){
                    input.value = +tempNumber * +input.value;
                }else if(action == 'divide'){
                    input.value = +tempNumber / +input.value;
             
            }
            tempNumber = 0;
            break;

          default:
            input.value += 'default';
            break;
        }
    });
    
    function clearInput(){
        input.value = "";
    }
    
    
   
    
})()