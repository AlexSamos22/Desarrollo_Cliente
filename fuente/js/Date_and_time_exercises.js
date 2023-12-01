// EJER1
let myBirthday = new Date("2001-06-12T04:45:00");
console.log(myBirthday);

// EJER2
function getDayOfWeek(year, month, day) {
    let daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let date = new Date(year, month, day);
    return daysOfWeek[date.getDay()];
}

console.log(getDayOfWeek(2023, 11, 3));

// EJER3
function getMyBirthDayName(birthDate) {
    let daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let date = birthDate;
    return daysOfWeek[date.getDay()];
}

let myBirthdate = new Date("2001-06-12T04:45:00");
console.log(getMyBirthDayName(myBirthdate));

// EJER4
function getLastDayOfMonth(year, month) {
    let date = new Date(year, month - 1, 1);
    date.setDate(date.getDate() - 1); // Restar 1 para obtener el último día del mes
    return date.getDate();
}

console.log(getLastDayOfMonth(2023, 11));

// EJER5
function getSecondsUntilNewYear() {
    let currentDate = new Date();
    let newYear = new Date(2024, 0, 1);
    return (newYear - currentDate) / 1000; // Dividir entre 1000 para obtener los segundos de la resta
}

console.log(getSecondsUntilNewYear());

// EJER6
function getSecondsFromNowToNewYear() {
    let currentDate = new Date();
    let currentYear = currentDate.getFullYear();
    let endOfYear = new Date(currentYear, 11, 31, 23, 59, 59); // Último día del año y último segundo

    return (endOfYear - currentDate) / 1000; // Dividir entre 1000 para obtener los segundos de la resta
}

console.log(getSecondsFromNowToNewYear());
