import { useState } from 'react'
import type { QuizQuestion } from '../data/lessons'

type Props = { questions: QuizQuestion[] }

export default function QuizBlock({ questions }: Props) {
  const [answers, setAnswers] = useState<Record<number, number>>({})
  return (
    <section className="pixel-card rounded-2xl bg-white p-5">
      <h3 className="text-xl font-black text-gray-900">Mini test</h3>
      <p className="mt-2 text-sm leading-6 text-gray-700">Elige la mejor respuesta. No pasa nada si fallas: aquí se aprende practicando.</p>
      <div className="mt-5 space-y-6">{questions.map((question, questionIndex) => {
        const selected = answers[questionIndex]
        const hasAnswered = selected !== undefined
        const isCorrect = selected === question.correctIndex
        return <div key={question.question} className="rounded-2xl border-4 border-gray-900 bg-blue-50 p-4"><p className="font-black text-gray-900">{question.question}</p><div className="mt-4 space-y-3">{question.options.map((option, optionIndex) => (<button key={option} onClick={() => setAnswers((current) => ({ ...current, [questionIndex]: optionIndex }))} className="w-full rounded-xl border-4 border-gray-900 bg-white p-3 text-left text-sm font-bold shadow-[4px_4px_0_#1f2937] active:translate-x-1 active:translate-y-1 active:shadow-none">{option}</button>))}</div>{hasAnswered && <div className={`mt-4 rounded-xl border-4 border-gray-900 p-4 ${isCorrect ? 'bg-green-100' : 'bg-red-100'}`}><p className="font-black">{isCorrect ? 'Correcto' : 'Casi. Revisa esta idea.'}</p><p className="mt-2 text-sm leading-6">{question.explanation}</p></div>}</div>
      })}</div>
    </section>
  )
}
