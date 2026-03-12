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



function atrFraca() {

    atrFclear()
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
        atrBbutton(1)
    } else if (raca == "hynne") {
        ATRFDES.value = ades + 2
        ATRFCAR.value = acar + 1
        ATRFFOR.value = afor - 1
    } else if (raca == "klyren") {
        ATRFINT.value = aint + 2
        ATRFCAR.value = acar + 1
        ATRFFOR.value = afor - 1
    } else if (raca == "lefou") {
        atrBbutton(2)
        ATRFCAR.value = acar - 1
    } else if (raca == "minotauro") {
        ATRFFOR.value = afor + 2
        ATRFCON.value = acon + 1
        ATRFSAB.value = asab - 1
    } else if (raca == "osteon") {
        atrBbutton(3)
        ATRFCON.value = acon - 1
    } else if (raca == "quareen") {
        ATRFCAR.value = acar + 2
        ATRFINT.value = aint + 1
        ATRFSAB.value = asab - 1
    } else if (raca == "sereia") {
        atrBbutton(4)
    } else if (raca == "silfide") {
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

/*function atrBbutton(valor) {

    const PAI = document.getElementById("atrB")
    const BFOR = document.createElement("button")
    const BDES = document.createElement("button")
    const BCON = document.createElement("button")
    const BINT = document.createElement("button")
    const BSAB = document.createElement("button")
    const BCAR = document.createElement("button")
    BFOR.id = 'atrBfor'
    BFOR.classList.add("atrBbutton")
    BFOR.textContent = "+"
    BDES.id = 'atrBdes'
    BDES.classList.add("atrBbutton")
    BDES.textContent = "+"
    BCON.id = 'atrBcon'
    BCON.classList.add("atrBbutton")
    BCON.textContent = "+"
    BINT.id = 'atrBint'
    BINT.classList.add("atrBbutton")
    BINT.textContent = "+"
    BSAB.id = 'atrBsab'
    BSAB.classList.add("atrBbutton")
    BSAB.textContent = "+"
    BCAR.id = 'atrBcar'
    BCAR.classList.add("atrBbutton")
    BCAR.textContent = "+"
    if (valor == 1) {
        PAI.appendChild(BFOR)
        PAI.appendChild(BDES)
        PAI.appendChild(BCON)
        PAI.appendChild(BINT)
        PAI.appendChild(BSAB)
        PAI.appendChild(BCAR)
    } else if (valor == 2) {
        PAI.appendChild(BFOR)
        PAI.appendChild(BDES)
        PAI.appendChild(BCON)
        PAI.appendChild(BINT)
        PAI.appendChild(BSAB)
    } else if (valor == 3) {
        PAI.appendChild(BFOR)
        PAI.appendChild(BDES)
        PAI.appendChild(BINT)
        PAI.appendChild(BSAB)
        PAI.appendChild(BCAR)
    } else if (valor == 4) {
        PAI.appendChild(BFOR)
        PAI.appendChild(BDES)
        PAI.appendChild(BCON)
        PAI.appendChild(BINT)
        PAI.appendChild(BSAB)
        PAI.appendChild(BCAR)
    }
}*/
/*------------------------------Péricias------------------------------*/

/*------------------------------Raças------------------------------*/