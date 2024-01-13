import React from "react";
import Description from "../components/Description.jsx";
import { FaArrowLeft } from "react-icons/fa";
import { desc } from "../utils/objects.js";
import DescCard from "../components/DescCard.jsx";
export default function Details() {
  return (
    <div className="bg-slate-100">
      <div className="flex flex-col pt-3 max-w-6xl mx-auto">
        <div className="flex gap-4 items-center my-4">
          <FaArrowLeft className="hover:cursor-pointer" />
          <h1 className="text-lg font-semibold hover:underline cursor-pointer">
            Back
          </h1>
        </div>

        <div className="flex flex-row gap-10 justify-between mb-10">
          <Description />
          <div className="bg-white flex flex-col items-center h-3/4 w-full rounded-lg shadow-lg p-5">
            <div className="w-full items-center">
              <h1 className="font-bold text-lg">
                Exams you might be interested in
              </h1>
              <div>
                {desc.map((exam) => (
                  <DescCard key={exam.id} exam={exam} />
                ))}
              </div>
              
            </div>
            <button className="rounded-s-full rounded-e-full border-2 mt-4 border-blue-500 text-blue-500 w-24 h-9">
                View all
              </button>
          </div>
        </div>
      </div>
    </div>
  );
}
