let cart = [
    {
        img_src: 'img/wishlist/1.jpg',
        name: 'Vestibulum suscipit',
        price: 165.00,
        quantity: 1,
        total: 165.00
    },
    {
        img_src: 'img/wishlist/2.jpg',
        name: 'Vestibulum dictum magna',
        price: 50.00,
        quantity: 1,
        total: 50.00
    }
]

let updateSubTotal = () => {
    let subtotal = 0;
    cart.forEach((item, index) => {
        subtotal += item.total;
    })
    let subTotalElement = document.getElementsByClassName('amount');
    console.log(subTotalElement);
    for (let index = 0; index < subTotalElement.length; index++)
        subTotalElement[index].innerHTML = '$ ' + subtotal;
}

updateSubTotal()

let handleIncrement = (e, index) => {
    e.preventDefault();
    cart[index].quantity += 1;
    cart[index].total = cart[index].quantity * cart[index].price;
    let productQuantity = document.querySelector(`#product-quantity-${index}`);
    productQuantity.innerHTML = cart[index].quantity;
    let productTotal = document.querySelector(`#product-subtotal-${index}`);
    productTotal.innerHTML = '$ ' + cart[index].total;
    updateSubTotal()
}

let handleDecrement = (e, index) => {
    e.preventDefault();
    if (cart[index].quantity > 1) {
        cart[index].quantity -= 1;
        cart[index].total = cart[index].quantity * cart[index].price;
        let productQuantity = document.querySelector(`#product-quantity-${index}`);
        productQuantity.innerHTML = cart[index].quantity;
        let productTotal = document.querySelector(`#product-subtotal-${index}`);
        productTotal.innerHTML = '$ ' + cart[index].total;
        updateSubTotal()
    }
}

let removeJew = (e) => {
    // TODO: Fn to remove jew from local storage
    e.preventDefault();
}

let tbody = document.querySelector('#cart-body');
cart.forEach((item, index) => {
    let tr = `<tr>
<td class="product-thumbnail"><a href="#"><img src="${item.img_src}" alt="" /></a></td>
<td class="product-name"><a href="#">${item.name}</a></td>
<td class="product-price"><span class="amount">${item.price}</span></td>
<td class="product-quantity">
    <btn style="margin: auto 10px"><i class="fa fa-minus" onclick="handleDecrement(event, ${index})"></i></btn>
    <span class="amount" id="product-quantity-${index}">${item.quantity}</span>
    <btn style="margin: auto 10px"><i class="fa fa-plus" onclick="handleIncrement(event, ${index})"></i></btn>
</td>
<td class="product-subtotal" id="product-subtotal-${index}">$ ${item.total}</td>
<td class="product-remove"><a href="#" onclick="removeJew(event)"><i class="fa fa-times"></i></a></td>
</tr>`
    tbody.innerHTML += tr
})