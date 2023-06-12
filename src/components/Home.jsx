/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, { useEffect, useRef } from "react";
import { testimonials } from "../assets/data";
import { FaStar, FaRegStar } from "react-icons/fa";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import SwiperCore, { Pagination, Navigation } from "swiper";
import { useInView } from "react-intersection-observer";

SwiperCore.use([Pagination]);

const renderRatingStars = (rating) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    const StarIcon = i <= rating ? FaStar : FaRegStar;
    stars.push(<StarIcon key={i} className="star-icon" />);
  }
  return stars;
};

const Home = () => {
  const swiperRef = useRef(null);

  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.swiper.update();
    }
  }, []);

  const [ref, inView] = useInView({
    triggerOnce: true, // Animasi hanya akan dipicu sekali saat elemen masuk ke viewport
    threshold: 0.2, // Jumlah elemen yang harus masuk ke viewport agar animasi dipicu (dalam persentase)
  });

  const variants = {
    hidden: {
      opacity: 0,
      y: -50,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 3,
        ease: "easeOut",
      },
    },
  };
  return (
    <div className="overflow-scroll" id="home">
      <div className="pt-[220px] pb-24 min-h-screen flex flex-col gap-20 justify-center items-center">
        <div className="w-10/12 flex flex-col gap-7 items-center">
          <div className="">
            <img
              src="https://source.unsplash.com/400x300?vehicle"
              alt=""
              className="w-full rounded-xl"
            />
          </div>
          <div className="text-lg ">
            <h1 className="text-center pb-2">
              Wellcome to{" "}
              <span className="text-2xl font-bold">
                {" "}
                <br /> Success Rent Vehicle
              </span>
            </h1>
            <p className="text-justify lg:w-3/6 lg:m-auto lg:text-center">
              The Best Solution for Vehicle Rentals! We offer fast, easy, and
              reliable vehicle rental services in Indonesia. With a wide
              selection of quality vehicles at affordable prices, an intuitive
              website interface, prioritized safety, exceptional customer
              service, and transparent pricing, RentalRide is your top choice
              for your travel needs. Discover your dream vehicle now and enjoy
              the best vehicle rental experience with RentalRide.{" "}
            </p>
          </div>
          <div className="">
            <a
              href="#footer"
              className="bg-red-500 py-2 px-4 text-xl rounded-lg text-amber-100 shadow-lg hover:bg-slate-900 hover:text-amber-200 transition-all duration-200"
            >
              RENT NOW
            </a>
          </div>
        </div>
        <div className="h-max flex flex-col items-center w-full ">
          <div className=" text-center">
            <p>what people says</p>
            <h1 className="uppercase text-2xl font-bold">testimonials</h1>
          </div>

          <div className="my-10  w-full">
            <div className=" bg-slate-700 text-amber-200  rounded-xl">
              <Swiper
                slidesPerView={1}
                spaceBetween={30}
                pagination={{
                  clickable: true,
                }}
                autoplay={{
                  delay: 500,
                  disableOnInteraction: false,
                }}
                loop={true}
                navigation={true}
                modules={[Navigation]}
                className="mySwiper"
                ref={swiperRef}
              >
                {testimonials.map((testimonial) => (
                  <SwiperSlide key={testimonial.id}>
                    <div className="flex flex-col m-auto px-2 py-10 text-justify items-center w-[300px] ">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="testimonial-image rounded-full w-16 h-16"
                      />
                      <h3 className="text-xl font-medium mt-4">
                        {testimonial.name}
                      </h3>
                      <p>{testimonial.testimonial}</p>
                      <div className="flex items-center">
                        <p className="mr-2">Rating:</p>
                        {renderRatingStars(testimonial.rating)}
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

{
  /* <div
  className="flex flex-col items-center px-5 py-9 rounded-3xl shadow-xl text-justify border border-amber-200 bg-slate-900 text-amber-200"
  key={testimonial.id}
>
  <img
    src={testimonial.image}
    alt={testimonial.name}
    className="testimonial-image rounded-full w-16 h-16"
  />
  <h3 className="text-xl font-medium mt-4">
    {testimonial.name}
  </h3>
  <p className="mt-2 text-lg">{testimonial.testimonial}</p>
  <div className="flex items-center mt-2">
    <p>rating: </p>
    {renderRatingStars(testimonial.rating)}
  </div>
</div> */
}
