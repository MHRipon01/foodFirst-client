import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const Qoute = () => {
  var settings = {
    dots: true,

    autoplay: true,
    speed: 2000,
    autoplaySpeed: 3000,
    arrows: false,
  };
  return (
    <div className="lg:max-w-[900px] mx-auto bg-white rounded-lg  items-center">
        <div >
          <Slider {...settings}>
        <div className="lg:max-h-[300px] ">
        
          <h3 className="font-Caveat py-16 md:font-bold text-5xl text-green-950">
           <span className="text-7xl font-bold lg:text-5xl   "> “</span> I am proud to say I volunteer for Community Food Share. You all are
            doing incredible things for your neighbors and volunteers .
            <span className="text-7xl font-bold lg:text-5xl">”</span> 
           
           
            
            <p className="justify-end flex w-full  -ml-10" >-Volunteer</p>
          </h3>
        </div>
        <div>
          <h2 className="font-Caveat py-16 md:font-bold text-5xl text-green-950">
            <span className="text-7xl font-bold lg:text-5xl   "> “</span>We had a week where we had nothing, and Community Food Share made
            all the difference. <span className="text-7xl font-bold lg:text-5xl">”</span>
            <p className="justify-end flex w-full  -ml-10" >- Neighbor</p>
             
          </h2>
        </div>
        <div>
          <h2 className="font-Caveat md:font-bold text-5xl py-16 text-green-950">
            <span className="text-7xl font-bold lg:text-5xl   "> “</span>Wonderful organization. I always leave with a cart full of food and
            a smile on my face. Thank you for all that you do. <span className="text-7xl font-bold lg:text-5xl">”</span>
            <p className="justify-end flex w-full  -ml-10" >- Neighbor</p>
           
          </h2>
        </div>
        <div className=" ">
          <h2 className="font-Caveat py-16 md:font-bold text-5xl text-green-950">
            {" "}
            <span className="text-7xl font-bold lg:text-5xl   "> “</span>The work of Community Food Share and their community partners is
            not only life-saving, but also ‘life-enabling.’  <span className="text-7xl font-bold lg:text-5xl">”</span> 
            <p className="justify-end flex w-full  -ml-10" >- Donor</p>
             
          </h2>
        </div>

        <div className=" ">
          <h2 className="font-Caveat py-16 md:font-bold text-5xl text-green-950">
            <span className="text-7xl font-bold lg:text-5xl   "> “</span>Thank you for all your hard work and kindness! I do not know what I
            would have done without this service. <span className="text-7xl font-bold lg:text-5xl">”</span>
            <p className="justify-end flex w-full  -ml-10" >- Neighbor</p>{" "}
          </h2>
        </div>
      </Slider>
        </div>
      
    </div>
  );
};

export default Qoute;
