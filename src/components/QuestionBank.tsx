import React, { useState } from 'react';
import { BookOpen, Clock, CheckCircle, XCircle } from 'lucide-react';
import { questions } from '../data/questions';

const QuestionBank = () => {
  const [selectedSubject, setSelectedSubject] = useState('physics');
  const [showSolution, setShowSolution] = useState<number | null>(null);
  const [selectedDifficulty, setSelectedDifficulty] = useState('all');

  const filteredQuestions = questions[selectedSubject].filter(q => 
    selectedDifficulty === 'all' || q.difficulty === selectedDifficulty
  );

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="flex flex-wrap gap-4 mb-6">
        <select
          className="bg-gray-700 text-white px-4 py-2 rounded-lg"
          value={selectedSubject}
          onChange={(e) => setSelectedSubject(e.target.value)}
        >
          <option value="physics">Physics</option>
          <option value="chemistry">Chemistry</option>
          <option value="mathematics">Mathematics</option>
        </select>

        <select
          className="bg-gray-700 text-white px-4 py-2 rounded-lg"
          value={selectedDifficulty}
          onChange={(e) => setSelectedDifficulty(e.target.value)}
        >
          <option value="all">All Levels</option>
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
      </div>

      <div className="space-y-6">
        {filteredQuestions.map((question, index) => (
          <div key={index} className="bg-gray-800 rounded-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <BookOpen className="h-5 w-5 text-purple-400" />
                <span className={`px-3 py-1 rounded-full text-sm ${
                  question.difficulty === 'easy' ? 'bg-green-600' :
                  question.difficulty === 'medium' ? 'bg-yellow-600' :
                  'bg-red-600'
                }`}>
                  {question.difficulty.charAt(0).toUpperCase() + question.difficulty.slice(1)}
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4 text-gray-400" />
                <span className="text-sm text-gray-400">{question.timeLimit} min</span>
              </div>
            </div>

            <div className="mb-4">
              <p className="text-lg mb-4">{question.text}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {question.options.map((option, optIndex) => (
                  <button
                    key={optIndex}
                    className={`p-3 rounded-lg text-left transition-colors ${
                      showSolution === index
                        ? option === question.correctAnswer
                          ? 'bg-green-600/20 border border-green-500'
                          : 'bg-red-600/20 border border-red-500'
                        : 'bg-gray-700 hover:bg-gray-600'
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex justify-between items-center">
              <button
                onClick={() => setShowSolution(showSolution === index ? null : index)}
                className="text-purple-400 hover:text-purple-300 text-sm flex items-center space-x-1"
              >
                {showSolution === index ? <XCircle className="h-4 w-4" /> : <CheckCircle className="h-4 w-4" />}
                <span>{showSolution === index ? 'Hide Solution' : 'Show Solution'}</span>
              </button>
            </div>

            {showSolution === index && (
              <div className="mt-4 p-4 bg-gray-700 rounded-lg">
                <h4 className="font-semibold mb-2">Solution:</h4>
                <p>{question.solution}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuestionBank;