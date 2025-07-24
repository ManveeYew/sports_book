"use client";

import { useEffect, useState } from "react";

const images = [
  "/images/example/banner_image.png",
  "/images/example/banner_image2.jpg",
  "/images/example/banner_image.png",
  "/images/example/banner_image2.jpg",
];

export default function BannerCarousel() {
  const [current, setCurrent] = useState(0);

  const itemsPerPage = 2;
  const totalPages = Math.ceil(images.length / itemsPerPage);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % totalPages);
    }, 5000); // Auto scroll every 5 seconds
    return () => clearInterval(interval);
  }, [totalPages]);

  return (
    <div className="w-full bg-[rgb(200,200,200)] px-2 py-1">
      <div className="relative overflow-hidden w-full">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            width: `${(images.length / itemsPerPage) * 50}%`,
            transform: `translateX(-${(100 / totalPages) * current}%)`,
          }}
        >
          {Array.from({ length: totalPages }).map((_, index) => (
            <div key={index} className="flex w-full flex-shrink-0">
              {images
                .slice(
                  index * itemsPerPage,
                  index * itemsPerPage + itemsPerPage
                )
                .map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt={`Banner ${index * itemsPerPage + i + 1}`}
                    className="w-1/2 max-h-[160px] object-cover"
                  />
                ))}
            </div>
          ))}
        </div>

        {/* Dots */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
          {Array.from({ length: totalPages }).map((_, i) => (
            <div
              key={i}
              className={`w-2 h-2 rounded-full ${
                i === current ? "bg-blue-500" : "bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
