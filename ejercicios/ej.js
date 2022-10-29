const convertMetersToInches = () => {
    const totalMeters = Number(prompt('Ingrese el Total de Metros'));
    alert(`Resp: ${(totalMeters / 0.0254).toFixed(2)} Pulgadas`)
}

const convertPenToUsd = () => {
    const totalSoles = Number(prompt('Ingrese el total de soles a convertir'));
    alert(`Resp:  ${totalSoles} equivale a ${(totalSoles / 3.99).toFixed(2)} dolares`)
}

const calcEdad = () => { //'1993-11-20'
    const dateString = prompt('Ingrese la fecha de nacimiento, ej: 1993-11-20');
    const birthday = +new Date(dateString);
    alert(`Resp: Tiene ${~~((Date.now() - birthday) / (31557600000))} años`)
}

const arrayPeople = [{
        name: 'Sonia Flores',
        edad: 25
    },
    {
        name: 'Ivan Santiago',
        edad: 19
    },
    {
        name: 'Sofia Mercedes',
        edad: 26
    }
]

const getYounger = () => {
    arrayOrder = arrayPeople.sort((a, b) => b.edad - a.edad);
    alert(`Resp Nombre: ${arrayOrder[0].name} - Edad:  ${arrayOrder[0].edad}`)
}

const getBonus = () => {
    const totalYears = Number(prompt('Ingrese el total de años laborados'));
    let message;
    if (totalYears > 5) {
        message = `Le corresponde $ ${1000}`
    }

    if (totalYears <= 5 && totalYears >= 1) {
        message = `Le corresponde $ ${100*totalYears}`
    }

    message = 'No le corresponde un Bono';
    alert(message);

}

const calcSalary = () => {
    let salary = Number(prompt('Ingrese el salario'));
    let year = 1;
    const arraySalary = [];
    while (year <= 6) {
        salary = salary + (salary * 0.10);
        arraySalary.push({
            year,
            salary:salary.toFixed(2)
        })
        year++
    }

    alert(JSON.stringify(arraySalary))
}

const calcNotas = () => {
    let totalAlumnos = prompt('Ingrese el Total de Alumnos');
    let index = 0;
    let totalApr = 0;
    let totalDes = 0;
    if (totalAlumnos > 0) {
        while (index < totalAlumnos) {
            const nota = prompt(`Ingrese la nota para el alumno: ${index+1}`);
            if (nota > 10) {
                totalApr++
            } else {
                totalDes++
            }
            index++
        }
        alert(`Total de Aprobados: ${totalApr} - Total de Desaprobados: ${totalDes}`)
    } else {
        alert('Total no válido')
    }
}

const calcTotalFocos = () => {
    let totalFocos = prompt('Ingrese el Total de Focos');
    let index = 0;
    let totalRed = 0;
    let totalGreen = 0;
    let totalWhite = 0;
    if (totalFocos > 0) {
        while (index < totalFocos) {
            const foco = prompt('Ingrese el color: 1-Rojo 2-Verde 3-Blanco');

            switch (foco) {
                case '1':
                    totalRed++;
                    break;
                case '2':
                    totalGreen++;
                    break;
                default:
                    totalWhite++
                    break;
            }
            index++;
        }

        alert(`Total Rojos: ${totalRed} - Total Verdes: ${totalGreen} - Total Blancos: ${totalWhite}`)
    } else {
        alert('Total no válido')
    }
}

const checkVote = (years) => {
    let edad = Number(prompt('Ingrese su edad'));
    edad = edad + 4
    if (edad >= 18) {
        alert(`Para el 2026 tendrás: ${edad}, por tanto puedes votar`)
    } else {
        alert(`Para el 2026 tendrás: ${edad}, aún no puedes votar`)
    }
}

const readMenu = () => {
    const option = prompt('Ingrese el numero de la opcion:  \r\n 7.Convertir metros a pulgadas. \r\n 8.Dolares a soles  \r\n 9.Calcular Edad \r\n 10.Persona Menor \r\n 11.Bono \r\n 12.Salario Profesor \r\n 13.Calificaciones \r\n 14.Total Focos \r\n 15.Puedes Votar');
    switch (option) {
        case '7':
            convertMetersToInches();
            break;
        case '8':
            convertPenToUsd();
            break;
        case '9':
            calcEdad();
            break;
        case '10':
            getYounger();
            break;
        case '11':
            getBonus();
            break;
        case '12':
            calcSalary();
            break;
        case '13':
            calcNotas();
            break;
        case '14':
            calcTotalFocos();
            break;
        case '15':
            checkVote();
            break;
        default:
            alert('Opcion No valido')
            break;
    }
}

const documentReady = () => {
    const btn = document.getElementById('menu');
    btn.addEventListener("click", function () {
        readMenu();
    });

}

document.addEventListener('DOMContentLoaded', documentReady);