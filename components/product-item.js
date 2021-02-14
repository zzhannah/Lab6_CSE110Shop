// product-item.js

class ProductItem extends HTMLElement {
  constructor() {
    super()

    let shadow = elementRef.attachShadow({mode: 'open'});
    let product = document.createElement('li');
    let image = document.createElement('img');
    let title = document.createElement('p');
    let price = document.createElement('p');
    let button = document.createElement('button');
    let style = document.createElement('style');

    product.setAttribute('class','product');
    image.setAttribute('width','200');
    image.src = src;
    image.alt = alt;
    title.setAttribute('class','title');
    title.textContent = title;
    price.setAttribute('class','price');
    price.textContent = price;
    
    button.textContent = 'Add to Cart';
    button.onclick = function() {
      let cart_count = document.getElementById('cart-count');
      if (button.textContent == 'Add to Cart'){
        alert('Added to cart!');
        cart_count.textContent = Number(cart_count)+1;
        button.textContent = 'Remove from Cart';
      } else {
        alert('Removed from cart!');
        cart_count.textContent = Number(cart_count)-1;
        button.textContent = 'Add to Cart';
      }

    }

    style.textContent =`
    .price {
      color: green;
      font-size: 1.8em;
      font-weight: bold;
      margin: 0;
    }
    
    .product {
      align-items: center;
      background-color: white;
      border-radius: 5px;
      display: grid;
      grid-template-areas: 
      'image'
      'title'
      'price'
      'add';
      grid-template-rows: 67% 11% 11% 11%;
      height: 450px;
      filter: drop-shadow(0px 0px 6px rgb(0,0,0,0.2));
      margin: 0 30px 30px 0;
      padding: 10px 20px;
      width: 200px;
    }
    
    .product > button {
      background-color: rgb(255, 208, 0);
      border: none;
      border-radius: 5px;
      color: black;
      justify-self: center;
      max-height: 35px;
      padding: 8px 20px;
      transition: 0.1s ease all;
    }
    
    .product > button:hover {
      background-color: rgb(255, 166, 0);
      cursor: pointer;
      transition: 0.1s ease all;
    }
    
    .product > img {
      align-self: center;
      justify-self: center;
      width: 100%;
    }
    
    .title {
      font-size: 1.1em;
      margin: 0;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    
    .title:hover {
      font-size: 1.1em;
      margin: 0;
      white-space: wrap;
      overflow: auto;
      text-overflow: unset;
    }`

    product.appendChild(image);
    product.appendChild(title);
    product.appendChild(price);
    product.appendChild(button);
    shadow.appendChild(product);
    shadow.appendChild(style);
  }
}

customElements.define('product-item', ProductItem);