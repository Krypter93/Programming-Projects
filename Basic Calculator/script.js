//Funcionalidad de la calculadora
var display= document.querySelector(".display");
var buttons= document.querySelectorAll(".btn");

buttons.forEach(button =>{
    button.addEventListener("click", ()=>{
        var btn=button.textContent;
        if(button.id==="clean"){
            display.textContent="0";
            return;
        }

        if(button.id==="result"){
            
            try {
                display.textContent=eval(display.textContent);    
            } catch {
                display.textContent= "Error";
            }
            
            return;
        }
        
        
        if(display.textContent==="0" || display.textContent==="Error" ){
            display.textContent=btn;
        }else{
            display.textContent+= btn;
        }
        
    })
});
