import React from "react";

interface CardProps {
  category: string;
  image: string;
  author: string;
  title: string;
  duration: string;
  students: number;
  level: string;
  lessons: number;
  price: string;
  onClick: () => void;
}

const Card: React.FC<CardProps> = ({
  category,
  image,
  author,
  title,
  duration,
  students,
  level,
  lessons,
  price,
  onClick,
}) => {
  return (
    <div className="w-full bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden md:grid md:grid-cols-2">
      {/* Image Section */}
      <div className="relative h-48 md:h-full">
        <img src={image} alt={title} className="w-full h-full object-cover" />
        <span className="absolute top-2 left-2 bg-black bg-opacity-75 text-white text-xs font-bold px-2 py-1 rounded">
          {category}
        </span>
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col justify-between">
        <div>
          <p className="text-sm text-gray-600 mt-1">
            by <span className=" font-bold">{author}</span>
          </p>
          <h3 className="md:text-2xl text-lg font-bold text-gray-800">{title}</h3>

          <div className="mt-4 text-sm text-gray-500 flex items-center justify-center md:justify-start space-x-4">
            <p>{duration}</p>
            <p>{students} Students</p>
            <p>{level}</p>
            <p>{lessons} Lessons</p>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between mt-4">
          <p className="md:text-lg md:font-bold text-gray-500">
            {price} <span className=" text-green-500 md:font-bold">Free</span>
          </p>
          <button
            className="px-4 py-2 text-black rounded-md md:text-lg md:font-bold focus:outline-none"
            onClick={onClick}
          >
            View More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
