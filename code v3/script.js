const imageUrls = ["https://media.begeek.fr/2019/08/Ori-and-the-Blind-Forest-Nintendo-Switch-Gamescom-2019.jpg",
					"https://zupimages.net/up/19/39/j8wh.jpg",
					"https://images2.alphacoders.com/474/thumb-1920-474206.jpg",
					"https://zupimages.net/up/19/39/znfe.jpg"];

const images = document.querySelector('.images');
console.log(images);
let timer = 0;

function timeout() {
	setTimeout(function() {
		timer = (timer + 1) % 4;
		images.innerHTML = `
		<div class="image"
		style="background-image: linear-gradient(rgba(0,0,0,0.8),rgba(0,0,0,0.9)), url(${imageUrls[timer % 4]})"></div>
		<div class="image"
		style="background-image: linear-gradient(rgba(0,0,0,0.8),rgba(0,0,0,0.9)), url(${imageUrls[(timer + 1) % 4]})"></div>
		<div class="image"
		style="background-image: linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0)), url(${imageUrls[(timer + 2) % 4]})"></div>
		<div class="image"
		style="background-image: linear-gradient(rgba(0,0,0,0.8),rgba(0,0,0,0.9)), url(${imageUrls[(timer + 3) % 4]})"></div>
		`
		timeout();
	}, 4000)
}

timeout();