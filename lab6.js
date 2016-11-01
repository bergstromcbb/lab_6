function convertTemp(degree, unit) {

	if (unit==="C") {
		return (5 / 9) * (degree - 32);
	} else if (unit==="F") {
		return (9 / 5 * degree) + 32;
	}
}

var convertedTemp = convertTemp(212, "C");

console.log(convertedTemp)

