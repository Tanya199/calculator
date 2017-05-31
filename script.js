(function(){
    
    var tempNumber = 0;
    var action = null;    
    var numberDiv = document.getElementById("number");
    var input = document.getElementsByTagName("input")[0];
    var expressionDiv = document.getElementById("expression");
    
    numberDiv.addEventListener("click", function(event){
        input.value += event.target.innerHTML;
    });
    expressionDiv.addEventListener("click", function(event){
    
       switch(event.target.innerHTML) {
          case 'C':
            clearInput();
            break; 
           
           case '+/-':
               if(input.value.charAt(0) == "-"){
                    input.value = input.value.substr(1);
               }else{
                   input.value = "-" + input.value;
               }
            break;
           
           case '+':
            tempNumber = +input.value;
            action = 'sum';
            clearInput();
            break;
        
           case '-':
            tempNumber = +input.value;
            action = 'div';
            clearInput();
            break; 
           
           case 'x':
            tempNumber = +input.value;
            action = 'mult';
            clearInput();
            break;
               
           case '/':
            tempNumber = +input.value;
            action = 'divide';
            clearInput();
            break;
               
           case '%':
            input.value = input.value+'%';
            break;
        
            case '=':
                if(tempNumber != 0){ 
                var value = getValue();
                if(action == 'sum'){
                    input.value = tempNumber + value;
                } else if(action == 'div'){
                    input.value = tempNumber - value;
                }else if(action == 'mult'){
                    input.value = tempNumber * value;
                }else if(action == 'divide'){
                    input.value = tempNumber / value;
                }
            }
            tempNumber = 0;
            break;

          default:
            input.value += 'default';
            break;
        }
    });
    
    function getValue() {
        var value;
        if(isNaN(+input.value)){
            value = tempNumber/100 * (input.value.slice(0, input.value.length - 1));
        } else {
            value = +input.value;
        }
        return value;
    }
    
    function clearInput(){
        input.value = "";
    }  
})()