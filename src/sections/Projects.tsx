import Finance from "@/assets/images/finance.jpg";
import Amazon from "@/assets/images/amazon.jpg";
import aiStartupLandingPage from "@/assets/images/ai-startup-landing-page.png";
import Image from "next/image";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import grainImage from "@/assets/images/grain.jpg";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import Movie from "@/assets/images/movie.jpg";

const portfolioProjects = [
  {
    company: "Demo Hybrid Fincials",
    year: "",
    title: "Personal-expense-tracking Application",
    results: [
      { title: "Track personal expense" },
      { title: "Catagorize and list expenses" },
      { title: "Boost money saving & spending by 80%" },
    ],
    link: "https://sammythedeveloper.github.io/Personal-Expense-Tracker/",
    image: Finance,
  },
  {
    company: "EvangadiTech",
    year: "",
    title: "Amazon Shopping",
    results: [
      { title: "Interactive design" },
      { title: "Secure User Authentication" },
      { title: "Payment Tokenization" },
    ],
    link: "https://sammythedeveloper.github.io/amazonclone-2023/",
    image: Amazon ,
  },
  {
    company: "Coming soon",
    year: "2024",
    title: "Movie review app",
    results: [
      { title: "Build with Java & Springboot" },
      { title: "Fetchdata and to MongoDB" },
      { title: "Post request to review a movie" },
    ],
    link: "#",
    image: Movie,
  },
];
interface SectionProps {
  id: string;
}


export const ProjectsSection: React.FC<SectionProps> = ({ id })  => {
  return (
    <section className="pb-16 lg:py-24 " id={id} >
      <div className="container">
        <SectionHeader
          eyebrows="   Real-world Results"
          title="  Featured Projects"
          description="See how I transform concepts into engaging digital experiences."
        />
        <div className="flex justify-center">
          <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-center bg-clip-text text-transparent   "></p>
        </div>
        <h2 className="font-serif text-3xl md:text-5xl text-center m-6"></h2>
        <p className=" text-center md:text-lg lg:text-xl text-white/60 mt-4 max-w-md mx-auto "></p>
        <div className=" mt-10 md:mt-20 flex flex-col gap-20">
          {portfolioProjects.map((project, projectIndex) => (
            <Card
              key={project.title}
              className="px-8 pt-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20 sticky"
              style={{
                top: `calc(64px + ${projectIndex * 40}px`,
              }}
            >
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                  <div className=" bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
                    <span>{project.company}</span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </div>
                  <h3 className=" font-serif text-2xl mt-2 md:mt-5 md:text-4xl ">
                    {project.title}
                  </h3>
                  <hr className="border-t-2 border-white/5 mt-4 md:mt-5 " />
                  <ul className=" flex flex-col gap-4 mt-4 md:mt-5 ">
                    {project.results.map((result) => (
                      <li className="flex gap-2 text-sm md:text-base text-white/50">
                        <CheckCircleIcon className="size-5 md:size-6 " />
                        <span> {result.title}</span>
                      </li>
                    ))}
                  </ul>
                  <a href={project.link}>
                    <button className="bg-white text-gray-950 h-12 w-full md:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8 ">
                      <span>Visit Live Site</span>
                      <ArrowUpRightIcon className="size-4" />
                    </button>
                  </a>
                </div>
                <div>
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none"
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
