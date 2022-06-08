import Link from "next/link";

export const Work = () => {
  return (
    <div className="hero min-h-screen bg-base-100">
      <div className="hero-content px-4 sm:px-8 lg:px-16 xl:px-20 mx-auto">
        <div className="grid grid-cols-1">
          <h1 className="font-bold text-2xl mb-8 md:text-4xl md:mb-12 max-w-xl text-primary leading-tight uppercase">
            Work Experience
          </h1>

          <div>
            <p className="text-lg font-mono italic">March 2021 - Current</p>
            <p className="mb-5 text-2xl font-bold text-secondary">
              Independent - Full stack developer
            </p>
            <p className="mb-5 text-lg font-mono">
              Specialized consulting and development of business solutions
              according to your needs with the help of technologies such as
              React.js / Next.js in the frontend and Node.js / PHP in the
              backend.
            </p>

            <Link href="/">
              <a className="link link-secondary">Learn More</a>
            </Link>
          </div>

          <div className="divider"></div>

          <div>
            <p className="text-lg font-mono italic">
              January 2018 - March 2021
            </p>
            <p className="mb-5 text-2xl font-bold text-secondary">
              Hispanos Soluciones - Full stack developer
            </p>
            <p className="mb-5 text-lg font-mono">
              Project management in various areas such as education and
              business. Playing roles as backend developer with PHP / Laravel,
              CakePHP and MySQL as well as frontend developer with HTML, CSS,
              Javascript, jQuery, Vue.js, Bootstrap and Tailwind CSS.
            </p>

            <Link href="/">
              <a className="link link-secondary">Learn More</a>
            </Link>
          </div>

          <div className="divider"></div>

          <div>
            <p className="text-lg font-mono italic">June 2016 - May 2017</p>
            <p className="mb-5 text-2xl font-bold text-secondary">
              Publi Red 24 - Web Developer
            </p>
            <p className="mb-5 text-lg font-mono">
              Maintain legacy projects, page design with wordpress and project
              creation.
            </p>

            <Link href="/">
              <a className="link link-secondary">Learn More</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
