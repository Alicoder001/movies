const mainForm = document.getElementById("mainForm");
const searchInput = document.getElementById("searchInput");
let text = "";
searchInput.addEventListener("input", (e) => {
	text = searchInput.value;

	const infoTitle = document.querySelectorAll(".infoTitle");
	infoTitle.forEach((item) => {
		if (!item.textContent.toLowerCase().includes(text)) {
			item.parentElement.parentElement.classList.add("hidden");
		} else item.parentElement.parentElement.classList.remove("hidden");
	});
});
categories.addEventListener("change", (e) => {
	const value = e.target.value;
	const infoSubt = document.querySelectorAll(".infoSubt");
	infoSubt.forEach((item) => {
		if (value == "All") {
			item.parentElement.parentElement.parentElement.classList.remove(
				"hidden"
			);
		} else if (!item.textContent.includes(value)) {
			item.parentElement.parentElement.parentElement.classList.add(
				"hidden"
			);
		} else
			item.parentElement.parentElement.parentElement.classList.remove(
				"hidden"
			);
	});
});
