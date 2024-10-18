// DROPDOWN NAV BAR
const toggleBtn = document.querySelector('.toggle_btn')
const toggleBtnIcon = document.querySelector('.toggle_btn i')
const dropDownMenu = document.querySelector('.dropdown_menu')

toggleBtn.onclick = function() {
    dropDownMenu.classList.toggle('open')
    const isOpen = dropDownMenu.classList.contains('open')

    toggleBtnIcon.classList = isOpen 
    ? 'fa-solid fa-xmark'
    :'fa-solid fa-bars'
}

// TYPEWRITER WITH LOOP

// function typeWriter(text, index) {
//     if (index < text.length) {
//         document.getElementById("subtitle").innerHTML += text.charAt(index);
//         setTimeout(function () {
//             typeWriter(text, index + 1);
//         }, 100); // Delay of 100ms
//     } else{
//         setTimeout(function () {
//             document.getElementById("subtitle").innerHTML = "";
//             typeWriter(text, 0);
//         }, 1000); // After 3 seconds, start over again.
//     }
// }

// let text = "Software developer";
// typeWriter(text, 0);


// TYPEWRITER WITH TEXT CHANGING
let words = ["Software developer", "Web designer", "Tech enthusiast", "Gymer"];
let wordIndex = 0;
let isDeleting = false;
let text = "";
let charIndex = 0;

function typeWriter() {
    let currentWord = words[wordIndex];
    
    if (isDeleting) {
        text = currentWord.substring(0, charIndex - 1); // Erase character
        charIndex--;
    } else {
        text = currentWord.substring(0, charIndex + 1); // Type character
        charIndex++;
    }

    document.getElementById("subtitle").innerHTML = text + '<span class="blinker">|</span>';; // Update text

    // Control the speed of typing and deleting
    let typingSpeed = isDeleting ? 50 : 110;
    let nextAction = isDeleting ? 50 : 100;

    if (!isDeleting && charIndex === currentWord.length) {
        // Pause before starting to delete
        nextAction = 2000;
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        // Switch to the next word and start typing
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length; // Loop through words
        nextAction = 500;
    }
    setTimeout(typeWriter, nextAction);
}
typeWriter();