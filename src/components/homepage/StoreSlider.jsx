"use client";

import React from "react";
import BDW from "../../../public/assets/BDW.png";
import WOAUS from "../../../public/assets/WOAUS.png";
import TWM from "../../../public/assets/TWM.png";
import BDJ from "../../../public/assets/BDJ.png";
import WOA from "../../../public/assets/WOA.png";
import Image from "next/image";

export const StoreSlider = () => {
  const cards = [
    { id: 1, image: BDW, alt: "Big Daddy Watches" },
    { id: 2, image: WOAUS, alt: "Watches of Australia" },
    { id: 3, image: TWM, alt: "The Watches Men" },
    { id: 4, image: BDJ, alt: "Big Daddy Jewelry" },
    { id: 5, image: WOAUS, alt: "Watches of Australia Logo" },
    { id: 6, image: WOA, alt: "Watches of Australia Brand" },
  ];

  // Duplicate the cards array for seamless looping
  const loopedCards = [...cards, ...cards];

  return (
    <div className="overflow-hidden relative w-full">
      <div
        className="flex animate-scroll gap-6"
        style={{
          width: `${
            loopedCards.length * 305 + (loopedCards.length - 1) * 24
          }px`,
        }}
      >
        {loopedCards.map((card, index) => (
          <div
            key={index}
            className="relative w-[305px] h-[377px] bg-neutral-50 border border-green-900 shadow-[5px_4px_18.5px_#00000040] flex-shrink-0"
          >
            <Image
              src={card.image}
              alt={card.alt}
              className="w-full h-full object-contain"
            />
          </div>
        ))}
      </div>

      {/* Tailwind CSS Animation */}
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          display: flex;
          animation: scroll 20s linear infinite;
        }
      `}</style>
    </div>
  );
};
