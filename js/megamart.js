let shopping_cart = [];

////////////////////////////////////////////////////////////////////
const add_element_last = (arr, element) => [...arr, element];

const make_cart_item = (name, price) => ({name, price});

const calc_total = cart => {
	let	total = 0;
	for (var i = 0; i < cart.length; i++) {
		var item = cart[i];
		total += item.price;
	}
	return total;
}

const add_item = (cart, item) => add_element_last(cart, item);

const remove_item_by_name = (cart, name) => {
	const new_cart = [...cart];
	let idx = null;
	for(let i = 0; i < new_cart.length; i++) {
		if(new_cart[i].name === name) idx = i;
	}
	if(idx !== null) new_cart.splice(idx, 1);
	return new_cart;
};

const calc_tax = amount => amount * 0.10;

const gets_free_shipping = cart => calc_total(cart) >= 20;

const gets_free_shipping_with_item = (cart, item) => gets_free_shipping(add_item(cart, item));

////////////////////////////////////////////////////////////////////
const set_free_shipping_icon = (button, isShown) => (isShown)?button.show_free_shipping_icon():button.hide_free_shipping_icon();

const update_shipping_icons = cart => {
	const buy_buttons = get_buy_buttons_dom();
	for(var i = 0; i < buy_buttons.length; i++) {
		const button = buy_buttons[i];
		set_free_shipping_icon(button, gets_free_shipping_with_item(cart, button.item));
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

const delete_handler = name => {
	shopping_cart = remove_item_by_name(shopping_cart, name);
	const total = calc_total(shopping_cart);
	set_cart_total_dom(total);
	update_shipping_icons(shopping_cart);
	update_tax_dom(total);
};