import Nav from "./Nav";
import { FaFacebook } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import F from '../assets/F.png'
import G from '../assets/G.png'

function Experience() {
  return (
    <>
      <Nav />
      <div className="flex flex-wrap justify-center items-center gap-20 mt-20 border-4 rounded-xl mx-8 py-5">
        <h className="text-slate-300 text-xl text-center">You can follow our work here!!</h>
        <a href="https://web.facebook.com/rungthiwa.teja.9/" target="_blank">
          <FaFacebook className="text-6xl text-blue-400" />
        </a>
        <img  src={F} alt=''/>


        <h className="text-slate-300 text-xl text-center">You can follow our work here!!</h>
        <a href="https://github.com/Rungthiwa-git" target="_blank">
          <FaGithub className="text-6xl text-gray-300" />
        </a>
        <img  src={G} alt=''/>

      </div>
    </>
  );
}

export default Experience;
