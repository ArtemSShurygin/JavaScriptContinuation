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
    <div class="card_list2-card" id="${element.id}">
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

//new_start
const findObjElById = (object, id) => {
	return object.find((product) => product.id === id);
};

const productCards = document.querySelectorAll(".card_list2-card");
const cart = document.querySelector(".cart");
const cardBox = document.querySelector(".card-box");
let cardItemsAded = [];

productCards.forEach((element) => {
	const productCardsListBtn = element.querySelector("button");
	productCardsListBtn.addEventListener("click", function (e) {
		const findedObj = findObjElById(parseDataProductsCardList, element.id);

		if (cardItemsAded.length === 0) {
			console.log("пустой");
			cart.classList.remove("cart__hidden");
		}

		if (cardItemsAded.includes(`${element.id}`)) {
			console.log(`${element.id} дубль`);
			const quantity = cardBox.querySelector(`#${element.id}Add .card-box__card__about__parameters__quantity__num`);
			quantity.value = `${+quantity.value + 1}`;
		} else {
			cardItemsAded.push(`${element.id}`);
			console.log(`Добавленные карточки:`, cardItemsAded);
			cardBox.insertAdjacentHTML(
				"beforeend",
				`
	<div class="card-box__card" id="${findedObj.id}Add">
						<button class="card-box__card__close">
							<svg width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path
									d="m11.245 9 6.285-6.285a1.59 1.59 0 0 0-2.245-2.25L9 6.752 2.715.466a1.59 1.59 0 0 0-2.25 2.25L6.752 9 .466 15.285a1.59 1.59 0 0 0 2.25 2.25L9 11.248l6.285 6.285a1.591 1.591 0 0 0 2.25-2.25L11.244 9Z"
									fill="#575757"
								/>
							</svg>
						</button>
						<img src="${findedObj.img}" />
						<div class="card-box__card__about">
							<h3>${findedObj.name}</h3>
							<div class="card-box__card__about__parameters">
								<ul>
									Price:
									<span class="card-box__card__about__parameters__price">${findedObj.price}</span>
								</ul>
								<ul>
									Color: ${findedObj.color}
								</ul>
								<ul>
									Size: ${findedObj.size}
								</ul>
								<ul class="card-box__card__about__parameters__quantity">
									Quantity:
									<input
										class="card-box__card__about__parameters__quantity__num"
										type="number"
										value="1"
									/>
								</ul>
							</div>
						</div>
					</div>`
			);
			const btnCloseCart = cardBox.querySelector(`#${element.id}Add`).querySelector('.card-box__card__close');
			btnCloseCart.addEventListener("click", function (e) {
				btnCloseCart.closest("div").remove();
				cardItemsAded.indexOf(element.id) !== -1 && cardItemsAded.splice(cardItemsAded.indexOf(element.id), 1);
				console.log(`Карточки после удаления: `, cardItemsAded);
				if (cardItemsAded.length === 0) {
					console.log("пустой");
					cart.classList.add("cart__hidden");
				}
			});
		}
	});
});
