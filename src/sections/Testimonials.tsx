import memojiAvatar1 from "@/assets/images/memoji-avatar-1.png";
import memojiAvatar2 from "@/assets/images/memoji-avatar-2.png";
import memojiAvatar3 from "@/assets/images/memoji-avatar-3.png";
import memojiAvatar4 from "@/assets/images/memoji-avatar-4.png";
import memojiAvatar5 from "@/assets/images/memoji-avatar-5.png";
import Image from "next/image";

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
  }
];

export const TestimonialsSection = () => {
  return <div>
    <p>Happy Clients</p>
    <p>What Clients Say about me</p>
    <p>
      Don't just take my word for it.See what people know me have to say about my work
    </p>
    <div>
      {testimonials.map((testimonial) => (
        <div key={testimonial.name}>
          <Image src={testimonial.avatar} alt={testimonial.name} />
          <div>{testimonial.name}</div>
          <div>{testimonial.position}</div>
          <p>{testimonial.text}</p>
        </div>
        
      ))}
</div>
  </div>;
};
