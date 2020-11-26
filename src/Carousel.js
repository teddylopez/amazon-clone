import React from "react";
import "./Carousel.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Carousel() {
  const photos = [
    {
      name: "photo_1",
      url:
        "https://images-na.ssl-images-amazon.com/images/G/01/digital/video/merch/2019/Other/RB-1424_AcquisitionHolidayAssets/GW_DesktopHero_RB-1424_PV-AcquisitionHolidayAssets_3000x1200._CB451871227_.jpg",
    },
    {
      name: "photo_2",
      url:
        "https://images-na.ssl-images-amazon.com/images/G/01/kindle/journeys/YTQzYWRkNWYt/YTQzYWRkNWYt-YjZlZWFlOTMt-w1500._CB415375964_.jpg",
    },
    {
      name: "photo_3",
      url:
        "https://images-na.ssl-images-amazon.com/images/G/01/kindle/education/merch/gw/GW_Hero_Holiday_Numbers_D2x_EN._CB416734754_.jpg",
    },
    {
      name: "photo_4",
      url:
        "https://images-na.ssl-images-amazon.com/images/G/01/img20/events/Q4/Holiday/BlackFriday/TrafficDrivers/Q4_2020_BlackFriday_LU_TrafficDrivers_Desktop_Hero_3000x1200._CB417930166_.jpg",
    },
    {
      name: "photo_5",
      url:
        "https://images-na.ssl-images-amazon.com/images/G/01/img18/home/journeys/YzJiNjI2NDMt/YzJiNjI2NDMt-YzIxZmQ2MjQt-w3000._CB416717338_.jpg",
    },
  ];

  const settings = {
    dots: false,
    fade: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    arrows: true,
    slidesToScroll: 1,
    className: "slides",
  };

  return (
    <div className="carousel">
      <Slider {...settings}>
        {photos.map((photo) => {
          return (
            <div key={photo.url}>
              <img width="100%" src={photo.url} alt="" />
            </div>
          );
        })}
      </Slider>
    </div>
  );
}

export default Carousel;
