const shopping_cart = [];
let shopping_cart_total = 0;

const add_item_to_cart = (name, price) => {
	shopping_cart.push({
		name: name,
		price: price
	});
	calc_cart_total();
};

const calc_cart_total = () => {
	shopping_cart_total = 0;
	for(var i = 0; i < shopping_cart.length; i++) {
		var item = shopping_cart[i];
		shopping_cart_total += item.price;
	}
	set_cart_total_dom();
};