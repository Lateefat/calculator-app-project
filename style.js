let container = document.querySelector(".container");

let spanbtn = document.getElementById("spanbtn");
let btn = document.getElementById("btn");
let onebtn = document.getElementById("onebtn");
let twobtn = document.getElementById("twobtn");
let threebtn = document.getElementById("threebtn");

let calc = document.querySelector(".theme1calc");
let p = document.querySelector(".theme1p");

let screen = document.querySelector(".screen");
let delreset = document.getElementsByClassName("theme1delresetkey");
let keypad = document.querySelector(".keypad");
let keys = document.getElementsByClassName("theme1keys");

let equalkey = document.getElementById("equalkey");

let counter = 2;
btn.addEventListener("click", chooseTheme);
function chooseTheme(){
    
    switch(counter){
        
        case 1:   
            spanbtn.classList = "theme1btn";
            onebtn.style.color = "hsl(6, 63%, 50%)";
            twobtn.style.color = "white";
            threebtn.style.color = "white";
            container.style.backgroundColor = "hsl(222, 26%, 31%)";
            btn.style.backgroundColor = "hsl(223, 31%, 20%)";
            calc.style.color = "hsl(100, 100%, 100%)";
            p.style.color = "hsl(100, 100%, 100%)";
            screen.style.backgroundColor = "hsl(223, 31%, 20%)";
            keypad.style.backgroundColor = "hsl(224, 36%, 15%)";
            equalkey.classList = "button theme1equal";
            screen.classList = "screen theme1Input";
            for(let i = 0; i < delreset.length; i++)
            {
                delreset[i].classList = "button theme1delresetkey";
            };
            for(let i = 0; i < keys.length; i++)
            {
                keys[i].classList = "button theme1keys";
            };
            counter++;
            setTimeout(() => {}, 5000);
            break;

        case 2:   
            spanbtn.classList.toggle("theme2btn");
            twobtn.style.color = "hsl(25, 98%, 40%)";
            onebtn.style.color = "hsl(60, 10%, 19%)";
            threebtn.style.color = "hsl(60, 10%, 19%)";
            btn.style.backgroundColor = "hsl(0, 5%, 81%)";
            container.style.backgroundColor = "hsl(0, 0%, 90%)";
            calc.style.color = "hsl(60, 10%, 19%)";
            p.style.color = "hsl(60, 10%, 19%)";
            screen.style.backgroundColor = "hsl(0, 0%, 93%)";
            keypad.style.backgroundColor = "hsl(0, 5%, 81%)";
            equalkey.classList.toggle("theme2equal");
            screen.classList = "screen theme2Input";

            for(let i = 0; i < delreset.length; i++)
            {
                delreset[i].classList.toggle("theme2delresetkey");
            };
            for(let i = 0; i < keys.length; i++)
            {
                keys[i].classList.toggle("theme2keys");
            };

            counter++;
            
            break;
            

        case 3: 
            spanbtn.classList.toggle("theme3btn");
            threebtn.style.color = "hsl(176, 100%, 44%)";
            twobtn.style.color = "hsl(52, 100%, 62%)";
            onebtn.style.color = "hsl(52, 100%, 62%)";
            btn.style.backgroundColor = "hsl(268, 71%, 12%)";
            container.style.backgroundColor = "hsl(268, 75%, 9%)";
            calc.style.color = "hsl(52, 100%, 62%)";
            p.style.color = "hsl(52, 100%, 62%)";
            screen.style.backgroundColor = "hsl(268, 71%, 12%)";
            keypad.style.backgroundColor = "hsl(268, 71%, 12%)";
            equalkey.classList.toggle("theme3equal");
            screen.classList = "screen theme3Input";

            for(let i = 0; i < delreset.length; i++)
            {
                delreset[i].classList.toggle("theme3delresetkey");
            };
            for(let i = 0; i < keys.length; i++)
            {
                keys[i].classList.toggle("theme3keys");
            };
            counter = 1; 
            setTimeout(() => {}, 5000);
            break;

        default:
            counter = 1;
    }
    
  }

