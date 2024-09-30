import type { MetaFunction } from "@remix-run/node";

import { Link } from "@remix-run/react";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "~/components/ui/card";
import { CheckCircle } from "lucide-react";

export const meta: MetaFunction = () => {
  return [
    { title: "ARM Template Parameter Validator" },
    { name: "description", content: "A web tool that validates and provides guidance on ARM (Azure Resource Manager) code" },
  ];
};

export default function Index() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" to="/">
          <AzureAISearchIcon className="h-6 w-6" />
          <span className="sr-only">Acme Inc</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" to="#features">
            Home
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" to="#pricing">
            Upload Template
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" to="#about">
            View Reports
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" to="#contact">
            Settings
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  ARM Template Parameter Validator
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Upload your Azure Resource Manager (ARM) template and get instant validation and guidance on best practices.
                </p>
              </div>
              <div className="space-x-4">
                <Button>Upload ARM JSON File</Button>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Stay Updated</h2>
                <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                  Join our mailing list to receive updates on the ARM Template Parameter Validator tool.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex space-x-2">
                  <Input className="max-w-lg flex-1" placeholder="Enter your email" type="email" />
                  <Button type="submit">Subscribe</Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 Microsoft - Support for Mission Critical.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" to="/terms">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" to="/privacy">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  );
}

function AzureAISearchIcon(props: React.ImgHTMLAttributes<HTMLImageElement>) {
  return (
    <img
      {...props}
      src="/images/10044-icon-service-Cognitive-Search.svg"
      alt="Azure AI Search Logo"
      style={{
        width: '70px', 
        height: '70px',
      }}
    />
  );
}