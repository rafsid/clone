import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export default function LanguageModelsPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />

      <div className="container max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Serve <span className="modal-gradient-text">Language Models</span> at scale
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mb-8">
            Scale your inference to thousands of requests seamlessly with Modal. Deploy pre-trained language models and run fine-tuning jobs with minimal configuration.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button asChild size="lg">
              <Link href="/signup">Get Started</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/docs">Read the Docs</Link>
            </Button>
          </div>
        </div>

        {/* Key Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <FeatureCard
            title="Instant Scaling"
            description="Scale from zero to thousands of containers in seconds, and back down to zero when traffic decreases."
            icon={<ScaleIcon className="w-12 h-12 text-primary" />}
          />
          <FeatureCard
            title="No Infrastructure Management"
            description="Focus on model development while Modal handles all the infrastructure complexity in the background."
            icon={<ServerIcon className="w-12 h-12 text-primary" />}
          />
          <FeatureCard
            title="Pay Only For What You Use"
            description="Don't waste money on idle resources. With Modal, you only pay for the compute time you actually use."
            icon={<CoinIcon className="w-12 h-12 text-primary" />}
          />
        </div>

        {/* Example Use Case */}
        <div className="bg-card/30 border border-border rounded-lg overflow-hidden p-8 mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl font-bold mb-4">Deploy an OpenAI-compatible LLM endpoint</h2>
              <p className="text-muted-foreground mb-6">
                Easily deploy your own open-source LLMs with an OpenAI-compatible API using vLLM on Modal. This lets you drop in a replacement for the OpenAI API in your existing applications.
              </p>
              <div className="bg-black/80 rounded-md p-4 mb-6">
                <pre className="text-xs text-green-400 overflow-x-auto">
                  <code>
{`@stub.function(gpu="A100", timeout=60*10)
def create_model():
    import vllm
    from transformers import AutoTokenizer

    model = vllm.LLM(
        model="meta-llama/Llama-2-7b-chat-hf",
        trust_remote_code=True,
        dtype="bfloat16",
    )

    tokenizer = AutoTokenizer.from_pretrained(
        "meta-llama/Llama-2-7b-chat-hf",
        trust_remote_code=True
    )

    return model, tokenizer`}
                  </code>
                </pre>
              </div>
              <Button asChild>
                <Link href="/docs/examples/vllm_inference">View Full Example</Link>
              </Button>
            </div>
            <div className="relative h-64 lg:h-auto">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-full max-w-md aspect-video bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg border border-primary/30 flex items-center justify-center">
                  <LLMIcon className="w-24 h-24 text-primary/70" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Popular Models Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Popular Language Models to Deploy</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <ModelCard title="Llama 2" description="Deploy Meta's popular open-source LLM via vLLM, llama.cpp or Hugging Face." />
            <ModelCard title="Mistral" description="Deploy the powerful and efficient Mistral models from 7B to larger variants." />
            <ModelCard title="Mixtral" description="Implement mixture-of-experts architecture for powerful multi-task performance." />
            <ModelCard title="Falcon" description="Run these open-source models known for efficient inference on consumer hardware." />
            <ModelCard title="Phi-2" description="Deploy Microsoft's compact yet powerful models for lightweight inference." />
            <ModelCard title="Claude" description="Integrate with Anthropic's Claude models through Modal for enterprise applications." />
          </div>
        </div>

        {/* Case Studies */}
        <div className="bg-card/30 border border-border rounded-lg p-8 mb-16">
          <h2 className="text-2xl font-bold mb-6">Customer Success Stories</h2>
          <blockquote className="border-l-4 border-primary pl-4 mb-8">
            <p className="text-lg italic mb-4">"Modal makes it easy to write code that runs on 100s of GPUs in parallel, transcribing podcasts in a fraction of the time."</p>
            <footer>
              <strong>Mike Cohen</strong>, Head of Data at Ramp
            </footer>
          </blockquote>
          <blockquote className="border-l-4 border-primary pl-4">
            <p className="text-lg italic mb-4">"Tasks that would have taken days to complete take minutes instead. We've saved thousands of dollars deploying LLMs on Modal."</p>
            <footer>
              <strong>Rahul Sengottuvelu</strong>, Head of Applied AI at Substack
            </footer>
          </blockquote>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to deploy your LLMs?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Get started with Modal in minutes and deploy your first LLM with just a few lines of code.
          </p>
          <Button asChild size="lg">
            <Link href="/signup">Start Building Now</Link>
          </Button>
        </div>
      </div>

      <Footer />
    </main>
  );
}

function FeatureCard({ title, description, icon }: { title: string; description: string; icon: React.ReactNode }) {
  return (
    <div className="bg-card/30 border border-border rounded-lg p-6">
      <div className="mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
}

function ModelCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="bg-card/20 border border-border rounded-lg p-6">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground mb-4">{description}</p>
      <Link href="/docs" className="text-sm text-primary hover:underline">Learn more</Link>
    </div>
  );
}

// Icons
function ScaleIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M2 20h20" />
      <path d="M5 14h4v6H5z" />
      <path d="M13 9h4v11h-4z" />
      <path d="M9 4h4v16H9z" />
    </svg>
  );
}

function ServerIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
      <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
      <line x1="6" y1="6" x2="6.01" y2="6" />
      <line x1="6" y1="18" x2="6.01" y2="18" />
    </svg>
  );
}

function CoinIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <circle cx="12" cy="12" r="8" />
      <line x1="12" y1="8" x2="12" y2="12" />
      <line x1="12" y1="16" x2="12.01" y2="16" />
    </svg>
  );
}

function LLMIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
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
      <rect width="18" height="18" x="3" y="3" rx="2" />
      <path d="M7 7h10" />
      <path d="M7 12h10" />
      <path d="M7 17h6" />
    </svg>
  );
}
