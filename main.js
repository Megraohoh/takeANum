
// The function will increment a global variable by one each time it is invoked
//Keeping this as a global var will "anchor" the counter to start at one but not repeat numerical values as bands are added 
let bandNumber = 1
// Your job is to write a function that accepts any band name as an argument. 
//argument name is bandName
    //function expression
const takeNumber = function (bandName) {
    //variable is referencing global var, including a period, and ending with 
    //placeholder for arguments listed in provided const(s)
    let bandConcatenation = `${bandNumber}` + ". " + `${bandName}`;
    //counter that takes global var
    bandNumber ++;
    return bandConcatenation; //return stops the interpreter from running code to express output from function
    
}
// and return that number, and the band name concatenated together.

const scum = takeNumber("Galactic Scum")
console.log(scum)  // This should print "1. Galactic Scum" in the console

const under = takeNumber("Underdogs")
console.log(under)  // This should print "2. Underdogs" in the console