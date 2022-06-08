import { ContactButtons, SocialMedia } from "../ui";

export const About = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content px-4 sm:px-8 lg:px-16 xl:px-20 mx-auto">
        <div className="grid grid-cols-1 my-4 md:my-12">
          <h1 className="font-bold text-2xl mb-8 md:text-4xl md:mb-12 max-w-xl text-primary leading-tight uppercase">
            About me
          </h1>
          <p className="mb-5 text-lg font-mono">Hi 👋🏻</p>
          <p className="mb-5 text-lg font-mono">
            I am a full stack developer with more than 6 years of experience. I
            specialize in backend development with PHP and Node.js, currently
            taking my first steps with Python/Django. I am also an enthusiast of
            frontend development, designing and offering a good user experience
            with React.js, Vue.js and Tailwind CSS.
          </p>
          <p className="mb-5 text-lg font-mono">
            I am passionate about technology, continuous learning, project
            management, team leadership and turning ideas into functional
            products.
          </p>
          <p className="mb-5 text-lg font-mono">
            With the use of agile methodologies, my experience in project
            management, software development and my academic background in
            systems engineering I can help you turn your ideas into functional
            applications with high value, meet the objectives and expected
            results in the shortest possible time.
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
