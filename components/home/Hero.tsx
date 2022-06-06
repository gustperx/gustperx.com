import Image from "next/image";

export const Hero = () => {
  return (
    <div className="hero min-h-screen bg-base-100">
      <div className="hero-content px-4 sm:px-8 lg:px-16 xl:px-20 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="col-span-6">
            <h1 className="font-bold text-4xl md:text-6xl max-w-xl text-primary leading-tight">
              Gustavo Perez
            </h1>
            <h3 className="font-bold text-2xl mt-2 md:text-4xl max-w-xl leading-tight">
              Full Stack Developer
            </h3>
            <hr className="w-12 h-1 bg-orange-500 rounded-full mt-8" />
            <p className=" leading-relaxed mt-8">
              I am a full stack developer with more than 5 years of experience.
              I specialize in backend development with PHP and Node.js. I am
              also an enthusiast of frontend development, designing and offering
              a good user experience with React.js, Vue.js and Tailwind CSS.
            </p>
            <a className="btn btn-outline btn-secondary mt-4 w-40 mr-2">
              Contact me
            </a>
            <a className="btn btn-outline btn-secondary mt-4 w-40">Resume</a>
          </div>
          <div className="col-span-6">
            <Image src="/img/developer.svg" width={600} height={600} />
          </div>
        </div>
      </div>
    </div>
  );
};
