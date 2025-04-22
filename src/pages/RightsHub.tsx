
import { useState } from "react";
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import RightsCard from "@/components/rights-hub/rights-card";
import { RIGHTS_SCENARIOS } from "@/data/rights-scenarios";
import { Shield, FileText, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export default function RightsHub() {
  const [activeTab, setActiveTab] = useState("all");

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        {/* Header */}
        <section className="bg-primary text-primary-foreground py-10 md:py-14">
          <div className="freedom-container">
            <div className="flex items-center space-x-3 mb-4">
              <Shield className="h-8 w-8 text-accent" />
              <h1 className="text-3xl md:text-4xl font-bold">Rights Hub</h1>
            </div>
            <p className="text-lg md:text-xl max-w-3xl opacity-90">
              Know your constitutional and legal rights in different scenarios when interacting with law enforcement. Select a scenario below to learn more.
            </p>
            <div className="flex items-center mt-6 space-x-4">
              <Button size="sm" variant="outline" className="border-primary-foreground/20 hover:bg-primary-foreground/10">
                <FileText className="h-4 w-4 mr-2" />
                View All Rights (PDF)
              </Button>
              <Button size="sm" variant="outline" className="border-primary-foreground/20 hover:bg-primary-foreground/10">
                <Download className="h-4 w-4 mr-2" />
                Download Printable Cards
              </Button>
            </div>
          </div>
        </section>
        
        {/* Content */}
        <section className="freedom-container py-10">
          <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab} className="w-full">
            <div className="border-b mb-8">
              <TabsList className="bg-transparent">
                <TabsTrigger value="all" className="text-base">All Scenarios</TabsTrigger>
                <TabsTrigger value="roadside" className="text-base">Roadside</TabsTrigger>
                <TabsTrigger value="public" className="text-base">Public Places</TabsTrigger>
                <TabsTrigger value="private" className="text-base">Home & Work</TabsTrigger>
                <TabsTrigger value="detention" className="text-base">Detention</TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="all" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {RIGHTS_SCENARIOS.map((scenario) => (
                  <RightsCard key={scenario.id} scenario={scenario} />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="roadside" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {RIGHTS_SCENARIOS.filter(s => s.id === "roadside-stop").map((scenario) => (
                  <RightsCard key={scenario.id} scenario={scenario} />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="public" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {RIGHTS_SCENARIOS.filter(s => s.id === "street-encounter").map((scenario) => (
                  <RightsCard key={scenario.id} scenario={scenario} />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="private" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {RIGHTS_SCENARIOS.filter(s => ["home-visit", "workplace-raid"].includes(s.id)).map((scenario) => (
                  <RightsCard key={scenario.id} scenario={scenario} />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="detention" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {RIGHTS_SCENARIOS.filter(s => s.id === "detention").map((scenario) => (
                  <RightsCard key={scenario.id} scenario={scenario} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </section>
        
        {/* Disclaimer */}
        <section className="bg-muted/50 py-8">
          <div className="freedom-container">
            <div className="flex items-start space-x-4 max-w-4xl mx-auto">
              <div className="min-w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                <FileText className="h-5 w-5 text-accent" />
              </div>
              <div>
                <h3 className="font-medium text-lg mb-2">Legal Disclaimer</h3>
                <p className="text-sm text-muted-foreground">
                  This information is provided for educational purposes only and does not constitute legal advice. 
                  Laws vary by jurisdiction and may change over time. If you are detained or arrested, 
                  consult with a qualified attorney regarding your specific situation.
                </p>
                <p className="text-sm mt-2 font-medium">
                  Last updated: {new Date().toLocaleDateString()}
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
