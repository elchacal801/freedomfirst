
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";
import HeroSection from "@/components/ui/hero-section";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Book, Gavel, FileText, MapPin, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

function Index() {
  const [primaryLanguage, setPrimaryLanguage] = useState("en");
  
  // Language could be set based on the language switcher selection
  // This is just a placeholder until we implement full i18n
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <HeroSection primaryLanguage={primaryLanguage} />
        
        {/* Features Section */}
        <section className="py-16 md:py-24 bg-background">
          <div className="freedom-container">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Protect Your Rights</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Access the tools and information you need to navigate encounters with law enforcement.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="shadow-md card-hover">
                <CardHeader>
                  <div className="mb-4 w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                    <Shield className="h-6 w-6 text-accent" />
                  </div>
                  <CardTitle>Rights Hub</CardTitle>
                  <CardDescription>Learn what you can and cannot do during interactions with law enforcement</CardDescription>
                </CardHeader>
                <CardContent className="text-sm">
                  Understand your constitutional protections and legal rights during common scenarios like traffic stops, home visits, and workplace raids.
                </CardContent>
                <CardFooter>
                  <Button asChild variant="outline" className="w-full">
                    <Link to="/rights-hub">
                      Explore Rights
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
              
              <Card className="shadow-md card-hover">
                <CardHeader>
                  <div className="mb-4 w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                    <Book className="h-6 w-6 text-accent" />
                  </div>
                  <CardTitle>Interactive Playbooks</CardTitle>
                  <CardDescription>Step-by-step guidance for navigating real-world scenarios</CardDescription>
                </CardHeader>
                <CardContent className="text-sm">
                  Follow guided decision trees tailored to your specific situation, with critical time limits and safety checklists.
                </CardContent>
                <CardFooter>
                  <Button asChild variant="outline" className="w-full">
                    <Link to="/playbooks">
                      View Playbooks
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
              
              <Card className="shadow-md card-hover">
                <CardHeader>
                  <div className="mb-4 w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                    <Gavel className="h-6 w-6 text-accent" />
                  </div>
                  <CardTitle>Find Lawyers</CardTitle>
                  <CardDescription>Connect with vetted immigration attorneys across the country</CardDescription>
                </CardHeader>
                <CardContent className="text-sm">
                  Search our directory of immigration lawyers, many offering pro bono services, filtered by state, language, and specialty.
                </CardContent>
                <CardFooter>
                  <Button asChild variant="outline" className="w-full">
                    <Link to="/find-lawyers">
                      Find Legal Help
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
              
              <Card className="shadow-md card-hover">
                <CardHeader>
                  <div className="mb-4 w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                    <FileText className="h-6 w-6 text-accent" />
                  </div>
                  <CardTitle>Resource Library</CardTitle>
                  <CardDescription>Download and share essential documents and information</CardDescription>
                </CardHeader>
                <CardContent className="text-sm">
                  Access printable know-your-rights cards, family preparedness plans, and contact information for emergency hotlines.
                </CardContent>
                <CardFooter>
                  <Button asChild variant="outline" className="w-full">
                    <Link to="/resources">
                      Access Resources
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>
        
        {/* Map Section */}
        <section className="py-16 bg-muted/50">
          <div className="freedom-container">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="md:w-1/2 mb-8 md:mb-0 md:pr-12">
                <div className="flex items-center space-x-3 mb-4">
                  <MapPin className="h-6 w-6 text-accent" />
                  <h2 className="text-2xl font-bold">Nationwide Support</h2>
                </div>
                <p className="text-lg mb-6">
                  Access localized resources and find legal support no matter where you are in the United States. Our nationwide network of immigration attorneys is here to help.
                </p>
                <Button asChild size="lg" className="shadow-md">
                  <Link to="/find-lawyers">
                    Find Lawyers Near You
                  </Link>
                </Button>
              </div>
              <div className="md:w-1/2 bg-muted rounded-lg p-4 h-72 flex items-center justify-center border border-border">
                <div className="text-center text-muted-foreground">
                  <MapPin className="h-10 w-10 mx-auto mb-4 opacity-50" />
                  <p className="text-sm">USA map visualization with lawyer coverage</p>
                  <p className="text-xs mt-2">(Map placeholder - would be implemented with actual data visualization)</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Emergency Info */}
        <section className="py-16 bg-red-50 dark:bg-red-900/10">
          <div className="freedom-container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-red-700 dark:text-red-400">
                In an Immigration Emergency?
              </h2>
              <div className="bg-white dark:bg-background rounded-lg p-6 shadow-md border border-red-200 dark:border-red-900/30">
                <p className="text-lg mb-6">
                  If you or someone you know is currently being detained or facing immediate deportation:
                </p>
                <div className="flex flex-col space-y-4">
                  <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-md">
                    <p className="font-bold text-red-700 dark:text-red-400">ACLU Immigrant Rights Hotline</p>
                    <a href="tel:18003540365" className="text-xl font-bold">1-800-354-0365</a>
                  </div>
                  <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-md">
                    <p className="font-bold text-red-700 dark:text-red-400">National Immigration Law Center</p>
                    <a href="tel:18004337633" className="text-xl font-bold">1-800-433-7633</a>
                  </div>
                </div>
                <p className="mt-6 text-sm text-muted-foreground">
                  These organizations can provide immediate guidance on your legal rights and connect you with emergency legal assistance.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}

export default Index;
