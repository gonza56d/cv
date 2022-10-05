const Languages = {
    English: 'english',
    Spanish: 'spanish'
}

let language = Languages.English;

let elements = {
    presentation: function() {return document.getElementsByClassName('presentation')},
    btnChangeLanguage: function() {return document.getElementById('btnChangeLanguage')},
    formalExperiences: function() {return document.getElementById('formalExperiences')},
    formalExperiencesTitle: function() {return document.getElementById('formalExperiencesTitle')},
    coursesTitle: function() {return document.getElementById('coursesTitle')},
    courses: function() {return document.getElementById('courses')}
}

let texts = {
    presentation: function() {
        if (language === Languages.English) {return "Hello! I am a backend developer specialized in Python with 4+ years of experience. Focused on delivering with the best practices and the cleaner code within my capabilities, which are constantly evolving and improving. I like to work with teams where the constructive reviews are constantly made while the human side is always present."}
        else if (language === Languages.Spanish) {return "Hola! Soy un desarrollador backend especializado en Python con más de 4 años de experiencia. Me centro en hacer delivery bajo las mejores prácticas y el código más limpio posible dentro de mis capacidades, las cuales están en constante evolución y mejora. Me gusta trabajar con equipos donde las críticas constructivas son algo constante, sin dejar de lado el aspecto humano y el compañerismo."}
    },
    btnChangeLanguage: function() {
        if (language === Languages.English) {return 'Cambiar a español'}
        else if (language === Languages.Spanish) {return 'Set to English'}
    },
    formalExperiences: function() {
        if (language === Languages.English) {return "<li><strong>Python Developer at Intive (November 2021 - Currently)</strong><br>I develop, enhance and maintain an ecosystem with more than 20 microservices running Python to make a digital wallet work. Most of them running on FastAPI and others on Flask, with REST architecture and also event-driven with RabbitMQ. In the tech stack we also use Postgres, Mongo and Redis. Our services live in AWS inside Kubernetes containers and we log them in datadog. We work with Scrum methodology.<br>SOLID principles are strongly followed within the Python team.<br>I had the opportunity to develop microservices from zero. The most challenging and interesting for me was identity-validation which has the responsibility to validate users' identity with Renaper.</li><hr><li><strong>Python Developer at Globant (April - October 2021)</strong><br>I worked with Python and SQL (Equifax internal engine) on data analytics. I extracted data with raw SQL and later automatized the processes with Python.</li><hr><li><strong>Java Developer at Globant (January - March 2021)</strong><br>I worked on QA tests automation for a mobile homebanking from Mexico with Java 11, Jenkins and Appium/Selenium with a bilingual team. This was my first project with Scrum. Honestly I did not feel challenged most of the time, since my Java full stack background was way more challenging and I was looking for a Python project, but stepping into a company like Globant allowed me to learn a lot of soft skills and later I could make my long time desired tech change.</li><hr><li><strong>Full Stack Java Developer at Dux Software (September 2019 - December 2020)</strong><br>I contributed on a web based ERP system with a lot of functionalities using Java 8, JSF, Hibernate and Postgresql. I put in production many complex functionalities such as Mercado Libre and WooCommerce integrations, helping to more than 1k of SMEs to grow with the help of technology to organize their data.</li><hr><li><strong>Python Developer at ERZ Software (November 2018 - August 2019)</strong><br>This was my first formal job where I contributed as a trainee learning Python by migrating a desktop-based ERP to a web platform with Django and MariaDB.</li>"}
        else if (language === Languages.Spanish) {return "<li><strong>Desarrollador Python en Intive (Noviembre 2021 - Actualmente)</strong><br>Desarrollo, mejoro y mantengo un ecosistema con más de 20 microservicios corriendo en Python para hacer funcionar una billetera digital. La mayoría de los microservicios corren con FastAPI y otros con Flask, con arquitectura REST y también orientada a eventos con RabbitMQ. En el stack tecnológico también usamos Postgres, Mongo y Redis. Nuestros microservicios viven en AWS dentro de contenedores de Kubernetes y los logueamos con datadog. Trabajamos con metodología Scrum.<br>Los principios SOLID son fuertemente seguidos dentro del equipo Python.<br>Tuve la oportunidad de desarrollar microservicios desde cero. El más desafiante e interesante para mí fue identity-validation, el cual tiene la responsabilidad de validar la identidad de nuestros usuarios con Renaper.</li><hr><li><strong>Desarrollador Python en Globant (Abril - Octubre 2021)</strong><br>Trabajé con Python y SQL (motor interno de Equifax) en data analytics. Extraje datos con SQL puro y luego automaticé estos procesos con Python.</li><hr><li><strong>Desarrollador Java en Globant (Enero - Marzo 2021)</strong><br>Trabajé en automatizar pruebas de QA para un mobile homebanking de México con Java 11, Jenkins y Appium/Selenium con un equipo bilingüe. Este fue mi primer proyecto con Scrum. Honestamente, la mayor parte del tiempo no me sentí desafiado, ya que mi anterior trabajo como desarrollador Java full fue mucho más desafiante y yo estaba buscando mi cambio tecnológico a Python, pero trabajar en una compañía como Globant me permitió aprender un montón de soft skills más adelante pude lograr mi tan deseado cambio tecnológico a Python.</li><hr><li><strong>Desarrollador Full Stack Java en Dux Software (Semtiembre 2019 - Diciembre 2020)</strong><br>Contribuí en un ERP web desarrollando un montón de funcionalidades usando Java 8, JSF, Hibernate y Postgresql. Puse en producción muchas funcionalidades complejas como integraciones con Mercado Libre y WooCommerce, ayudando a más de 1k de PyMEs a crecer con tecnología para organizar su información.</li><hr><li><strong>Desarrollador Python en ERZ Software (Noviembre 2018 - Agosto 2019)</strong><br>Este fue mi primer trabajo formal como desarrollador donde contribuí como trainee aprendiendo Python para migrar un ERP de escritorio hacia la web con Django y MariaDB.</li>"}
    },
    formalExperiencesTitle: function() {
        if (language === Languages.English) {return "Since the ending of 2018, I formally worked on:"}
        else if (language === Languages.Spanish) {return "Desde fines de 2018, trabajé formalmente en:"}
    },
    coursesTitle: function() {
        if (language === Languages.English) {return "Along with previously mentioned, I also worked parallelly at home for hobbie and self learning on the following personal projects:"}
        else if (language === Languages.Spanish) {return "Junto con lo mencionado previamente, también trabajé en casa por hobbie y aprendizaje autodidacta con los siguientes proyectos personales:"}
    },
    courses: function() {
        if (language === Languages.English) {return "<li><strong>HitMeApp</strong><br>A web project with Django that periodically with Celery collects data from crypto currencies and builds a history.</li><hr><li><strong>Pyrty</strong><br>A web forum made with Django where users can add topics and subtopics, send private messages, post and comment stuff, voting them too.</li><hr><li><strong>Snake Case</strong><br>The famous snake game running on your terminal with Python :) (Two weeks with covid turned into this).</li><hr><li><strong>Burner</strong><br>A pure Python project running inside a Docker container which collected data from Falabella and Sodimac using requests and stored the info in CSV files. This project was supervised by my senior mentor at Globant.</li><hr><li><strong>Caronte (Web)</strong><br>Web version of my project that helped me to manage my money day to day during tough economy times before working as a developer. Used Django and Postgres.</li><hr><li><strong>Caronte (Android)</strong><br>Mobile version of the previously mentioned. Used Java and Android Studio.</li><hr><li><strong>Rat On</strong><br>A Python project that measured the response time of different famous web pages using Celery and displaying the results on graphics with Javascript running on a Django server.</li><hr><li><strong>Scrappy</strong><br>This was a freelancer project that I made for digital marketing consultors to automate data scraping while I was boring at Globant during the non challenging Java project.</li><hr><li><strong>Unidigi</strong><br>My first Python project was for teachers and students. A web platform that facilitated taking exams. Teachers could create their own exams with multiple-choice questions and allowing the student(s) they wanted to take the exam. The studen(s) were able to peform the exam within the time set by the teacher and it showed the final score once finished.</li>"}
        else if (language === Languages.Spanish) {return "<li><strong>HitMeApp</strong><br>Un proyecto web con Django que periódicamente con Celery recolecta info de criptomonedas y construye un historial.</li><hr><li><strong>Pyrty</strong><br>Un foro web hecho con Django donde los usuarios pueden añadir tópicos y subtópicos, enviar mensajes privados, postear y comentar cosas, y votar estos últimos también.</li><hr><li><strong>Snake Case</strong><br>El famoso juego de la serpiente corriendo en tu terminal con Python :) (Dos semanas con covid se convirtieron en esto).</li><hr><li><strong>Burner</strong><br>Un proyecto de Python puro corriendo en un contenedor de Docker, el cual recolecta información de Falabella y Sodimac usando la librería requests y guardando la info obtenida en archivos CSV. Este proyecto fue supervisado por mi mentor senior en Globant.</li><hr><li><strong>Caronte (Web)</strong><br>Versión web de mi proyecto el cual me ayudaba a administrar mi dinero a diario durante tiempos de economía difícil antes de trabajar formalmente como desarrollador. Usé Django y Postgres.</li><hr><li><strong>Caronte (Android)</strong><br>Versión mobile del proyecto mencionado anteriormente. Usé Java y Android Studio.</li><hr><li><strong>Rat On</strong><br>Un proyecto de Python que mide el tiempo de respuesta de diferentes páginas conocidas utilizando Celery y mostrando los resultados en gráficos con JavaScript corriendo en un servidor de Django.</li><hr><li><strong>Scrappy</strong><br>Este fue un proyecto freelancer que hice para consultores de marketing digital para automatizar data scraping mientras estaba aburrido en el proyecto de Java de Globant.</li><hr><li><strong>Unidigi</strong><br>Mi primer proyecto en Python fue para profesores y estudiantes. Una plataforma web que facilitaba tomar exámenes. Los profesores podían crear exámenes con preguntas multiple-choice y permitir a los estudiantes que ellos deseaban realizarlos. Los estudiantes podían tomar los exámenes dentro del tiempo límite configurado por el profesor y ver la puntuación al finalizar.</li>"}
    }
}

function setTexts() {
    for(element of elements.presentation()) element.innerText = texts.presentation();
    elements.btnChangeLanguage().innerText = texts.btnChangeLanguage();
    elements.formalExperiences().innerHTML = texts.formalExperiences();
    elements.formalExperiencesTitle().innerText = texts.formalExperiencesTitle();
    elements.coursesTitle().innerText = texts.coursesTitle();
    elements.courses().innerHTML = texts.courses();
}

function changeLanguage() {

    if (language === Languages.English) {language = Languages.Spanish}
    else if (language === Languages.Spanish) {language = Languages.English}

    setTexts();
    console.log(language);

}
