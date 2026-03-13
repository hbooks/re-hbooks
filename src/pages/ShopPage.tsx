import { useEffect } from 'react';
import { FileText, Camera, Bookmark, Bell, ExternalLink } from "lucide-react";
import { KoFiButton } from "react-kofi"; // We'll use the button component only
import "react-kofi/dist/styles.css";
import Footer from "@/components/Footer";

declare global {
  interface Window {
    senderForms?: {
      render: (formIds: string[], config?: { initialStatus?: string }) => void;
    };
    senderFormsLoaded?: boolean;
  }
}

const shopItems = [
  {
    icon: FileText,
    title: "Chapter Leaks",
    description: "Early looks at chapters from Book 2",
    url: "https://ko-fi.com/s/8e3c135503",
  },
  {
    icon: Camera,
    title: "Behind the Scenes",
    description: "Writing process, character notes, deleted concepts",
    url: "https://ko-fi.com/s/e161ccb571",
  },
  {
    icon: Bookmark,
    title: "Deleted Scenes Collection",
    description: "Every deleted scene from The Gilded Cage",
    url: "https://ko-fi.com/s/bc688737de",
  },
];

const ShopPage = () => {
  // Sender explicit rendering for Notify Me
  useEffect(() => {
    const FORM_ID = 'bYE929';
    const renderSenderForms = () => {
      if (window.senderForms?.render) {
        window.senderForms.render([FORM_ID], { initialStatus: 'enabled' });
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

  // Function to open Ko‑fi in a popup window
  const openKoFiPopup = (url: string) => {
    const width = 600;
    const height = 700;
    const left = window.screen.width / 2 - width / 2;
    const top = window.screen.height / 2 - height / 2;
    window.open(
      url,
      'ko-fi-popup',
      `width=${width},height=${height},top=${top},left=${left},resizable=yes,scrollbars=yes,status=yes`
    );
  };

  return (
    <div className="min-h-screen">
      <div className="max-w-3xl mx-auto px-6 py-16">
        <h1 className="text-4xl md:text-5xl font-display font-light text-center mb-16 animate-fade-in">
          Your Exclusive Content Awaits
        </h1>

        <div className="space-y-8 mb-20">
          {shopItems.map((item, i) => (
            <div
              key={item.url}
              className="bg-card border border-border rounded-lg p-8 md:p-10 space-y-5 animate-fade-in-up"
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              <div className="flex items-center gap-3">
                <item.icon className="text-accent" size={28} />
                <h2 className="text-2xl font-display">{item.title}</h2>
              </div>
              <p className="text-muted-foreground text-sm">{item.description}</p>
              
              {/* Ko‑fi button with original animation */}
              <KoFiButton
                username={item.url.replace('https://ko-fi.com/', '')} // Extract username from URL
                label="View on Ko‑fi"
                classNames={{
                  button: "bg-black hover:bg-gray-800 text-white font-medium px-6 py-3 rounded-md transition-all duration-300 transform hover:scale-105 hover:shadow-lg shadow-md"
                }}
                onClick={(e) => {
                  e.preventDefault(); // Prevent default navigation
                  openKoFiPopup(item.url);
                }}
              />
            </div>
          ))}
        </div>

        {/* More Books */}
        <div className="text-center space-y-6 mb-20 animate-fade-in">
          <h2 className="text-2xl font-display">More Books</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://hpbooks.uk"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border border-border text-foreground hover:border-accent hover:text-accent transition-colors px-6 py-3 rounded-md font-medium"
            >
              Visit My Main Website <ExternalLink size={16} />
            </a>
            <a
              href="https://books2read.com/u/mgQwZK"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border border-border text-foreground hover:border-accent hover:text-accent transition-colors px-6 py-3 rounded-md font-medium"
            >
              Buy The Gilded Cage <ExternalLink size={16} />
            </a>
          </div>
        </div>

        {/* Shop Updates */}
        <div className="bg-card border border-accent/30 rounded-lg p-8 md:p-10 text-center space-y-5 gold-glow animate-fade-in">
          <Bell className="text-accent mx-auto" size={32} />
          <h2 className="text-2xl font-display">Get Shop Updates</h2>
          <p className="text-muted-foreground text-sm max-w-md mx-auto">
            Want to know when new shop items drop? We'll notify you—nothing else.
          </p>
          <button
            id="notify-me-trigger"
            className="bg-accent text-accent-foreground hover:bg-accent/80 transition-colors px-8 py-3 rounded-md font-medium text-lg"
          >
            Notify Me
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ShopPage;
