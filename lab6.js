function convertTemp(degree, unit) {

if (unit==="C" || unit==="c") {
return (5 / 9) * (degree - 32);
} else if (unit==="F" || unit==="f") {
return (9 / 5 * degree) + 32;

}
}

var convertedTemp1 = convertTemp(212, "C"),
    convertedTemp2 = convertTemp(32, "C"),
    convertedTemp3 = convertTemp(65, "C"), 
    convertedTemp4 = convertTemp(-40, "f")



console.log(convertedTemp1, convertedTemp2, convertedTemp3, convertedTemp4)





// Option 2


// function convertTemp(degree, unit) {

// 	if (unit==="C") {
// 		return (5 / 9) * (degree - 32);
// 	} else if (unit==="F") {
// 		return (9 / 5 * degree) + 32;
// 	}
// }
//  var temp = 212

//  var degreeUnit = "C"


// var convertedTemp = convertTemp(temp, degreeUnit);

// console.log(temp + degreeUnit + " converts to " +convertedTemp)

