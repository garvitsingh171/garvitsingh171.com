import type { ReactNode } from "react";
import { MotionConfig } from "motion/react";
import { BrowserRouter } from "react-router-dom";

type AppProvidersProps = {
  children: ReactNode;
};

export function AppProviders({ children }: AppProvidersProps) {
  return (
    <MotionConfig reducedMotion="user">
      <BrowserRouter>{children}</BrowserRouter>
    </MotionConfig>
  );
}
