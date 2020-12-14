// Category Products

// Getting our products

const getProducts = async () => {
    try {
        const results = await fetch('/data/products.json')
        const data = await results.json();
        const products = data.products;
        return products;
    }catch(err) {
        console.log(err);
    }
};

// load Products
window.addEventListener('DOMContentLoaded', async () => {
    const products =await getProducts();
    displayProductsItems(products);
});

const categoryCenter = document.querySelector('.category__center');


// Display Products 
const displayProductsItems = items => {
    let displayProduct = items.map(product => 
        `<div class="product category__product">
        <div class="product__header">
            <img src="${product.image}" alt="">
        </div>
        <div class="product__footer">
            <h3>${product.title}</h3>
            <div class="rating">
                <svg>
                    <use xlink:href="./images/sprite.svg#icon-star-full"></use>
                </svg>
                <svg>
                    <use xlink:href="./images/sprite.svg#icon-star-full"></use>
                </svg>
                <svg>
                    <use xlink:href="./images/sprite.svg#icon-star-full"></use>
                </svg>
                <svg>
                    <use xlink:href="./images/sprite.svg#icon-star-full"></use>
                </svg>
                <svg>
                    <use xlink:href="./images/sprite.svg#icon-star-full"></use>
                </svg>
            </div>
            <div class="product__price">
                <h4>&#8358;${product.price}</h4>
                <a href="#"><button type="button" class="product__btn">
                    Add To Cart
                </button></a>
            </div>
            <ul>
                
                    <a href="#">
                        <svg>
                            <use xlink:href="./images/sprite.svg#icon-eye"></use>
                        </svg>
                    </a>
                    <a href="#">
                        <svg>
                            <use xlink:href="./images/sprite.svg#icon-heart-o"></use>
                        </svg>
                    </a>
                    <a href="#">
                        <svg>
                            <use xlink:href="./images/sprite.svg#icon-loop2"></use>
                        </svg>
                    </a>
                
            </ul>
        </div>
    </div>`
        );


    displayProduct = displayProduct.join('')
        if(categoryCenter){
            categoryCenter.innerHTML = displayProduct;
        }
};





