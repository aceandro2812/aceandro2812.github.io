
import { cn } from "@/lib/utils";
import React from "react";

interface MarqueeProps {
  className?: string;
  reverse?: boolean;
  pauseOnHover?: boolean;
  children?: React.ReactNode;
  vertical?: boolean;
  [key: string]: any;
}

export default function Marquee({
  className,
  reverse,
  pauseOnHover = false,
  children,
  vertical = false,
  ...props
}: MarqueeProps) {
  return (
    <div
      {...props}
      className={cn(
        "group flex overflow-hidden p-2 [--duration:40s] [--gap:1rem] [gap:var(--gap)]",
        {
          "flex-row": !vertical,
          "flex-col": vertical,
        },
        className
      )}
    >
      <div
        className={cn("flex shrink-0 justify-around [gap:var(--gap)]", {
          "animate-marquee-left flex-row": !vertical,
          "animate-marquee-up flex-col": vertical,
          "[animation-direction:reverse]": reverse,
          "group-hover:[animation-play-state:paused]": pauseOnHover,
        })}
      >
        {children}
      </div>
      <div
        className={cn("flex shrink-0 justify-around [gap:var(--gap)]", {
          "animate-marquee-left flex-row": !vertical,
          "animate-marquee-up flex-col": vertical,
          "[animation-direction:reverse]": reverse,
          "group-hover:[animation-play-state:paused]": pauseOnHover,
        })}
        aria-hidden="true"
      >
        {children}
      </div>
    </div>
  );
}
