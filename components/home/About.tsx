export const About = () => {
  return (
    <div className="hero min-h-screen bg-base-300">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <div className="avatar">
            <div className="w-52 mask mask-hexagon">
              <img src="https://res.cloudinary.com/dpfdgvz5b/image/upload/v1645481860/me/wqhrzgamalb9kl7nwifu.png" />
            </div>
          </div>
          <h1 className="text-3xl font-bold my-4">Gustavo Perez</h1>
          <p className="mb-5">🖥 Ing. en sistemas | 🚀 Full Stack Developer</p>

          <div className="flex flex-row justify-center my-4">
            <div className="mx-2">
              <a href="">
                <i className="fa-brands fa-2x fa-twitter"></i>
              </a>
            </div>
            <div className="mx-2">
              <a href="">
                <i className="fa-brands fa-2x fa-github"></i>
              </a>
            </div>
            <div className="mx-2">
              <a href="">
                <i className="fa-brands fa-2x fa-linkedin"></i>
              </a>
            </div>
          </div>

          <p className="mb-5">
            I am a full stack developer with more than 5 years of experience. I
            specialize in backend development with PHP and Node.js. I am also an
            enthusiast of frontend development, designing and offering a good
            user experience with React.js, Vue.js and Tailwind CSS.
          </p>
          <a className="btn btn-outline btn-secondary mt-4 w-40 mr-2">
            Contact me
          </a>
          <a className="btn btn-outline btn-secondary mt-4 w-40">Resume</a>
        </div>
      </div>
    </div>
  );
};
