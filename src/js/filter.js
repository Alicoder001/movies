import movies from "./movies";
const { updateUI } = require("./update");

const categories = document.getElementById("categories");

categories.addEventListener("change", (e) => {
	const value = e.target.value;
	const infoSubt = document.querySelectorAll(".infoSubt");
	infoSubt.forEach((item) => {
		if (value == "All") {
			item.parentElement.parentElement.classList.remove("hidden");
		} else if (!item.textContent.includes(value)) {
			item.parentElement.parentElement.classList.add("hidden");
		} else item.parentElement.parentElement.classList.remove("hidden");
	});
});
const alphabet = document.getElementById("alphabet");
alphabet.addEventListener("change", (e) => {
	const value = e.target.value;
	updateUI(movies, parseInt(value));
});
