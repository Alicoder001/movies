import { setLocal, array, getLocal } from "./localStorage";
const headerBtn = document.querySelector(".headerBtn");

headerBtn.addEventListener("click", (e) => {
	e.preventDefault();
	const bookmark = document.querySelector(".bookmark");
	bookmark.classList.toggle("hidden");
	bookmarkF();
});

function bookmarkF() {
	const bookmarkList = document.querySelector(".bookmarkList");
	const removeBtn = document.querySelector(".removekBtn");
	bookmarkList.innerHTML = "";
	if (JSON.parse(localStorage.getItem("fulldata"))) {
		array.forEach((item) => {
			const { id, img, lang, name, runt, summary, year, genre } = item;
			bookmarkList.innerHTML += `<li class="bookmarkItem"  data-id="${id}" data-img="${img}" data-name="${name}" data-year="${year}" data-lang="${lang}" data-runt="${runt}" data-summary="${summary}" data-genre="${genre}">${name}</li>`;
			const bookmarkItem = document.querySelectorAll(".bookmarkItem");
			bookmarkItem.forEach((li) => {
				const modal = document.getElementById("about");
				modal.innerHTML = "";
				li.addEventListener("click", (e) => {
					e.preventDefault();
					modal.classList.remove("hidden");
					const { id, img, lang, name, runt, summary, year, genre } =
						li.dataset;
					modal.innerHTML = `
			<div class="aboutWrap">
				<div class="aboutHeader">
					<h2 class="aboutHeaderTitle">About Movie</h2>
					<i
						id="exitBtn"
						class="exit fa-5x fa-solid fa-xmark"
						style="color: gray"></i>
				</div>
				<div class="aboutMain">
					<img src="${img}" alt="img" />
					<h1 class="aboutTitle">${name}</h1>
					<div class="aboutInfo">
						<div class="infoBlock">
							<p class="aboutMainSubt">Genre</p>
							<p class="aboutSubt">${genre}</p>
						</div>
						<div class="infoBlock">
							<p class="aboutMainSubt">Year</p>
							<p class="aboutSubt">${year}</p>
						</div>
						<div class="infoBlock">
							<p class="aboutMainSubt">Language</p>
							<p class="aboutSubt">${lang}{</p>
						</div>
						<div class="infoBlock">
							<p class="aboutMainSubt">Runtime</p>
							<p class="aboutSubt">${runt}</p>
						</div>
						<div class="infoBlock">
							<p class="aboutMainSubt">Summary:    <span class="aboutSubt">${summary}</p></span>							
						</div>
					</div>
				</div>
			</div>
		`;
					const exit = document.getElementById("exitBtn");
					exit.addEventListener("click", (t) => {
						t.preventDefault();
						modal.classList.add("hidden");
					});
				});
			});
		});
		removeBtn.classList.remove("hidden");
	} else {
		removeBtn.classList.add("hidden");
		bookmarkList.innerHTML = "";
	}
}

// const bookmarkBtn = document.querySelectorAll(".bookmarkBtn");
document.addEventListener("click", (e) => {
	if (e.target.className.includes("bookmarkBtn")) {
		const { id, img, lang, name, runt, summary, year, genre } =
			e.target.dataset;
		const newData = { name, id, img, lang, runt, summary, year, genre };
		setLocal(newData);

		bookmarkF();
	} else if (e.target.className.includes("removekBtn")) {
		localStorage.clear();

		bookmarkF();
	}
});
