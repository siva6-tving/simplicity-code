const _goods = [
	{
		img: 'https://image.tving.com/ntgs/contents/CTC/caim/CAIM2100/ko/20231221/0455/M000286841.jpg/dims/resize/F_webp,400',
		name: '헝거게임',
		price: 8
	},
	{
		img: 'https://image.tving.com/ntgs/contents/CTC/caip/CAIP0900/ko/20231218/1103/P001310647.jpg/dims/resize/F_webp,400',
		name: '성균관 스캔들',
		price: 12
	},
	{
		img: 'https://image.tving.com/ntgs/contents/CTC/caip/CAIP0900/ko/20240423/0600/P001755909.jpg/dims/resize/F_webp,400',
		name: '귀멸의 칼날',
		price: 5
	},
	{
		img: 'https://image.tving.com/ntgs/contents/CTC/caim/CAIM1150/ko/20240513/0232/M000369966.jpg/dims/resize/F_webp,400',
		name: '라라랜드',
		price: 4
	}
];

const makeItem = item => {
	const itemDom = document.createElement('div');
	itemDom.classList.add('flex', 'flex-col', 'w-1/4', 'mx-4');
	itemDom.innerHTML = `
		<img class="w-full" src="${item.img}" alt="${item.name}">
		<div class="text-blue-500">${item.name}</div>
		<div class="text-red-400">$${item.price}</div>
		<button onclick="add_item_to_cart('${item.name}', ${item.price})" class="cart-btn btn btn-primary">
			장바구니
		</button>
	`;
	return itemDom;
};

const makeBadge = () => {
	const badge = document.createElement('div');
	badge.classList.add('badge', 'badge-secondary');
	badge.innerText = 'free';
	return badge;
};

const setFreeBadge = (button, show) => {
	button.innerText = '장바구니';
	if(show) {
		button.appendChild(makeBadge());
	}
};

const makeCartItem = item => {
	const itemDom = document.createElement('div');
	itemDom.classList.add('card', 'bg-neutral');
	itemDom.innerHTML = `
		<div class="card-body">
			<h3 class="card-title">${item.name}</h3>
			<p class="text-red-400">$${item.price}</p>
			<div class="card-actions justify-end">
				<button onclick="delete_handler('${item.name}')" class="btn btn-primary btn-sm">삭제</button>
			</div>
		</div>
	`;
	return itemDom;
};

/////////////////////////////////////////////////////////////////////////////////
const get_buy_buttons_dom = () => {
	const buttons = document.querySelectorAll('.cart-btn');
	return _goods.map((item, idx) => {
		return {
			item,
			show_free_shipping_icon: () => setFreeBadge(buttons[idx], true),
			hide_free_shipping_icon: () => setFreeBadge(buttons[idx], false)
		};
	});
};

const set_cart_total_dom = total => {
	document.querySelector('#cart-total').innerText = `$${total.toFixed(2)}`;
};

const set_tax_dom = tax => {
	document.querySelector('#cart-tax').innerText = `$${tax.toFixed(2)}`;
};

/////////////////////////////////////////////////////////////////////////////////

const init = () => {
	const list = document.querySelector('#list');
	_goods.forEach(item => {
		list.appendChild(makeItem(item));
	});

	let shopping_cart_length = 0;
	const cart = document.querySelector('#cart');
	setInterval(() => {
		if(!shopping_cart) return;
		if(shopping_cart_length !== shopping_cart.length) {
			cart.innerHTML = '';
			shopping_cart.forEach(item => {
				cart.appendChild(makeCartItem(item));
			});
			shopping_cart_length = shopping_cart.length
		}
	}, 1_000);
};

document.addEventListener('DOMContentLoaded', function() {
	init();
});