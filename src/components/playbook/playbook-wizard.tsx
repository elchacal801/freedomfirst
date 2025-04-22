
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ChevronRight, AlertTriangle, Clock, CheckCircle } from "lucide-react";

// Step types
export type PlaybookStep = {
  id: string;
  title: string;
  description: string;
  question?: string;
  options?: {
    id: string;
    label: string;
    nextStep: string;
  }[];
  content?: {
    safeActions?: string[];
    warningText?: string;
    timeLimit?: string;
    description?: string;
  };
  isEndStep?: boolean;
};

interface PlaybookWizardProps {
  steps: PlaybookStep[];
  initialStep: string;
  title: string;
  subtitle: string;
}

export default function PlaybookWizard({ steps, initialStep, title, subtitle }: PlaybookWizardProps) {
  const [currentStepId, setCurrentStepId] = useState(initialStep);
  const [history, setHistory] = useState<string[]>([initialStep]);
  
  // Find current step details
  const currentStep = steps.find(step => step.id === currentStepId) || steps[0];
  
  // Handle option selection
  const handleOptionClick = (nextStepId: string) => {
    setCurrentStepId(nextStepId);
    setHistory([...history, nextStepId]);
  };
  
  // Go back to previous step
  const handleBackClick = () => {
    if (history.length > 1) {
      const newHistory = [...history];
      newHistory.pop(); // Remove current step
      const previousStepId = newHistory[newHistory.length - 1];
      setCurrentStepId(previousStepId);
      setHistory(newHistory);
    }
  };
  
  // Restart the playbook
  const handleRestartClick = () => {
    setCurrentStepId(initialStep);
    setHistory([initialStep]);
  };

  return (
    <div className="w-full max-w-3xl mx-auto">
      <Card className="shadow-md">
        <CardHeader className="bg-muted/50 rounded-t-lg">
          <CardTitle className="text-2xl">{title}</CardTitle>
          <CardDescription>{subtitle}</CardDescription>
        </CardHeader>
        
        <CardContent className="pt-6">
          {/* Current step display */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-2">{currentStep.title}</h3>
            <p className="text-muted-foreground">{currentStep.description}</p>
          </div>
          
          {/* Question and options */}
          {currentStep.question && (
            <div className="mb-6">
              <p className="font-medium text-lg mb-4">{currentStep.question}</p>
              <div className="flex flex-col space-y-3">
                {currentStep.options?.map((option) => (
                  <Button 
                    key={option.id} 
                    onClick={() => handleOptionClick(option.nextStep)}
                    className="justify-between text-left h-auto py-3"
                    variant="outline"
                  >
                    <span>{option.label}</span>
                    <ChevronRight className="h-5 w-5 ml-2 flex-shrink-0" />
                  </Button>
                ))}
              </div>
            </div>
          )}
          
          {/* Content for end steps */}
          {currentStep.content && (
            <div className="space-y-6">
              {currentStep.content.description && (
                <p className="text-base">{currentStep.content.description}</p>
              )}
              
              {currentStep.content.timeLimit && (
                <div className="bg-accent/10 text-accent rounded-lg p-4 flex items-start">
                  <Clock className="h-5 w-5 mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold mb-1">Critical Time Limit</h4>
                    <p className="text-sm">{currentStep.content.timeLimit}</p>
                  </div>
                </div>
              )}
              
              {currentStep.content.warningText && (
                <div className="bg-red-50 text-red-700 dark:bg-red-900/20 dark:text-red-400 rounded-lg p-4 flex items-start">
                  <AlertTriangle className="h-5 w-5 mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold mb-1">Important Warning</h4>
                    <p className="text-sm">{currentStep.content.warningText}</p>
                  </div>
                </div>
              )}
              
              {currentStep.content.safeActions && currentStep.content.safeActions.length > 0 && (
                <div className="mt-6">
                  <h4 className="font-semibold text-green-700 dark:text-green-400 mb-3 flex items-center">
                    <CheckCircle className="h-5 w-5 mr-2" />
                    Safe Actions Checklist
                  </h4>
                  <ul className="space-y-2">
                    {currentStep.content.safeActions.map((action, index) => (
                      <li key={index} className="flex items-start">
                        <span className="inline-block w-6 h-6 rounded-full bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400 mr-2 flex items-center justify-center text-sm flex-shrink-0 mt-0.5">
                          {index + 1}
                        </span>
                        <span>{action}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}
        </CardContent>
        
        <Separator />
        
        <CardFooter className="flex justify-between pt-4">
          <Button
            variant="outline"
            onClick={handleBackClick}
            disabled={history.length <= 1}
          >
            Back
          </Button>
          
          {currentStep.isEndStep && (
            <Button 
              variant="default" 
              onClick={handleRestartClick}
            >
              Restart Playbook
            </Button>
          )}
        </CardFooter>
      </Card>
      
      {/* Disclaimer */}
      <div className="text-xs text-muted-foreground text-center mt-4">
        This is not legal advice. Consult with an attorney for your specific situation.
        Last updated: {new Date().toLocaleDateString()}
      </div>
    </div>
  );
}
