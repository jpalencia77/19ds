function jan(y) {
    var x = ((y + Math.floor((y - 1) / 4) - Math.floor((y - 1) / 100)) + Math.floor((y - 1) / 400) % 7)

    switch (x) {
        case 1:
            return "Lunes"
        case 2:
            return "Martes"
        case 3:
            return "Miercoles"
        case 4:
            return "Jueves"
        case 5:
            return "Viernes"
        case 6:
            return "Sabado"
        default:
            return "Domingo"
    }

}
jan(2020)