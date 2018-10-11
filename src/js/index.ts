let weightInput: HTMLInputElement = <HTMLInputElement> document.getElementById("Weight")
let gramButton: HTMLButtonElement = <HTMLButtonElement> document.getElementById("GramButton")
let ounceButton: HTMLButtonElement = <HTMLButtonElement> document.getElementById("OunceButton")
let konstant: number = 28.34952
let resultat: HTMLSpanElement =<HTMLSpanElement> document.getElementById("Result")
function passedString(): number {
return parseFloat(weightInput.value)
}

gramButton.addEventListener("click",MouseEvent => {
    let sum: number = passedString()*konstant
resultat.innerHTML = sum + "";
console.log(sum);
})

ounceButton.addEventListener("click",MouseEvent => {
    let sum: number = passedString()/konstant
resultat.innerHTML = sum + "";
console.log(sum);
})