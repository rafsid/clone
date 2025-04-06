"use client";

import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerColumns = [
    {
      title: "Use Cases",
      links: [
        { label: "Language Model Inference", href: "/use-cases/language-models" },
        { label: "Image, Video & 3D", href: "/use-cases/image-video-3d" },
        { label: "Audio Processing", href: "/use-cases/audio" },
        { label: "Fine-Tuning", href: "/use-cases/fine-tuning" },
        { label: "Job Queues & Batch Processing", href: "/use-cases/job-queues" },
        { label: "Sandboxing Code", href: "/use-cases/sandboxes" },
        { label: "Computational Biology", href: "/use-cases/comp-bio" },
      ],
    },
    {
      title: "Resources",
      links: [
        { label: "Documentation", href: "/docs/guide" },
        { label: "Pricing", href: "/pricing" },
        { label: "Slack Community", href: "/slack" },
        { label: "Articles", href: "/articles" },
        { label: "GPU Glossary", href: "/gpu-glossary" },
        { label: "Model Library", href: "/library" },
      ],
    },
    {
      title: "Popular Examples",
      links: [
        { label: "Serve LLM APIs with vLLM", href: "/docs/examples/vllm_inference" },
        { label: "Create Custom Art of Your Pet", href: "/docs/examples/dreambooth_app" },
        { label: "Analyze Parquet files from S3 with DuckDB", href: "/docs/examples/s3_bucket_mount" },
        { label: "Run hundreds of LoRAs from one app", href: "/docs/examples/cloud_bucket_mount_loras" },
        { label: "Replace your CEO with an LLM", href: "/docs/examples/slack-finetune" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About", href: "/company" },
        { label: "Blog", href: "/blog" },
        { label: "Careers", href: "/careers" },
        { label: "Privacy Policy", href: "/legal/privacy-policy" },
        { label: "Security & Privacy", href: "/docs/guide/security" },
        { label: "Terms", href: "/legal/terms" },
      ],
    },
  ];

  return (
    <footer className="border-t border-border bg-card/20 backdrop-blur-sm">
      <div className="container max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {footerColumns.map((column) => (
            <div key={column.title} className="space-y-4">
              <h3 className="text-sm font-medium text-foreground">{column.title}</h3>
              <ul className="space-y-2">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center">
            <div className="flex h-6 w-6 relative mr-2">
              <div className="w-full h-full rounded bg-primary/30 absolute"></div>
              <div className="w-full h-full rounded bg-primary/80 absolute" style={{ clipPath: 'polygon(0 100%, 100% 100%, 100% 0)' }}></div>
            </div>
            <span className="text-sm text-muted-foreground">© Modal {currentYear}</span>
          </div>

          <div className="flex space-x-6">
            <SocialLink href="https://twitter.com/modal_labs" aria-label="Twitter" icon="twitter" />
            <SocialLink href="https://www.linkedin.com/company/modal-labs/" aria-label="LinkedIn" icon="linkedin" />
            <SocialLink href="https://modal.com/slack" aria-label="Slack" icon="slack" />
            <SocialLink href="https://github.com/modal-labs" aria-label="GitHub" icon="github" />
            <SocialLink href="https://www.youtube.com/channel/UC477UdoLR2Js3RHhRWSXsQA" aria-label="YouTube" icon="youtube" />
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({ href, icon, "aria-label": ariaLabel }: { href: string; icon: string; "aria-label": string }) {
  const icons: Record<string, JSX.Element> = {
    twitter: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
      </svg>
    ),
    linkedin: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
        <rect x="2" y="9" width="4" height="12"></rect>
        <circle cx="4" cy="4" r="2"></circle>
      </svg>
    ),
    slack: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.5 10c-.83 0-1.5-.67-1.5-1.5v-5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5z"></path>
        <path d="M20.5 10H19V8.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"></path>
        <path d="M9.5 14c.83 0 1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5S8 21.33 8 20.5v-5c0-.83.67-1.5 1.5-1.5z"></path>
        <path d="M3.5 14H5v1.5c0 .83-.67 1.5-1.5 1.5S2 16.33 2 15.5 2.67 14 3.5 14z"></path>
        <path d="M14 14.5c0-.83.67-1.5 1.5-1.5h5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-5c-.83 0-1.5-.67-1.5-1.5z"></path>
        <path d="M15.5 19H14v1.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5z"></path>
        <path d="M10 9.5C10 8.67 9.33 8 8.5 8h-5C2.67 8 2 8.67 2 9.5S2.67 11 3.5 11h5c.83 0 1.5-.67 1.5-1.5z"></path>
        <path d="M8.5 5H10V3.5C10 2.67 9.33 2 8.5 2S7 2.67 7 3.5 7.67 5 8.5 5z"></path>
      </svg>
    ),
    github: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
      </svg>
    ),
    youtube: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
        <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
      </svg>
    ),
  };

  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}
      className="text-muted-foreground hover:text-primary transition-colors"
    >
      {icons[icon]}
    </Link>
  );
}
