const hex= ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];
let btn = document.getElementsByTagName("button")[0];
let color = document.getElementsByClassName("color")[0];
// let copy = document.getElementsByTagName("button")[1];
console.log(btn +" " +color);
btn.addEventListener("click", function(){
    let newColor = "#";
    for(i=1; i<=6; i++){
        newColor += hex[genRandom()];
    }
    console.log(newColor);
    document.body.style.backgroundColor = newColor;
    color.textContent = newColor;
})

function genRandom(){
   return Math.floor(Math.random() * 
   hex.length);
}

// copy.addEventListener("click", function(){
//     color.select();
//     console.log("clicked");
//     document.execCommand("copy");
//     copy.textContent = "copied!" ;
// })