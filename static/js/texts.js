
const presentation = "Hello! I am a backend developer specialized in Python with 4+ years of experience. Focused on delivering with the best practices and the cleaner code within my capabilities, which are constantly evolving and improving. I like to work with teams where the constructive reviews are constantly made while the human side is always present.";

function loadConsts() {
    let presentationElements = document.getElementsByClassName("presentation");
    for(element of presentationElements) element.innerText = presentation;
}
