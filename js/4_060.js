const shopping_cart = [];
let shopping_cart_total = 0;

const add_item_to_cart = (name, price) => {
	shopping_cart.push({
		name: name,
		price: price
	});
	calc_cart_total();
};

const update_shipping_icons = () => {
	const buy_buttons = get_buy_buttons_dom();
	for(var i = 0; i < buy_buttons.length; i++) {
		const button = buy_buttons[i];
		const item = button.item;
		if(item.price + shopping_cart_total >= 20) {
			button.show_free_shipping_icon();
		}else {
			button.hide_free_shipping_icon();
		}
	}
};

const calc_cart_total = () => {
	shopping_cart_total = 0;
	for(var i = 0; i < shopping_cart.length; i++) {
		var item = shopping_cart[i];
		shopping_cart_total += item.price;
	}
	set_cart_total_dom();
	update_shipping_icons();
};