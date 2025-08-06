import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const slides = [
  {
    title: "Graphic Design",
    description: "Explore jobs that value your creativity — from branding to digital art. Your design journey starts here.",
    image: "../../public/images/Graphic.jpg",
  },
  {
    title: "Web Development",
    description: "Build the digital future with opportunities in frontend, backend, and full-stack development.",
    image: "../../public/images/Web-development.jpg",
  },
  {
    title: "Digital Marketing",
    description: "Shape brands and reach audiences through SEO, content, social media & performance marketing.",
    image: "../../public/images/marketing.jpg",
  },
  // {
  //   title: "UI/UX Design",
  //   description: "Design intuitive interfaces that offer seamless user experiences across all platforms.",
  //   image: "/images/bg4.jpg",
  // },
];

export default function App() {
  return (
    <div className="max-w-7xl mx-auto ">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="h-[400px] md:h-[500px] lg:h-[550px] rounded-4xl overflow-hidden relative shadow-4xl group transition-transform duration-500 hover:scale-[1.02]"
              style={{
                backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.7)), url(${slide.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 drop-shadow-md">
                  {slide.title}
                </h1>
                <p className="text-base p-3 md:p-0 md:text-lg max-w-2xl drop-shadow-sm">
                  {slide.description}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
