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

          case '+':  // if (x === 'value2')
            tempNumber = input.value;
            clearInput();
            break;
               
        case '=':  // if (x === 'value2')
            if(tempNumber != 0){
               input.value = +tempNumber + +input.value;
            }
            tempNumber = 0;
            break;

          default:
            input.value += 'default';
            break;
        }
    });
    
    function clearInput(){
        input.value = " ";
    }
   
    
})()