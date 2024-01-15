const product = document.getElementById("product");
const button = document.getElementById("btn");
const input = document.getElementById("inp");


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

        <button onclick="deleteFromForm(${item.id})">Delete</button>

            </div>
        `
    product.appendChild(box);
  });

}

get()

function deleteFromForm (id) {
  axios.delete(`https://655c844f25b76d9884fd70a7.mockapi.io/products/${id}`)
  setTimeout(() => {
    get()
  }, 1000);
}

function getSearch() {
    product.innerHTML = "";
    axios
      .get("https://655c844f25b76d9884fd70a7.mockapi.io/products")
      .then((res) => {
        db = res.data;
        const filterData = db.filter((item) =>
          item.title.toLowerCase().startsWith(input.value.toLowerCase())
        );
        console.log(filterData);
        filterData.map((item) => {
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
                 
              `;
          product.appendChild(box);
        });
      });
  }
  
  button.addEventListener("click", getSearch);
  
  get();
  
  
  
  // sort js
  
  const max = document.getElementById('max')
  const min = document.getElementById('min')
  
  function maxFunc(){
    product.innerHTML = ''
    axios.get('https://655c844f25b76d9884fd70a7.mockapi.io/products')
    .then(res =>{
      db = res.data
     let sortData = db.sort((a, b) => (a.title.localeCompare(b.title)))
     console.log(sortData);
     sortData.map(item =>{
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
          `;
      product.appendChild(box);
     })
    })
  }
  
  max.addEventListener('click', maxFunc)
  
  
  
  function minFunc(){
    product.innerHTML = ''
    axios.get('https://655c844f25b76d9884fd70a7.mockapi.io/products')
    .then(res =>{
      db = res.data
     let sortData = db.sort((a, b) => (b.title.localeCompare(a.title)))
     console.log(sortData);
     sortData.map(item =>{
      const box = document.createElement("div");
      box.className = "boxs";
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
          `;
      product.appendChild(box);
     })
    })
  }
  
  min.addEventListener('click', minFunc)
  


  
//Form


const nameInp = document.getElementById('exampleInputName')
const surnameInp = document.getElementById('exampleInputSurname')
const emailInp = document.getElementById('exampleInputEmail1')
const passInp = document.getElementById('exampleInputPassword1')
const form = document.getElementById('form')

function getdorm(e){
    e.preventDefault()

    axios.post('https://655c84d425b76d9884fd7251.mockapi.io/form',{
        name : nameInp.value,
        surname : surnameInp.value,
        password : passInp.value,
        email : emailInp.value
    })
    .then(res =>{
        console.log(res.data);
        form.reset();
    })
}

form.addEventListener('submit', getdorm)
