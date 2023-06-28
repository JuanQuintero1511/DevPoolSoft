import React from "react";

const InProgress = () => {
  return (
    
    <div className="mt-20">
      <div className="flex flex-col items-center mt-8 mr-8">
        <h2 className="text-4xl font-bold text-blue-500 mb-4 text-center ml-[20vw]">Page under development</h2>
        <div className="flex justify-center">
          <img src="src/image/dev.jpg" alt="Development Image" className="w-2/5 mb-4 ml-[20vw]" />
        </div>
        <p className="text-2xl font-bold text-teal-700 text-center ml-[20vw]">Coming soon!</p>
      </div>
    </div>
  );
};

export default InProgress;




