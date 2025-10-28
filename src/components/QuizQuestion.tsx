import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { CheckCircle2, XCircle, Home } from "lucide-react";
import { Question } from "@/data/questions";
import swaminarayanBg from "@/assets/swaminarayan-bg.jpg";
import mandirLogo from "@/assets/mandir-logo.png";

interface QuizQuestionProps {
  questions: Question[];
  currentQuestion: number;
  onAnswer: (isCorrect: boolean) => void;
  onNext: () => void;
  onHome: () => void;
}

const QuizQuestion = ({
  questions,
  currentQuestion,
  onAnswer,
  onNext,
  onHome
}: QuizQuestionProps) => {
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);

  const question = questions[currentQuestion];
  const progress = ((currentQuestion + 1) / questions.length) * 100;

  const handleAnswerSelect = (index: number) => {
    if (showFeedback) return;
    
    setSelectedAnswer(index);
    setShowFeedback(true);
    const isCorrect = index === question.correctAnswer;
    onAnswer(isCorrect);
  };

  const handleNext = () => {
    setSelectedAnswer(null);
    setShowFeedback(false);
    onNext();
  };

  const getOptionStyle = (index: number) => {
    if (!showFeedback) {
      return selectedAnswer === index
        ? "border-primary bg-primary/5"
        : "border-border hover:border-primary/50 hover:bg-primary/5";
    }

    if (index === question.correctAnswer) {
      return "border-green-500 bg-green-50";
    }

    if (index === selectedAnswer && index !== question.correctAnswer) {
      return "border-red-500 bg-red-50";
    }

    return "border-border opacity-50";
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
      <div className="relative z-10 container mx-auto px-4 py-6 md:py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-4">
            <img src={mandirLogo} alt="Logo" className="h-12 w-auto opacity-80" />
            <span className="font-playfair text-xl md:text-2xl font-semibold bg-gradient-divine bg-clip-text text-transparent">
              Jai Swaminarayan
            </span>
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={onHome}
            className="gap-2"
          >
            <Home className="h-4 w-4" />
            <span className="hidden sm:inline">Home</span>
          </Button>
        </div>

        {/* Progress */}
        <div className="mb-6">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-inter text-muted-foreground">
              Question {currentQuestion + 1} of {questions.length}
            </span>
            <span className="text-sm font-inter font-semibold text-primary">
              {Math.round(progress)}%
            </span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        {/* Question Card */}
        <Card className="bg-card/80 backdrop-blur border-2 border-border shadow-card max-w-3xl mx-auto">
          <div className="p-6 md:p-8">
            {/* Category Badge */}
            <div className="mb-4">
              <span className="inline-block px-3 py-1 bg-gradient-divine text-white text-xs font-semibold rounded-full">
                {question.category}
              </span>
            </div>

            {/* Question */}
            <h2 className="font-playfair text-xl md:text-2xl font-semibold text-foreground mb-6">
              {question.question}
            </h2>

            {/* Options */}
            <div className="space-y-3 mb-6">
              {question.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswerSelect(index)}
                  disabled={showFeedback}
                  className={`w-full text-left p-4 rounded-lg border-2 transition-all duration-200 ${getOptionStyle(index)}`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center font-semibold text-primary">
                        {String.fromCharCode(65 + index)}
                      </span>
                      <span className="font-inter text-foreground">{option}</span>
                    </div>
                    {showFeedback && index === question.correctAnswer && (
                      <CheckCircle2 className="h-6 w-6 text-green-600 flex-shrink-0" />
                    )}
                    {showFeedback && index === selectedAnswer && index !== question.correctAnswer && (
                      <XCircle className="h-6 w-6 text-red-600 flex-shrink-0" />
                    )}
                  </div>
                </button>
              ))}
            </div>

            {/* Feedback */}
            {showFeedback && (
              <div className="animate-fade-in">
                <div className={`p-4 rounded-lg mb-4 ${
                  selectedAnswer === question.correctAnswer
                    ? "bg-green-50 border-2 border-green-200"
                    : "bg-red-50 border-2 border-red-200"
                }`}>
                  <p className={`font-semibold font-inter ${
                    selectedAnswer === question.correctAnswer
                      ? "text-green-800"
                      : "text-red-800"
                  }`}>
                    {selectedAnswer === question.correctAnswer
                      ? "🎉 Correct! Well done!"
                      : "❌ Incorrect. The correct answer is: " + question.options[question.correctAnswer]}
                  </p>
                </div>
                <Button
                  onClick={handleNext}
                  className="w-full bg-gradient-divine hover:opacity-90 transition-opacity"
                  size="lg"
                >
                  {currentQuestion < questions.length - 1 ? "Next Question" : "View Results"}
                </Button>
              </div>
            )}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default QuizQuestion;
