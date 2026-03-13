import { useEffect, useState } from 'react';
import { FileText, Camera, Bookmark, Bell, ExternalLink, X } from "lucide-react";
import { Button } from "@/components/ui/button";
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
  const [selectedUrl, setSelectedUrl] = useState<string | null>(null);

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

  const handleKoFiClick = (url: string) => {
    setSelectedUrl(url);
  };

  const closeModal = () => setSelectedUrl(null);

  return (
    <div className="min-h-screen">
      <div className="max-w-3xl mx-auto px-6 py-16">
        <h1 className="text-4xl md:text-5xl font-display font-light text-center mb-16">
          Your Exclusive Content Awaits
        </h1>

        <div className="space-y-8 mb-20">
          {shopItems.map((item, i) => (
            <div key={item.url} className="bg-card border border-border rounded-lg p-8 md:p-10 space-y-5">
              <div className="flex items-center gap-3">
                <item.icon className="text-accent" size={28} />
                <h2 className="text-2xl font-display">{item.title}</h2>
              </div>
              <p className="text-muted-foreground text-sm">{item.description}</p>
              <button
                onClick={() => handleKoFiClick(item.url)}
                className="bg-black hover:bg-gray-800 text-white font-medium px-6 py-3 rounded-md transition-colors inline-flex items-center"
              >
                View on Ko‑fi
              </button>
            </div>
          ))}
        </div>

        {/* More Books (unchanged) */}
        {/* Shop Updates */}
        <div className="bg-card border border-accent/30 rounded-lg p-8 md:p-10 text-center space-y-5 gold-glow">
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

      {/* Modal for Ko‑fi */}
      {selectedUrl && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
          <div className="bg-card w-full max-w-4xl h-[80vh] rounded-2xl shadow-2xl border border-accent/20 flex flex-col">
            <div className="flex justify-between items-center p-4 border-b border-accent/20">
              <h3 className="font-display text-xl text-accent">Ko‑fi Shop</h3>
              <button onClick={closeModal} className="text-muted-foreground hover:text-accent">
                <X size={24} />
              </button>
            </div>
            <iframe
              src={selectedUrl}
              className="w-full flex-1 rounded-b-2xl"
              sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-top-navigation"
              title="Ko-fi Shop"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ShopPage;
