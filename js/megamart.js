let shopping_cart = [];

////////////////////////////////////////////////////////////////////
const make_cart_item = (name, price) => ({name, price});

const calc_total = cart => {
	let	total = 0;
	for (var i = 0; i < cart.length; i++) {
		var item = cart[i];
		total += item.price;
	}
	return total;
}

const add_item = (cart, item) => [...cart, item];

const calc_tax = amount => amount * 0.10;

const gets_free_shipping = cart => calc_total(cart) >= 20;

////////////////////////////////////////////////////////////////////

const update_shipping_icons = cart => {
	const buy_buttons = get_buy_buttons_dom();
	for(var i = 0; i < buy_buttons.length; i++) {
		const button = buy_buttons[i];
		const item = button.item;
		const new_cart = add_item(cart, make_cart_item(item.name, item.price));
		if(gets_free_shipping(new_cart)) {
			button.show_free_shipping_icon();
		}else {
			button.hide_free_shipping_icon();
		}
	}
};

const update_tax_dom = total => {
	set_tax_dom(calc_tax(total));
};

const add_item_to_cart = (name, price) => {
	shopping_cart = add_item(shopping_cart, make_cart_item(name, price));
	const total = calc_total(shopping_cart);
	set_cart_total_dom(total);
	update_shipping_icons(shopping_cart);
	update_tax_dom(total);
};