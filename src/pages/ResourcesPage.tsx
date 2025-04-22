
import { useState } from "react";
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, FileText, Link as LinkIcon, Phone, Shield, Book } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const RESOURCE_CARDS = [
  {
    id: "rights-cards",
    title: "Know Your Rights Cards",
    description: "Printable cards to keep with you during law enforcement encounters",
    icon: Shield,
    formats: ["PDF", "PNG"],
    language: "English/Spanish",
    category: "printables"
  },
  {
    id: "family-plan",
    title: "Family Preparedness Plan",
    description: "Create a plan for your family in case of detention or deportation",
    icon: FileText,
    formats: ["PDF", "Editable"],
    language: "English/Spanish",
    category: "printables"
  },
  {
    id: "ice-raid",
    title: "What To Do During an ICE Raid",
    description: "Step-by-step guide for workplace and home raids",
    icon: Shield,
    formats: ["PDF", "PNG"],
    language: "English/Spanish",
    category: "printables"
  },
  {
    id: "power-of-attorney",
    title: "Power of Attorney Template",
    description: "Legal form for designating someone to care for children or property",
    icon: FileText,
    formats: ["PDF", "Editable"],
    language: "English/Spanish",
    category: "legal-forms"
  },
  {
    id: "detention-guide",
    title: "Detention Center Guide",
    description: "How to locate and communicate with detained individuals",
    icon: Book,
    formats: ["PDF"],
    language: "English/Spanish",
    category: "guides"
  },
  {
    id: "bond-guide",
    title: "Immigration Bond Guide",
    description: "Understanding and paying immigration bonds",
    icon: FileText,
    formats: ["PDF"],
    language: "English/Spanish",
    category: "guides"
  }
];

const HOTLINES = [
  {
    name: "ACLU Immigrant Rights Hotline",
    number: "1-800-354-0365",
    description: "Legal assistance and rights information for immigrants"
  },
  {
    name: "National Immigration Law Center",
    number: "1-800-433-7633",
    description: "Legal advocacy organization for low-income immigrants"
  },
  {
    name: "National Domestic Violence Hotline",
    number: "1-800-799-7233",
    description: "Help for abuse victims with special immigration protections"
  },
  {
    name: "Immigration Advocates Network",
    number: "211",
    description: "Connect to local legal resources in your area"
  },
  {
    name: "ICE Detention Reporting Line",
    number: "1-888-351-4024",
    description: "Report civil rights violations in detention"
  }
];

const ORGANIZATIONS = [
  {
    name: "American Civil Liberties Union (ACLU)",
    website: "https://www.aclu.org/issues/immigrants-rights",
    description: "Legal advocacy organization fighting for civil liberties"
  },
  {
    name: "National Immigration Law Center",
    website: "https://www.nilc.org/",
    description: "Defend and advance the rights of low-income immigrants"
  },
  {
    name: "Immigrant Legal Resource Center",
    website: "https://www.ilrc.org/",
    description: "Legal trainings, educational materials, and advocacy"
  },
  {
    name: "United We Dream",
    website: "https://unitedwedream.org/",
    description: "Youth-led immigrant advocacy organization"
  },
  {
    name: "Immigrant Defense Project",
    website: "https://www.immigrantdefenseproject.org/",
    description: "Legal expertise to fight deportation and criminalization"
  }
];

export default function ResourcesPage() {
  const [activeTab, setActiveTab] = useState("printables");
  
  const filteredResources = RESOURCE_CARDS.filter(
    resource => activeTab === "all" || resource.category === activeTab
  );

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        {/* Header */}
        <section className="bg-primary text-primary-foreground py-10 md:py-14">
          <div className="freedom-container">
            <div className="flex items-center space-x-3 mb-4">
              <FileText className="h-8 w-8 text-accent" />
              <h1 className="text-3xl md:text-4xl font-bold">Resource Library</h1>
            </div>
            <p className="text-lg md:text-xl max-w-3xl opacity-90">
              Download and share essential documents, forms, and guides to help protect yourself and your community.
            </p>
          </div>
        </section>
        
        {/* Resources */}
        <section className="freedom-container py-10">
          <Tabs defaultValue="printables" value={activeTab} onValueChange={setActiveTab} className="w-full">
            <div className="border-b mb-8">
              <TabsList className="bg-transparent">
                <TabsTrigger value="all" className="text-base">All Resources</TabsTrigger>
                <TabsTrigger value="printables" className="text-base">Printable Cards</TabsTrigger>
                <TabsTrigger value="legal-forms" className="text-base">Legal Forms</TabsTrigger>
                <TabsTrigger value="guides" className="text-base">Guides</TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value={activeTab} className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredResources.map((resource) => (
                  <Card key={resource.id} className="shadow-sm">
                    <CardHeader className="pb-4">
                      <div className="w-10 h-10 rounded-full bg-accent/10 text-accent flex items-center justify-center mb-3">
                        <resource.icon className="h-5 w-5" />
                      </div>
                      <CardTitle className="text-xl">{resource.title}</CardTitle>
                      <CardDescription>{resource.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="pb-4">
                      <div className="flex space-x-4 text-sm">
                        <div>
                          <span className="text-muted-foreground">Format:</span> {resource.formats.join(", ")}
                        </div>
                        <div>
                          <span className="text-muted-foreground">Language:</span> {resource.language}
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between pt-0">
                      <Button variant="outline" size="sm">
                        <Download className="h-4 w-4 mr-1" />
                        PDF
                      </Button>
                      <Button size="sm">
                        View Details
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </section>
        
        {/* Hotlines Section */}
        <section className="bg-muted/30 py-10">
          <div className="freedom-container">
            <div className="flex items-center space-x-3 mb-6">
              <Phone className="h-6 w-6 text-accent" />
              <h2 className="text-2xl font-bold">Emergency Hotlines</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {HOTLINES.map((hotline, index) => (
                <Card key={index} className="shadow-sm border-accent/20">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">{hotline.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="pb-4">
                    <a 
                      href={`tel:${hotline.number.replace(/[^0-9]/g, '')}`}
                      className="text-xl font-bold text-accent hover:underline"
                    >
                      {hotline.number}
                    </a>
                    <p className="text-sm text-muted-foreground mt-1">{hotline.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        
        {/* Organizations Section */}
        <section className="py-10">
          <div className="freedom-container">
            <div className="flex items-center space-x-3 mb-6">
              <LinkIcon className="h-6 w-6 text-accent" />
              <h2 className="text-2xl font-bold">Organizations & Websites</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {ORGANIZATIONS.map((org, index) => (
                <Card key={index} className="shadow-sm">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">{org.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="pb-4">
                    <p className="text-sm text-muted-foreground mb-3">{org.description}</p>
                    <a 
                      href={org.website}
                      target="_blank"
                      rel="noopener noreferrer" 
                      className="text-accent hover:underline font-medium text-sm flex items-center"
                    >
                      <LinkIcon className="h-3 w-3 mr-1" />
                      Visit Website
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        
        {/* Disclaimer */}
        <section className="bg-muted/50 py-8">
          <div className="freedom-container">
            <div className="max-w-3xl mx-auto text-center">
              <h3 className="font-medium text-lg mb-3">Resources Disclaimer</h3>
              <p className="text-sm text-muted-foreground">
                These resources are provided for educational purposes only. They are not substitutes for qualified legal advice. 
                Laws change frequently and may vary by jurisdiction.
                Last updated: {new Date().toLocaleDateString()}
              </p>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
