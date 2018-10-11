var weightInput = document.getElementById("Weight");
var gramButton = document.getElementById("GramButton");
var ounceButton = document.getElementById("OunceButton");
var konstant = 28.34952;
var resultat = document.getElementById("Result");
function passedString() {
    return parseFloat(weightInput.value);
}
gramButton.addEventListener("click", function (MouseEvent) {
    var sum = passedString() * konstant;
    resultat.innerHTML = sum + "";
    console.log(sum);
});
ounceButton.addEventListener("click", function (MouseEvent) {
    Number(weightInput.value);
});
