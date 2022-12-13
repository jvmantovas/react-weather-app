import React from "react";

function TimeAndLocation() {
  return (
    <div>
      <div className="flex items-center justify-center my-6">
        <p className="text-white text-xl font-extralight">
          Segunda-feira, 12 Dezembro 2022 | Hora local: 12:46 PM
        </p>
      </div>
      <div className="flex items-center justify-center my-3">
        <p className="text-white text-3xl font-medium">Curitiba, PR</p>
      </div>
    </div>
  );
}

export default TimeAndLocation;
