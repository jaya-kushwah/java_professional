"use client";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import BackendTraining from "./heroPage/BackendTraining";
import EnterpriseArchitecture from "./heroPage/EnterpriseArchitecture";
import JavaDeveloper from "./heroPage/javaDeveloper";
import SpringAi from "./heroPage/springAi";

export default function HeroSection() {
  return (
    <section className="relative h-[81vh] md:h-[85vh] overflow-hidden">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
        speed={1000}
        className="h-full w-full"
      >
        <SwiperSlide>
          <JavaDeveloper />
        </SwiperSlide>
        <SwiperSlide>
          <SpringAi />
        </SwiperSlide>
        <SwiperSlide>
          <EnterpriseArchitecture />
        </SwiperSlide>
        <SwiperSlide>
          <BackendTraining />
        </SwiperSlide>
      </Swiper>
    </section>
  );
}









