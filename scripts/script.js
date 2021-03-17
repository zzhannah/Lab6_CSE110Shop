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


document.getElementById('log_btn').addEventListener('click', log_f)
document.getElementById('err_btn').addEventListener('click', err_f)
document.getElementById('tbl_btn').addEventListener('click', tbl_f)
document.getElementById('dir_btn').addEventListener('click', dir_f)
document.getElementById('xml_btn').addEventListener('click', xml_f)
document.getElementById('grp_btn').addEventListener('click', grp_f)
document.getElementById('tim_btn').addEventListener('click', tim_f)
document.getElementById('trc_btn').addEventListener('click', trc_f)

function log_f () {
  console.log('log');
}

function err_f () {
  console.log('error');
}

function tbl_f () {
  console.table([
    {
      first: 'René',
      last: 'Magritte',
    },
    {
      first: 'Chaim',
      last: 'Soutine',
      birthday: '18930113',
    },
    {
      first: 'Henri',
      last: 'Matisse',
    }
  ]);
}

function dir_f () {
  console.dir(document.head);
}

function xml_f () {
  console.dirxml(document);
}

function grp_f () {
  const label = 'Adolescent Irradiated Espionage Tortoises';
  console.group(label);
  console.info('Leo');
  console.info('Mike');
  console.info('Don');
  console.info('Raph');
  console.groupEnd(label);
}

function tim_f () {
  console.time();
  for (var i = 0; i < 100000; i++) {
    let square = i ** 2;
  }
  console.timeEnd();
}

function trc_f () {
  const first = () => { second(); };
  const second = () => { third(); };
  const third = () => { fourth(); };
  const fourth = () => { console.trace(); };
  first();
}

try {
  module.exports = {
    log_f: log_f,
    err_f: err_f,
    tbl_f: tbl_f,
    dir_f: dir_f,
    xml_f: xml_f,
    grp_f: grp_f,
    tim_f: tim_f,
    trc_f: trc_f
  }
} catch (e) {
  alert('Catch is ignored, because there are no errors');
}