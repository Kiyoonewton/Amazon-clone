import React from "react";
import "./Home.css";
import Background from "./images/Amazon2.jpg";
import Product from "./Product";
import image6 from "./images/Amazon8.jpg";
import image5 from "./images/Amazon7.jpg";
import image4 from "./images/Amazon6.jpg";
import image3 from "./images/Amazon5.jpg";
import image2 from "./images/Amazon4.jpg";
import image1 from "./images/Amazon3.jpg";
function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img className="home__image" src={Background} alt="" />

        <div className="home__row">
          <Product
            id="12345"
            title="The lean startup: How Constant Innovation Creates Radically Successful Business Paperback"
            price={29.99}
            image={image1}
            rating={5}
          />
          <Product
            id="12346"
            title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer witj K-beater, Dough Hook and Whiskm 5 Litre Glass Bowl"
            price={239.99}
            image={image2}
            rating={4}
          />
        </div>

        <div className="home__row">
          <Product
            id="12347"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
            price={199.99}
            image={image3}
            rating={3}
          />
          <Product
            id="12348"
            title="Amazon Ech o (3rd genration) | 
            Smart speaker with Alexa, 
            Charcoal Fabric"
            price={98.99}
            image={image4}
            rating={5}
          />
          <Product
            id="12349"
            title="New Apple ipad pro (12.9-inch, Wi-fi,128GB) - Silver (4th Generation)"
            price={598.99}
            image={image5}
            rating={4}
          />
        </div>

        <div className="home__row">
          <Product
            id="12340"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor -Super Ultra Wide Dual WQHd 5120 x 1440"
            price={29.99}
            image={image6}
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
