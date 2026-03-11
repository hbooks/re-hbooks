import { FileText, Camera, Bookmark, Bell, ExternalLink } from "lucide-react";
import { KoFiDialog } from "react-kofi";
import "react-kofi/dist/styles.css";
import Footer from "@/components/Footer";

const shopItems = [
  {
    icon: FileText,
    title: "Chapter Leaks",
    description: "Early looks at chapters from Book 2",
    kofiId: "s/8e3c135503",
  },
  {
    icon: Camera,
    title: "Behind the Scenes",
    description: "Writing process, character notes, deleted concepts",
    kofiId: "s/e161ccb571",
  },
  {
    icon: Bookmark,
    title: "Deleted Scenes Collection",
    description: "Every deleted scene from The Gilded Cage",
    kofiId: "s/bc688737de",
  },
];

const ShopPage = () => {
  const handleNotify = () => {
    if (window.ml) {
      window.ml("show", "BPQnm2", true);
    }
  };

  return (
    <div className="min-h-screen">
      <div className="max-w-3xl mx-auto px-6 py-16">
        <div className="text-center space-y-3 mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-display font-light">
            Your Exclusive Content Awaits
          </h1>
          <p className="text-muted-foreground font-body">
            Choose what you'd like to purchase or explore
          </p>
        </div>

        <div className="space-y-8 mb-20">
          {shopItems.map((item, i) => (
            <div
              key={item.kofiId}
              className={`bg-card border border-border rounded-lg p-8 md:p-10 space-y-5 animate-fade-in-delay-${i + 1}`}
            >
              <div className="flex items-center gap-3">
                <item.icon className="text-accent" size={28} />
                <h2 className="text-2xl font-display">{item.title}</h2>
              </div>
              <p className="text-muted-foreground font-body text-sm">{item.description}</p>
              <KoFiDialog
                color="#000000"
                textColor="#ffffff"
                id={item.kofiId}
                label="View on Ko-fi"
                width={500}
                buttonRadius="6px"
                padding={20}
              />
            </div>
          ))}
        </div>

        {/* More Books */}
        <div className="text-center space-y-6 mb-20 animate-fade-in">
          <h2 className="text-2xl font-display">More Books</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://hbooks-98a.pages.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border border-border text-foreground hover:border-accent hover:text-accent transition-colors px-6 py-3 rounded-md font-body font-medium"
            >
              Visit My Main Website <ExternalLink size={16} />
            </a>
            <a
              href="https://books2read.com/u/mgQwZK"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border border-border text-foreground hover:border-accent hover:text-accent transition-colors px-6 py-3 rounded-md font-body font-medium"
            >
              Buy The Gilded Cage <ExternalLink size={16} />
            </a>
          </div>
        </div>

        {/* Shop Updates */}
        <div className="bg-card border border-accent/30 rounded-lg p-8 md:p-10 text-center space-y-5 gold-glow animate-fade-in">
          <Bell className="text-accent mx-auto" size={32} />
          <h2 className="text-2xl font-display">Get Shop Updates</h2>
          <p className="text-muted-foreground font-body text-sm max-w-md mx-auto">
            Want to know when new shop items drop? We'll notify you—nothing else.
          </p>
          <button
            onClick={handleNotify}
            className="bg-accent text-accent-foreground hover:bg-accent/80 transition-colors px-8 py-3 rounded-md font-body font-medium text-lg"
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
