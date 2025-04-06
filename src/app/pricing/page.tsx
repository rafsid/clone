import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function PricingPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />

      <div className="container max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Pricing as <span className="modal-gradient-text">magical</span> as our product
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            With Modal, you always pay for what you use and nothing more. You never pay for idle resources — just actual compute time, by the CPU cycle.
          </p>
        </div>

        {/* Pricing Tables */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Starter Plan */}
          <div className="border border-border rounded-lg overflow-hidden bg-card/30 backdrop-blur-sm">
            <div className="p-6 border-b border-border">
              <h3 className="text-xl font-semibold mb-2">Starter</h3>
              <div className="flex items-baseline mb-4">
                <span className="text-3xl font-bold">$0</span>
                <span className="text-muted-foreground ml-2">+ compute / month</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Built for small teams and independent developers looking to level up.
              </p>
            </div>
            <div className="p-6">
              <Button asChild className="w-full mb-6" variant="default">
                <Link href="/signup">Get Started</Link>
              </Button>
              <ul className="space-y-3">
                <PricingFeature text="$30 / month free credits" />
                <PricingFeature text="3 workspace seats included" />
                <PricingFeature text="100 containers + 10 GPU concurrency" />
                <PricingFeature text="Crons and web endpoints (limited)" />
                <PricingFeature text="Real-time metrics and logs" />
                <PricingFeature text="Region selection" />
              </ul>
            </div>
          </div>

          {/* Team Plan */}
          <div className="border border-primary rounded-lg overflow-hidden bg-card/30 backdrop-blur-sm relative">
            <div className="absolute top-0 right-0 bg-primary text-primary-foreground text-xs px-3 py-1 rounded-bl">
              Popular
            </div>
            <div className="p-6 border-b border-border">
              <h3 className="text-xl font-semibold mb-2">Team</h3>
              <div className="flex items-baseline mb-4">
                <span className="text-3xl font-bold">$250</span>
                <span className="text-muted-foreground ml-2">+ compute / month</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Built for startups and larger organizations looking to scale quickly.
              </p>
            </div>
            <div className="p-6">
              <Button asChild className="w-full mb-6" variant="default">
                <Link href="/login">Sign in to upgrade</Link>
              </Button>
              <ul className="space-y-3">
                <PricingFeature text="$100 / month free credits" />
                <PricingFeature text="Unlimited seats" />
                <PricingFeature text="1000 containers + 50 GPU concurrency" />
                <PricingFeature text="Unlimited crons and web endpoints" />
                <PricingFeature text="Custom domains" />
                <PricingFeature text="Static IP proxy" />
                <PricingFeature text="Deployment rollbacks" />
              </ul>
            </div>
          </div>

          {/* Enterprise Plan */}
          <div className="border border-border rounded-lg overflow-hidden bg-card/30 backdrop-blur-sm">
            <div className="p-6 border-b border-border">
              <h3 className="text-xl font-semibold mb-2">Enterprise</h3>
              <div className="flex items-baseline mb-4">
                <span className="text-3xl font-bold">Custom</span>
              </div>
              <p className="text-sm text-muted-foreground">
                For organizations prioritizing security, support, and everlasting confidence.
              </p>
            </div>
            <div className="p-6">
              <Button asChild className="w-full mb-6" variant="outline">
                <Link href="https://form.fillout.com/t/onUBuQZ5vCus" target="_blank">Get in touch</Link>
              </Button>
              <ul className="space-y-3">
                <PricingFeature text="Volume-based pricing" />
                <PricingFeature text="Unlimited seats" />
                <PricingFeature text="Custom GPU concurrency" />
                <PricingFeature text="Support via private Slack" />
                <PricingFeature text="Personalized integration help" />
                <PricingFeature text="Audit logs, Okta SSO, and HIPAA" />
              </ul>
            </div>
          </div>
        </div>

        {/* Compute Costs */}
        <div className="bg-card/20 border border-border rounded-lg p-6 mb-16">
          <h2 className="text-2xl font-semibold mb-6">Compute costs</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-medium mb-4">GPU Tasks</h3>
              <div className="space-y-3">
                <PricingRow label="Nvidia H100" price="$0.001097 / sec" />
                <PricingRow label="Nvidia A100, 80 GB" price="$0.000694 / sec" />
                <PricingRow label="Nvidia A100, 40 GB" price="$0.000583 / sec" />
                <PricingRow label="Nvidia L40S" price="$0.000542 / sec" />
                <PricingRow label="Nvidia A10G" price="$0.000306 / sec" />
                <PricingRow label="Nvidia L4" price="$0.000222 / sec" />
                <PricingRow label="Nvidia T4" price="$0.000164 / sec" />
              </div>
            </div>
            <div>
              <div className="mb-8">
                <h3 className="text-lg font-medium mb-4">CPU</h3>
                <PricingRow
                  label="Physical core (2 vCPU equivalent)"
                  price="$0.0000131 / core / sec"
                  note="*minimum of 0.125 cores per container"
                />
              </div>
              <div>
                <h3 className="text-lg font-medium mb-4">Memory</h3>
                <PricingRow label="" price="$0.00000222 / GiB / sec" />
              </div>
            </div>
          </div>
        </div>

        {/* Startup & AWS Credits */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-r from-primary/20 to-primary/10 rounded-lg p-6 border border-primary/30">
            <h3 className="text-xl font-semibold mb-2">Get up to $50k in free credits</h3>
            <p className="mb-4 text-muted-foreground">
              Startups and academic researchers can receive up to $50k in free credits on Modal. The credits can be used on both GPU and CPU compute.
            </p>
            <Button asChild variant="outline" className="bg-background/50">
              <Link href="/signup">Apply now</Link>
            </Button>
          </div>
          <div className="bg-card/20 border border-border rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-2">Use committed spend on Modal</h3>
            <p className="mb-4 text-muted-foreground">
              You can use committed AWS spend on Modal via AWS Marketplace. Coming soon to Google Cloud Marketplace.
            </p>
            <Button asChild variant="outline">
              <Link href="/contact">Learn more</Link>
            </Button>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}

function PricingFeature({ text }: { text: string }) {
  return (
    <li className="flex items-center gap-2">
      <CheckIcon className="h-5 w-5 text-primary flex-shrink-0" />
      <span className="text-sm">{text}</span>
    </li>
  );
}

function PricingRow({ label, price, note }: { label: string; price: string; note?: string }) {
  return (
    <div>
      <div className="flex justify-between items-center py-1">
        <span className="text-sm font-medium">{label}</span>
        <span className="text-sm font-mono">{price}</span>
      </div>
      {note && <p className="text-xs text-muted-foreground mt-1">{note}</p>}
    </div>
  );
}

function CheckIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}
