import memojiAvatar1 from "@/assets/images/memoji-avatar-1.png";
import memojiAvatar2 from "@/assets/images/memoji-avatar-2.png";
import memojiAvatar3 from "@/assets/images/memoji-avatar-3.png";
import memojiAvatar4 from "@/assets/images/memoji-avatar-4.png";
import memojiAvatar5 from "@/assets/images/memoji-avatar-5.png";
import { SectionHeader } from "@/components/SectionHeader";
import Image from "next/image";
import grainImage from "@/assets/images/grain.jpg";
import { Card } from "@/components/Card";
import { Fragment } from "react";

const testimonials = [
  {
    name: "Adugna Bekele",
    position: "CEO @ EvangadiTech",
    text: "Samson was instrumental at Evangadi. His attention to detail and ability to understand to solve problem is exceptional. We're thrilled with his results!",
    avatar: memojiAvatar1,
  },
  {
    name: "Danny Y.",
    position: "Instractor @ EvangadiTech",
    text: "Working with Samson was a pleasure. His expertise in frontend development brought amazing designs to life in a way we never imagined. The website has exceeded our expectations.",
    avatar: memojiAvatar5,
  },
  {
    name: "Biruk K.",
    position: "Full Stack Engineer @ EvangadiTech ",
    text: "Samson's ability to create seamless user experiences is unmatched. Our freelance projects has seen a significant increase in conversions since launching the new design. We couldn't be happier.",
    avatar: memojiAvatar3,
  },
  {
    name: "Selam G.",
    position: "CEO@ TibebDesign",
    text: "Samson's work on our website has been nothing short of exceptional. He's a talented developer who is also a great communicator. We highly recommend him.",
    avatar: memojiAvatar5,
  },
  {
    name: "Michael Carter",
    position: "Former Client",
    text: "Samson is a true frontend wizard. He took our complex idea and transformed it into an intuitive and engaging user interface. I am already seeing positive feedback after using his application.",
    avatar: memojiAvatar4,
  },
];

export const TestimonialsSection = () => {
  return (
    <div className="py-16 lg:py-24 ">
      <div className="container">
        <SectionHeader
          eyebrows="Happy Clients"
          title="What Clients Say about me"
          description=" Don't just take my word for it.See what people know me have to say about my work"
        />
        <div className=" mt-16 lg:mt-20 flex overflow-x-clip [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] py-4 -my-4  ">
          <div className=" flex gap-8 flex-none animate-move-left [animation-duration:90s] hover:[animation-play-state:paused] ">
            {[...new Array(2)].fill(0).map((_, index) => (
            <Fragment key={index}>
               {testimonials.map((testimonial) => (
                <Card
                  key={testimonial.name}
                  className=" max-w-xs md:max-w-md p-6  md:p-8 hover:-rotate-3 transition duration-300 ">
                  <div className="flex gap-4 items-center">
                    <div className="size-14 bg-gray-700 inline-flex items-center justify-center rounded-full flex-shrink-0 ">
                      <Image
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="max-h-full"
                      />
                    </div>
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className=" text-sm text-white/40 ">
                        {testimonial.position}
                      </div>
                    </div>
                  </div>
                  <p className=" mt-4 md:mt-6 text-sm md:text-base">{testimonial.text}</p>
                </Card>
               ))}
                </Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
