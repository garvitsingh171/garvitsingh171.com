import { Button, Card, SectionHeading } from "../components/ui";

export default function Home() {
  return (
    <section className="space-y-8">
      <SectionHeading
        label="Welcome"
        title="Garvit Singh"
        description="Software Product Engineering student building practical web projects."
      />

      <div className="flex flex-wrap gap-3">
        <Button>View Projects</Button>
        <Button variant="outline">Contact Me</Button>
      </div>

      <Card
        title="Reusable UI Foundation"
        description="This card is using the reusable Card component."
      />
    </section>
  );
}
