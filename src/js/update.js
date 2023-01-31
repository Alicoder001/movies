const list = document.querySelector(".mainList");
import movies from "./movies";
import { modal } from "./moreInfo";
function updateUI(data, n = 5) {
	const array = data.slice(0, 30);
	if (n == 0) {
		array.sort((a, b) =>
			a.title > b.title ? 1 : b.title > a.title ? -1 : 0
		);
	} else if (n == 1) {
		array.sort((a, b) =>
			a.title < b.title ? 1 : b.title < a.title ? -1 : 0
		);
	} else if (n == 2) {
		array.sort((a, b) => (a.year < b.year ? 1 : b.year < a.year ? -1 : 0));
	} else if (n == 3) {
		array.sort((a, b) =>
			a.imdbRating < b.imdbRating
				? 1
				: b.imdbRating < a.imdbRating
				? -1
				: 0
		);
	}
	list.innerHTML = "";
	array.forEach((item) => {
		const {
			title,
			year,
			imdbRating,
			categories,
			smallPoster,
			imdbId,
			summary,
			language,
			runtime,
		} = item;
		list.innerHTML += `<li class="mainItem" data-id = "${imdbId}">
	    <img class="mainImg" src="${smallPoster}" alt="" />
	    <div class="itemInfo">
			<div class="titleSubt block">
	        	<h2 class="infoTitle">${title}</h2>
	       	 <p class="infoSubt">${categories[0]}</p>
			</div>
			<div class="yearRating block">
	        	<p class="infoYear">${year}</p>
	        	<p class="infoRating">⭐${imdbRating}</p>
			</div>
	    </div>
	    <div class="buttons form-control d-flex">
	        <button class="infoBtn seeBtn btn btn-primary w-100" data-id="${imdbId}" data-img="${smallPoster}" data-name="${title}" data-year="${year}" data-lang="${language}" data-runt="${runtime}" data-summary="${summary}" data-genre="${categories[0]}">
	            See More
	        </button>
	        <button
	            class="infoBtn bookmarkBtn btn btn-outline-danger w-100" data-id="${imdbId}" data-img="${smallPoster}" data-name="${title}" data-year="${year}" data-lang="${language}" data-runt="${runtime}" data-summary="${summary}" data-genre="${categories[0]}">
	            Bookmarks
	        </button>
	    </div>
	</li>`;
	});
	modal();
}
export { updateUI };
