import React, { useEffect, useState } from "react";
import "./Banner.css";

const banners = [
  {
    id: 1,
    image:
      "https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/1/2f6c8211-ac9e-4998-a4e8-bc16fea4cf2c1646124148372-HRX_Desk_Banner.jpg",
  },
  {
    id: 2,
    image:
      "https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/1/391e3197-027d-4440-a0c4-b4e2d7ee494a1646139673447-H-N_Desk_Banner--3-.jpg",
  },
  {
    id: 3,
    image:
      "https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/1/31200885-2552-4f5a-8a92-be464905ce181646151056720-MFH-Desktop-Banner-.jpg",
  },
];

export default function Banner() {
  const [index, setIndex] = useState(0);

  // Auto slide every 4 sec
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % banners.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="banner-slider">
      {banners.map((banner, i) => (
        <div
          key={banner.id}
          className={`banner-slide ${i === index ? "active" : ""}`}
        >
          <img src={banner.image} alt="" className="banner-image" />

          <div className="banner-overlay"></div>

          {/* Slide Number / Tagline */}
          <div className="banner-text">
            <h1 className="banner-heading">Premium Collections</h1>
            <p className="banner-sub">Style | Quality | Comfort</p>
          </div>
        </div>
      ))}

      {/* Navigation */}
      <button
        className="banner-btn left"
        onClick={() =>
          setIndex((prev) => (prev === 0 ? banners.length - 1 : prev - 1))
        }
      >
        ❮
      </button>

      <button
        className="banner-btn right"
        onClick={() => setIndex((prev) => (prev + 1) % banners.length)}
      >
        ❯
      </button>
    </div>
  );
}
