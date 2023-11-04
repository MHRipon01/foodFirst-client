import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const Banner = () => {
  var settings = {
    dots: true,

    autoplay: true,
    speed: 2000,
    autoplaySpeed: 300,
    arrows:false
  };

  return (
    <div className="">
      <Slider {...settings}>
        <div className="lg:max-h-[300px] ">
          <img className=" h-[70vh] w-full  " 
            src="https://i.ibb.co/t31p15M/image.png"
            alt=""
          />
        </div>
        <div >
          <img className=" h-[70vh] w-full  "  src="https://i.ibb.co/C260kZV/joel-muniz-3k3l2brxmw-Q-unsplash-1.jpg" alt="" />
        </div>
        <div>
          <img className=" h-[70vh] w-full   "  src="https://i.ibb.co/F61TdYw/image.png" alt="" />
        </div>
        <div className=" ">
          <img  className=" h-[70vh] w-full  " src="https://i.ibb.co/nk0nHZ5/Feeding-Families-mother-and-daughter.jpg" alt="" />
        </div>
      </Slider>
    </div>
  );
};

export default Banner;
