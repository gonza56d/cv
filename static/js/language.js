const Languages = {
    English: 'english',
    Spanish: 'spanish'
}

let language = Languages.English;

let elements = {
    presentation: function() {return document.getElementsByClassName('presentation')},
    btnChangeLanguage: function() {return document.getElementById('btnChangeLanguage')}
}

let texts = {
    presentation: function() {
        if (language === Languages.English) {return "Hello! I am a backend developer specialized in Python with 4+ years of experience. Focused on delivering with the best practices and the cleaner code within my capabilities, which are constantly evolving and improving. I like to work with teams where the constructive reviews are constantly made while the human side is always present."}
        else if (language === Languages.Spanish) {return "Hola! Soy un desarrollador backend especializado en Python con más de 4 años de experiencia. Me centro en hacer delivery bajo las mejores prácticas y el código más limpio posible dentro de mis capacidades, las cuales están en constante evolución y mejora. Me gusta trabajar con equipos donde las críticas constructivas son algo constante, sin dejar de lado el aspecto humano y el compañerismo."}
    },
    btnChangeLanguage: function() {
        if (language === Languages.English) {return 'Cambiar a español'}
        else if (language === Languages.Spanish) {return 'Set to English'}
    }
}

function setTexts() {
    for(element of elements.presentation()) element.innerText = texts.presentation();
    elements.btnChangeLanguage().innerText = texts.btnChangeLanguage();
}

function changeLanguage() {

    if (language === Languages.English) {language = Languages.Spanish}
    else if (language === Languages.Spanish) {language = Languages.English}

    setTexts();
    console.log(language);

}
