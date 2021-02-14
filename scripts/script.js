// Script.js

window.addEventListener('DOMContentLoaded', () => {
  let product_list = document.getElementById('product-list');
  let myStorage = window.localStorage;

  if (myStorage.getItem("product") == null) {
    fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    .then(data => console.log(data));
    myStorage.setItem('product', JSON.stringify(product));
  } else {
    product = JSON.parse(myStorage.getItem('product'));
  }

  product.forEach(element => {
    let product_item = document.createElement('product-item');
    product_list.appendChild(product_item);
  });
  
});