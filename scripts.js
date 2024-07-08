function enviarWhatsApp(plan) {
    var numero = "5493464528114";
    var seleccion = plan || document.getElementById("plan-selector").value;
    var mensaje = "Hola, me gustaria recibir más información sobre Seguros para ";

    switch (seleccion) {
        case "auto":
            mensaje += "Autos.";
            break;
        case "moto":
            mensaje += "Motos.";
            break;
        case "accidentes":
            mensaje += "Accidentes Personales.";
            break;
        case "art":
            mensaje += "ART.";
            break;
        case "hogar":
            mensaje += "el Hogar.";
            break;
        case "comercio":
            mensaje += "el Comercio.";
            break;
        case "incendio":
            mensaje += "Incendio.";
            break;
        case "agro":
            mensaje += "Agro - Granizo.";
            break;
        case "monopatin":
            mensaje += "Monopatín / Moto Eléctrica.";
            break;
        case "bicicleta":
            mensaje += "Bicicleta.";
            break;
        case "foodtruck":
            mensaje += "Food Truck.";
            break;
        case "salud":
            mensaje += "Salud.";
            break;
        case "retiro":
            mensaje += "Retiro.";
            break;
        case "rc":
            mensaje += "Responsabilidad Civil.";
            break;
        case "rc_profesional":
            mensaje += "RC Profesional (Mala Praxis).";
            break;
        default:
            mensaje = "";
            break;
    }

    if (mensaje !== "") {
        var url = "https://wa.me/" + numero + "?text=" + encodeURIComponent(mensaje);
        window.open(url, '_blank');
    }
}

function mostrarInformacionEmpresas() {
    var modal = document.getElementById("modalEmpresas");
    modal.style.display = "block";
}

function mostrarInformacionVehiculos() {
    var modal = document.getElementById("modalVehiculos");
    modal.style.display = "block";
}

function mostrarInformacionPersonas() {
    var modal = document.getElementById("modalPersonas");
    modal.style.display = "block";
}

function mostrarInformacionContacto() {
    var modal = document.getElementById("modalContacto");
    modal.style.display = "block";
}

function cerrarModal() {
    var modals = document.getElementsByClassName("modal");
    for (var i = 0; i < modals.length; i++) {
        modals[i].style.display = "none";
    }
}