import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";




const Board = ({ board }) => {
  const color = board.color;
  const text = board.title;
  return (
    <div className="flex flex-row border-[1px] border-gray-100 items-center  justify-between ">
      <div className="flex flex-row items-center gap-[1rem]">
        <div className={`w-[80px] h-[80px] `} style={{backgroundColor : color}}></div>
        <div>{text}</div>
      </div>

      <div className="mr-2 cursor-pointer">
        <BsThreeDotsVertical />
      </div>
    </div>
  );
};

export default Board;
