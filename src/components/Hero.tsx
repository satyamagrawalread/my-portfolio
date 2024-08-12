import { HERO_CONTENT } from "../constants/index";
import profilePic from "../assets/SatyamAgrawalProfile.jpg";
const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-3.5">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <h1 className="text-center pb-16 text-5xl font-thin tracking-tight lg:mt-16 lg:text-8xl">
              Satyam Agrawal
            </h1>
            <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">
              Full Stack Developer
            </span>
            <p className="my-2 max-w-xl py-6 tracking-tighter">
              {HERO_CONTENT}
            </p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <img className="rounded-2xl" src={profilePic} alt="Profile Pic" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
