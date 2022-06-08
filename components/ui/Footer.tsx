import { SocialMedia } from "./";
import { ContactButtons } from "./ContactButtons";

export const Footer = () => {
  return (
    <div className="hero h-96 bg-base-200">
      <div className="hero-content px-4 sm:px-8 lg:px-16 xl:px-20 mx-auto">
        <div className="grid grid-cols-1">
          <div className="">
            <p className="mb-5 text-lg font-mono italic">
              Reach out to say hi or follow me
            </p>
            <p className="mb-5 text-2xl font-semibold text-primary">
              hola@gustperx.com
            </p>
            <div className="flex flex-row mb-4">
              <SocialMedia />
            </div>
            <div className="flex mb-6">
              <ContactButtons />
            </div>
            <p className="text-md font-mono">Made with ♥ in Venezuela.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
