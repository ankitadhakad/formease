import React from "react";
import Slider from "../components/Slider";
import { examcard } from "../utils/objects";
import ExamCard from "../components/ExamCard";
import { examname } from "../utils/objects";
import { upperexamcard } from "../utils/objects";
export default function Home() {
  return (
    <div className="bg-slate-100 p-9">
      <div className="max-w-6xl mx-auto">
        <div>
          <Slider />
        </div>
        <div className="flex flex-row justify-between items-center my-5">
          <p className="font-bold text-lg my-3">Recommended exams</p>
          <p className="font-semibold text-blue-500 hover:underline cursor-pointer">
            See All
          </p>
        </div>
        <div
          id="slider"
          className="w-full h-full flex gap-5 overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide mb-6"
        >
          {upperexamcard.map((exam) => (
            <ExamCard key={exam.id} exam={exam} />
          ))}
        </div>
        <div className="flex flex-row justify-between items-center my-5">
          <p className="font-bold text-lg my-3">Recent exams</p>
          <p className="font-semibold text-blue-500 hover:underline cursor-pointer">
            See All
          </p>
        </div>
        <div className="my-6 flex flex-row gap-8">
          <div
            id="slider"
            className="w-full h-full flex gap-5 overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide"
          >
            <span className="font-bold text-sm justify-between text-justify  border-2 border-blue-500 rounded-s-full rounded-e-full p-5 flex items-center h-8 text-white bg-blue-500">All</span>
            {examname.map((names) => (
              <span className="font-bold text-sm justify-between text-justify text-blue-500 border-2 border-blue-500 rounded-s-full rounded-e-full p-5 flex items-center h-8 hover:text-white hover:bg-blue-500">
                {names}
              </span>
            ))}
          </div>
        </div>
        <div
          id="slider"
          className="w-full h-full flex gap-5 overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide mb-6"
        >
          {examcard.map((exam) => (
            <ExamCard key={exam.id} exam={exam} />
          ))}
        </div>
      </div>
    </div>
  );
}
