const plus = document.querySelector('.plus'),
    minus = document.querySelector('.minus'),
    num = document.querySelector('.num')

let a = 1
plus.addEventListener('click', () => {
    a++
    num.innerHTML = a
})
minus.addEventListener('click', () => {
    if (a > 1) {
        a--
        num.innerHTML = a
    }
})

window.onload = function () {
    const urlParams = new URLSearchParams(window.location.search)
    const myParam = urlParams.get('productId')
    console.log(myParam)

    var promise = axios({
        url: 'https://shop.cyberlearn.vn/api/Product/getbyid?id=' + myParam,
        method: 'GET',
    })
    promise.then(function (result) {
        console.log(result.data)
        renderDeatailProduct(result.data);
    })

    promise.catch(function (err) {
        console.log(err)
    })

    getDataProduct();
}

function renderDeatailProduct(product) {
    var pro = product.content;
    var size = '';
    for(var i=0; i<pro.size.length;i++)
    {
        size+=`
            <button>${pro.size[i]}</button>
        `;
    }
    var innerHtml = `
    <div class="col-sm-6 detail-left">
        <img src="${pro.image}" alt="">
    </div>
    <div class="col-sm-6 detail-right">
        <h2>${pro.name}</h2>
        <p>${pro.description}</p>
        <h6>Available size</h6>
        ${size}
        <h5>$${pro.price}</h5>
        <button class="minus adjust">-</button>
        <span class="num">1</span>
        <button class="plus adjust">+</button>
        <button class="add">Add to cart</button>
    </div>
        `

    document.querySelector('#renderDetailProduct').innerHTML = innerHtml
}


function getDataProduct() {
    var promise = axios({
        url:'https://shop.cyberlearn.vn/api/Product',
        method:'GET',
    })

    //scuess
    promise.then(function (result) {
        console.log('result', result.data);
        renderProduct(result.data);
    });

    //fail
    promise.catch(function (err) {
        console.log(err);
    });
}


function renderProduct(arrProduct) {
    var innerHtml = '';
    //console.log(arrProduct);
    for(var i = 0; i < arrProduct.content.length; i++){
        var product = arrProduct.content[i];
        innerHtml += `
        <div class="col-lg-4 col-md-6 col-sm-6 card_product">
            <div class="card">
                <img src="${product.image}" class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">${product.name}</h5>
                    <p class="card-text">${product.shortDescription}</p>
                    <div class="buy d-flex">
                        <button onclick="location.href='../detail.html?productId=${product.id}'">Buy now</button>
                        <span>${product.price}</span>
                    </div>
                </div>
            </div>
        </div>
        `;
    }
    document.querySelector("#getProduct").innerHTML=innerHtml;
}
