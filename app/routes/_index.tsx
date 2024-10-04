import { Children, useCallback, useEffect, useState } from "react";
import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import Upload from "~/components/ui/Upload";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "~/components/ui/dialog";
import { Label } from "~/components/ui/label";
import { Menu, X } from "lucide-react"; // Importing icons for the hamburger menu

export const meta: MetaFunction = () => {
  return [
    { title: "ARM Template Parameter Validator" },
    {
      name: "description",
      content:
        "A web tool that validates and provides guidance on ARM (Azure Resource Manager) code",
    },
  ];
};

export default function Index() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to handle menu toggle

  return (
    <div className="flex flex-col min-h-screen font-segoe">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" to="/">
          <AzureAISearchIcon className="h-6 w-6" />
          <span className="sr-only">SfMC</span>
        </Link>
        <nav className="ml-auto flex items-center">
          <div className="hidden md:flex gap-6 sm:gap-8">
            <Link
              className="text-xl font-medium hover:underline underline-offset-4"
              to="#home"
            >
              Home
            </Link>
            <Link
              className="text-xl font-medium hover:underline underline-offset-4"
              to="#upload"
            >
              Upload Template
            </Link>
            <Link
              className="text-xl font-medium hover:underline underline-offset-4"
              to="#reports"
            >
              View Reports
            </Link>
            <Link 
              className="text-xl font-medium hover:underline underline-offset-4" 
              to="#settings"
            >
              Settings
            </Link>
          </div>
          <button
            className="md:hidden flex items-center"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </nav>
      </header>
      {isMenuOpen && (
        <div className="md:hidden flex flex-col items-center bg-white shadow-md">
          <Link
            className="text-xl font-medium hover:underline underline-offset-4 py-2"
            to="#home"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            className="text-xl font-medium hover:underline underline-offset-4 py-2"
            to="#upload"
            onClick={() => setIsMenuOpen(false)}
          >
            Upload Template
          </Link>
          <Link
            className="text-xl font-medium hover:underline underline-offset-4 py-2"
            to="#reports"
            onClick={() => setIsMenuOpen(false)}
          >
            View Reports
          </Link>
          <Link
            className="text-xl font-medium hover:underline underline-offset-4 py-2"
            to="#settings"
            onClick={() => setIsMenuOpen(false)}
          >
            Settings
          </Link>
        </div>
      )}
      <main className="flex-1 flex flex-col justify-center items-center text-center py-12 md:py-24 lg:py-32 xl:py-48">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
            ARM Template Parameter Validator
          </h1>
          <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400 my-6">
            Upload your Azure Resource Manager (ARM) template and get instant
            validation and guidance on best practices.
          </p>
          <div className="space-x-4">
            <Dialog>
              <DialogTrigger asChild>
                <Button>Upload ARM JSON File</Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Edit profile</DialogTitle>
                  <DialogDescription>
                    Make changes to your profile here. Click save when you're
                    done.
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="name" className="text-right">
                      Name
                    </Label>
                    <Input
                      id="name"
                      value="Pedro Duarte"
                      className="col-span-3"
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="username" className="text-right">
                      Username
                    </Label>
                    <Input
                      id="username"
                      value="@peduarte"
                      className="col-span-3"
                    />
                  </div>
                </div>
                <DialogFooter>
                  <Button type="submit">Save changes</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </main>
      <section className="w-full py-4 md:py-8 lg:py-12 mt-auto flex justify-center">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-xl font-bold tracking-tighter sm:text-2xl">
            Stay Updated
          </h2>
          <p className="mx-auto max-w-[600px] text-gray-500 md:text-md dark:text-gray-400 mt-2">
            Join our mailing list to receive updates on the ARM Template
            Parameter Validator tool.
          </p>
          <form className="flex space-x-2 justify-center mt-4">
            <Input
              className="max-w-lg flex-1"
              placeholder="Enter your email"
              type="email"
            />
            <Button type="submit">Subscribe</Button>
          </form>
        </div>
      </section>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          © 2024 Microsoft - Support for Mission Critical.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link
            className="text-xs hover:underline underline-offset-4"
            to="/terms"
          >
            Terms
          </Link>
          <Link
            className="text-xs hover:underline underline-offset-4"
            to="/privacy"
          >
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
        width: "70px",
        height: "70px",
      }}
    />
  );
}
