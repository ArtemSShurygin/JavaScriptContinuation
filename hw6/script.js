const menu = document.querySelector(".menu");
const burger = document.querySelector(".burger");
const menuClose = document.querySelector(".menu_close");

function toggleMenu() {
	menu.classList.toggle("menu-hidden");
}

burger.addEventListener("click", toggleMenu);
menuClose.addEventListener("click", toggleMenu);


const productsCardList = document.querySelector(".card_list2");
let parseDataProductsCardList = JSON.parse(dataProductsCardList);

parseDataProductsCardList.forEach((element) => {
	productsCardList.insertAdjacentHTML(
		"beforeend",
		`
    <div class="card_list2-card">
					<div class="card_list2-card-add">
						<button>
							<img src="./img/nav5.png" alt="icon" />
							<span>Add to Cart</span>
						</button>
					</div>
					<img src="${element.img}" alt="${element.id}" />
					<h3>${element.name}</h3>
					<p class="card_list2-card_about">${element.description}</p>
					<p class="card_list2-card_price">${element.price}</p>
				</div>`
	);
});
