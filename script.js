function init(){
    var onClick = document.getElementById("submit_button");
    var alertInfo = document.getElementById("phone_number");
    onClick.addEventListener("click", function() {
        alert ("Thank you! Please enter the verification code sent to " + alertInfo.value);
    });
}
window.addEventListener('load', init);