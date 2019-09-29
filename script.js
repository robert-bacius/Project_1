function init(){
    var onClick = document.getElementById("submit_button");
    var alertInfo = document.getElementById("name");
    onClick.addEventListener("click", function() {
        alert ("Thank you " + alertInfo.value + "! " + "You will be emailed a download link shortly.");
    });
}
window.addEventListener('load', init);