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
		<button onclick="add_item_to_cart('${item.name}', ${item.price})" class="cart-btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
			장바구니
		</button>
	`;
	return itemDom;
};

const makeBadge = () => {
	const badge = document.createElement('div');
	badge.classList.add('inline-flex', 'items-center', 'justify-center', 'w-8', 'h-8', 'text-xs', 'text-yellow', 'bg-red-500', 'border-2', 'border-white', 'rounded-full', '-top-2', '-end-2', 'dark:border-gray-900');
	badge.innerText = 'free';
	return badge;
};

const set_free = (button, show) => {
	button.innerText = '장바구니';
	if(show) {
		button.appendChild(makeBadge());
	}
};

/////////////////////////////////////////////////////////////////////////////////
const get_buy_buttons_dom = () => {
	const buttons = document.querySelectorAll('.cart-btn');
	return _goods.map((item, idx) => {
		return {
			item,
			show_free_shipping_icon: () => set_free(buttons[idx], true),
			hide_free_shipping_icon: () => set_free(buttons[idx], false)
		};
	});
};

const set_cart_total_dom = () => {
	document.querySelector('#cart-total').innerText = shopping_cart_total.toFixed(2);
};

const set_tax_dom = tax => {
	document.querySelector('#cart-tax').innerText = tax.toFixed(2);
};
/////////////////////////////////////////////////////////////////////////////////

const init = () => {
	const list = document.querySelector('#list');
	_goods.forEach(item => {
		list.appendChild(makeItem(item));
	});
};

document.addEventListener('DOMContentLoaded', function() {
	init();
});