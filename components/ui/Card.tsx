export const Card = () => {
  return (
    <div className="max-w-sm bg-base-100 rounded-lg shadow-md">
      <img
        className="rounded-t-lg"
        src="https://api.lorem.space/image/shoes?w=400&h=300"
        alt=""
      />

      <div className="p-5">
        <h5 className="mb-2 text-xl font-bold tracking-tight font-mono">
          Project 1
        </h5>

        <p className="mb-3 font-mono">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit non
          optio, quis a eaque nam doloribus explicabo amet mollitia.
        </p>

        <div className="mb-4">
          <div className="badge badge-secondary badge-outline mr-1">PHP</div>
          <div className="badge badge-secondary badge-outline mr-1">
            Laravel
          </div>
        </div>

        <a href="#" className="btn btn-outline">
          <span className="mr-1">Read more</span>
          <i className="fa-solid fa-arrow-right-long"></i>
        </a>
      </div>
    </div>
  );
};
