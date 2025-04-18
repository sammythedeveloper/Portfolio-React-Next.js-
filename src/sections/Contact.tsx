'use client'; 
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import grainImage from "@/assets/images/grain.jpg";

interface SectionProps {
  id: string;
}

const handleConnectClick = () => {
  window.location.href = "mailto:samsondev3@gmail.com?subject=Let's Connect&body=Hello, I would like to connect!";
};

export const ContactSection: React.FC<SectionProps> = ({ id }) => {
  return (
    <div className="py-16 pt-12 lg:py-24 lg:pt-20 relative" id={id} >
      <div className="container">
        <div className="bg-gradient-to-r from-emerald-300 to-sky-400 relative text-gray-900 py-8 px-10 rounded-3xl text-center md:text-left overflow-hidden z-10">
          {/* Background with pointer-events set to none */}
          <div
            className="absolute inset-0 opacity-5 -z-20"
            style={{
              backgroundImage: `url(${grainImage.src})`,
              pointerEvents: 'none', // Ensure the background is not clickable
            }}
          ></div>
          <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center">
            <div>
              <h2 className="font-serif text-2xl md:text-3xl">
                Let's create something amazing together
              </h2>
              <p className="text-sm md:text-base mt-2">
                Ready to bring your next project to life? Let's connect and discuss
                how I can help you achieve your goals.
              </p>
            </div>
            <div>
              {/* Button with higher z-index */}
              <button 
                className="text-white bg-gray-900 inline-flex items-center px-6 h-12 w-max border-gray-900 rounded-xl gap-2 mt-8 z-30"
                onClick={handleConnectClick}
                style={{ position: 'relative', zIndex: 30 }} // Ensures the button is clickable above other elements
              >
                <span className="font-semibold">Contact Me</span>
                <ArrowUpRightIcon className="size-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
