import { Twitter, Instagram, Facebook, MessageCircle } from "lucide-react";

const socialLinks = [
  { icon: Twitter, href: "https://x.com", label: "X" },
  { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
  { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
  { icon: MessageCircle, href: "https://discord.com", label: "Discord" },
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
          href="https://hbooks-98a.pages.dev/privacy"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-accent transition-colors"
        >
          Privacy Policy
        </a>
        <a
          href="https://hbooks-98a.pages.dev/terms"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-accent transition-colors"
        >
          Terms of Service
        </a>
      </div>
      <p className="text-xs text-muted-foreground">
        © 2026 hb00ks / H00man Publisher. All rights reserved. Made with Heart for stories.
      </p>
    </div>
  </footer>
);

export default Footer;
