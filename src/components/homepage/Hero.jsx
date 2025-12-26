import React from "react";
import "../../styles/homepage/hero.css";
import Link from "next/link";

export const Hero = () => {
  return (
    <section className="w-full flex justify-start items-center h-screen hero-watch-bg px-20">
      <div className="flex flex-col w-[845px] justify-center items-end relative">
        <header className="flex-col items-center gap-1 self-stretch w-full flex relative flex-[0_0_auto]">
          <h2 className="relative w-[869px] mt-[-1.00px] ml-[-12.00px] mr-[-12.00px] [font-family:'Montserrat-Medium',Helvetica] font-medium text-neutral-900 text-[29px] tracking-[-0.67px] leading-[normal]">
            Leading Watch Brand &amp; Official Distributor Of Global Brands.
          </h2>

          <h1 className="relative self-stretch [font-family:'Montserrat-Medium',Helvetica] font-medium text-neutral-900 text-9xl text-center tracking-[-2.94px] leading-[normal]">
            NOXBRIDGE
          </h1>
        </header>

        <div className="flex-col w-[478px] items-start gap-4 flex relative flex-[0_0_auto]">
          <p className="relative self-stretch mt-[-1.00px] font-paragraph-16-16-medium font-[number:var(--paragraph-16-16-medium-font-weight)] text-neutral-900 text-[length:var(--paragraph-16-16-medium-font-size)] tracking-[var(--paragraph-16-16-medium-letter-spacing)] leading-[var(--paragraph-16-16-medium-line-height)] [font-style:var(--paragraph-16-16-medium-font-style)]">
            Delivering Authorised Distribution, Market Reach, And Brand Support.
          </p>

          <Link
            href={"/contact"}
            className="w-53.5 items-center justify-center gap-2.5 p-2.5 bg-green-900 flex relative flex-[0_0_auto] cursor-pointer transition-opacity hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-green-700 focus:ring-offset-2"
            type="button"
            aria-label="Start An Enquiry"
          >
            <span className="relative w-fit -mt-px font-paragraph-16-16-medium font-(--paragraph-16-16-medium-font-weight) text-white text-[length:var(--paragraph-16-16-medium-font-size)] tracking-[var(--paragraph-16-16-medium-letter-spacing)] leading-[var(--paragraph-16-16-medium-line-height)] [font-style:var(--paragraph-16-16-medium-font-style)]">
              Start An Enquiry
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};
