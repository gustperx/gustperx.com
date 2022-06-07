import Image from "next/image";

export const PresentationUser = () => {
  return (
    <div className="mask mask-hexagon">
      <Image
        src="https://via.placeholder.com/500x500/28333E.png"
        width={500}
        height={500}
      />
    </div>
  );
};
