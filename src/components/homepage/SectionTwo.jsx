import React from "react";
import headImage from "../../../public/assets/section-two-img.jpg";
import Image from "next/image";
import "../../styles/homepage/section-two.css";
import { StoreSlider } from "./StoreSlider";

export const SectionTwo = () => {
  return (
    <div className="flex flex-col w-full items-start gap-[111px] relative">
      <header className="relative self-stretch w-full h-[362px] head-image-bg">
        <div className="flex flex-col w-full h-full justify-center items-start gap-2 px-20 text-end">
          <div className="flex flex-col items-center gap-2 relative self-stretch w-full flex-[0_0_auto]">
            <h1 className="relative self-stretch mt-[-1.00px] [font-family:'Montserrat-SemiBold',Helvetica] font-semibold text-white text-2xl tracking-[-0.55px] leading-[normal]">
              SHOP NOXBRIDGE AT THESE RETAILERS
            </h1>
          </div>

          <p className="relative self-stretch text-end font-paragraph-16-16-medium font-[number:var(--paragraph-16-16-medium-font-weight)] text-white text-[length:var(--paragraph-16-16-medium-font-size)] tracking-[var(--paragraph-16-16-medium-letter-spacing)] leading-[var(--paragraph-16-16-medium-line-height)] [font-style:var(--paragraph-16-16-medium-font-style)]">
            Purchase Official Noxbridge Watches At Our Trusted Retailer Partners
            Below
          </p>
        </div>
      </header>

      {/* Store Slider */}
      <StoreSlider />
    </div>
  );
};
