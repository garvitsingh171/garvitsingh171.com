import type { MotionProps } from "motion/react";

type MotionTransition = NonNullable<MotionProps["transition"]>;
type MotionVariants = NonNullable<MotionProps["variants"]>;
type MotionViewport = NonNullable<MotionProps["viewport"]>;

const standardEase = [0.2, 0, 0, 1] as [number, number, number, number];
const revealEase = [0.16, 1, 0.3, 1] as [number, number, number, number];

export const animationTokens = {
  duration: {
    fast: 0.18,
    standard: 0.34,
    reveal: 0.5,
  },
  distance: {
    small: 12,
    standard: 18,
  },
  stagger: {
    hero: 0.06,
  },
  card: {
    hoverY: -4,
    focusY: -3,
    hoverScale: 1.008,
    focusScale: 1.006,
    imageHoverScale: 1.025,
  },
} as const;

export const animationTransitions = {
  fast: {
    duration: animationTokens.duration.fast,
    ease: standardEase,
  },
  entrance: {
    duration: animationTokens.duration.standard,
    ease: revealEase,
  },
  reveal: {
    duration: animationTokens.duration.reveal,
    ease: revealEase,
  },
} satisfies Record<string, MotionTransition>;

export const sectionViewport = {
  once: true,
  amount: 0.18,
  margin: "0px 0px -8% 0px",
} satisfies MotionViewport;

export const sectionRevealVariants = {
  hidden: {
    opacity: 0,
    y: animationTokens.distance.standard,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: animationTransitions.reveal,
  },
} satisfies MotionVariants;

export const heroContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: animationTokens.stagger.hero,
      delayChildren: 0.02,
    },
  },
} satisfies MotionVariants;

export const heroItemVariants = {
  hidden: {
    opacity: 0,
    y: animationTokens.distance.small,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: animationTransitions.entrance,
  },
} satisfies MotionVariants;

export const heroVisualVariants = {
  hidden: {
    opacity: 0,
    y: animationTokens.distance.standard,
    scale: 0.985,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      ...animationTransitions.reveal,
      delay: 0.12,
    },
  },
} satisfies MotionVariants;

export const cardInteractionVariants = {
  rest: {
    y: 0,
    scale: 1,
  },
  hover: {
    y: animationTokens.card.hoverY,
    scale: animationTokens.card.hoverScale,
    transition: animationTransitions.fast,
  },
  focus: {
    y: animationTokens.card.focusY,
    scale: animationTokens.card.focusScale,
    transition: animationTransitions.fast,
  },
} satisfies MotionVariants;

export const cardMediaVariants = {
  rest: {
    scale: 1,
  },
  hover: {
    scale: animationTokens.card.imageHoverScale,
    transition: animationTransitions.fast,
  },
  focus: {
    scale: animationTokens.card.imageHoverScale,
    transition: animationTransitions.fast,
  },
} satisfies MotionVariants;
