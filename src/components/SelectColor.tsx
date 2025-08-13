import { Colors } from "@/lib/types";
import { getColor } from "@/lib/utils";
import { useState } from "react";

const SelectColor = () => {
  const [currentColor, setColor] = useState<Colors>("gray");
  const [showModal, setShowModal] = useState(false);
  function changeColor(color: Colors) {
    setColor(color);
    setShowModal(false);
  }
  const colors: Colors[] = [
    "red",
    "green",
    "blue",
    "yellow",
    "purple",
    "amber",
    "brown",
    "pink",
  ];

  return (
    <div className="relative flex items-center">
      <button
        onClick={() => setShowModal(!showModal)}
        className={`rounded w-8 h-8 focus:outline-none focus:ring-2 focus:ring-primary/20 cursor-pointer ${getColor(
          currentColor
        )}`}
      ></button>
      <div
        className="data-[active=true]:grid border absolute w-44 h-18 bg-white z-20 grid-cols-4 gap-2 rounded-lg shadow-lg p-1 hidden "
        data-active={showModal}
      >
        {colors.map((color, idx) => (
          <button
            key={idx}
            onClick={() => changeColor(color)}
            className={`rounded w-8 h-8 focus:outline-none focus:ring-2 focus:ring-primary/20 cursor-pointer ${getColor(
              color
            )}`}
          />
        ))}
      </div>
    </div>
  );
};

export default SelectColor;
