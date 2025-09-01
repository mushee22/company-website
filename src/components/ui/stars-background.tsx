"use client";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import React, { useRef, useState } from "react";

export const StarsBackground = ({
  starDensity = 0.00015,
  allStarsTwinkle = true,
  twinkleProbability = 0.7,
  minTwinkleSpeed = 0.5,
  maxTwinkleSpeed = 1,
  className,
}: {
  starDensity?: number;
  allStarsTwinkle?: boolean;
  twinkleProbability?: number;
  minTwinkleSpeed?: number;
  maxTwinkleSpeed?: number;
  className?: string;
}) => {
  const [stars, setStars] = useState<
    {
      id: number;
      x: number;
      y: number;
      size: number;
      twinkleSpeed: number | null;
    }[]
  >([]);
  const containerRef = useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const starCount = Math.floor(rect.width * rect.height * starDensity);
      const newStars = Array.from({ length: starCount }, (_, i) => {
        const shouldTwinkle = allStarsTwinkle || Math.random() < twinkleProbability;
        return {
          id: i,
          x: Math.random() * rect.width,
          y: Math.random() * rect.height,
          size: Math.random() * 2 + 1,
          twinkleSpeed: shouldTwinkle
            ? minTwinkleSpeed +
              Math.random() * (maxTwinkleSpeed - minTwinkleSpeed)
            : null,
        };
      });
      setStars(newStars);
    }
  }, [
    starDensity,
    allStarsTwinkle,
    twinkleProbability,
    minTwinkleSpeed,
    maxTwinkleSpeed,
  ]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "absolute inset-0 h-full w-full",
        className
      )}
    >
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute bg-white rounded-full"
          style={{
            left: star.x,
            top: star.y,
            width: star.size,
            height: star.size,
          }}
          animate={
            star.twinkleSpeed !== null
              ? {
                  opacity: [0.5, 1, 0.5],
                  scale: [1, 1.2, 1],
                }
              : {}
          }
          transition={
            star.twinkleSpeed !== null
              ? {
                  duration: star.twinkleSpeed,
                  repeat: Infinity,
                  ease: "easeInOut",
                }
              : {}
          }
        />
      ))}
    </div>
  );
};