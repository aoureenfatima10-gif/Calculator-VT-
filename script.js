const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");

let currentInput = "";

buttons.forEach(button => {

    button.addEventListener("click", () => {

        const value = button.textContent;

        if(value === "C"){
            currentInput = "";
            display.textContent = "0";
        }

        else if(value === "="){

            try{

                let expression = currentInput
                .replace(/×/g,"*")
                .replace(/÷/g,"/")
                .replace(/−/g,"-");

                let result = eval(expression);

                display.textContent = result;
                currentInput = result.toString();

            }

            catch{
                display.textContent = "Error";
            }

        }

        else{

            currentInput += value;
            display.textContent = currentInput;
        }

    });

});