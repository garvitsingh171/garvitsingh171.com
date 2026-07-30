import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { AppProviders } from "@/providers/providers";
import { AppRouter } from "@/routes/router";

export default function App() {
  return (
    <AppProviders>
      <AppRouter />
      <Analytics />
      <SpeedInsights />
    </AppProviders>
  );
}
