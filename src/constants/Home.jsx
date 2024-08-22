import { useState } from 'react';
import Nav from "./Nav";
import P1 from '../assets/P1.jpg';
import Popup from './Popup';
import R from '../assets/R.jpg'


function Home() {
  // สร้างสถานะสำหรับการควบคุม Popup
  const [buttonPopup, setButtonPopup] = useState(false);

  return (
    <>
      <Nav />
      <div className="text-slate-50 flex items-center flex-col gap-9">
        <img className="h-80 mt-24 rounded-full" src={P1} alt=""/>
        <h1 className="text-center w-8/12 text-4xl font-semibold">
          Interested in the position: <span className="bg-gradient-to-r from-rose-500 to-orange-300 bg-clip-text text-transparent font-bold text-6xl">Web Developer</span>
        </h1>
        <p className="my-2 font-light w-6/12 text-center">
          I am currently pursuing a major in Computer Science. 
          I am actively seeking an internship opportunity that aligns with my 
          existing skills. At present, I am particularly interested in roles 
          related to web development, as I am eager to enhance my abilities and 
          contribute to the success of the organization., Ltd
        </p>
        <button className="px-6 py-2 mb-32 border-4 rounded-xl text-2xl cursor-pointer hover:border-rose-400" onClick={() => setButtonPopup(true)}>
          Resume
        </button>

        <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
          <img className='min-[560px]:h-screen ' src={R} alt=''/>
        </Popup>
      </div>
    </>
  );
}

export default Home;
