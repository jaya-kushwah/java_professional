import Image from "next/image";
import { pngImages } from "@/app/utils/localImages";
import CustomButton from "./CustomButton";
import AboutAcademyButton from "./AboutAcademyButton";

interface HeroCardProps {
  title: string;
  description?: string;
  rightTitle: string;
  rightDescription: string;
}

export default function HeroCard({
  title,
  rightTitle,
  rightDescription,
}: HeroCardProps) {
  return (
    <section className="relative w-full md:h-[40vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={pngImages.hero_img}
          alt="Hero Background"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full px-4 md:px-8 lg:px-16">
        <div className="max-container mx-auto">
          {/* Mobile Layout - Stacked */}
          <div className="flex flex-col md:hidden items-center text-center gap-6 mt-8">
            {/* Title */}
            <div>
              <h1 className="text-white text-2xl sm:text-3xl font-medium max-w-sm">
                {title}
              </h1>
            </div>

            {/* Info Box */}
            <div className="w-full max-w-sm">
              <div className="relative inline-block w-fit mx-auto">
                <div className="absolute inset-0 rounded-md p-[1px] bg-gradient-to-r from-white via-white/70 to-transparent"></div>
                <div 
                  className="relative rounded-sm px-3 py-1.5 backdrop-blur-sm"
                  style={{
                    background: 'linear-gradient(90deg, #1F76F9 0%, #0d1118ff 100%)',
                  }}
                >
                  <h2 className="text-[#F2F6FA] text-lg font-semibold leading-relaxed">
                    {rightTitle}
                  </h2>
                </div>
              </div>
              <p className="text-white text-sm leading-relaxed mt-2 px-2">
                {rightDescription}
              </p>
            </div>
          </div>

          {/* Desktop Layout - Side by Side */}
          <div className="hidden md:flex flex-row items-center justify-between gap-8">
            {/* Left Side - Title */}
            <div className="flex-1 mt-20">
              <h1 className="text-white font-38 md:font-42 max-w-xl medium">
                {title}
              </h1>
            </div>

            {/* Right Side - Info Box */}
            <div className="flex-1 bg-opacity-90 p-4 md:p-8 mt-20 ml-8 lg:ml-40">
              <div className="relative inline-block w-fit">
                {/* <div className="absolute inset-0 rounded-md p-[1px] bg-gradient-to-r from-white via-white/70 to-transparent"></div>
                <div 
                  className="relative rounded-sm px-3 py-1.5 backdrop-blur-sm"
                  style={{
                    background: 'linear-gradient(90deg, #1F76F9 0%, #0d1118ff 100%)',
                  }}
                >
                  <h2 className="text-[#F2F6FA] font-24 md:font-24 semibold leading-relaxed">
                    {rightTitle}
                  </h2>
                </div> */}
                <AboutAcademyButton title={rightTitle}/>
              </div>
              <p className="text-white font-16 md:font-16 max-w-xl leading-relaxed mt-2">
                {rightDescription}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}