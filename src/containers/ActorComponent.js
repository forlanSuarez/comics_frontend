import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import image1 from "../assets/luke.jpg";
var url1;
const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);
  const renderList = products.map((product) => {
    const {name,title, image, price, category ,mass,birth_year,height,url} = product;
  if(url!=null)
  {
     var regex = /(\d+)/g;
     var id=url.match(regex); 
  }
    return (
      <div className="four wide column" key={id}>
        <Link to={`/actor/${id}`}>
          <div className="ui link cards">
            <div className="card">
             <div className="image">
                <img src={image1} alt={name} />
              </div>
              <div className="content">
                <div className="header">Name: {name}</div>
         
              </div>
            </div>
          </div>
        </Link>
      </div>
    );
  });
  return <>{renderList}</>;
};

export default ProductComponent;
