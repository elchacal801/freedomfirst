
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Languages } from "lucide-react";

export interface Lawyer {
  id: string;
  name: string;
  firm: string;
  state: string;
  city: string;
  zip: string;
  phone: string;
  email?: string;
  languages: string[];
  proBono: boolean;
  specialties: string[];
  verified: boolean;
}

interface LawyerCardProps {
  lawyer: Lawyer;
}

export default function LawyerCard({ lawyer }: LawyerCardProps) {
  return (
    <Card className="shadow-sm">
      <CardHeader className="pb-3">
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-xl">{lawyer.name}</CardTitle>
            <p className="text-muted-foreground text-sm">{lawyer.firm}</p>
          </div>
          {lawyer.verified && (
            <Badge variant="outline" className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300 border-green-300">
              Verified
            </Badge>
          )}
        </div>
      </CardHeader>
      <CardContent className="pb-4">
        <div className="space-y-3">
          <div className="flex items-start">
            <MapPin className="h-4 w-4 mr-2 mt-1 text-muted-foreground" />
            <span>
              {lawyer.city}, {lawyer.state} {lawyer.zip}
            </span>
          </div>
          
          <div className="flex items-start">
            <Phone className="h-4 w-4 mr-2 mt-1 text-muted-foreground" />
            <a href={`tel:${lawyer.phone}`} className="hover:underline">
              {lawyer.phone}
            </a>
          </div>
          
          {lawyer.email && (
            <div className="flex items-start">
              <Mail className="h-4 w-4 mr-2 mt-1 text-muted-foreground" />
              <a href={`mailto:${lawyer.email}`} className="hover:underline break-all">
                {lawyer.email}
              </a>
            </div>
          )}
          
          <div className="flex items-start">
            <Languages className="h-4 w-4 mr-2 mt-1 text-muted-foreground" />
            <span>{lawyer.languages.join(", ")}</span>
          </div>
          
          <div className="pt-2">
            <p className="text-sm font-medium">Specialties:</p>
            <div className="flex flex-wrap gap-1 mt-1">
              {lawyer.specialties.map((specialty, index) => (
                <Badge key={index} variant="secondary" className="text-xs">
                  {specialty}
                </Badge>
              ))}
            </div>
          </div>
          
          {lawyer.proBono && (
            <Badge className="bg-accent/20 text-accent border-accent/30 mt-2">
              Pro Bono Available
            </Badge>
          )}
        </div>
      </CardContent>
      <CardFooter className="pt-0 flex justify-between">
        <Button size="sm" variant="outline">
          Save Contact
        </Button>
        <Button size="sm">
          <Phone className="h-4 w-4 mr-2" />
          Call
        </Button>
      </CardFooter>
    </Card>
  );
}
