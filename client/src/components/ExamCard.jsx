import React from "react";
import { FaRegBookmark, FaUsers, FaWallet } from "react-icons/fa";
// import { examcard } from "../utils/objects";
export default function ExamCard({ exam }) {
  return (
    <div className="inline-block">
      <div className="flex flex-col gap-3 bg-white rounded-xl border border-gray-300 w-full sm:w-[340px] overflow-hidden p-1">
        <div className="flex gap-4 items-center p-4 justify-between">
          <div className="flex flex-row gap-4 items-center">
            <img
              className="h-12 w-12 border border-gray-400 rounded-lg"
              src={exam.img}
            />
            <div className="">
              <p className="font-bold text-lg ">{exam.name}</p>
              <p className="text-sm text-slate-400">{exam.org}</p>
            </div>
          </div>
          <FaRegBookmark className="text-blue-500 size-6" />
        </div>
        <hr className="mt-1 text-gray-300" />
        <div className="items-center ml-14">
          <div className="gap-4 flex ml-2 p-1">
            <FaUsers className="size-5" />
            <p className="font-semibold">{exam.cand}</p>
          </div>
          <div className="flex gap-4 ml-2 items-center p-1">
            <FaWallet className=" size-5" />
            <p className="font-semibold">{exam.fee}</p>
          </div>
        </div>
        <div className="items-center ml-14 p-2 flex flex-row gap-3">
          {exam.tags.map((tag) => (
            <span className=" text-gray-400 font-semibold border-2 border-gray-400 rounded-xl p-2">
              {tag}
            </span>
          ))}
        </div>

        {/* <div className="flex items-center justify-between"> */}

        <div className="items-center ml-14 p-1">
          <p className="text-blue-500 text-sm font-semibold hover:underline cursor-pointer">
            View details
            <span className="text-lg font-bold ml-3">{">"}</span>
          </p>
        </div>
        {/* </div> */}
      </div>
    </div>
  );
}
