import movies from "./movies";
export function modal() {
	const seeBtn = document.querySelectorAll(".seeBtn");
	seeBtn.forEach((item) => {
		const modal = document.getElementById("about");
		modal.innerHTML = "";
		item.addEventListener("click", (e) => {
			e.preventDefault();
			modal.classList.remove("hidden");
			const { id, img, lang, name, runt, summary, year, genre } =
				item.dataset;
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
}
