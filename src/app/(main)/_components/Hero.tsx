import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="my-12 space-y-8">
      <h1 className="text-3xl font-extrabold">
        The{" "}
        <span className="bg-gradient-to-r from-red-600 to-orange-500 bg-clip-text text-transparent">
          Best
        </span>{" "}
        Online Tools
      </h1>
      <p className="leading-6 text-muted-foreground">
        Here are some free online tools made by{" "}
        <Link href="https://github.com/AkshayMoolya" className="text-white">
          @AkshayMoolya
        </Link>
        . I hope to train my skills. This may be my side project :)
      </p>
      <div className="flex gap-4">
        <Link
          href="#get-started"
          className={buttonVariants({ variant: "secondary" })}
        >
          Get started
        </Link>
        <Link
          href="https://github.com"
          className={buttonVariants({ variant: "outline" })}
        >
          Source code
        </Link>
      </div>
    </div>
  );
};

export default Hero;
