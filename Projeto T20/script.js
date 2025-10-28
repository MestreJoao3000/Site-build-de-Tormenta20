const ATRDFOR = document.getElementById("atrDfor")
const ATRDDES = document.getElementById("atrDdes")
const ATRDCON = document.getElementById("atrDcon")
const ATRDINT = document.getElementById("atrDint")
const ATRDSAB = document.getElementById("atrDsab")
const ATRDCAR = document.getElementById("atrDcar")

const ATRFFOR = document.getElementById("atrFfor")
const ATRFDES = document.getElementById("atrFdes")
const ATRFCON = document.getElementById("atrFcon")
const ATRFINT = document.getElementById("atrFint")
const ATRFSAB = document.getElementById("atrFsab")
const ATRFCAR = document.getElementById("atrFcar")

ATRDFOR.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        atrFcalc()
    }
})

ATRDDES.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        atrFcalc()
    }
})

ATRDCON.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        atrFcalc()
    }
})

ATRDINT.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        atrFcalc()
    }
})

ATRDSAB.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        atrFcalc()
    } n
})

ATRDCAR.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        atrFcalc()
    }
})

function atrFcalc() {

    atrFclear()
    atrFraca()
    let n = 0
    let ffor = parseInt(ATRFFOR.value, 10);
    let fdes = parseInt(ATRFDES.value, 10);
    let fcon = parseInt(ATRFCON.value, 10);
    let fint = parseInt(ATRFINT.value, 10);
    let fsab = parseInt(ATRFSAB.value, 10);
    let fcar = parseInt(ATRFCAR.value, 10);
    let dfor = parseInt(ATRDFOR.value, 10);
    let ddes = parseInt(ATRDDES.value, 10);
    let dcon = parseInt(ATRDCON.value, 10);
    let dint = parseInt(ATRDINT.value, 10);
    let dsab = parseInt(ATRDSAB.value, 10);
    let dcar = parseInt(ATRDCAR.value, 10);
    n = atrcalc(dfor)
    ATRFFOR.value = ffor + n
    n = atrcalc(ddes)
    ATRFDES.value = fdes + n
    n = atrcalc(dcon)
    ATRFCON.value = fcon + n
    n = atrcalc(dint)
    ATRFINT.value = fint + n
    n = atrcalc(dsab)
    ATRFSAB.value = fsab + n
    n = atrcalc(dcar)
    ATRFCAR.value = fcar + n
}

function atrcalc(valor) {

    let resp

    if (valor == 0) {
        resp == 0
    } else if (valor < 7 && valor > 0) {
        resp = -2
    } else if (valor == 8 || valor == 9) {
        resp = -1
    } else if (valor == 10 || valor == 11) {
        resp = 0
    } else if (valor == 12 || valor == 13) {
        resp = 1
    } else if (valor == 14 || valor == 15) {
        resp = 2
    } else if (valor == 16 || valor == 17) {
        resp = 3
    } else if (valor == 18) {
        resp = 4
    }
    return resp
}

function atrFraca() {

    let n, no, raca = document.getElementById("raca").value
    let afor = parseInt(ATRFFOR.value, 10);
    let ades = parseInt(ATRFDES.value, 10);
    let acon = parseInt(ATRFCON.value, 10);
    let aint = parseInt(ATRFINT.value, 10);
    let asab = parseInt(ATRFSAB.value, 10);
    let acar = parseInt(ATRFCAR.value, 10);

    if (raca == "anao") {
        n = 2
        ATRFCON.value = acon + n
        n = 1
        ATRFSAB.value = asab + n
        ATRFDES.value = ades - n
    } else if (raca == "dahllan") {
        n = 2
        ATRFSAB.value = asab + n
        n = 1
        ATRFDES.value = ades + n
        ATRFINT.value = aint - n
    } else if (raca == "elfo") {
        n = 2
        ATRFINT.value = aint + n
        n = 1
        ATRFDES.value = ades + n
        ATRFCON.value = acon - n
    } else if (raca == "goblin") {
        n = 2
        ATRFDES.value = ades + n
        n = 1
        ATRFINT.value = aint + n
        ATRFCAR.value = acar - n
    } else if (raca == "golem") {
        n = 2
        ATRFFOR.value = afor + n
        n = 1
        ATRFCON.value = acon + n
        ATRFCAR.value = acar - n
    } else if (raca == "humano") {
        atrFbutton(1)
    } else if (raca == "hynne") {
        ATRFDES.value = ades + 2
        ATRFCAR.value = acar + 1
        ATRFFOR.value = afor - 1
    } else if (raca == "klyren") {
        ATRFINT.value = aint + 2
        ATRFCAR.value = acar + 1
        ATRFFOR.value = afor - 1
    } else if (raca == "lefou") {
        atrFbutton(no)
        ATRFCAR.value = acar - 1
    } else if (raca == "minotauro") {
        ATRFFOR.value = afor + 2
        ATRFCON.value = acon + 1
        ATRFSAB.value = asab - 1
    } else if (raca == "osteon") {
        atrFbutton(3)
    } else if (raca == "quareen") {
        ATRFCAR.value = acar + 2
        ATRFINT.value = aint + 1
        ATRFSAB.value = asab - 1
    } else if (raca == "sereia") {
        atrFbutton(4)
    } else if (raca == "silfide") {
        n = 2
        ATRFCAR.value = acar + 2
        ATRFFOR.value = afor - 2
        ATRFDES.value = ades + 1
    } else if (raca == "suraggel(a)") {
        ATRFSAB.value = asab + 2
        ATRFCAR.value = acar + 1
    } else if (raca == "suraggel(s)") {
        ATRFDES.value = ades + 2
        ATRFINT.value = aint + 1
    } else if (raca == "trog") {
        ATRFCON.value = acon + 2
        ATRFFOR.value = afor + 1
        ATRFINT.value = aint - 1
    }
}

function atrFclear() {
    ATRFFOR.value = 0
    ATRFDES.value = 0
    ATRFCON.value = 0
    ATRFINT.value = 0
    ATRFSAB.value = 0
    ATRFCAR.value = 0
}

function atrFbutton(valor) {

    if (valor == 1) {

    } else if (valor == 2) {

    } else if (valor == 3) {

    } else if (valor == 4) {

    }
}
/*------------------------------Péricias------------------------------*/

function perLadd() {

    let classe = document.getElementById("classe").value
    const LISTA = document.getElementById("perL")
    const PERICIA = document.createElement("li")
    PERICIA.classList.add("perLitem")
    const PERICIA2 = document.createElement("li")
    PERICIA2.classList.add("perLitem")
    const ACHAR = document.querySelectorAll(".perLitem")
    for (let n = ACHAR.length - 1; n >= 0; n--) {
        ACHAR[n].remove()
    }

    if (classe == "arcanista") {
        PERICIA.textContent = "Misticismo(Int)"
        PERICIA2.textContent = "Vontade(Sab)"
    } else if (classe == "barbaro") {
        PERICIA.textContent = "Fortitude(Con)"
        PERICIA2.textContent = "Luta(For)"
    } else if (classe == "bardo") {
        PERICIA.textContent = "Atuação(Car)"
        PERICIA2.textContent = "Reflexos(Des)"
    } else if (classe == "bucaneiro") {
        PERICIA.textContent = ""
        PERICIA2.textContent = "Reflexos(Des)"
    } else if (classe == "cacador") {
        PERICIA.textContent = ""
        PERICIA2.textContent = "Sobrevivêcia(Sab)"
    } else if (classe == "cavaleiro") {
        PERICIA.textContent = "Fortitude(Con)"
        PERICIA2.textContent = "Luta(For)"
    } else if (classe == "clerigo") {
        PERICIA.textContent = "Religião(Sab)"
        PERICIA2.textContent = "Vontade(Sab)"
    } else if (classe == "druida") {
        PERICIA.textContent = "Sobrevivência(Sab)"
        PERICIA2.textContent = "Vontade(Sab)"
    } else if (classe == "guerreiro") {
        PERICIA.textContent = ""
        PERICIA2.textContent = "Fortitude(Con)"
    } else if (classe == "inventor") {
        PERICIA.textContent = "Ofício(Int)"
        PERICIA2.textContent = "Vontade(Sab)"
    } else if (classe == "ladino") {
        PERICIA.textContent = "Ladinagem(Des)"
        PERICIA2.textContent = "Reflexos(Des)"
    } else if (classe == "lutador") {
        PERICIA.textContent = "Fortitude(Con)"
        PERICIA2.textContent = "Luta(For)"
    } else if (classe == "nobre") {
        PERICIA.textContent = ""
        PERICIA2.textContent = "Vontade(Sab)"
    } else if (classe == "paladino") {
        PERICIA.textContent = "Luta(For)"
        PERICIA2.textContent = "Vontade(Sab)"
    }
    LISTA.appendChild(PERICIA)
    LISTA.appendChild(PERICIA2)
}

/*------------------------------Raças------------------------------*/