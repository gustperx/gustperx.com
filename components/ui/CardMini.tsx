export const CardMini = () => {
  return (
    <div className="border border-secondary p-4">
      <div className="flex justify-between">
        <i className="fa-solid fa-2x fa-folder text-secondary"></i>
        <div className="grid grid-cols-2 gap-2">
          <i className="fa-brands fa-2x fa-github text-secondary"></i>
          <i className="fa-solid fa-2x fa-arrow-up-right-from-square text-secondary"></i>
        </div>
      </div>
      <div className="flex flex-col">
        <p className="text-sm font-mono font-semibold my-4">Project Name</p>
        <p className="mb-5 text-sm font-mono">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia laborum
          suscipit animi maiores modi
        </p>
        <div>
          <div className="badge badge-secondary badge-outline mr-1">PHP</div>
          <div className="badge badge-secondary badge-outline mr-1">
            Laravel
          </div>
        </div>
      </div>
    </div>
  );
};
