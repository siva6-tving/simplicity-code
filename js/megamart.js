let shopping_cart = [];
let shopping_cart_total = 0;

////////////////////////////////////////////////////////////////////
const calc_total = cart => {
	let	total = 0;
	for (var i = 0; i < cart.length; i++) {
		var item = cart[i];
		total += item.price;
	}
	return total;
}

const add_item = (cart, name, price) => {
	const new_cart = [...cart];
	new_cart.push({
		name,
		price
	});
	return new_cart;
}

const calc_tax = amount => amount * 0.10;

const gets_free_shipping = (total, item_price) => item_price + total >= 20;

////////////////////////////////////////////////////////////////////

const update_shipping_icons = () => {
	const buy_buttons = get_buy_buttons_dom();
	for(var i = 0; i < buy_buttons.length; i++) {
		const button = buy_buttons[i];
		const item = button.item;
		if(gets_free_shipping(shopping_cart_total, item.price)) {
			button.show_free_shipping_icon();
		}else {
			button.hide_free_shipping_icon();
		}
	}
};

const update_tax_dom = () => {
	set_tax_dom(calc_tax(shopping_cart_total));
};

const add_item_to_cart = (name, price) => {
	shopping_cart = add_item(shopping_cart, name, price);
	calc_cart_total();
};

const calc_cart_total = () => {
	shopping_cart_total = calc_total(shopping_cart);
	set_cart_total_dom();
	update_shipping_icons();
	update_tax_dom();
};