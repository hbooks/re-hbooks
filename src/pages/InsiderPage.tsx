import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Tag, Crown, BookOpen } from "lucide-react";
import Footer from "@/components/Footer";

// Extend Window for Sender explicit API
declare global {
  interface Window {
    senderForms?: {
      render: (formIds: string[], config?: { initialStatus?: string }) => void;
    };
    senderFormsLoaded?: boolean;
  }
}

const sections = [
  {
    icon: Tag,
    title: "Discount Alerts",
    description: "Be first to get and know about shop sales and member-only pricing. No spam—just occasional discounts.",
    buttonText: "Sign Up for Discount",
    elementId: "discount",
    formId: "egJ9rl",
  },
  {
    icon: Crown,
    title: "Membership Access",
    description: "Join our community for exclusive scenes, behind-the-scenes content, and early looks at Book 2.",
    buttonText: "Become a Member",
    elementId: "membership",
    formId: "elY9zJ",
  },
  {
    icon: BookOpen,
    title: "Exclusive Scenes",
    description: "Get deleted scenes, behind-the-scenes content, and Book 2 leaks as they happen—delivered to your inbox.",
    buttonText: "Get Exclusive Scenes",
    elementId: "signup-trigger",
    formId: "b2kwyJ",
  },
];

const InsiderPage = () => {
  // Explicit rendering for all three Sender popups
  useEffect(() => {
    const FORM_IDS = ['egJ9rl', 'elY9zJ', 'b2kwyJ'];

    const renderSenderForms = () => {
      if (window.senderForms && window.senderForms.render) {
        window.senderForms.render(FORM_IDS, { initialStatus: 'enabled' });
        console.log('Sender popups rendered');
      }
    };

    if (window.senderFormsLoaded) {
      renderSenderForms();
    } else {
      const handleReady = () => renderSenderForms();
      window.addEventListener('onSenderFormsLoaded', handleReady);
      return () => window.removeEventListener('onSenderFormsLoaded', handleReady);
    }
  }, []);

  return (
    <div className="min-h-screen">
      <div className="max-w-3xl mx-auto px-6 py-16">
        <div className="text-center space-y-3 mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-display font-light">Become an Insider</h1>
          <p className="text-muted-foreground font-body">Choose what you want access to</p>
        </div>

        <div className="space-y-8">
          {sections.map((section, i) => (
            <div
              key={section.formId}
              className={`bg-card border border-border rounded-lg p-8 md:p-10 space-y-5 animate-fade-in-delay-${i + 1}`}
            >
              <div className="flex items-center gap-3">
                <section.icon className="text-accent" size={28} />
                <h2 className="text-2xl font-display">{section.title}</h2>
              </div>
              <p className="text-muted-foreground font-body text-sm">{section.description}</p>
              <button
                id={section.elementId}
                className="bg-accent text-accent-foreground hover:bg-accent/90 font-bold px-8 py-4 rounded-md transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-lg"
              >
                {section.buttonText}
              </button>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 space-y-4 animate-fade-in-delay-3">
          <p className="text-sm text-muted-foreground font-body">
            You'll receive a confirmation email immediately. After that, only what you asked for.
          </p>
          <Link
            to="/shop"
            className="text-muted-foreground hover:text-accent transition-colors text-sm font-body underline underline-offset-4"
          >
            Just want the one-time scene? Click here
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default InsiderPage;
