import type { MotionProps } from "motion/react";

type MotionTransition = NonNullable<MotionProps["transition"]>;
type MotionVariants = NonNullable<MotionProps["variants"]>;
type MotionViewport = NonNullable<MotionProps["viewport"]>;

const standardEase = [0.2, 0, 0, 1] as [number, number, number, number];
const revealEase = [0.16, 1, 0.3, 1] as [number, number, number, number];
const exitEase = [0.4, 0, 1, 1] as [number, number, number, number];

export const animationTokens = {
  duration: {
    fast: 0.18,
    standard: 0.32,
    page: 0.42,
    heroHeading: 0.62,
    reveal: 0.56,
    exit: 0.16,
  },
  distance: {
    small: 10,
    standard: 22,
    prominent: 34,
  },
  stagger: {
    hero: 0.085,
    list: 0.055,
    grid: 0.045,
    menu: 0.035,
  },
  card: {
    hoverY: -5,
    focusY: -3,
    hoverScale: 1.01,
    focusScale: 1.007,
    imageHoverScale: 1.035,
  },
  button: {
    hoverY: -2,
    tapScale: 0.98,
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
  page: {
    duration: animationTokens.duration.page,
    ease: revealEase,
  },
  exit: {
    duration: animationTokens.duration.exit,
    ease: exitEase,
  },
} satisfies Record<string, MotionTransition>;

export const sectionViewport = {
  once: true,
  amount: 0.16,
  margin: "0px 0px -10% 0px",
} satisfies MotionViewport;

export const staggerViewport = {
  once: true,
  amount: 0.12,
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

export const pageTransitionVariants = {
  hidden: {
    opacity: 0,
    y: animationTokens.distance.standard,
    scale: 0.995,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: animationTransitions.page,
  },
  exit: {
    opacity: 0,
    y: -animationTokens.distance.small,
    transition: animationTransitions.exit,
  },
} satisfies MotionVariants;

export const staggerContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: animationTokens.stagger.grid,
      delayChildren: 0.04,
    },
  },
} satisfies MotionVariants;

export const staggerItemVariants = {
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
      delayChildren: 0.04,
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

export const heroHeadingVariants = {
  hidden: {
    opacity: 0,
    y: animationTokens.distance.prominent,
    scale: 0.992,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      ...animationTransitions.reveal,
      duration: animationTokens.duration.heroHeading,
    },
  },
} satisfies MotionVariants;

export const heroVisualVariants = {
  hidden: {
    opacity: 0,
    y: animationTokens.distance.prominent,
    scale: 0.965,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      ...animationTransitions.reveal,
      delay: 0.18,
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
  tap: {
    y: 0,
    scale: 0.992,
    transition: animationTransitions.fast,
  },
} satisfies MotionVariants;

export const mobileMenuVariants = {
  hidden: {
    opacity: 0,
    y: -10,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      ...animationTransitions.entrance,
      staggerChildren: animationTokens.stagger.menu,
      delayChildren: 0.03,
    },
  },
  exit: {
    opacity: 0,
    y: -8,
    transition: animationTransitions.exit,
  },
} satisfies MotionVariants;

export const mobileMenuListVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: animationTokens.stagger.menu,
      delayChildren: 0.03,
    },
  },
  exit: {
    transition: {
      staggerChildren: animationTokens.stagger.menu,
      staggerDirection: -1,
    },
  },
} satisfies MotionVariants;

export const mobileMenuItemVariants = {
  hidden: {
    opacity: 0,
    x: -8,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: animationTransitions.entrance,
  },
  exit: {
    opacity: 0,
    x: -4,
    transition: animationTransitions.exit,
  },
} satisfies MotionVariants;

export const themeIconVariants = {
  hidden: {
    opacity: 0,
    rotate: -30,
    scale: 0.84,
  },
  visible: {
    opacity: 1,
    rotate: 0,
    scale: 1,
    transition: animationTransitions.fast,
  },
  exit: {
    opacity: 0,
    rotate: 30,
    scale: 0.84,
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
