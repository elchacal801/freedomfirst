
import { RightsItem } from "@/components/rights-hub/rights-card";

export interface Scenario {
  id: string;
  title: string;
  description: string;
  items: RightsItem[];
}

export const RIGHTS_SCENARIOS: Scenario[] = [
  {
    id: "roadside-stop",
    title: "Roadside Stop",
    description: "What to do during traffic stops by police, state troopers, or CBP at checkpoints",
    items: [
      {
        id: "roadside-general",
        title: "General Rights During Traffic Stops",
        do: [
          "Keep your hands visible on the steering wheel",
          "Provide your license, registration, and insurance if asked",
          "Remain calm and polite",
          "State clearly: \"I do not consent to any searches\" if asked to search your vehicle",
          "Ask \"Am I free to go?\" if the interaction continues without clear purpose"
        ],
        dont: [
          "Physically resist or flee",
          "Argue or raise your voice",
          "Make sudden movements without explaining first",
          "Provide false documents or information",
          "Answer questions about your immigration status or citizenship"
        ]
      },
      {
        id: "roadside-passengers",
        title: "Rights as a Passenger",
        do: [
          "Remain calm and keep hands visible",
          "Ask if you are free to leave the scene",
          "Provide your name if required by state law",
          "Record the interaction if you can do so safely without interference",
          "Remember officer names, badge numbers, and patrol car numbers"
        ],
        dont: [
          "Exit the vehicle unless instructed",
          "Make sudden movements",
          "Answer questions about your travel plans",
          "Consent to searches of your person or belongings",
          "Volunteer information not specifically requested"
        ]
      },
      {
        id: "roadside-border",
        title: "Rights at Border Patrol Checkpoints",
        do: [
          "Clearly state \"I am a U.S. citizen\" if you are (or your immigration status if you have legal status)",
          "Remain silent about questions unrelated to immigration status",
          "Record the interaction if safe to do so",
          "Ask \"Am I being detained?\" if questioning continues",
          "Note badge numbers and names of officers"
        ],
        dont: [
          "Lie about your citizenship status",
          "Resist or ignore lawful orders",
          "Consent to vehicle searches at interior checkpoints",
          "Flee from checkpoint areas",
          "Answer questions about where you were born or when you came to the US"
        ]
      }
    ]
  },
  {
    id: "street-encounter",
    title: "Street Encounter",
    description: "Interactions with police or ICE agents in public spaces",
    items: [
      {
        id: "street-police",
        title: "Police Stops on the Street",
        do: [
          "Ask \"Am I free to go?\" to determine if you're being detained",
          "Stay calm and keep hands visible",
          "State \"I wish to remain silent\" to invoke your right to silence",
          "Ask for a lawyer if detained",
          "Film the encounter if you can do so safely and without interference"
        ],
        dont: [
          "Run or physically resist",
          "Obstruct or interfere with police activity",
          "Provide false information",
          "Consent to searches of your belongings",
          "Answer questions without a lawyer if detained"
        ]
      },
      {
        id: "street-ice",
        title: "ICE Encounters in Public",
        do: [
          "Ask \"Are you immigration agents?\" to confirm their identity",
          "Ask \"Am I free to go?\" to determine if you're being detained",
          "Remain silent and say \"I wish to speak to an attorney\"",
          "Hand a know-your-rights card to the agent if available",
          "Memorize or record names, badge numbers, and agency details"
        ],
        dont: [
          "Show foreign identification or documents",
          "Sign anything without an attorney review",
          "Lie about citizenship status",
          "Answer questions about your birthplace or immigration status",
          "Consent to searches of your belongings"
        ]
      }
    ]
  },
  {
    id: "home-visit",
    title: "Home Visit",
    description: "When ICE or police come to your residence",
    items: [
      {
        id: "home-ice",
        title: "ICE at Your Door",
        do: [
          "Ask to see a warrant properly signed by a judge through a window or door chain",
          "Verify the warrant has your correct name and address",
          "State \"I do not consent to your entry\" if they lack a valid warrant",
          "Remain silent and ask for an attorney if they enter",
          "Record the interaction if possible"
        ],
        dont: [
          "Open the door fully without seeing a warrant",
          "Physically resist if they force entry",
          "Lie about who is present in the home",
          "Sign any documents without an attorney",
          "Answer questions about immigration status of anyone"
        ]
      },
      {
        id: "home-police",
        title: "Police at Your Home",
        do: [
          "Ask if they have a warrant and to see it through window/door chain",
          "Check that the warrant is signed by a judge",
          "Step outside and close the door if just wanting to talk",
          "State clearly \"I do not consent to a search\" if they ask to look around",
          "Remain silent except to ask for an attorney if detained"
        ],
        dont: [
          "Allow entry without a warrant",
          "Physically interfere with police executing a valid warrant",
          "Lie about your identity",
          "Consent to searches beyond the scope of a warrant",
          "Volunteer information about others in the home"
        ]
      }
    ]
  },
  {
    id: "workplace-raid",
    title: "Workplace Raid",
    description: "During ICE or law enforcement operations at your workplace",
    items: [
      {
        id: "workplace-rights",
        title: "Your Rights During Workplace Raids",
        do: [
          "Remain calm and keep hands visible",
          "State \"I wish to remain silent\" to invoke your rights",
          "Ask \"Am I free to leave?\" to determine if detained",
          "Ask for an attorney if detained",
          "Memorize agent names, badge numbers, and agency"
        ],
        dont: [
          "Run or hide when agents arrive",
          "Physically resist",
          "Present false documents",
          "Answer questions about your immigration status",
          "Sign documents without attorney review"
        ]
      },
      {
        id: "workplace-employer",
        title: "Employer Responsibilities",
        do: [
          "Ask to see a judicial warrant or subpoena",
          "Contact legal counsel immediately",
          "Document the raid with notes and times",
          "Request agent identification and contact information",
          "Inform employees they have the right to remain silent"
        ],
        dont: [
          "Consent to entry without a warrant",
          "Provide employee records without legal requirement",
          "Interfere with lawful enforcement actions",
          "Attempt to warn or hide employees",
          "Answer questions about employees without counsel"
        ]
      }
    ]
  },
  {
    id: "detention",
    title: "Detention",
    description: "Rights while in custody of ICE, CBP, or police",
    items: [
      {
        id: "detention-general",
        title: "General Detention Rights",
        do: [
          "State clearly \"I wish to remain silent\"",
          "Ask for an attorney immediately",
          "Inform officers if you need medical attention",
          "Remember officer names and badge numbers",
          "Contact consulate if you are a foreign national"
        ],
        dont: [
          "Sign documents without understanding them",
          "Discuss your immigration status",
          "Give information about your country of origin",
          "Waive your right to a hearing",
          "Discuss the status of others"
        ]
      },
      {
        id: "detention-ice",
        title: "ICE Detention Specific Rights",
        do: [
          "Request a bond hearing",
          "Ask for a list of free legal services",
          "Contact your consulate",
          "Request a copy of the \"Notice to Appear\" (NTA)",
          "Call the ICE detention reporting line to report abuse (1-888-351-4024)"
        ],
        dont: [
          "Agree to voluntary departure",
          "Sign a stipulated removal",
          "Waive your right to appear before an immigration judge",
          "Discuss asylum claims with officers (only with attorney)",
          "Surrender your right to appeal"
        ]
      }
    ]
  }
];
