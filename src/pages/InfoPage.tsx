import { Link } from "react-router-dom";
import { ArrowLeft, User, Crown } from "lucide-react";
import Footer from "@/components/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
  {
    q: "Will you spam my email?",
    a: "Absolutely not. You'll only receive content you explicitly signed up for. You can unsubscribe anytime with one click. Your privacy matters to us.",
  },
  {
    q: "What do you do with my email?",
    a: "We use MailerLite (a secure email platform) to store your email solely for sending you the content you requested. We never sell or share your information. See our Privacy Policy for details.",
  },
  {
    q: "Can I change my mind later?",
    a: "Yes. Every email has an unsubscribe link. You can also contact us directly.",
  },
  {
    q: "Is this really free?",
    a: "Yes. The email content is completely free. Any shop purchases are optional.",
  },
  {
    q: "How often will you email me?",
    a: "One-time visitors get 1 email. Exclusive insiders get 2-4 emails per month, always with valuable content.",
  },
];

const InfoPage = () => (
  <div className="min-h-screen">
    <div className="max-w-4xl mx-auto px-6 py-12">
      <Link
        to="/"
        className="inline-flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors mb-12 font-body text-sm"
      >
        <ArrowLeft size={16} />
        Back
      </Link>

      <div className="text-center space-y-3 mb-16 animate-fade-in">
        <h1 className="text-4xl md:text-5xl font-display font-light">Choose Your Path</h1>
        <p className="text-muted-foreground font-body">
          Both options are free. The difference is what you get.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-20">
        {/* One-time Visitor */}
        <div className="bg-card border border-border rounded-lg p-8 space-y-6 animate-fade-in-delay-1">
          <div className="flex items-center gap-3">
            <User className="text-accent" size={28} />
            <h2 className="text-2xl font-display">One-time Visitor</h2>
          </div>
          <ul className="space-y-3 text-foreground font-body text-sm">
            <li className="flex items-start gap-2"><span className="text-accent mt-1">•</span>One deleted scene sent to your inbox</li>
            <li className="flex items-start gap-2"><span className="text-accent mt-1">•</span>No future emails unless you choose</li>
            <li className="flex items-start gap-2"><span className="text-accent mt-1">•</span>Access to purchase exclusive content</li>
            <li className="flex items-start gap-2"><span className="text-accent mt-1">•</span>Perfect if you just want a taste</li>
          </ul>
          <p className="text-xs text-muted-foreground font-body">
            You'll get the link to our shop immediately.
          </p>
        </div>

        {/* Exclusive Insider */}
        <div className="bg-card border border-accent/30 rounded-lg p-8 space-y-6 animate-fade-in-delay-2 gold-glow">
          <div className="flex items-center gap-3">
            <Crown className="text-accent" size={28} />
            <h2 className="text-2xl font-display">Exclusive Insider</h2>
          </div>
          <ul className="space-y-3 text-foreground font-body text-sm">
            <li className="flex items-start gap-2"><span className="text-accent mt-1">•</span>All future deleted scenes</li>
            <li className="flex items-start gap-2"><span className="text-accent mt-1">•</span>Behind-the-scenes content</li>
            <li className="flex items-start gap-2"><span className="text-accent mt-1">•</span>Early access to leaks and updates</li>
            <li className="flex items-start gap-2"><span className="text-accent mt-1">•</span>Discounts on shop items</li>
            <li className="flex items-start gap-2"><span className="text-accent mt-1">•</span>Member-only community access</li>
          </ul>
          <p className="text-xs text-muted-foreground font-body">
            You'll receive emails occasionally—never spam, always story content.
          </p>
        </div>
      </div>

      {/* FAQ */}
      <div className="max-w-2xl mx-auto animate-fade-in-delay-3">
        <h2 className="text-2xl font-display text-center mb-8">Frequently Asked Questions</h2>
        <Accordion type="single" collapsible className="space-y-2">
          {faqItems.map((item, i) => (
            <AccordionItem key={i} value={`faq-${i}`} className="border border-border rounded-lg px-6 bg-card">
              <AccordionTrigger className="font-body text-sm hover:text-accent">
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground font-body text-sm">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
    <Footer />
  </div>
);

export default InfoPage;
