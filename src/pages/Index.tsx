import { useState } from "react";
import QuizHome from "@/components/QuizHome";
import QuizQuestion from "@/components/QuizQuestion";
import QuizResults from "@/components/QuizResults";
import ShikshapatriQA from "@/components/ShikshapatriQA";
import { getRandomQuestions, Question } from "@/data/questions";

type QuizState = "home" | "quiz" | "results" | "qa";

const Index = () => {
  const [quizState, setQuizState] = useState<QuizState>("home");
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [wrongAnswers, setWrongAnswers] = useState(0);

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
    const randomQuestions = getRandomQuestions(category, 10);
    setQuestions(randomQuestions);
    setCurrentQuestion(0);
    setCorrectAnswers(0);
    setWrongAnswers(0);
    setQuizState("quiz");
  };

  const handleQASelect = () => {
    setQuizState("qa");
  };

  const handleAnswer = (isCorrect: boolean) => {
    if (isCorrect) {
      setCorrectAnswers(prev => prev + 1);
    } else {
      setWrongAnswers(prev => prev + 1);
    }
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      setQuizState("results");
    }
  };

  const handleHome = () => {
    setQuizState("home");
    setSelectedCategory("");
    setQuestions([]);
    setCurrentQuestion(0);
    setCorrectAnswers(0);
    setWrongAnswers(0);
  };

  const handleRetry = () => {
    const randomQuestions = getRandomQuestions(selectedCategory, 10);
    setQuestions(randomQuestions);
    setCurrentQuestion(0);
    setCorrectAnswers(0);
    setWrongAnswers(0);
    setQuizState("quiz");
  };

  return (
    <>
      {quizState === "home" && (
        <QuizHome 
          onCategorySelect={handleCategorySelect} 
          onQASelect={handleQASelect}
        />
      )}
      {quizState === "quiz" && questions.length > 0 && (
        <QuizQuestion
          questions={questions}
          currentQuestion={currentQuestion}
          onAnswer={handleAnswer}
          onNext={handleNext}
          onHome={handleHome}
        />
      )}
      {quizState === "results" && (
        <QuizResults
          correctAnswers={correctAnswers}
          totalQuestions={questions.length}
          category={selectedCategory}
          onHome={handleHome}
          onRetry={handleRetry}
        />
      )}
      {quizState === "qa" && (
        <ShikshapatriQA onHome={handleHome} />
      )}
    </>
  );
};

export default Index;
