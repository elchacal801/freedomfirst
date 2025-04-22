
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";
import { FileText } from "lucide-react";

export default function Disclaimer() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        <section className="bg-primary text-primary-foreground py-10">
          <div className="freedom-container">
            <div className="flex items-center space-x-3 mb-4">
              <FileText className="h-8 w-8 text-accent" />
              <h1 className="text-3xl md:text-4xl font-bold">Legal Disclaimer</h1>
            </div>
          </div>
        </section>
        
        <section className="freedom-container py-12">
          <div className="prose prose-lg max-w-3xl mx-auto dark:prose-invert">
            <p className="text-xl font-medium">
              This is not legal advice. Please consult with a qualified attorney for your specific situation.
            </p>
            
            <h2>Not Legal Advice</h2>
            <p>
              The information provided on FreedomFirst is not legal advice, is not intended to be used as legal advice, 
              and does not create an attorney-client relationship. The information is general in nature and may not apply 
              to your specific circumstances.
            </p>
            
            <h2>No Guarantee of Results</h2>
            <p>
              We cannot guarantee any particular results when following the information provided on this website. 
              Laws and their interpretation vary by jurisdiction and change over time. The application of laws depends 
              on specific facts, which may differ substantially from the scenarios described on this website.
            </p>
            
            <h2>Attorney Directory</h2>
            <p>
              The attorney directory is provided as a resource only. Inclusion in the directory does not constitute 
              an endorsement. FreedomFirst does not guarantee the quality, availability, or appropriateness of any 
              attorney listed. Users are encouraged to verify credentials and conduct their own due diligence.
            </p>
            
            <h2>Educational Purpose Only</h2>
            <p>
              This website is provided for educational and informational purposes only. In a real emergency situation, 
              you should contact a qualified attorney as quickly as possible for advice tailored to your specific situation.
            </p>
            
            <p className="text-sm text-muted-foreground mt-10">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
