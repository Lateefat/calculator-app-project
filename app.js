
let output = document.getElementById("screen");
let eachkey = Array.from(document.getElementsByClassName("button"));
let button = document.querySelectorAll("button");
eachkey.map( button => {
  button.addEventListener("click", (evt) => {
    
    switch (evt.target.innerText) {
      case "RESET":
        output.value = "";
        output.style.fontSize = "32px";
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
      // console.log(counter)
      
      // clear screen after displaying result
      if(counter > 2){
        output.value = "";
        counter = 0; 
        return;
      } else
       try{
        output.value = eval(output.value).toLocaleString();
        counter++;  
      } catch{
        output.value = "Invalid input"
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