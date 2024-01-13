import React from "react";
import { FaCopyright } from "react-icons/fa";
// const year = new Date.getFullYear();
export default function Footer() {
  return (
    <footer className="shadow-md p-6">
      
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        <div className="mt-5 flex flex-col items-center">
          <img
            src="https://formease.app/images/logo.png"
            className="h-10 mb-7 w-19"
          />
          <div className="flex justify-between gap-6">
            <img
              src="https://logodix.com/logo/1238026.png"
              className="h-5"
            />
            <img
              src="https://www.shareicon.net/data/256x256/2016/07/09/118293_instagram_512x512.png"
              className="h-5"
            />
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7VTxBpzdDqX2TxxMLFwHPTowE4rwwSDIl8tze4f4NC13WvMKne4LoaYhbBoHGiDtes2g&usqp=CAU"
              className="h-5"
            />
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJV_lhLlDUz1rIeEvDXkNg9VHhS18PsFbsmZ5V6L-tZA&s"
              className="h-5"
            />
          </div>
        </div>
        <div className="flex gap-10 text-slate-500 mt-5">
          <div>
            <div className="mb-3">About Us</div>
            <div className="mb-3">Sitemap</div>
            <div className="mb-3">Credits</div>
            <div className="mb-3">Help Center</div>
            <div className="mb-3">Community Guidelines</div>
          </div>
          <div>
            <div className="mb-3">Accessibility</div>
            <div className="mb-3">Mobile</div>
            <div className="mb-3">Marketing</div>
            <div className="mb-3">Advertising</div>
            <div className="mb-3">Report issue</div>
          </div>
          <div>
            <div className="mb-3">Privacy Policy</div>
            <div className="mb-3">Terms & Conditions</div>
            <div className="mb-3">Truse & Safety</div>
          </div>
        </div>
        <div className="flex flex-col items-center mt-5">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
            className="h-30 w-40 rounded-sm mb-9 mr-5"
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Download_on_the_App_Store_RGB_blk.svg/1920px-Download_on_the_App_Store_RGB_blk.svg.png"
            className="h-30 w-40 rounded-sm mr-5"
          />
        </div>
      </div>
      <hr />
      <div className="max-w-6xl mx-auto flex flex-col justify-between">
        <p className="text-sm text-slate-400 mt-7">
          All trademarks are the property of their respective owners
        </p>
        <p className="text-sm text-slate-400 mb-7">
          All rights reserved © 2024 IntelliFill Tech Pvt Ltd
        </p>
      </div>
    </footer>
  );
}
