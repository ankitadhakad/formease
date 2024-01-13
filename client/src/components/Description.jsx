// import React from "react";
// import { FaCalendarAlt, FaShareAlt } from "react-icons/fa";
// import { CiBookmark } from "react-icons/ci";
// import {FaUsers} from 'react-icons/fa'



// export default function Description() {
//   return (
//     <div className="flex flex-col max-w-7xl gap-5 mx-auto">
//       <div className="flex flex-col upperbox items-center gap-5 mb-5 mx-auto shadow-md p-5 rounded-lg bg-white">
//         <div className="first_row flex flex-row justify-between items-center">
//           <div className="flex items-center gap-3 mb-4">
//             <img
//               src="https://static.toiimg.com/thumb/msid-94213168,width-400,resizemode-4/94213168.jpg"
//               className="rounded-lg h-8 border border-slate-400"
//             />
//             <div>
//               <h1>JEE Mains 2023</h1>
//               <p className="text-sm text-blue-500">National Testing Agency</p>
//             </div>
//           </div>
//           <div className="flex gap-2">
//             <CiBookmark className="text-blue-500" />
//             <FaShareAlt className="" />
//           </div>
//         </div>


        
//           <div className="flex gap-3 items-center text-sm mb-5">
//             <FaCalendarAlt className="text-blue-500"/>
//             <p> Exam Date: 23 March,2023</p>
//           </div>

//           <div className="flex gap-3 items-center text-sm mb-3">
//             <FaUsers className="text-blue-500" />
//             <p>Applicants: 20 Lakh+</p>
//           </div>
//           <hr/>
//           <div className="flex justify-between items-center mt-3">
//             <p className="text-slate-400 text-xs mt-4">Posted 50 days ago, ends on 31 Dec</p>
//             <button className="bg-blue-500 text-white rounded-s-full rounded-e-full h-9 w-24 mt-4">
//               Apply now
//             </button>
//           </div>
                     


        



//       </div>
//     </div>
//   );
// }
import React from "react";
import {
  FaCalendarAlt,
  FaRegBookmark,
  FaShareAlt,
  FaUsers,
} from "react-icons/fa";

export default function Description() {
  return (
    <div className=" flex flex-col gap-5 max-w-7xl mx-auto">
      <div className="UpperBox shadow-lg flex flex-col gap-2 p-5 rounded-lg bg-white">
        <div className="flex items-center justify-between">
          <div className="flex gap-5 items-center">
            <img
              src="https://tse1.mm.bing.net/th?id=OIP.asIMekNYVf7387H8C0MhLgAAAA&pid=Api&rs=1&c=1&qlt=95&h=220"
              alt="Exam!"
              className="h-8 w-8 border border-gray-400 rounded-lg"
            />
            <div className="flex flex-col">
              <h1 className="font-semibold text-lg">JEE Mains 2023</h1>
              <p className="text-blue-500 text-sm">National Testing Agency</p>
            </div>
          </div>
          <div className="flex gap-2">
            <FaRegBookmark className="text-blue-500 size-5 hover:cursor-pointer" />
            <FaShareAlt className="size-5 hover:cursor-pointer" />
          </div>
        </div>

        <div className="flex items-center gap-3 text-sm ">
          <FaCalendarAlt className="text-blue-500" />
          <p className="text-sm ">Exam Date 23 March 2023</p>
        </div>

        <div className="flex items-center gap-3 text-sm ">
          <FaUsers className="text-blue-500 size-4" />
          <p className="text-sm ">Applicants 20 Lakh+</p>
        </div>
        <hr />

        <div className="flex justify-between my-3 items-center">
          <p className="text-slate-400 text-xs">
            Posted 50 days ago, ends on 31 Dec
          </p>
          <button className="bg-blue-500 text-xs text-slate-100 rounded-s-full rounded-e-full h-9 w-24 hover:opacity-85">
            Apply Now
          </button>
        </div>
      </div>

      <div className="LowerBox shadow-lg flex flex-col gap-1 p-5 rounded-lg bg-white">
        <h1 className="font-semibold text-lg">Exam Description</h1>
        <ul className="list-disc ml-6">
          <li className="text-justify">
            JEE Main is a standardized test conducted across different states in
            India.
          </li>
          <li className="text-justify">
            The exam is held at an undergraduate level to offer admissions to
            some of the best engineering and technical institutions that are
            Government funded or privately-owned.
          </li>
          <li className="text-justify">
            The exam conducting authority considers the best NTA score in
            preparing the ranks merit list.
          </li>
        </ul>

        <h1 className="font-semibold text-lg mt-3">Eligibility</h1>
        <ul className="list-disc ml-6">
          <li className="text-justify">Age Limit - No age limit</li>
          <li className="text-justify">
            Qualifying Exam - Class 12/Equivalent Exam
          </li>
          <li className="text-justify">
            Percentage - At least 75% in class 12/equivalent exam
          </li>
          <li className="text-justify">
            Year of Passing - 2021, 2022 or appearing in 2023
          </li>
          <li className="text-justify">
            Number of attempts - Candidate can appear in JEE Main for 3
            consecutive years after passing their class 12/equivalent exam
          </li>
        </ul>

        <h1 className="font-semibold text-lg mt-3">Important Details</h1>
        <ul className="list-disc ml-6 text">
          <li className="text-justify">
            JEE Main 2023 January Session: NTA released the JEE Main 2023
            session 1 will be conducted between 24th January and 1st February,
            2023.
          </li>
          <li className="text-justify">
            JEE Main 2023 April Session: NTA released the JEE Main 2023 session
            1 will be conducted between 1st April, 2023 and 15th April 2023
          </li>
        </ul>

        <hr className="my-4" />

        <div className="flex flex-row justify-between items-center">
          <div className="flex flex-row justify-between items-center gap-2">
            <img
              className="h-7 w-7 border border-gray-400 rounded-lg object-fill"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Facebook_logo_36x36.svg/1200px-Facebook_logo_36x36.svg.png"
            />
            <img
              className="h-7 w-7 border border-gray-400 rounded-lg object-fill"
              src="https://tse2.mm.bing.net/th?id=OIP.biG9UdrkNGTbvX1YvOvY4AAAAA&pid=Api&P=0&h=220"
            />
            <img
              className="h-7 w-7 border border-gray-400 rounded-lg object-fill"
              src="https://tse2.mm.bing.net/th?id=OIP.0rJZ6VFPpfFXkMh8sjoEEQHaHa&pid=Api&P=0&h=220"
            />
          </div>
          <div>
            <p className="text-blue-500 hover:underline text-sm cursor-">
              Report this job
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
