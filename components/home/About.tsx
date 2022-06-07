import { ContactButtons, SocialMedia } from "../ui";

export const About = () => {
  return (
    <div className="hero min-h-screen bg-base-300">
      <div className="hero-content px-4 sm:px-8 lg:px-16 xl:px-20 mx-auto">
        <div className="grid grid-cols-1">
          <h1 className="font-bold text-4xl mb-8 md:text-6xl md:mb-12 max-w-xl text-primary leading-tight uppercase">
            About me
          </h1>
          <p className="mb-5 text-lg">
            🖥 Systems engineer - 🚀 Full stack Developer
          </p>
          <p className="mb-5 text-lg">Hi 👋🏻</p>
          <p className="mb-5 text-lg">
            I am a full stack developer with more than 6 years of experience. I
            specialize in backend development with PHP and Node.js. I am also an
            enthusiast of frontend development, designing and offering a good
            user experience with React.js, Vue.js and Tailwind CSS.
          </p>
          <div className="flex flex-row my-4">
            <SocialMedia />
          </div>
          <div className="flex">
            <ContactButtons />
          </div>
        </div>
      </div>
    </div>
  );
};
