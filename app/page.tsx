"use client"

import { useState, useEffect } from 'react'
import { ArrowLeft, Bookmark, Home, RefreshCw } from 'lucide-react'

interface Word {
  korean: string
  english: string
  options: string[]
}

const wordSets: { [key: string]: Word[] } = {
  '초급': [
    { korean: "사과", english: "apple", options: ["apple", "banana", "orange", "grape"] },
    { korean: "책", english: "book", options: ["book", "pen", "pencil", "notebook"] },
    { korean: "집", english: "house", options: ["house", "car", "bike", "boat"] },
    { korean: "물", english: "water", options: ["water", "fire", "earth", "air"] },
    { korean: "친구", english: "friend", options: ["friend", "enemy", "stranger", "family"] },
  ],
  '중급': [
    { korean: "행복", english: "happiness", options: ["happiness", "sadness", "anger", "fear"] },
    { korean: "도전", english: "challenge", options: ["challenge", "easy", "simple", "difficult"] },
    { korean: "성공", english: "success", options: ["success", "failure", "attempt", "try"] },
    { korean: "여행", english: "travel", options: ["travel", "stay", "live", "work"] },
    { korean: "경험", english: "experience", options: ["experience", "knowledge", "wisdom", "skill"] },
  ],
  '고급': [
    { korean: "지속가능성", english: "sustainability", options: ["sustainability", "development", "growth", "progress"] },
    { korean: "인공지능", english: "artificial intelligence", options: ["artificial intelligence", "machine learning", "deep learning", "neural network"] },
    { korean: "글로벌화", english: "globalization", options: ["globalization", "localization", "nationalization", "internationalization"] },
    { korean: "다양성", english: "diversity", options: ["diversity", "uniformity", "similarity", "homogeneity"] },
    { korean: "혁신", english: "innovation", options: ["innovation", "tradition", "convention", "custom"] },
  ],
  '전문가': [
    { korean: "양자역학", english: "quantum mechanics", options: ["quantum mechanics", "classical mechanics", "relativity", "thermodynamics"] },
    { korean: "암호화폐", english: "cryptocurrency", options: ["cryptocurrency", "fiat currency", "digital currency", "virtual currency"] },
    { korean: "신경과학", english: "neuroscience", options: ["neuroscience", "psychology", "biology", "chemistry"] },
    { korean: "나노기술", english: "nanotechnology", options: ["nanotechnology", "biotechnology", "information technology", "cognitive science"] },
    { korean: "유전공학", english: "genetic engineering", options: ["genetic engineering", "bioengineering", "chemical engineering", "mechanical engineering"] },
  ],
  '마스터': [
    { korean: "초끈이론", english: "string theory", options: ["string theory", "loop quantum gravity", "supersymmetry", "M-theory"] },
    { korean: "메타인지", english: "metacognition", options: ["metacognition", "cognition", "perception", "attention"] },
    { korean: "양자얽힘", english: "quantum entanglement", options: ["quantum entanglement", "superposition", "wave function collapse", "quantum tunneling"] },
    { korean: "의식의 흐름", english: "stream of consciousness", options: ["stream of consciousness", "free association", "interior monologue", "soliloquy"] },
    { korean: "초현실주의", english: "surrealism", options: ["surrealism", "realism", "impressionism", "expressionism"] },
  ],
}

type Screen = 'home' | 'quiz' | 'results'
type Difficulty = '초급' | '중급' | '고급' | '전문가' | '마스터'

export default function WordQuiz() {
  const [screen, setScreen] = useState<Screen>('home')
  const [difficulty, setDifficulty] = useState<Difficulty>('초급')
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [timeLeft, setTimeLeft] = useState(2)
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null)
  const [isBookmarked, setIsBookmarked] = useState(false)
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null)
  const [correctAnswers, setCorrectAnswers] = useState(0)

  useEffect(() => {
    if (screen === 'quiz' && timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 0.1), 100)
      return () => clearTimeout(timer)
    } else if (screen === 'quiz' && selectedAnswer === null) {
      setTimeout(() => goToNextWord(), 1000)
    }
  }, [timeLeft, selectedAnswer, screen])

  const goToNextWord = () => {
    if (currentWordIndex + 1 < wordSets[difficulty].length) {
      setCurrentWordIndex((prevIndex) => prevIndex + 1)
      setTimeLeft(2)
      setSelectedAnswer(null)
      setIsCorrect(null)
    } else {
      setScreen('results')
    }
  }

  const handleAnswerSelect = (answer: string) => {
    if (selectedAnswer !== null || timeLeft <= 0) return
    const correct = answer === wordSets[difficulty][currentWordIndex].english
    setSelectedAnswer(answer)
    setIsCorrect(correct)
    if (correct) setCorrectAnswers(prev => prev + 1)
    setTimeout(goToNextWord, 1000)
  }

  const startQuiz = (selectedDifficulty: Difficulty) => {
    setScreen('quiz')
    setDifficulty(selectedDifficulty)
    setCurrentWordIndex(0)
    setTimeLeft(2)
    setSelectedAnswer(null)
    setIsCorrect(null)
    setCorrectAnswers(0)
  }

  const currentWord = wordSets[difficulty][currentWordIndex]

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      {screen === 'home' && (
        <div className="flex-1 flex flex-col items-center justify-center p-4">
          <h1 className="text-3xl font-bold mb-8">영단어 학습</h1>
          <div className="grid grid-cols-2 gap-4 w-full max-w-sm">
            {(['초급', '중급', '고급', '전문가', '마스터'] as Difficulty[]).map((level) => (
              <button
                key={level}
                className="py-3 px-6 bg-white rounded-full text-center border-2 border-gray-300 hover:bg-gray-50"
                onClick={() => startQuiz(level)}
              >
                {level}
              </button>
            ))}
            <button
              className="py-3 px-6 bg-white rounded-full text-center border-2 border-gray-300 hover:bg-gray-50 col-span-2"
              onClick={() => startQuiz('초급')}
            >
              북마크 단어
            </button>
          </div>
        </div>
      )}

      {screen === 'quiz' && (
        <>
          <header className="flex items-center justify-between p-4 bg-white">
            <button className="text-gray-600" onClick={() => setScreen('home')}>
              <ArrowLeft size={24} />
            </button>
            <span className="font-semibold">{difficulty}</span>
            <span className="text-yellow-500">★ 1</span>
          </header>

          <div className="flex-1 flex flex-col px-4 pt-2">
            <div className="h-1 bg-gray-200 rounded-full">
              <div 
                className="h-full bg-blue-500 rounded-full transition-all duration-300"
                style={{ width: `${((currentWordIndex + 1) / wordSets[difficulty].length) * 100}%` }}
              ></div>
            </div>

            <button 
              className={`self-end mt-4 ${isBookmarked ? 'text-yellow-500' : 'text-gray-400'}`}
              onClick={() => setIsBookmarked(!isBookmarked)}
            >
              <Bookmark size={24} />
            </button>

            <div className="flex-1 flex flex-col items-center justify-center space-y-8">
              <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-sm border-2 border-gray-200 flex flex-col items-center justify-center" style={{ height: '200px' }}>
                <h2 className="text-4xl font-bold text-center mb-4">{currentWord.korean}</h2>
                <div className="w-full h-1 bg-gray-200 rounded-full">
                  <div 
                    className="h-full bg-red-500 rounded-full transition-all duration-100"
                    style={{ width: `${(timeLeft / 2) * 100}%` }}
                  ></div>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4 w-full max-w-sm">
                {currentWord.options.map((option) => (
                  <button
                    key={option}
                    className={`py-3 px-6 rounded-full text-center transition-colors duration-200 border-2 ${
                      selectedAnswer === null
                        ? 'bg-white text-gray-800 border-gray-300'
                        : selectedAnswer === option
                        ? isCorrect
                          ? 'bg-green-500 text-white border-green-500'
                          : 'bg-red-500 text-white border-red-500'
                        : option === currentWord.english
                        ? 'bg-green-500 text-white border-green-500'
                        : 'bg-gray-200 text-gray-500 border-gray-200'
                    } ${timeLeft <= 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
                    onClick={() => handleAnswerSelect(option)}
                    disabled={timeLeft <= 0 || selectedAnswer !== null}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </>
      )}

      {screen === 'results' && (
        <div className="flex-1 flex flex-col items-center justify-center p-4 bg-gray-100">
          <h2 className="text-3xl font-bold mb-4">학습 결과</h2>
          <p className="text-xl mb-8">
            {wordSets[difficulty].length}문제 중 {correctAnswers}문제 정답
          </p>
          <div className="flex gap-4">
            <button
              className="py-2 px-4 bg-blue-500 text-white rounded-full flex items-center"
              onClick={() => startQuiz(difficulty)}
            >
              <RefreshCw size={20} className="mr-2" />
              다시보기
            </button>
            <button
              className="py-2 px-4 bg-green-500 text-white rounded-full flex items-center"
              onClick={() => setScreen('home')}
            >
              <Home size={20} className="mr-2" />
              홈으로
            </button>
          </div>
        </div>
      )}
    </div>
  )
}