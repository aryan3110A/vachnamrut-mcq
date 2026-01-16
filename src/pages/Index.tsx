import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import QuizHome from "@/components/QuizHome";
import QuizQuestion from "@/components/QuizQuestion";
import QuizResults from "@/components/QuizResults";
import { getRandomQuestions, Question } from "@/data/questions";

type QuizState = "home" | "quiz" | "results" | "qa";

const Index = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [quizState, setQuizState] = useState<QuizState>("home");
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [wrongAnswers, setWrongAnswers] = useState(0);
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    if (location.pathname === "/MCQ") {
      // For MCQ route, initialize with "Vachnamrut"
      setSelectedCategory("વચનામૃત");
      const randomQuestions = getRandomQuestions("Vachnamrut", 10);
      setQuestions(randomQuestions);
      setCurrentQuestion(0);
      setCorrectAnswers(0);
      setWrongAnswers(0);
      setQuizState("quiz");
    } else if (location.pathname === "/Q&A") {
      setQuizState("qa");
    } else if (location.pathname === "/") {
      setQuizState("home");
      setSelectedCategory("");
      setQuestions([]);
      setCurrentQuestion(0);
      setCorrectAnswers(0);
      setWrongAnswers(0);
    }
  }, [location.pathname]);

  const handleCategorySelect = (categoryKey: string, displayName: string) => {
    // This is called from QuizHome when clicks happen
    // Navigation is handled by QuizHome itself now
  };

  const handleQASelect = () => {
    // This is called from QuizHome when clicks happen
    // Navigation is handled by QuizHome itself now
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
    navigate("/");
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
          onCategorySelect={() => { }}
          onQASelect={() => { }}
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
      {/* {quizState === "qa" && (
        <ShikshapatriQA onHome={handleHome} />
      )} */}
    </>
  );
};

export default Index;
