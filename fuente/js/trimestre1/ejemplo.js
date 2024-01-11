/**
 *
 *
 * @return {*} 
 */
function encenderMotor(){
    if (this.motor) {
        return console.log("El motor ya esta encendido");
    }
    this.motor = true;
    return console.log("El motor esta encendido");
}