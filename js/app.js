let elForm = document.querySelector("#form");
let elInput = document.querySelector("#input");
let elBtn = document.querySelector("#btn");
let box = document.querySelector(".box");

elForm.addEventListener("click",function(e){
e.preventDefault();

let inputValue = Number(elInput.value);
let value = document.createElement("p");
box.append(value)


if(inputValue === 1){
    value.textContent = "Dushanba"
    value.style.color = "red"
    value.style.fontSize = "40px"
}
if(inputValue === 2){
    value.textContent = "Seshanba"
    value.style.color = "red"
    value.style.fontSize = "40px"
}
if(inputValue === 3){
    value.textContent = "Chorshanba"
    value.style.color = "red"
    value.style.fontSize = "40px"
}
if(inputValue === 4){
    value.textContent = "Payshanba"
    value.style.color = "red"
    value.style.fontSize = "40px"
}
if(inputValue === 5){
    value.textContent = "Juma"
    value.style.color = "red"
    value.style.fontSize = "40px"
}
if(inputValue === 6){
    value.textContent = "Shanba"
    value.style.color = "red"
    value.style.fontSize = "40px"
}
if(inputValue === 7){
    value.textContent = "Yakshanba"
    value.style.color = "red"
    value.style.fontSize = "40px"
}
})


