import Nav from "./Nav";
import { RiReactjsLine } from "react-icons/ri";
import { FaCss3Alt } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiPhp } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { GrMysql } from "react-icons/gr";
import { FaDocker } from "react-icons/fa";
import { IoLogoFigma } from "react-icons/io5";
import Nu from '../assets/Nu.jpg'


const AboutMe = () => {
  return (
    <>
      <Nav />
      <div className="border-neutral-800 mb-10">
        <h1 className="my-10 text-center text-3xl font-mono font-thin text-slate-100">Skills</h1>
        <div className="flex flex-wrap justify-center items-center gap-4">
            <div className="rounded-2xl border-4 bg-gradient-to-r from-rose-500 to-orange-300 bg-clip-item item-transparent">
                <RiReactjsLine className="text-6xl text-rose-900" />
            </div>
            <div className="rounded-2xl border-4 bg-gradient-to-r from-rose-500 to-orange-300 bg-clip-item item-transparent">
                <FaCss3Alt className="text-6xl  text-rose-900" />
            </div>
            <div className="rounded-2xl border-4 bg-gradient-to-r from-rose-500 to-orange-300 bg-clip-item item-transparent">
                <FaHtml5 className="text-6xl  text-rose-900" />
            </div>
            <div className="rounded-2xl border-4 bg-gradient-to-r from-rose-500 to-orange-300 bg-clip-item item-transparent">
                <IoLogoJavascript className="text-6xl text-rose-900" />
            </div>
            <div className="rounded-2xl border-4 bg-gradient-to-r from-rose-500 to-orange-300 bg-clip-item item-transparent">
                <SiPhp className="text-6xl  text-rose-900" />
            </div>
            <div className="rounded-2xl border-4 bg-gradient-to-r from-rose-500 to-orange-300 bg-clip-item item-transparent">
                <FaPython className="text-6xl  text-rose-900" />
            </div>
            <div className="rounded-2xl border-4 bg-gradient-to-r from-rose-500 to-orange-300 bg-clip-item item-transparent">
                <RiTailwindCssFill className="text-6xl  text-rose-900" />
            </div>
            <div className="rounded-2xl border-4 bg-gradient-to-r from-rose-500 to-orange-300 bg-clip-item item-transparent">
                <GrMysql className="text-6xl  text-rose-900" />
            </div>
            <div className="rounded-2xl border-4 bg-gradient-to-r from-rose-500 to-orange-300 bg-clip-item item-transparent">
                <FaDocker className="text-6xl  text-rose-900" />
            </div>
            <div className="rounded-2xl border-4 bg-gradient-to-r from-rose-500 to-orange-300 bg-clip-item item-transparent">
                <IoLogoFigma className="text-6xl  text-rose-900" />
            </div>
        </div>
      </div>
      
      <h1 className="mt-32 mb-10 text-center text-3xl font-mono font-thin text-slate-100">Personal record</h1>
      <div className="flex flex-col items-center pb-24">
          <div className="w-full lg:w-1/2">
            <div className="font-mono text-base font-thin text-slate-300 text-center">
              <p>Name: Rungthiwa Teja</p>
              <p>Major: Computer Science</p>
              <p>D.O.B: 06/01/2003</p>
              <p>Gender: Female</p>
              <p>Language: Thai</p>
              <p>Nationality: Thai</p>
              <p>Religion: Buddhism</p>
              <p>GPA: 3.05</p>

              <h2 className="mt-16 font-semibold text-3xl">Naresuan University</h2>
              <p className="text-base font-thin">Bachelor of Science, Computer Scienc
              <img className='mt-6' src={Nu} alt=''/>
              </p>


            </div>
          </div>
        </div>

      
    </>
  );
};

export default AboutMe;
