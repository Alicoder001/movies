let array = JSON.parse(localStorage.getItem("fulldata"))
	? JSON.parse(localStorage.getItem("fulldata"))
	: [];
function getLocal() {
	let array = JSON.parse(localStorage.getItem("fulldata"))
		? JSON.parse(localStorage.getItem("fulldata"))
		: [];
}

function setLocal(data) {
	array = JSON.parse(localStorage.getItem("fulldata"))
		? JSON.parse(localStorage.getItem("fulldata"))
		: [];
	let s = 0;
	array.forEach((e) => {
		e.id == data.id ? (s += 1) : (s = s);
	});
	if (s == 0) {
		array.push(data);
	}

	localStorage.setItem("fulldata", JSON.stringify(array));
}

JSON.parse(localStorage.getItem("fulldata"))
	? (array = JSON.parse(localStorage.getItem("fulldata")))
	: [];
export { setLocal, array, getLocal };
