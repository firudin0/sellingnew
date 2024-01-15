const product = document.getElementById("product");
const button = document.getElementById("btn");


async function get() {
  const res = await axios.get(
    `https://655c844f25b76d9884fd70a7.mockapi.io/products`
  );
  const data = res.data;
  db = data;
  db.map((item) => {
    const box = document.createElement("div");
    box.className = "boxs col-xl-3 col-lg-6 col-md-12 col-sm-12 col-12";
    box.innerHTML = `
        <div class="divz">
        <img src="${item.image}" alt="">
        <div class="divc">
            <p>${item.title}</p>
        </div>
        <p>$ ${item.price}</p>
    <button onclick="addToCart(${item.id})">Sebete Ekle</button>
    <button onclick="addToHeart(${item.id})"><i class="fa-solid fa-heart"></i></button>
            </div>
        `
    product.appendChild(box);
  });

  
}

function addToCart(index) {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push(db.find((item) => item.id == index));
  localStorage.setItem("cart", JSON.stringify(cart));
}

function addToHeart(index) {
  const heart = JSON.parse(localStorage.getItem("heart")) || [];
  heart.push(db.find((item) => item.id == index));
  localStorage.setItem("heart", JSON.stringify(heart));
}

get()