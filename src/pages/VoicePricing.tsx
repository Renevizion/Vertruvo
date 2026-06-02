import { useMemo, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { CheckCircle2 } from "lucide-react";
import { productProfile } from "@/config/productProfile";

const tiers = [
  {
    name: "Starter",
    monthly: 99,
    includedMinutes: 300,
    features: ["1 business number", "AI call answering", "Missed-call text back", "Booking link handoff"],
  },
  {
    name: "Pro",
    monthly: 199,
    includedMinutes: 800,
    features: ["Everything in Starter", "Call summaries", "Basic call routing", "Priority support"],
    popular: true,
  },
  {
    name: "Growth",
    monthly: 349,
    includedMinutes: 1600,
    features: ["Everything in Pro", "Multi-location support", "Advanced routing", "Dedicated onboarding"],
  },
];

const VoicePricing = () => {
  const navigate = useNavigate();
  const [minutes, setMinutes] = useState(800);

  const estimate = useMemo(() => {
    return tiers.map((tier) => {
      const overageMinutes = Math.max(0, minutes - tier.includedMinutes);
      const total = tier.monthly + (overageMinutes * productProfile.voiceOveragePerMinute);
      return {
        tier: tier.name,
        overageMinutes,
        total: Math.round(total),
      };
    });
  }, [minutes]);

  return (
    <>
      <Helmet>
        <title>{productProfile.brandName} Pricing — Voice Usage Plans</title>
        <meta
          name="description"
          content={`${productProfile.brandName} usage-based pricing with included voice minutes and transparent overage rates.`}
        />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
        <header className="border-b bg-background/90">
          <div className="container mx-auto px-4 py-4 flex items-center justify-between">
            <h1 className="text-2xl font-bold">{productProfile.brandName}</h1>
            <div className="flex gap-3">
              <Button variant="ghost" onClick={() => navigate("/")}>Back</Button>
              <Button onClick={() => navigate("/auth")}>Start Free Trial</Button>
            </div>
          </div>
        </header>

        <section className="container mx-auto px-4 py-16 text-center">
          <h2 className="text-4xl font-bold mb-4">Transparent voice economics</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Every plan includes a minute bundle. If you exceed it, overage is billed at
            {" "}<strong>${productProfile.voiceOveragePerMinute.toFixed(2)}/minute</strong>.
            This keeps pricing predictable for you and sustainable for us.
          </p>
        </section>

        <section className="container mx-auto px-4 pb-16 grid md:grid-cols-3 gap-6">
          {tiers.map((tier) => (
            <Card key={tier.name} className={`p-6 ${tier.popular ? "border-primary shadow-lg" : ""}`}>
              <h3 className="text-2xl font-semibold mb-2">{tier.name}</h3>
              <p className="text-4xl font-bold mb-1">${tier.monthly}<span className="text-base font-normal text-muted-foreground">/mo</span></p>
              <p className="text-sm text-muted-foreground mb-4">{tier.includedMinutes} included voice minutes</p>
              <ul className="space-y-2 mb-6">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 mt-0.5 text-primary" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button className="w-full" onClick={() => navigate(`/auth?tier=${tier.name.toLowerCase()}`)}>
                Start Free Trial
              </Button>
            </Card>
          ))}
        </section>

        <section className="container mx-auto px-4 pb-20">
          <Card className="p-8">
            <h3 className="text-xl font-semibold mb-2">Monthly cost estimator</h3>
            <p className="text-sm text-muted-foreground mb-6">Estimate your spend using expected AI voice minutes.</p>
            <div className="max-w-2xl">
              <p className="mb-3 text-sm">Expected usage: <strong>{minutes} minutes / month</strong></p>
              <Slider
                value={[minutes]}
                min={100}
                max={3000}
                step={50}
                onValueChange={(value) => {
                  if (value[0] !== undefined) setMinutes(value[0]);
                }}
                className="mb-6"
              />
              <div className="grid sm:grid-cols-3 gap-3">
                {estimate.map((row) => (
                  <div key={row.tier} className="rounded-md border p-3">
                    <p className="font-medium">{row.tier}</p>
                    <p className="text-sm text-muted-foreground">{row.overageMinutes} overage minutes</p>
                    <p className="text-lg font-semibold mt-1">${row.total}/mo est.</p>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </section>
      </div>
    </>
  );
};

export default VoicePricing;
