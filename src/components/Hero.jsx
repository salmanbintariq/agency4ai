import assets from "../assets/assets";

const Hero = () => {
  return (
    <div
      id="hero"
      className="flex flex-col items-center gap-5 px-4 py-20 sm:px-12 lg:px-24 xl:px-40
      text-center text-gray-700 w-full overflow-hidden dark:text-white"
    >

      <div className="inline-flex items-center gap-2 border border-gray-300 p-1.5 pr-4 rounded-full">
        <img className="w-20" src={assets.group_profile} alt="" />
        <p className="text-xs font-medium">Trusted by 10k+ People</p>
      </div>

      <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-[84px] font-medium xl:leading-23.75 max-w-5xl">
        Turning imagination into{" "}
        <span className="bg-linear-to-r from-primary to-[#4d8cea] bg-clip-text text-transparent">
          digital
        </span>{" "}
        impact.
      </h1>

      <p className="text-sm sm:text-lg font-medium text-gray-500 dark:text-white/75 max-w-4/5 sm:max-w-lg pb-3">Creating meaningful connections and turning big ideas into interactive digital experiences.</p>
    </div>
  );
};

export default Hero;
