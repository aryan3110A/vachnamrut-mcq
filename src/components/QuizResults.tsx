import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Trophy, Home, RotateCcw, Star } from "lucide-react";
import swaminarayanBg from "@/assets/swaminarayan-bg.jpg";
import mandirLogo from "@/assets/mandir-logo.png";

interface QuizResultsProps {
  correctAnswers: number;
  totalQuestions: number;
  category: string;
  onHome: () => void;
  onRetry: () => void;
}

const QuizResults = ({
  correctAnswers,
  totalQuestions,
  category,
  onHome,
  onRetry
}: QuizResultsProps) => {
  const percentage = (correctAnswers / totalQuestions) * 100;

  const getAchievementMessage = () => {
    if (percentage === 100) return "Perfect! Divine Knowledge Achieved! 🌟";
    if (percentage >= 80) return "Excellent! Great Understanding! 🎉";
    if (percentage >= 60) return "Very Good! Keep Learning! 📚";
    if (percentage >= 40) return "Good Effort! Continue Your Journey! 🙏";
    return "Keep Practicing! Every Step Counts! 💪";
  };

  const getAchievementColor = () => {
    if (percentage >= 80) return "from-divine-gold to-sacred-saffron";
    if (percentage >= 60) return "from-sacred-saffron to-primary";
    if (percentage >= 40) return "from-primary to-accent";
    return "from-accent to-temple-maroon";
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background */}
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
        {/* Header */}
        <div className="text-center mb-8 animate-fade-in">
          <div className="flex justify-center mb-4">
            <img 
              src={mandirLogo} 
              alt="Swaminarayan Mandir" 
              className="h-20 md:h-24 w-auto opacity-80"
            />
          </div>
          <h1 className="font-playfair text-3xl md:text-5xl font-bold bg-gradient-divine bg-clip-text text-transparent">
            Quiz Completed!
          </h1>
        </div>

        {/* Results Card */}
        <Card className="bg-card/80 backdrop-blur border-2 border-border shadow-divine max-w-2xl mx-auto animate-scale-in">
          <div className="p-8 md:p-12 text-center">
            {/* Trophy Icon */}
            <div className="flex justify-center mb-6">
              <div className={`p-6 rounded-full bg-gradient-to-br ${getAchievementColor()} shadow-xl animate-pulse`}>
                <Trophy className="h-16 w-16 text-white" />
              </div>
            </div>

            {/* Score */}
            <div className="mb-6">
              <div className="flex items-center justify-center space-x-2 mb-2">
                <Star className="h-6 w-6 text-divine-gold fill-divine-gold" />
                <span className="font-playfair text-5xl md:text-6xl font-bold bg-gradient-divine bg-clip-text text-transparent">
                  {correctAnswers}/{totalQuestions}
                </span>
                <Star className="h-6 w-6 text-divine-gold fill-divine-gold" />
              </div>
              <p className="text-xl text-muted-foreground font-inter">
                {percentage.toFixed(0)}% Correct
              </p>
            </div>

            {/* Category */}
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-gradient-divine text-white text-sm font-semibold rounded-full">
                {category}
              </span>
            </div>

            {/* Achievement Message */}
            <div className="mb-8 p-6 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl border-2 border-primary/20">
              <h3 className="font-playfair text-2xl md:text-3xl font-bold text-foreground mb-2">
                {getAchievementMessage()}
              </h3>
              <p className="text-muted-foreground font-inter">
                You have answered {correctAnswers} question{correctAnswers !== 1 ? 's' : ''} correctly
              </p>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <Button
                onClick={onRetry}
                className="w-full bg-gradient-divine hover:opacity-90 transition-opacity gap-2"
                size="lg"
              >
                <RotateCcw className="h-5 w-5" />
                Try Again
              </Button>
              <Button
                onClick={onHome}
                variant="outline"
                className="w-full gap-2"
                size="lg"
              >
                <Home className="h-5 w-5" />
                Back to Home
              </Button>
            </div>

            {/* Closing Message */}
            <div className="mt-8 pt-6 border-t border-border">
              <p className="font-playfair text-2xl font-bold bg-gradient-divine bg-clip-text text-transparent">
                Jai Swaminarayan
              </p>
              <p className="text-sm text-muted-foreground mt-2 font-inter">
                May the divine blessings be with you always
              </p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default QuizResults;
