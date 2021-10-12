// // // Pregunta 1 
document.getElementById("botonUno").addEventListener("click",validateCountry)
function validateCountry(event) {
    event.preventDefault()
        let countryName = document.forms["quizone"]["countryName"].value;
        if (countryName == "" || countryName == undefined) {
        window.alert("No olvides responder");
        }
        else if (countryName == "Suiza"){
            window.alert("Muy bien");
            location.href = "/pages/quiz2.html";
        }
        else {
            window.alert("Muy mal, intenta de nuevo");
        }
    }

// // Pregunta 2 
document.getElementById("botonDos").addEventListener("click",validateLanguage)
function validateLanguage(event) {
    event.preventDefault()
        const Aleman = document.getElementById("checkone").checked;
        const Italiano = document.getElementById("checktwo").checked;
        const Romanche = document.getElementById("checkthree").checked;
        const Frances = document.getElementById("checkfour").checked;
        const Suiss = document.getElementById("checkfive").checked;
            if (!Aleman && !Italiano && !Romanche && !Frances && !Suiss){
                window.alert("No te olvides de responder");
            }
            else if (Aleman && Italiano && Romanche && Frances){
                window.alert("Muy bien");
                location.href = "/pages/quiz3.html";     
            }
            else if (Aleman || Italiano || Romanche || Frances){
                window.alert("Te ha faltado alguno. Vuelve a intentarlo");
            }

            else {
                window.alert("Muy mal");
            }
        }

// // Pregunta 3
document.getElementById("botonTres").addEventListener("click",validateLimits)
function validateLimits(event) {
    event.preventDefault() // permite que el form no se recargue 
        const Alemania = document.getElementById("optionone").checked;
        const Italia = document.getElementById("optiontwo").checked;
        const Austria = document.getElementById("optionthree").checked;
        const Francia = document.getElementById("optiontfour").checked;
        const Liechtenstein = document.getElementById("optiontfive").checked;
            if (!Alemania && !Italia && !Austria && !Francia && !Liechtenstein ){
                window.alert("No olvides responder");
            }
            else if (Alemania){
                window.alert("Muy bien");
                location.href = "/pages/quiz4.html";
            }
            else {
                window.alert("Intentalo nuevamente");
            }
}

// // Pregunta 4 
document.getElementById("botonCuatro").addEventListener("click",validateStates)
function validateStates(event) {
    event.preventDefault()
    const twentySix = document.getElementById("twentysix").checked;
    const twentyEight = document.getElementById("twentyeight").checked;
    const thirtyOne = document.getElementById("thirtyone").checked;
    const sixTeen = document.getElementById("sixteen").checked;
    if (!twentySix && !twentyEight && !thirtyOne && !sixTeen){
            window.alert("No olvides responder");  
            return false;
        } 
        else if (twentySix) {   
            window.alert("Muy bien");
            location.href = "/pages/quiz5.html";
        }
        else {  
            window.alert("¡Vamos de nuevo!");  
            location.href = "/pages/quiz5.html";
    }  
}

// Pregunta 5 
document.getElementById("botonCinco").addEventListener("click",validateCurrency)
function validateCurrency (event){
    event.preventDefault()
    const Euro = document.getElementById("euro").checked;
    const Franco = document.getElementById("franco").checked;
    const FrancoF = document.getElementById("francofederal").checked;
    const Libra = document.getElementById("libra").checked;
        if (!Euro && !Franco && !FrancoF && !Libra){
            window.alert("No olvides responder");
        }
        else if (Franco){
            window.alert("Muy bien");
            location.href = "/pages/index.html";
        }
        else {
            window.alert("¡Casi! Vuelve a intentarlo.");
            location.href = "/pages/index.html";
    }
}




