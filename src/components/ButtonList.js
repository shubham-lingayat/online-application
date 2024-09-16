import React from "react";
import {
  FaMapMarkerAlt,
  FaFlag,
  FaRupeeSign,
  FaAward,
  FaMoneyBill,
  FaBookOpen,
} from "react-icons/fa";

function ButtonList() {
  return (
    <div className="w-[948px] border hover:shadow-md border-[#E7E7E7] rounded-lg border-solid">
      <div className="pl-3.5 pt-3.5 pr-3.5">
        <h4 className="text-base font-bold ">
          IIM Mumbai (NITIE) - Indian Institute of Management Mumbai
        </h4>
      </div>
      <div className="flex p-3.5">
        <span className="h-36 w-[30%]">
          <img
            className="w-[260px] h-[150px] rounded border border-black border-solid bg-no-repeat bg-cover"
            src="https://management.online-application.co.in/wp-content/uploads/2024/09/maxresdefault-1024x576.jpg"
            alt="Symbiosis"
          />
        </span>
        <span className="flex flex-col gap-2.5 w-[70%] pl-2.5">
          <div className="flex gap-6">
            <span className="flex gap-1 items-center">
              <FaMapMarkerAlt className="h-3 w-3" />
              <p className="text-xs font-normal">Pune, Maharashtra</p>
            </span>
            <span className="flex gap-1 items-center">
              <FaFlag className="h-3 w-3" />
              <p className="text-xs font-normal">Private</p>
            </span>
            <span className="flex gap-1 items-center">
              <FaMapMarkerAlt className="h-3 w-3" />
              <p className="text-xs font-normal">PGDM</p>
            </span>
          </div>
          <div className="flex justify-betwwen gap-6">
            <span className="flex gap-1 items-baseline">
              <FaRupeeSign className="h-3 w-3" />
              <div>
                <h5 className="text-sm font-medium">83 K - 8.53 Lacs</h5>
                <p className="text-xs text-[#717171] font-medium">
                  Fees Per Year
                </p>
              </div>
            </span>
            <span className="flex gap-1 items-baseline">
              <FaAward className="h-3 w-3" />
              <div>
                <h5 className="text-sm font-medium">NAAC</h5>
                <p className="text-xs text-[#717171] font-medium">
                  Accredition
                </p>
              </div>
            </span>
            <span className="flex gap-1 items-baseline">
              <FaMoneyBill className="h-3 w-3" />
              <div>
                <h5 className="text-sm font-medium">49 LPA</h5>
                <p className="text-xs text-[#717171] font-medium">
                  Heighest Package
                </p>
              </div>
            </span>
            <span className="flex gap-1 items-baseline">
              <FaBookOpen className="h-3 w-3" />
              <div>
                <h5 className="text-sm font-medium">SNAP</h5>
                <p className="text-xs text-[#717171] font-medium">Exams</p>
              </div>
            </span>
          </div>
          <div>
            <p className="text-xs font-normal">
              Founded by visionary Dr. S. B. Mujumdar in 1971 as an
              International Cultural and Educational Centre, Symbiosis provides
              a "home away from home" to a large number of students including
              foreign students who come to Pune in pursuit of higher education.
              Living up to its name which is a botanical term meaning "living
              together for mutual benefit", Symbiosis has grown over the past
              two decades into a family of 36 academic institutions providing
              education from Kindergarten to Post Graduation.
            </p>
          </div>
        </span>
      </div>
      <div className="border-t-[1px] p-3.5 border-solid border-[#E7E7E7]">
        <button>Apply Now</button>
        <button>Download Brochure</button>
      </div>
    </div>
  );
}

export default ButtonList;
