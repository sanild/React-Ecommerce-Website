

function ProductCard(props) {
    return (
      <div className="ProductCard">
        
        <br />
        <div className="product-image-div">
          {/* <img alt="card-img" src={props.image} className="product-img text-center img-fluid" />      */}
          <img alt="card-img" src={props.image} className="product-img" />        
   
        </div>

        <div className="text-center">
          <h3 className="product-key">{props.productId}</h3>
        </div>

        <div className="text-center">
          <h3 className="product-title">{props.title}</h3>
        </div>

        <div className="p-3">
          <p className="product-price"> {props.price}</p>
        </div>

      </div>
    );
  }
  export default ProductCard;
  