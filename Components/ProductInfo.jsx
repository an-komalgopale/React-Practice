function ProductInfo(){
    const product = {
        name : "laptop",
        price : 1200,
        availability : "in stock",
    };
    return (
        <div>
            <h3>Product Info</h3>
            <p>name : {product.name}</p>
            <p>price : Rs. {product.price}</p>
            <p>avaialability : {product.availability}</p>
        </div>
    );
}

export default ProductInfo;