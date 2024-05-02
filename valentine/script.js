function nextpage() {
    window.location.href = "yes1.html";
}
function movebutton() {
    var button = document.getElementById('nobutton');
    var buttonWidth = button.offsetWidth;
    var buttonHeight = button.offsetHeight;

    var viewportWidth = window.innerWidth;
    var viewportHeight = window.innerHeight;

    var x = Math.max(0, (viewportWidth - buttonWidth) - 185);
    var y = Math.max(0, (viewportHeight - buttonHeight) -140 );

    button.style.left = `${x}px`;
    button.style.top = `${y}px`;
}

var buttonTextOptions = ["Are you sure?", "Really sure?", "Are you positive", "pookieeee please!!!!", "If you say no, I'll be very sad", "Just think about it!!!", "I'll be very very sad", "I'll be very very very very sad", "Ok fine, I'll stop asking....", "Just Kidding!!! Please Say YESssss", "you're breaking my heart!!!"];
var currentTextIndex = 0; // Variable to keep track of the current text index

document.getElementById('nobutton').addEventListener('click', function () {

    var YesButton = document.getElementById('yesbutton')
    var fontsize = window.getComputedStyle(YesButton).getPropertyValue('font-size')
    var currsize = parseFloat(fontsize)

    YesButton.style.fontSize = (currsize + 50) + 'px';



    var nobutton = document.getElementById('nobutton');
    nobutton.textContent = buttonTextOptions[currentTextIndex]; // Set button text to current text index
    currentTextIndex = (currentTextIndex + 1) % buttonTextOptions.length;
})