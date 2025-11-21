import React from "react";

const banners = [
  {
    id: 1,
    image: "https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/1/2f6c8211-ac9e-4998-a4e8-bc16fea4cf2c1646124148372-HRX_Desk_Banner.jpg",

  },
  {
    id: 2,
    image: "https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/1/391e3197-027d-4440-a0c4-b4e2d7ee494a1646139673447-H-N_Desk_Banner--3-.jpg",

  },
  {
    id: 3,
    image: "https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/1/31200885-2552-4f5a-8a92-be464905ce181646151056720-MFH-Desktop-Banner-.jpghttps://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/28/349419f2-6b66-4b22-8135-f46c13104a4d1646060784174-Workwear-Collection_Dk.jpg",
  },
];

export default function Banner() {
  return (
    <div className="carousel w-full h-80 md:h-96 relative rounded-xl overflow-hidden shadow-lg">
      {banners.map((banner, index) => (
        <div
          key={banner.id}
          id={`slide${index + 1}`}
          className="carousel-item relative w-full"
        >
          <img
            src={banner.image}
            alt=""
            className="w-full h-full object-cover"
          />
          {/* Overlay content */}
          <div className="absolute inset-0 bg-black/30 flex flex-col justify-center items-start p-8 md:p-16 text-white">
          </div>
          {/* Navigation buttons */}
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a
              href={`#slide${index === 0 ? banners.length : index}`}
              className="btn btn-circle btn-primary btn-sm md:btn-md"
            >
              ❮
            </a>
            <a
              href={`#slide${index === banners.length - 1 ? 1 : index + 2}`}
              className="btn btn-circle btn-primary btn-sm md:btn-md"
            >
              ❯
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}
