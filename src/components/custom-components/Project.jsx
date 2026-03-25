// importing shadcn ui components
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ArrowUpRight } from "lucide-react";

const Project = ({ project }) => {
  const { id, tag, status, name, description, techStack, github, live } =
    project;

  useGSAP(() => {
    gsap.to(".cards", {
      opacity: 100,
      duration: 0.3,
      stagger: 2,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: "#project",
        start: "top 50%",
        end: "top -40",
        markers: true,
        scrub: true,
      },
    });
  });

  return (
    <Card className="opacity-0 cards flex justify-between relative mx-auto w-full max-w-sm bg-primary border border-stone-600 hover:shadow-2xl hover:shadow-stone-800/50 hover:scale-101 duration-200 cursor-pointer">
      <CardHeader>
        <Badge variant={"secondary"} className={"bg-zinc-400/25 text-white"}>
          {tag}
        </Badge>
        <h2 className="mt-4 text-3xl text-white font-semibold">{name}</h2>
      </CardHeader>
      <CardContent>
        <CardDescription>{description}</CardDescription>
        <div className="my-4 flex flex-wrap gap-2">
          {techStack.length > 0 &&
            techStack.map((stack, index) => (
              <Badge
                variant={"secondary"}
                className={"bg-zinc-400/25 text-white"}
                key={index}
              >
                {stack}
              </Badge>
            ))}
        </div>
      </CardContent>
      {live ? (
        <CardFooter className={"flex items-center justify-between"}>
          <a
            href={github}
            target="_blank"
            className="text-stone-400 hover:text-white transition-colors flex items-center gap-2 hover:scale-105 duration-200"
          >
            Github
            <ArrowUpRight size={18} />
          </a>
          <a
            href={live}
            target="_blank"
            className="text-stone-400 hover:text-white transition-colors flex items-center gap-2 hover:scale-105 duration-200"
          >
            Live
            <ArrowUpRight size={18} />
          </a>
        </CardFooter>
      ) : (
        <CardFooter
          className={"flex items-center justify-center text-gray-400"}
        >
          In Development
        </CardFooter>
      )}
    </Card>
  );
};

export default Project;
