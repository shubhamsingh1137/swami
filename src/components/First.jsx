import React from "react";

const First = () => {
  return (
    <div>
      <div className="w-full px-4 py-6 bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="relative w-full">
            <img
              src="https://swamiabhyanand.s3.ap-south-1.amazonaws.com/uploads/DSC06326.JPG"
              alt="Event with Acharya"
              className="w-full  h-auto lg:h-180 object-cover rounded-md"
            />

            <div className="absolute bottom-4 left-4 text-white text-lg lg:text-4xl font-semibold  bg-opacity-40 px-3 py-2 rounded">
              श्रीराम दरबार आयोजन
            </div>
          </div>

          <div className="relative w-full">
            <img
              src="https://swamiabhyanand.com/images/_DSC2502.JPG"
              alt="Swamiji"
              className="w-full  h-auto lg:h-180 object-cover rounded-md"
            />

            <p className="absolute bottom-4 left-4 text-white text-lg lg:text-5xl font-semibold  bg-opacity-40 px-3 py-2 rounded">
              परम पूज्य आचार्य महा मंडलेश्वर...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default First;
