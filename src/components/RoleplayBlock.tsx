import { useState } from 'react'
import type { RoleplayScenario } from '../data/lessons'

type Props = { scenarios: RoleplayScenario[] }

export default function RoleplayBlock({ scenarios }: Props) {
  const [answers, setAnswers] = useState<Record<number, number>>({})
  return (
    <section className="pixel-card rounded-2xl bg-white p-5">
      <h3 className="text-xl font-black text-gray-900">Roleplay de mostrador</h3>
      <p className="mt-2 text-sm leading-6 text-gray-700">Tú eres la farmacéutica. Elige qué dirías en inglés en cada situación.</p>
      <div className="mt-5 space-y-6">{scenarios.map((scenario, scenarioIndex) => {
        const selected = answers[scenarioIndex]
        const hasAnswered = selected !== undefined
        const isCorrect = selected === scenario.correctIndex
        return <div key={scenario.customerLine} className="rounded-2xl border-4 border-gray-900 bg-purple-50 p-4"><p className="text-xs font-bold uppercase tracking-wider text-pink-600">Escena</p><p className="mt-1 text-sm leading-6 text-gray-700">{scenario.context}</p><div className="mt-4 rounded-xl border-4 border-gray-900 bg-white p-4"><p className="text-xs font-bold uppercase tracking-wider text-gray-500">Cliente</p><p className="mt-2 text-lg font-black text-gray-900">“{scenario.customerLine}”</p></div><div className="mt-4 space-y-3">{scenario.options.map((option, optionIndex) => (<button key={option} onClick={() => setAnswers((current) => ({ ...current, [scenarioIndex]: optionIndex }))} className="w-full rounded-xl border-4 border-gray-900 bg-white p-3 text-left text-sm font-bold shadow-[4px_4px_0_#1f2937] active:translate-x-1 active:translate-y-1 active:shadow-none">{option}</button>))}</div>{hasAnswered && <div className={`mt-4 rounded-xl border-4 border-gray-900 p-4 ${isCorrect ? 'bg-green-100' : 'bg-red-100'}`}><p className="font-black">{isCorrect ? 'Buena respuesta profesional' : 'No es la mejor opción'}</p><p className="mt-2 text-sm leading-6">{scenario.explanation}</p></div>}</div>
      })}</div>
    </section>
  )
}
