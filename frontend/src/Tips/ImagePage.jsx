import React from "react";

export default function ImagePage({ title, images }) {
  return (
    <div className="flex flex-col items-center justify-center">
      <h2 className="text-3xl text-center font-bold">{title}</h2>
      <hr className="mb-5 w-2/5 mx-auto border-2 border-black" />
      <div className="grid grid-cols-4 gap-4">
        {images.map((image, index) => (
          <div key={index}>
            <img src={image.src} alt={image.alt} />
            <p className="text-xl text-center mt-2 mb-10">{image.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}



