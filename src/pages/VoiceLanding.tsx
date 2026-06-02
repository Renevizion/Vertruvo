import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2, PhoneCall, MessageSquareText, CalendarCheck2 } from "lucide-react";
import { productProfile } from "@/config/productProfile";

const VoiceLanding = () => {
  const navigate = useNavigate();

  const pillars = [
    {
      icon: PhoneCall,
      title: "AI voice agent",
      description: "Answer every inbound call 24/7 and route urgent calls when needed.",
    },
    {
      icon: MessageSquareText,
      title: "Missed-call text back",
      description: "Automatically text every missed caller in under 60 seconds.",
    },
    {
      icon: CalendarCheck2,
      title: "Booking link handoff",
      description: "Convert calls and texts into booked appointments from one simple flow.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>{productProfile.brandName} — AI Voice Answering That Books Jobs</title>
        <meta
          name="description"
          content={`${productProfile.brandName} handles inbound calls, missed-call text back, and booking links for service businesses.`}
        />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
        <header className="border-b bg-background/90">
          <div className="container mx-auto px-4 py-4 flex items-center justify-between">
            <div>
              <p className="text-2xl font-bold">{productProfile.brandName}</p>
              <p className="text-xs text-muted-foreground">
                Powered by {productProfile.platformBrandName}'s platform engine
              </p>
            </div>
            <div className="flex gap-3">
              <Button variant="ghost" onClick={() => navigate("/auth")}>Sign In</Button>
              <Button onClick={() => navigate("/auth")}>Get Started</Button>
            </div>
          </div>
        </header>

        <section className="container mx-auto px-4 py-20 text-center">
          <p className="text-sm font-semibold text-primary mb-3">Focused voice product for service teams</p>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Never miss another call-to-booking moment.</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            {productProfile.brandName} is intentionally narrow: AI voice answering, missed-call text back, and booking link handoff.
            No extra modules. No CRM overload.
          </p>
          <div className="flex justify-center gap-3">
            <Button size="lg" onClick={() => navigate("/auth")}>Start Free Trial</Button>
            <Button size="lg" variant="outline" onClick={() => navigate("/pricing")}>See Usage Pricing</Button>
          </div>
        </section>

        <section className="container mx-auto px-4 pb-20 grid md:grid-cols-3 gap-6">
          {pillars.map((pillar) => (
            <Card key={pillar.title} className="p-6">
              <pillar.icon className="w-10 h-10 text-primary mb-4" />
              <h2 className="text-xl font-semibold mb-2">{pillar.title}</h2>
              <p className="text-muted-foreground">{pillar.description}</p>
            </Card>
          ))}
        </section>

        <section className="container mx-auto px-4 pb-24">
          <Card className="p-8">
            <h3 className="text-2xl font-semibold mb-4">What stays out on purpose</h3>
            <ul className="space-y-3">
              {[
                "No pipeline boards or campaign builders in this product",
                "No social/content tooling in this product",
                "No optional upsell screens that distract from phone conversion",
              ].map((line) => (
                <li key={line} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          </Card>
        </section>
      </div>
    </>
  );
};

export default VoiceLanding;
