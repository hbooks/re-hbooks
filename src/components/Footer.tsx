import { Twitter, Instagram, Facebook, MessageCircle } from "lucide-react";

const socialLinks = [
  { icon: Twitter, href: "https://x.com/Raphael888870", label: "X" },
  { icon: Instagram, href: "https://www.instagram.com/raphael_mmw/", label: "Instagram" },
  { icon: Facebook, href: "https://www.facebook.com/profile.php?id=61581325859715", label: "Facebook" },
  { icon: MessageCircle, href: "https://discord.gg/zbaugS2B2", label: "Discord" },
];

const Footer = () => (
  <footer className="border-t border-border py-10 px-6 mt-20">
    <div className="max-w-3xl mx-auto text-center space-y-6">
      <div className="flex justify-center gap-6">
        {socialLinks.map(({ icon: Icon, href, label }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="text-muted-foreground hover:text-accent transition-colors"
          >
            <Icon size={20} />
          </a>
        ))}
      </div>
      <div className="flex justify-center gap-6 text-sm text-muted-foreground">
        <a
          href="https://hpbooks.uk/privacy"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-accent transition-colors"
        >
          Privacy Policy
        </a>
        <a
          href="https://hpbooks.uk/terms"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-accent transition-colors"
        >
          Terms of Service
        </a>
      </div>
      <p className="text-xs text-muted-foreground">
        Made with Heart for stories.
      </p>
       <p className="text-xs text-muted-foreground">
        © 2026 Hbooks / H00man Publisher. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
