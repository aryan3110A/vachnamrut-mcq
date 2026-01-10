import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Card } from "@/components/ui/card";
import { BookOpen, Sparkles, Heart, Users, ScrollText, MessageCircle } from "lucide-react";
import swaminarayanBg from "@/assets/swaminarayan-bg.jpg";
import mandirLogo from "@/assets/mandir-logo.png";
import FlipbookViewer from "./FlipbookViewer";
import { useState } from "react";

interface QuizHomeProps {
  onCategorySelect: (categoryKey: string, displayName: string) => void;
  onQASelect: () => void;
}

const QuizHome = ({ onCategorySelect, onQASelect }: QuizHomeProps) => {
  const navigate = useNavigate();
  const [isBookOpen, setIsBookOpen] = useState(false);

  // Performance Optimization: Preload Resources
  useEffect(() => {
    // 1. Prefetch PDF
    const link = document.createElement('link');
    link.rel = 'prefetch';
    link.href = '/pdfs/shikshapatri_swaminarayan.pdf';
    document.head.appendChild(link);

    // 2. Preload DearFlip Styles
    const cssFiles = [
      "/dflip/css/dflip.min.css",
      "/dflip/css/themify-icons.min.css"
    ];
    cssFiles.forEach(file => {
      if (!document.querySelector(`link[href="${file}"]`)) {
        const l = document.createElement("link");
        l.href = file;
        l.rel = "stylesheet";
        l.type = "text/css";
        document.head.appendChild(l);
      }
    });

    // 3. Preload Scripts (jQuery then DearFlip)
    const loadScripts = async () => {
      if (!(window as any).jQuery) {
        await new Promise((resolve) => {
          const script = document.createElement("script");
          script.src = "/dflip/js/libs/jquery.min.js";
          script.onload = resolve;
          document.head.appendChild(script);
        });
      }
      if (!(window as any).DFLIP) {
        const script = document.createElement("script");
        script.src = "/dflip/js/dflip.min.js";
        document.head.appendChild(script);
      }
    };
    loadScripts();

    return () => {
      // Cleanup if necessary
    };
  }, []);

  const categories = [
    {
      id: "shikshapatri-book",
      name: "શિક્ષાપત્રી",
      icon: BookOpen,
      description: "શિક્ષાપત્રી વાંચો અને જીવન પાવન કરો",
      color: "from-accent to-divine-gold",
      isBook: true,
      buttonText: "Read More"
    },
    {
      id: "qa",
      name: "પ્રશ્નોત્તરી ( Q&A )",
      icon: MessageCircle,
      description: "Explore the divine teachings through questions and answers",
      color: "from-temple-maroon to-accent",
      isQA: true,
      buttonText: "Read More"
    },
    {
      id: "shikshapatri-mcq",
      name: "હેતુલક્ષી પ્રશ્નો ( MCQ )",
      icon: ScrollText,
      description: "Answer 10 questions to test your knowledge and receive divine blessings",
      color: "from-sacred-saffron to-divine-gold",
      buttonText: "Start Quiz"
    }
  ];



  // ... (inside the component)

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${swaminarayanBg})`,
          filter: 'brightness(0.3) blur(2px)'
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/90 to-background/95" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-8 md:py-12">
        {/* Header with Logo */}
        <div className="text-center mb-8 md:mb-12 animate-fade-in">
          <div className="flex justify-center mb-6">
            <img
              src={mandirLogo}
              alt="Swaminarayan Mandir"
              className="h-24 md:h-32 w-auto opacity-80 hover:opacity-100 transition-opacity"
            />
          </div>
          <h1 className="font-playfair text-4xl md:text-6xl font-bold bg-gradient-divine bg-clip-text text-transparent mb-4">
            Jai Swaminarayan
          </h1>
          <p className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto font-inter">
            Test your spiritual knowledge through divine questions and deepen your understanding of the sacred teachings
          </p>
        </div>

        {/* Category Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-16">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card
                key={category.name}
                className="group relative overflow-hidden bg-card/50 backdrop-blur border-2 border-border hover:border-primary/50 transition-all duration-300 hover:shadow-divine cursor-pointer animate-scale-in flex flex-col"
                style={{ animationDelay: `${index * 100}ms` }}
                onClick={() => {
                  if (category.isQA) {
                    navigate("/Q&A");
                    onQASelect();
                  } else if (category.isBook) {
                    setIsBookOpen(true);
                  } else {
                    navigate("/MCQ");
                    onCategorySelect(category.id, category.name);
                  }
                }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-5 group-hover:opacity-10 transition-opacity`} />
                <div className="relative p-6 md:p-8 flex-1 flex flex-col">
                  <div className="flex items-start space-x-4 flex-1">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${category.color} shadow-lg group-hover:scale-110 transition-transform`}>
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-playfair text-xl md:text-2xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {category.name}
                      </h3>
                      <p className="text-muted-foreground font-inter text-sm md:text-base">
                        {category.description}
                      </p>
                    </div>
                  </div>
                  <Button
                    className="w-full mt-6 bg-gradient-divine hover:opacity-90 transition-opacity shadow-md font-inter"
                    size="lg"
                  >
                    {category.buttonText || "Start Quiz"}
                  </Button>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Book Viewer Modal */}
        {isBookOpen && (
          <FlipbookViewer
            pdfUrl="/pdfs/shikshapatri_swaminarayan.pdf"
            onClose={() => setIsBookOpen(false)}
          />
        )}

        {/* Footer Text */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground font-inter text-sm">
            Answer 10 questions to test your knowledge and receive divine blessings
          </p>
        </div>
      </div>
    </div>
  );
};

export default QuizHome;
