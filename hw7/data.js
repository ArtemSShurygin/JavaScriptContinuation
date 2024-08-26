let dataProductsCardList = `
[
  {
      "id": "productCard1",
      "name": "ELLERY X M'O CAPSULE",
      "description": "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
      "price": "$50.00",
      "color": "Red",
      "size": "Xl",
      "img": "./img/card2.1.png"
  },
  {
      "id": "productCard2",
      "name": "ELLERY X M'O CAPSULE",
      "description": "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
      "price": "$51.00",
      "color": "Red",
      "size": "Xl",
      "img": "./img/card2.2.png"
  },
    {
      "id": "productCard3",
      "name": "ELLERY X M'O CAPSULE",
      "description": "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
      "price": "$52.00",
      "color": "Red",
      "size": "Xl",
      "img": "./img/card2.3.png"
  },
    {
      "id": "productCard4",
      "name": "ELLERY X M'O CAPSULE",
      "description": "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
      "price": "$53.00",
      "color": "Red",
      "size": "Xl",
      "img": "./img/card2.4.png"
  },
    {
      "id": "productCard5",
      "name": "ELLERY X M'O CAPSULE",
      "description": "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
      "price": "$54.00",
      "color": "Red",
      "size": "Xl",
      "img": "./img/card2.5.png"
  },
    {
      "id": "productCard6",
      "name": "ELLERY X M'O CAPSULE",
      "description": "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
      "price": "$55.00",
      "color": "Red",
      "size": "Xl",
      "img": "./img/card2.6.png"
  }
]`;


// <!-- 11111111111111111111111111111111111 -->
// 		<section class="container">
// 			<section class="main__l-side">
// 			<div class="main__l-side__card-box card-box">
				
// 			</div>
// 		</section>
// 	</section>
// <!-- 111111111111111111111111111111 -->

// /* hw7 */
// .main__l-side {
//   width: 652px;
// }
// .main__l-side__card-box {
//   display: flex;
//   flex-direction: column;
//   gap: 40px;
// }
// .main__l-side__card-box__card {
//   position: relative;
//   display: flex;
//   border: solid 1px #eaeaea;
//   box-shadow: 17px 19px 24px 0 rgba(0, 0, 0, 0.13);
// }
// .main__l-side__card-box__card__close {
//   position: absolute;
//   top: 28px;
//   right: 22px;
//   background: inherit;
// }
// .main__l-side__card-box__card__close:hover path {
//   fill: #F16D7A;
// }
// .main__l-side__card-box__card img {
//   width: 262px;
//   height: 306px;
// }
// .main__l-side__card-box__card__about {
//   padding: 22px 97px 22px 31px;
// }
// .main__l-side__card-box__card__about h3 {
//   font-weight: 400;
//   font-size: 24px;
//   color: #222;
// }
// .main__l-side__card-box__card__about__parameters {
//   display: flex;
//   flex-direction: column;
//   gap: 6px;
//   font-weight: 400;
//   font-size: 22px;
//   color: #575757;
//   padding-top: 42px;
// }
// .main__l-side__card-box__card__about__parameters__price {
//   color: #F16D7A;
// }
// .main__l-side__card-box__card__about__parameters__quantity {
//   display: flex;
//   align-items: center;
//   gap: 24px;
// }
// .main__l-side__card-box__card__about__parameters__quantity__num {
//   width: 44px;
//   height: 25px;
//   text-align: center;
//   font-size: 18px;
//   color: #656565;
//   border: solid 1px #eaeaea;
// }
// /* hw7 */

// const chld = document.querySelectorAll(".card_list2-card");
// const cardBox = document.querySelector(".card-box");
// let cardItemsAded = [];

// chld.forEach((element) => {
// 	const productsCardListBtn = element.querySelector("button");
// 	productsCardListBtn.addEventListener("click", function (e) {
// 		const findedObj = findObjElById(parseDataProductsCardList, element.id);
// 		// console.log(findedObj);

// 		// if (cardBox.querySelector(`#${element.id}Add`)) {
// 		if (cardItemsAded.includes(`${element.id}`)) {
// 			console.log(`${element.id} дубль`);
// 			const quantity = cardBox.querySelector(`#${element.id}Add .main__l-side__card-box__card__about__parameters__quantity__num`)
// 			quantity.value = `${+quantity.value + 1}`;
// 		} else {
// 			cardItemsAded.push(`${element.id}`)
// 			cardBox.insertAdjacentHTML(
// 				"beforeend",
// 				`
// 	<div class="main__l-side__card-box__card" id="${findedObj.id}Add">
// 						<button class="main__l-side__card-box__card__close">
// 							<svg width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg">
// 								<path
// 									d="m11.245 9 6.285-6.285a1.59 1.59 0 0 0-2.245-2.25L9 6.752 2.715.466a1.59 1.59 0 0 0-2.25 2.25L6.752 9 .466 15.285a1.59 1.59 0 0 0 2.25 2.25L9 11.248l6.285 6.285a1.591 1.591 0 0 0 2.25-2.25L11.244 9Z"
// 									fill="#575757"
// 								/>
// 							</svg>
// 						</button>
// 						<img src="${findedObj.img}" />
// 						<div class="main__l-side__card-box__card__about">
// 							<h3>${findedObj.name}</h3>
// 							<div class="main__l-side__card-box__card__about__parameters">
// 								<ul>
// 									Price:
// 									<span class="main__l-side__card-box__card__about__parameters__price">${findedObj.price}</span>
// 								</ul>
// 								<ul>
// 									Color: Red
// 								</ul>
// 								<ul>
// 									Size: Xl
// 								</ul>
// 								<ul class="main__l-side__card-box__card__about__parameters__quantity">
// 									Quantity:
// 									<input
// 										class="main__l-side__card-box__card__about__parameters__quantity__num"
// 										type="number"
// 										value="1"
// 									/>
// 								</ul>
// 							</div>
// 						</div>
// 					</div>`
// 			);
// 		}
// 		console.log(`Добавленные карточки:`, cardItemsAded);
		
// 	});
// });
