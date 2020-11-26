import React from "react";
import Product from "./Product";
import Carousel from "./Carousel";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <Carousel />

      <div className="home__row">
        <Product
          id="1"
          title="New Era Washington Nationals Black 2019 World Series Champions Locker Room Knit Hat"
          price={19.95}
          rating={4}
          image="https://m.media-amazon.com/images/I/71SVBe1f+mL._AC_UL640_FMwebp_QL65_.jpg"
        />

        <Product
          id="2"
          title="Rawlings Heart of The Hide Baseball Glove Series"
          price={249.88}
          rating={4}
          image="https://m.media-amazon.com/images/I/81jmFCYnkKL._AC_UL640_FMwebp_QL65_.jpg"
        />
      </div>

      <div className="home__row">
        <Product
          id="3"
          title="Gibson Firebird 1997"
          price={2300.19}
          rating={4}
          image="https://images.reverb.com/image/upload/s--H_z8bT5Z--/f_auto,t_supersize/v1570209321/jd1hda2rvfjgsaltyoc8.png"
        />

        <Product
          id="4"
          title="DHD Mini Twin Surfboard"
          price={850.19}
          rating={5}
          image="https://cdn.shopify.com/s/files/1/0242/3305/0167/products/DHD-Mini-Twin-Mandala-Sky-PU_shopify_1080x.png?v=1590471264"
        />

        <Product
          id="5"
          title="Martin 000-28 Guitar"
          price={3899.09}
          rating={5}
          image="https://www.martinguitar.com/media/10449/00028_f.jpg"
        />
      </div>

      <div className="home__row">
        <Product
          id="6"
          title="The Big Lebowski The Dude Pajama Pants (Adult X-Large)"
          price={35.99}
          rating={4}
          image="https://m.media-amazon.com/images/I/61QEuxafNAL._AC_UY436_FMwebp_QL65_.jpg"
        />

        <Product
          id="7"
          title="Meat Shredder Claws"
          price={39.99}
          rating={4}
          image="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1571689550-51Q0xuEOjRL.jpg?crop=1xw:1.00xh;center,top&resize=768:*"
        />
      </div>

      <div className="home__row">
        <Product
          id="8"
          title="Fender American Ultra Telecaster RW Arctic Pearl w/Hardshell Case"
          price={1899.99}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/61AOc3sn14L._AC_SL1500_.jpg"
        />
      </div>

      <div className="home__row">
        <Product
          id="12"
          title="Taco Sleeping Bag"
          price={49.99}
          rating={5}
          image="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1571765609-tacoblanket-1571765561.jpg?crop=1xw:1xh;center,top&resize=768:*"
        />

        <Product
          id="13"
          title="Karaoke Earphone"
          price={29.99}
          rating={2}
          image="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1571686268-51ZIPzbooyL.jpg?crop=0.608xw:0.689xh;0.392xw,0.311xh&resize=768:*"
        />
      </div>

      <div className="home__row">
        <Product
          id="16"
          title="AK-47 bullet ice cube tray"
          price={4.99}
          rating={5}
          image="https://www.rd.com/wp-content/uploads/2019/07/35.jpg"
        />

        <Product
          id="17"
          title="An engagement ring"
          price={1799.99}
          rating={3}
          image="https://www.rd.com/wp-content/uploads/2019/07/39.jpg"
        />
      </div>
    </div>
  );
}

export default Home;
