"use client";

import React from "react";
import Image from "next/image";
import { BackgroundBeamsWithCollision } from "../../ui/background-beams-with-collision";
const BriefIntro = () => {
  const items = [
    {
      image:
        "https://www.thegurukulam.school/_next/image?url=https%3A%2F%2Fd2ko6s7f6xbpih.cloudfront.net%2Fstatic%2Fpw-gurukulam%2Fstatic-assets%2Fabout-3.jpg&w=1920&q=75",
      title: "Our Motto",
      description: `"At The Gurukulam, we nurture a supportive environment where students feel valued and empowered, fostering kindness and resilience to help them build strong relationships and positively impact their communities.At The Gurukulam, we nurture a supportive environment where students feel valued and empowered, fostering kindness and resilience to help them build strong relationships and positively impact their communities.At The Gurukulam, we nurture a supportive environment where students feel valued and empowered, fostering kindness and resilience to help them build strong relationships and positively impact their communities.At The Gurukulam, we nurture a supportive environment where students feel valued and empowered, fostering kindness and resilience to help them build strong relationships and positively impact their communities.At The Gurukulam, we nurture a supportive environment where students feel valued and empowered, fostering kindness and resilience to help them build strong relationships and positively impact their communities."`,
      align: "left",
    },
    {
      image:
        "https://www.thegurukulam.school/_next/image?url=https%3A%2F%2Fstatic.pw.live%2Fproduction-gurukulam%2Fstatic%2Fimages%2Flanding-page%2FDSC01095.JPG&w=640&q=75",
      title: "Our Vision",
      description:
        "We aim to provide holistic education that blends modern learning with traditional values, equipping students with the skills they need for a successful future.We aim to provide holistic education that blends modern learning with traditional values, equipping students with the skills they need for a successful future.We aim to provide holistic education that blends modern learning with traditional values, equipping students with the skills they need for a successful future.We aim to provide holistic education that blends modern learning with traditional values, equipping students with the skills they need for a successful future.We aim to provide holistic education that blends modern learning with traditional values, equipping students with the skills they need for a successful future",
      align: "right",
    },
  ];

  return (
    <div className="relative w-full mx-auto sm:px-6 md:px-12 lg:px-20">
      {items.map((item, index) => (
        <div
          key={index}
          className={`flex flex-col md:flex-row items-center justify-between gap-6 p-4 sm:p-6 mx-auto ${
            item.align === "left" ? "md:flex-row" : "md:flex-row-reverse"
          }`}
        >
          {/* Image Box */}
          <div className="relative flex m-10 items-center justify-center w-full sm:w-4/5 md:w-1/2 h-[200px] sm:h-[300px] md:h-[350px] overflow-hidden rounded-lg">
            <div className="max-w-[400px] min-h-[300px] px-6">
              <Image
                alt={item.title}
                src={item.image}
                fill
                className="object-cover rounded-lg shadow-md"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
          </div>

          {/* Text Box */}

          <div className="w-full sm:w-4/5 md:w-1/2 flex flex-col justify-start gap-4 text-center md:text-left">
            <BackgroundBeamsWithCollision>
              <div className="p-8 ">
                <h2 className="text-[var(--heading-text-color)] text-lg sm:text-xl md:text-2xl font-bold">
                  {item.title}
                </h2>
                <p
                  className="text-[var(--description-text-color)]  font-medium text-sm align-te sm:text-base md:text-xl leading-relaxed max-h-[220px] sm:max-h-[260px] md:max-h-[320px] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100 "
                  style={{ textAlign: "justify" }}
                >
                  {item.description}
                </p>
              </div>
            </BackgroundBeamsWithCollision>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BriefIntro;
