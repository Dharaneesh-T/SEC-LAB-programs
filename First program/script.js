function result(){
    const num1= parseFloat(document.getElementById("num1").value)
    const num2= parseFloat(document.getElementById("num2").value)
    const operation=document.getElementById("operation").value
    let result;
    if(isNaN(num1)|| isNaN(num2)){
        result ="Enter the number"

    }
    else{
     switch(operation){
        //add
        case "addition" :
            result = num1 + num2
            break;
        //sub
        case "subraction" :
            result = num1 - num2
            break;
        //multiplication
        case "multiplication":
            result =num1 * num2
            break;
        //division
        case "division":
            if (num2 === 0){
                result = "invalid"
            }

            else {
                result =num1 / num2
                
            }
            break;
        default :
        result = "invalid operation"
        };
    }
            
    
    result = document.getElementById("result").innerText ="Result = "+result
}