
import { Link } from "react-router-dom";
import { Shield } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground mt-auto">
      <div className="freedom-container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center space-x-2">
              <Shield className="h-8 w-8 text-accent" />
              <span className="font-bold text-xl">FreedomFirst</span>
            </Link>
            <p className="mt-4 text-sm opacity-80">
              Your rights. Your roadmap. Your freedom.
            </p>
          </div>

          <div>
            <h4 className="font-medium text-lg mb-4">Know Your Rights</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/rights-hub" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                  Rights Hub
                </Link>
              </li>
              <li>
                <Link to="/playbooks" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                  Playbooks
                </Link>
              </li>
              <li>
                <Link to="/resources" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                  Resources
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-lg mb-4">Help</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/find-lawyers" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                  Find Lawyers
                </Link>
              </li>
              <li>
                <Link to="/hotlines" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                  Hotlines
                </Link>
              </li>
              <li>
                <a 
                  href="https://www.aclu.org/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-sm opacity-80 hover:opacity-100 transition-opacity"
                >
                  ACLU
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-lg mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/disclaimer" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                  Disclaimer
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                  Terms of Use
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm opacity-70">
            © {currentYear} FreedomFirst. Not legal advice.
          </p>
          <p className="text-sm opacity-70 mt-4 md:mt-0">
            <span className="text-accent">Last Updated:</span> {new Date().toLocaleDateString()}
          </p>
        </div>
      </div>
    </footer>
  );
}
