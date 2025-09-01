"use client";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import React, { forwardRef, useRef } from "react";

export const BackgroundBeamsWithCollision = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const parentRef = useRef<HTMLDivElement>(null);

  const beams = [
    {
      initialX: 10,
      translateX: 10,
      duration: 7,
      repeatDelay: 3,
      delay: 2,
    },
    {
      initialX: 600,
      translateX: 600,
      duration: 3,
      repeatDelay: 3,
      delay: 4,
    },
    {
      initialX: 100,
      translateX: 100,
      duration: 7,
      repeatDelay: 7,
      className: "h-6",
    },
    {
      initialX: 400,
      translateX: 400,
      duration: 5,
      repeatDelay: 14,
      delay: 4,
    },
    {
      initialX: 800,
      translateX: 800,
      duration: 11,
      repeatDelay: 2,
      className: "h-20",
    },
    {
      initialX: 1000,
      translateX: 1000,
      duration: 4,
      repeatDelay: 2,
      className: "h-12",
    },
    {
      initialX: 1200,
      translateX: 1200,
      duration: 6,
      repeatDelay: 4,
      delay: 2,
      className: "h-6",
    },
  ];

  return (
    <div
      ref={parentRef}
      className={cn(
        "h-96 md:h-[40rem] bg-gray-950 relative flex items-center w-full justify-center overflow-hidden",
        // h-96 = 384px, md:h-[40rem] = 640px
        className
      )}
    >
      {beams.map((beam) => (
        <CollisionMechanism
          key={beam.initialX + "beam-idx"}
          beamOptions={beam}
          containerRef={containerRef}
          parentRef={parentRef}
        />
      ))}

      {children}
      <div
        ref={containerRef}
        className="absolute bottom-0 bg-gray-950 w-full h-32 opacity-0 pointer-events-none"
      ></div>
    </div>
  );
};

const CollisionMechanism = forwardRef<
  HTMLDivElement,
  {
    containerRef: React.RefObject<HTMLDivElement>;
    parentRef: React.RefObject<HTMLDivElement>;
    beamOptions?: {
      initialX?: number;
      translateX?: number;
      initialY?: number;
      translateY?: number;
      rotate?: number;
      className?: string;
      duration?: number;
      delay?: number;
      repeatDelay?: number;
    };
  }
>(({ beamOptions = {} }, ref) => {
  const beamRef = useRef<HTMLDivElement>(null);
  const {
    initialX = 0,
    translateX = 0,
    initialY = 0,
    translateY = 0,
    rotate = 0,
    className,
    duration = 2,
    delay = 0,
    repeatDelay = 0,
  } = beamOptions;
  return (
    <>
      <motion.div
        ref={beamRef}
        animate={{
          translateY: translateY,
          translateX: translateX,
          rotate: rotate,
        }}
        transition={{
          duration: duration,
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear",
          delay: delay,
          repeatDelay: repeatDelay,
        }}
        style={{
          translateX: initialX,
          translateY: initialY,
          rotate: rotate,
        }}
        className={cn(
          "absolute left-0 top-20 m-auto h-14 w-px rounded-full bg-gradient-to-t from-indigo-500 via-purple-500 to-transparent",
          className
        )}
      />
    </>
  );
});

CollisionMechanism.displayName = "CollisionMechanism";