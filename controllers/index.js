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

window.onload = function () {
    getDataProduct();
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
