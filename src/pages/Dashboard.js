import React from "react";
import "./Dashboard.css";
import Board from "../components/Board";
import { AiOutlinePlus } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";

// Light Coral: #FA8072
// Sky Blue: #87CEEB
// Pale Green: #98FB98
// Lavender: #E6E6FA

const Dashboard = ({ showModal, setShowModal, myBoards }) => {
  return (
    <>
      {/* navbar */}
      <div className="flex h-[72px] border-b-[1px] border-b-gray-200 flex-row justify-between items-center py-[12px]  px-[48px] ">
        <div className="flex flex-row items-center gap-[1rem]">
          <div className="custom_class  text-white font-bold ">
            <p className="left-[16px] top-[7px] relative ">t</p>
          </div>
          <p className="text-gray-500 font-bold tracking-[2px]">toddle</p>
        </div>
        <div className="flex flex-row gap-[3rem] relative">
          <div className="border-[1px] flex flex-row gap-[8px] items-center justify-center  border-b-gray-200 rounded-lg">
            <div className="ml-4 text-[22px]">
              <CiSearch />
            </div>
            <input
              type="text"
              className=" text-gray-500 text-[16px]  font-normal outline-none leading-[24px] px-[16px] py-[13px] flex justify-center items-center "
              placeholder="Search ..."
            />
          </div>

          <button
            className="flex flex-row bg-[#D33852] text-white items-center px-[16px] 
                 gap-[8px] font-semibold rounded-[8px]"
            onClick={(e) => setShowModal(!showModal)}
          >
            <AiOutlinePlus size={22} />
            Create new Board
          </button>
        </div>
      </div>
      {/* My boards section */}
      <div className="flex flex-col p-10 ">
        <h1 className="font-bold text-[32px]  leading-[44px] ">My Boards</h1>
        <div className="grid grid-cols-3 gap-7 mt-10">
          {myBoards.length > 0 ? (
            myBoards.map((board, index) => (
              <div key={index}>
                <Board board={board} />
              </div>
            ))
          ) : (
            <div className="text-[24px] text-gray-500">
              {" "}
              No boards found !! Please add one ....
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Dashboard;
