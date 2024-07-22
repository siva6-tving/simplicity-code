const _goods = [
	{
		img: 'https://image.tving.com/ntgs/contents/CTC/caim/CAIM2100/ko/20231221/0455/M000286841.jpg/dims/resize/F_webp,400',
		name: '헝거게임',
		price: 20
	},
	{
		img: 'https://image.tving.com/ntgs/contents/CTC/caip/CAIP0900/ko/20231218/1103/P001310647.jpg/dims/resize/F_webp,400',
		name: '성균관 스캔들',
		price: 37
	},
	{
		img: 'https://image.tving.com/ntgs/contents/CTC/caip/CAIP0900/ko/20240423/0600/P001755909.jpg/dims/resize/F_webp,400',
		name: '귀멸의 칼날',
		price: 15
	},
	{
		img: 'https://image.tving.com/ntgs/contents/CTC/caim/CAIM1150/ko/20240513/0232/M000369966.jpg/dims/resize/F_webp,400',
		name: '라라랜드',
		price: 19
	}
];

const makeItem = item => {
	const itemDom = document.createElement('div');
	itemDom.classList.add('flex', 'flex-col', 'w-1/4', 'mx-4');
	itemDom.innerHTML = `
		<img class="w-full" src="${item.img}" alt="${item.name}">
		<div class="text-blue-500">${item.name}</div>
		<div class="text-red-400">${item.price}</div>
		<button onclick="add_item_to_cart('${item.name}', ${item.price})" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">장바구니</button>
	`;
	return itemDom;
};

/////////////////////////////////////////////////////////////////////////////////
const set_cart_total_dom = () => {
	document.querySelector('#cart-total').innerText = shopping_cart_total;
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