
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Download, Share } from "lucide-react";

export interface RightsItem {
  id: string;
  title: string;
  do: string[];
  dont: string[];
}

interface RightsCardProps {
  scenario: {
    id: string;
    title: string;
    description: string;
    items: RightsItem[];
  };
}

export default function RightsCard({ scenario }: RightsCardProps) {
  return (
    <Card className="shadow-md card-hover">
      <CardHeader className="bg-muted/50 rounded-t-lg">
        <CardTitle className="text-xl md:text-2xl">{scenario.title}</CardTitle>
        <CardDescription>{scenario.description}</CardDescription>
      </CardHeader>
      <CardContent className="pt-6">
        <Accordion type="single" collapsible className="w-full">
          {scenario.items.map((item) => (
            <AccordionItem key={item.id} value={item.id} className="border-b border-border">
              <AccordionTrigger className="text-left font-medium py-4">
                {item.title}
              </AccordionTrigger>
              <AccordionContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2 pb-4">
                  <div>
                    <h4 className="font-bold text-green-600 mb-2 flex items-center">
                      <span className="inline-block w-6 h-6 rounded-full bg-green-100 text-green-600 mr-2 flex items-center justify-center text-sm">✓</span>
                      You DO
                    </h4>
                    <ul className="space-y-2 pl-8 list-disc">
                      {item.do.map((doItem, index) => (
                        <li key={index} className="text-sm">{doItem}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-red-600 mb-2 flex items-center">
                      <span className="inline-block w-6 h-6 rounded-full bg-red-100 text-red-600 mr-2 flex items-center justify-center text-sm">✗</span>
                      You DON'T
                    </h4>
                    <ul className="space-y-2 pl-8 list-disc">
                      {item.dont.map((dontItem, index) => (
                        <li key={index} className="text-sm">{dontItem}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </CardContent>
      <CardFooter className="flex justify-between border-t border-border pt-4">
        <Button variant="outline" size="sm" className="text-xs">
          <Download className="h-4 w-4 mr-1" />
          PDF
        </Button>
        <Button variant="outline" size="sm" className="text-xs">
          <Share className="h-4 w-4 mr-1" />
          Share
        </Button>
      </CardFooter>
    </Card>
  );
}
