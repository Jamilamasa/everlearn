import React from "react";

interface CardProps {
  imageUrl: string;
  title: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ imageUrl, title, description }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      {/* Image */}
      <img src={imageUrl} alt="Card Image" className="flex justify-center items-center m-auto w-60 h-60 p-10 object-cover" />

      {/* Card Header with Blue Background */}
      <div className="p-4 bg-[#00599B] text-white">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-sm">{description}</p>
      </div>
    </div>
  );
};

export default Card;
