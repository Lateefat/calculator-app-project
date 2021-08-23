
let output = document.getElementById("screen");
let eachkey = Array.from(document.getElementsByClassName("button"));
let button = document.querySelectorAll("button");
let equalcounter = 0;
// keep track of compounding operations
let ans = 0;


eachkey.map( button => {
  button.addEventListener("click", (evt) => {
    
    switch (evt.target.innerText) {
      case "RESET":
        output.value = "";
        output.style.fontSize = "32px";
        equalcounter = 0;
        ans = 0;
        break;
      case "DEL":
        output.value = output.value.slice(0, -1);
        break;

      // activate the multplication symbol
      case "x":
          output.value += "*";
          break;

      // display result
      case "=": 
      // Compounding result   
      if((ans > 0) && (ans < 10) && (output.value.includes("*")) ||
      (output.value.includes("/")) ||
      (output.value.includes("+")) ||
      (output.value.includes("-"))  
      )
      try{
        output.value = eval(output.value).toLocaleString();
        equalcounter++;
        console.log("includes");
        ans++;
        console.log(ans); 
        return;
      }
      catch{
        output.value = "Invalid input";
      }
      // clear screen after displaying result
      if(equalcounter > 0){
        output.value = "";
        equalcounter = 0; 
        return;
      } else
       try{
        output.value = eval(output.value).toLocaleString();
        equalcounter++;
         
      } catch{
        if(ans >= 10){
          output.value = "Overflow";
        } else
        output.value = "Invalid input";
        }   
        break;

        default:
          output.value += evt.target.innerText; 
          if(output.value.length > 16){
            output.style.fontSize = "28px";
          }
             
    }
  });
});
