
import { useState } from "react";
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Book, Bookmark, FileText, Shield, MapPin, Gavel } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import PlaybookWizard from "@/components/playbook/playbook-wizard";
import { TRAFFIC_STOP_PLAYBOOK } from "@/data/playbook-data";

const PLAYBOOK_TYPES = [
  {
    id: "traffic-stop",
    title: "Traffic Stop",
    icon: MapPin,
    description: "What to do when stopped by police or CBP while driving",
    audience: ["citizen", "lpr", "visa", "undocumented"]
  },
  {
    id: "home-visit",
    title: "Home Visit",
    icon: Shield,
    description: "When law enforcement comes to your residence",
    audience: ["citizen", "lpr", "visa", "undocumented"]
  },
  {
    id: "workplace-raid",
    title: "Workplace Raid",
    icon: Gavel,
    description: "During ICE operations at your place of employment",
    audience: ["lpr", "visa", "undocumented"]
  },
  {
    id: "detention",
    title: "After Detention",
    icon: FileText,
    description: "Your rights during detention by law enforcement",
    audience: ["lpr", "visa", "undocumented"]
  }
];

export default function PlaybooksPage() {
  const [selectedPlaybook, setSelectedPlaybook] = useState<string | null>(null);
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        {/* Header */}
        <section className="bg-primary text-primary-foreground py-10 md:py-14">
          <div className="freedom-container">
            <div className="flex items-center space-x-3 mb-4">
              <Book className="h-8 w-8 text-accent" />
              <h1 className="text-3xl md:text-4xl font-bold">Interactive Playbooks</h1>
            </div>
            <p className="text-lg md:text-xl max-w-3xl opacity-90">
              Step-by-step guides for navigating encounters with law enforcement. Select a scenario below to get customized guidance based on your situation.
            </p>
          </div>
        </section>
        
        {/* Content */}
        <section className="freedom-container py-10">
          {!selectedPlaybook ? (
            <div className="space-y-8">
              <h2 className="text-2xl font-bold">Choose a Scenario</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6">
                {PLAYBOOK_TYPES.map((playbook) => (
                  <Card 
                    key={playbook.id} 
                    className="cursor-pointer hover:shadow-md transition-shadow"
                    onClick={() => setSelectedPlaybook(playbook.id)}
                  >
                    <CardHeader>
                      <div className="flex items-center space-x-3">
                        <div className="p-2 rounded-full bg-accent/20">
                          <playbook.icon className="h-6 w-6 text-accent" />
                        </div>
                        <CardTitle className="text-xl">{playbook.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{playbook.description}</p>
                    </CardContent>
                    <CardFooter className="flex justify-between items-center pt-2 border-t">
                      <div className="text-sm text-muted-foreground">
                        <Bookmark className="h-4 w-4 inline mr-1" />
                        Applies to: {playbook.audience.includes("citizen") ? "All statuses" : "Non-citizens"}
                      </div>
                      <Button size="sm" variant="ghost">
                        Start
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
              
              {/* Emergency Notice */}
              <div className="mt-12 bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-400 p-6 rounded-lg">
                <h3 className="font-bold text-xl mb-2">In a Current Emergency?</h3>
                <p className="mb-4">If you or someone you know is currently detained by immigration authorities:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Contact the ACLU Immigrant Rights Hotline: 1-800-354-0365</li>
                  <li>National Immigration Law Center: 1-800-433-7633</li>
                  <li>Legal Aid in your area: 211</li>
                </ul>
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold">Traffic Stop Playbook</h2>
                <Button 
                  variant="outline" 
                  onClick={() => setSelectedPlaybook(null)}
                >
                  Back to Scenarios
                </Button>
              </div>
              
              <Separator className="my-6" />
              
              <PlaybookWizard 
                steps={TRAFFIC_STOP_PLAYBOOK}
                initialStep="start"
                title="Traffic Stop Interactive Guide"
                subtitle="Navigate your rights and best practices during a traffic stop"
              />
            </div>
          )}
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
