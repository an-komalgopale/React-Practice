function Product(props){
  console.log(props.children)
    return (
      <section style={{ backgroundColor: 'yellow' }} className="product-details">{props.children}</section>
    );
}
export default Product;