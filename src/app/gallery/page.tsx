"use client"
import Image from "next/image";

const ImageGallery = () => {
  return (
    <div className="md:pt-[1vw]">
      <div className="relative w-11/12 h-[300px] md:h-[400px] lg:h-[500px] mx-auto rounded-[24px] overflow-hidden">
      <p>Gallery</p>
        <Image 
          src="/images/gallery_banner.jpg"
          alt="Gallery Banner"
          fill 
          
          className="object-cover rounded-[24px]"
          priority
        />
      </div>
    </div>
  );
};

export default ImageGallery;









