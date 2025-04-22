
import { Button } from "./button";
import { ShieldCheck, ChevronRight, Book } from "lucide-react";
import { Link } from "react-router-dom";

interface HeroSectionProps {
  primaryLanguage: string;
}

export default function HeroSection({ primaryLanguage = "en" }: HeroSectionProps) {
  return (
    <div className="bg-primary text-primary-foreground pt-16 pb-20 md:pt-24 md:pb-28">
      <div className="freedom-container">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-3/5 space-y-6">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-2">
              <ShieldCheck className="h-4 w-4 mr-2" />
              <span>Know Your Rights Project</span>
            </div>
            
            {/* Bilingual heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              {primaryLanguage === "en" ? (
                <>
                  Know Your Rights. <br />
                  <span className="text-accent">Protect Your Freedom.</span>
                  <br />
                  <span className="text-3xl md:text-4xl opacity-80">Conoce Tus Derechos.</span>
                </>
              ) : (
                <>
                  Conoce Tus Derechos. <br />
                  <span className="text-accent">Protege Tu Libertad.</span>
                  <br />
                  <span className="text-3xl md:text-4xl opacity-80">Know Your Rights.</span>
                </>
              )}
            </h1>
            
            <p className="text-xl md:text-2xl max-w-2xl opacity-90">
              {primaryLanguage === "en" 
                ? "Your rights. Your roadmap. Your freedom. Clear guidance on your legal rights when interacting with law enforcement."
                : "Tus derechos. Tu guía. Tu libertad. Orientación clara sobre tus derechos legales al interactuar con las autoridades."}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-primary">
                <Link to="/playbooks">
                  <Book className="mr-2 h-5 w-5" />
                  {primaryLanguage === "en" ? "View Playbooks" : "Ver Guías"}
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-primary-foreground/20 hover:bg-primary-foreground/10">
                <Link to="/rights-hub">
                  {primaryLanguage === "en" ? "Rights Hub" : "Centro de Derechos"}
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
          
          <div className="hidden md:block md:w-2/5 pl-8">
            <div className="relative w-full aspect-square">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-indigo-900 via-primary to-indigo-900 opacity-50"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <ShieldCheck className="h-48 w-48 text-accent opacity-90" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
