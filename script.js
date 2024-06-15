const stars =document.querySelector(".stars");
const moon = document.querySelector(".moon2");
const mountain3 = document.querySelector(".mountains3");
const mountain4 = document.querySelector(".mountains4");
const river = document.querySelector(".river");
const boat = document.querySelector(".boat");
const mountain7 = document.querySelector(".mountains7");
const nouvil = document.querySelector(".nouvil");



window.onscroll = ()=>{
    const valueOfy = window.scrollY;
    
    

    boat.style.left = (valueOfy) * 2 + "px";
    moon.style.top = (valueOfy) * 4 + "px";
    mountain3.style.top = (valueOfy) *1.3 + "px"
    mountain4.style.top = (valueOfy) *1.2 + "px";
    
     
    if (valueOfy < 72) {
        nouvil.style.fontSize = (valueOfy) * 1.3 + "px"
    } else {
        nouvil.style.fontSize = "96.2px";
    }

    


    if(valueOfy > 90){
        stars.style.background = "rgb(206, 144, 206)";
        nouvil.style.fontSize = "96.2";
        
    } else{
        stars.style.background = "linear-gradient(rgb(51, 7, 49),rgb(206, 144, 206))";
    }

    
}