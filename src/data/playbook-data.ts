
import { PlaybookStep } from "@/components/playbook/playbook-wizard";

// Traffic Stop Playbook
export const TRAFFIC_STOP_PLAYBOOK: PlaybookStep[] = [
  {
    id: "start",
    title: "Traffic Stop Scenario",
    description: "You've been pulled over by law enforcement. What is your status?",
    question: "What is your citizenship/immigration status?",
    options: [
      {
        id: "citizen",
        label: "U.S. Citizen",
        nextStep: "citizen-initial"
      },
      {
        id: "perm-resident",
        label: "Permanent Resident (Green Card)",
        nextStep: "lpr-initial"
      },
      {
        id: "visa-holder",
        label: "Visa Holder",
        nextStep: "visa-initial"
      },
      {
        id: "undocumented",
        label: "Undocumented",
        nextStep: "undoc-initial"
      }
    ]
  },
  // Citizen branch
  {
    id: "citizen-initial",
    title: "Traffic Stop - U.S. Citizen",
    description: "As a U.S. citizen, you have full constitutional protections during traffic stops.",
    question: "What type of officer has stopped you?",
    options: [
      {
        id: "citizen-local",
        label: "Local Police / State Trooper",
        nextStep: "citizen-local-police"
      },
      {
        id: "citizen-border",
        label: "Border Patrol / Immigration",
        nextStep: "citizen-border-patrol"
      }
    ]
  },
  {
    id: "citizen-local-police",
    title: "Local Police Traffic Stop",
    description: "You have been stopped by local law enforcement.",
    isEndStep: true,
    content: {
      description: "During a traffic stop by local police, you have constitutional rights but should follow safety protocols.",
      safeActions: [
        "Keep your hands visible on the steering wheel",
        "Provide your license, registration, and insurance when requested",
        "You may ask: \"Officer, why was I pulled over?\"",
        "You can refuse consent to search your vehicle by clearly stating: \"I do not consent to a search\"",
        "If not under arrest, you may ask: \"Am I free to go?\""
      ],
      warningText: "Do not argue, resist, or make sudden movements. Always follow officer instructions regarding physical movement.",
      timeLimit: "If arrested, ask for an attorney immediately and exercise your right to remain silent."
    }
  },
  {
    id: "citizen-border-patrol",
    title: "Border Patrol Checkpoint",
    description: "You have been stopped at a Border Patrol checkpoint or by immigration authorities.",
    isEndStep: true,
    content: {
      description: "At Border Patrol checkpoints, even citizens have limited but important rights.",
      safeActions: [
        "Clearly state that you are a U.S. citizen if asked about citizenship",
        "You may remain silent about other questions beyond citizenship verification",
        "Keep your interaction brief and calm",
        "At interior checkpoints (away from borders), you can refuse consent to search your vehicle",
        "Record badge numbers and names of officers if possible"
      ],
      warningText: "Border Patrol has expanded authority within 100 miles of any U.S. border. Do not physically resist even if you believe your rights are being violated.",
      timeLimit: "If detained despite citizenship status, immediately request to speak with an attorney."
    }
  },
  // Legal Permanent Resident branch
  {
    id: "lpr-initial",
    title: "Traffic Stop - Legal Permanent Resident",
    description: "As a Green Card holder, you have substantial constitutional protections but should also consider your immigration status.",
    question: "What type of officer has stopped you?",
    options: [
      {
        id: "lpr-local",
        label: "Local Police / State Trooper",
        nextStep: "lpr-local-police"
      },
      {
        id: "lpr-border",
        label: "Border Patrol / Immigration",
        nextStep: "lpr-border-patrol"
      }
    ]
  },
  {
    id: "lpr-local-police",
    title: "Local Police Traffic Stop - Legal Permanent Resident",
    description: "You have been stopped by local law enforcement as a Green Card holder.",
    isEndStep: true,
    content: {
      description: "As a permanent resident, you have similar rights to citizens during regular traffic stops, but should be careful about criminal charges that could affect status.",
      safeActions: [
        "Keep your hands visible on the steering wheel",
        "Provide your license, registration, and insurance when requested",
        "You may provide your Green Card if specifically asked about immigration status",
        "You can refuse consent to search your vehicle by clearly stating: \"I do not consent to a search\"",
        "If not under arrest, you may ask: \"Am I free to go?\""
      ],
      warningText: "Criminal charges, even minor ones, can potentially affect your immigration status. Ask to speak with an attorney before pleading guilty to any offense.",
      timeLimit: "If arrested, immediately ask for an attorney and exercise your right to remain silent. Do not discuss your immigration status with local police."
    }
  },
  // Add more steps for other branches
  // This is a simplified version - more steps would be added for a complete playbook
  {
    id: "default-end",
    title: "End of Playbook",
    description: "You have reached the end of this playbook scenario.",
    isEndStep: true,
    content: {
      description: "This is a simplified playbook. In a real emergency, contact a qualified immigration attorney immediately.",
      safeActions: [
        "Document the entire encounter as soon as possible",
        "Note officer names, badge numbers, and patrol car numbers",
        "Contact an immigration attorney",
        "Report civil rights violations to appropriate agencies",
        "Do not sign any documents without legal representation"
      ],
      warningText: "This information is not legal advice. Each situation is unique and laws vary by jurisdiction."
    }
  }
];

// More playbooks would be added here for different scenarios
