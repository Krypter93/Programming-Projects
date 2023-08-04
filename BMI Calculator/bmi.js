const calculateButton = document.getElementById("btn");

    calculateButton.addEventListener("click",()=>{

    const height = document.getElementById("height")
    const valueH = parseFloat(height.value);
    const weight = document.getElementById("weight")
    const valueW = parseFloat(weight.value);

        if(!valueH || !valueW){
            alert("Invalid data, positive numbers only");
            return;
        }else if(valueH <= 0){
            alert("Invalid data, positive numbers only");
            return;  
        }else if(valueW <=0){
            alert("Invalid data, positive numbers only");
            return;
        }

    let formula = Math.ceil(valueW/Math.pow(valueH, 2));
   

    let index = "";

    switch(true){
        case (formula < 18.9):
            index = "Low Weight";
            break;
        case (formula <25.00):
            index = "Normal Weight";
            break;
        case (formula < 30.00):
            index = "Overweight";
            break;
        case (formula < 35.00):
            index = "Mild Obesity";
            break;
        case (formula < 40.00):
            index = "Average Obesity";
            break;
        default:
            alert("Invalid range");
    
        return;
    }

    

    const space = document.getElementById("space");
    space.textContent = formula + " " + index.toUpperCase();


    })
