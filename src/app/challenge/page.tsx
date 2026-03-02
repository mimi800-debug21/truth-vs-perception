'use client';

import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { questions, Question } from '@/data/questions';
import Link from 'next/link';

interface UserAnswer {
  questionId: string;
  userAnswer: number;
  correctAnswer: number;
  deviation: number;
}

export default function ChallengePage() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswer, setUserAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [answers, setAnswers] = useState<UserAnswer[]>([]);
  const [isFinished, setIsFinished] = useState(false);

  const question = questions[currentQuestion];

  const handleSubmit = useCallback(() => {
    if (userAnswer === null) return;

    const deviation = Math.abs(userAnswer - question.answer);
    const deviationPercent = question.answer !== 0 
      ? Math.round((deviation / question.answer) * 100) 
      : deviation;

    const newAnswer: UserAnswer = {
      questionId: question.id,
      userAnswer,
      correctAnswer: question.answer,
      deviation: deviationPercent,
    };

    setAnswers([...answers, newAnswer]);
    setShowResult(true);
  }, [userAnswer, question, answers]);

  const handleNext = useCallback(() => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setUserAnswer(null);
      setShowResult(false);
    } else {
      setIsFinished(true);
    }
  }, [currentQuestion]);

  const getFeedbackColor = (deviation: number) => {
    if (deviation <= 10) return 'from-green-400 to-emerald-500';
    if (deviation <= 25) return 'from-yellow-400 to-orange-500';
    return 'from-red-400 to-rose-500';
  };

  const getFeedbackText = (deviation: number) => {
    if (deviation <= 10) return 'Fantastisch!';
    if (deviation <= 25) return 'Gut geraten!';
    if (deviation <= 50) return 'Nicht schlecht...';
    return 'Weit daneben!';
  };

  if (isFinished) {
    const avgDeviation = Math.round(
      answers.reduce((sum, a) => sum + a.deviation, 0) / answers.length
    );

    return (
      <main className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 flex flex-col items-center justify-center p-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center"
        >
          <motion.h1
            className="text-5xl md:text-7xl font-bold text-white mb-8"
            initial={{ y: -20 }}
            animate={{ y: 0 }}
          >
            Challenge{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600">
              abgeschlossen!
            </span>
          </motion.h1>

          <motion.div
            className="bg-gray-800/50 backdrop-blur rounded-2xl p-8 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-500 mb-4">
              {avgDeviation}%
            </div>
            <div className="text-xl text-gray-400">
              Durchschnittliche Abweichung
            </div>
          </motion.div>

          <motion.div
            className="space-y-4 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            {answers.map((answer, index) => {
              const q = questions.find(q => q.id === answer.questionId);
              return (
                <motion.div
                  key={answer.questionId}
                  className={`p-4 rounded-lg bg-gradient-to-r ${getFeedbackColor(answer.deviation)}/20 border border-${getFeedbackColor(answer.deviation).split('-')[1]}-500/30`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                >
                  <div className="text-white font-medium truncate">
                    {q?.question.substring(0, 60)}...
                  </div>
                  <div className="text-gray-400 text-sm mt-1">
                    Du: {answer.userAnswer} {q?.unit} | Richtig: {answer.correctAnswer} {q?.unit} |{' '}
                    <span className={answer.deviation <= 25 ? 'text-green-400' : 'text-red-400'}>
                      {answer.deviation}% Abweichung
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex gap-4 justify-center"
          >
            <Link href="/">
              <motion.button
                className="px-8 py-4 bg-gray-700 text-white rounded-full hover:bg-gray-600 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Nochmal spielen
              </motion.button>
            </Link>
            <motion.button
              className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-full shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                if (navigator.share) {
                  navigator.share({
                    title: 'Truth vs. Perception',
                    text: `Ich habe ${avgDeviation}% durchschnittliche Abweichung bei der Truth vs. Perception Challenge erreicht!`,
                    url: window.location.origin,
                  });
                }
              }}
            >
              Ergebnis teilen
            </motion.button>
          </motion.div>
        </motion.div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 flex flex-col items-center justify-center p-8">
      {/* Progress indicator */}
      <div className="fixed top-8 left-1/2 -translate-x-1/2 flex gap-2">
        {questions.map((_, index) => (
          <motion.div
            key={index}
            className={`w-3 h-3 rounded-full ${index <= currentQuestion ? 'bg-green-500' : 'bg-gray-700'}`}
            initial={{ scale: 0 }}
            animate={{ scale: index === currentQuestion ? 1.2 : 1 }}
            transition={{ duration: 0.3 }}
          />
        ))}
      </div>

      <AnimatePresence mode="wait">
        {!showResult ? (
          <motion.div
            key="question"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            className="w-full max-w-2xl"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
              {question.question}
            </h2>

            <div className="bg-gray-800/50 backdrop-blur rounded-2xl p-8 mb-8">
              {question.type === 'slider' ? (
                <div className="space-y-6">
                  <input
                    type="range"
                    min={question.min}
                    max={question.max}
                    value={userAnswer || question.min!}
                    onChange={(e) => setUserAnswer(Number(e.target.value))}
                    className="w-full h-4 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-green-500"
                  />
                  <motion.div
                    className="text-6xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-500"
                    key={userAnswer}
                    initial={{ scale: 1.2 }}
                    animate={{ scale: 1 }}
                  >
                    {userAnswer || 0}{question.unit}
                  </motion.div>
                </div>
              ) : (
                <div className="space-y-6">
                  <input
                    type="number"
                    value={userAnswer || ''}
                    onChange={(e) => setUserAnswer(Number(e.target.value))}
                    placeholder="Deine Schätzung..."
                    className="w-full px-6 py-4 bg-gray-700 text-white text-2xl text-center rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                  <div className="text-center text-gray-400">
                    {question.unit}
                  </div>
                </div>
              )}
            </div>

            <motion.button
              onClick={handleSubmit}
              disabled={userAnswer === null}
              className="w-full px-8 py-6 bg-gradient-to-r from-green-500 to-emerald-600 text-white text-xl font-bold rounded-full shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
              whileHover={{ scale: userAnswer !== null ? 1.02 : 1 }}
              whileTap={{ scale: userAnswer !== null ? 0.98 : 1 }}
              animate={userAnswer !== null ? {
                boxShadow: [
                  '0 10px 40px -10px rgba(34, 197, 94, 0.3)',
                  '0 20px 60px -10px rgba(34, 197, 94, 0.5)',
                  '0 10px 40px -10px rgba(34, 197, 94, 0.3)',
                ],
              } : {}}
              transition={{
                boxShadow: { repeat: Infinity, duration: 2 },
              }}
            >
              Absenden
            </motion.button>

            {question.comment && (
              <motion.p
                className="text-center text-gray-500 mt-6 italic"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                💡 {question.comment}
              </motion.p>
            )}
          </motion.div>
        ) : (
          <motion.div
            key="result"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-full max-w-2xl text-center"
          >
            <motion.div
              className={`text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r ${getFeedbackColor(answers[answers.length - 1]?.deviation || 50)}`}
              initial={{ y: -20 }}
              animate={{ y: 0 }}
            >
              {getFeedbackText(answers[answers.length - 1]?.deviation || 50)}
            </motion.div>

            <motion.div
              className="text-8xl font-bold text-white mb-4"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: 'spring', damping: 10 }}
            >
              {question.answer}{question.unit}
            </motion.div>

            <motion.div
              className="text-3xl text-gray-400 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              Du lagst{' '}
              <span className={`font-bold ${answers[answers.length - 1]?.deviation <= 25 ? 'text-green-400' : 'text-red-400'}`}>
                {answers[answers.length - 1]?.deviation}%
              </span>
              {' '}daneben
            </motion.div>

            {/* Animated comparison bar */}
            <motion.div
              className="relative h-16 bg-gray-800 rounded-full mb-8 overflow-hidden"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.5 }}
            >
              <motion.div
                className={`absolute h-full bg-gradient-to-r ${getFeedbackColor(answers[answers.length - 1]?.deviation || 50)}`}
                initial={{ width: '0%' }}
                animate={{ 
                  width: `${Math.min(100, Math.max(0, 100 - (answers[answers.length - 1]?.deviation || 50)))}%` 
                }}
                transition={{ duration: 1, delay: 0.3 }}
              />
            </motion.div>

            <div className="text-gray-500 mb-8">
              Quelle: {question.source}
            </div>

            <motion.button
              onClick={handleNext}
              className="px-12 py-6 bg-gradient-to-r from-green-500 to-emerald-600 text-white text-xl font-bold rounded-full shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {currentQuestion < questions.length - 1 ? 'Nächste Frage' : 'Ergebnis sehen'}
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
