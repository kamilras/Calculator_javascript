let box = document.querySelector("#result");
let show = "";
let number1 = 0;
let number2 = 0;
let operation = "";
let overwrite = true;
let numbers = document.querySelectorAll(".numbers");

        // Wyświetlanie operacji w inpucie
        for (let i = 0; i < numbers.length; i++) {
            numbers[i].addEventListener("click", function(x)
            {
                x = numbers[i].value
                show += x;
                box.value = show;
    
                if(overwrite == true)
                {
                    number1 = show;
                }
                else
                {
                    number2 = show;
                }
            });
        }

        // Określenie jakie działanie będzie wykonywane
        function task(x)
        {
            show = "";
            overwrite = false;
            operation += x;
            document.querySelector("#" + x).classList.toggle("active");
        // console.log("number1: " + number1 + " number2: " + number2 + " show: " + show );
        }

        // Usuwanie klasy "active" z każdego aktywnego przycisku
        function removeClass()
        {
            plus.classList.remove("active");
            minus.classList.remove("active");
            multiply.classList.remove("active");
            divide.classList.remove("active");
            overwrite = true;
            operation = "";
        }

        // Usuwanie wyniku w polu tekstowym, zerowanie zmiennych, korzysta z funkcji removeClass()
        function clean(){
            box.value = "";
            number1 = 0;
            number2 = 0;
            show = "";
            removeClass();
        }

        // Obliczanie wyniku działania
        function calculate()
        {
            if (operation == "plus"){
                show = (parseInt(number1) + parseInt(number2));
            }
            else if (operation == "minus"){
                show = (parseInt(number1) - parseInt(number2));
            }
            else if(operation == "divide"){
                show = (parseInt(number1) / parseInt(number2));
            }
            else if(operation == "multiply"){
                show = (parseInt(number1) * parseInt(number2));
            }
            // console.log("number1: " + number1 + " number2: " + number2 + " show: " + show );
            box.value = show;
            number1 = show;
            removeClass();
        }
