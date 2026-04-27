import { Link, useParams } from 'react-router-dom'
import { ArrowLeft, BookOpen, MessageCircle } from 'lucide-react'
import { lessons } from '../data/lessons'
import QuizBlock from '../components/QuizBlock'
import RoleplayBlock from '../components/RoleplayBlock'

export default function LessonPage() {
  const { lessonId } = useParams()
  const lesson = lessons.find((item) => item.id === lessonId)
  if (!lesson) return <div className="pixel-card rounded-2xl bg-white p-5"><p>No encuentro esta lección.</p><Link to="/" className="mt-4 inline-block font-bold text-pink-600">Volver</Link></div>
  return (
    <article className="space-y-6">
      <Link to="/" className="inline-flex items-center gap-2 font-bold text-gray-800"><ArrowLeft size={18} />Volver al mapa</Link>
      <header className="pixel-card rounded-3xl bg-white p-5"><p className="text-sm font-bold uppercase tracking-wider text-pink-600">{lesson.estimatedMinutes} minutos · {lesson.level}</p><h2 className="mt-2 text-3xl font-black leading-tight text-gray-900">{lesson.title}</h2><p className="mt-3 text-base leading-7 text-gray-700">{lesson.goal}</p></header>
      {lesson.theory.map((block) => (<section key={block.heading} className="pixel-card rounded-2xl bg-white p-5"><div className="mb-3 flex items-center gap-2"><BookOpen size={20} /><h3 className="text-xl font-black text-gray-900">{block.heading}</h3></div><p className="text-sm leading-6 text-gray-700">{block.body}</p><div className="mt-4 space-y-3">{block.examples.map((example) => (<div key={example.english} className="rounded-xl border-4 border-gray-900 bg-pink-50 p-4"><p className="text-lg font-black text-gray-900">{example.english}</p><p className="mt-1 text-sm font-bold text-pink-700">{example.spanish}</p><p className="mt-2 text-sm leading-5 text-gray-700">{example.note}</p></div>))}</div></section>))}
      <section className="pixel-card rounded-2xl bg-white p-5"><div className="mb-4 flex items-center gap-2"><MessageCircle size={20} /><h3 className="text-xl font-black text-gray-900">Frases útiles</h3></div><div className="space-y-3">{lesson.usefulPhrases.map((phrase) => (<div key={phrase.english} className="rounded-xl border-4 border-gray-900 bg-yellow-50 p-4"><p className="text-lg font-black">{phrase.english}</p><p className="mt-1 text-sm font-bold text-gray-700">{phrase.spanish}</p><p className="mt-2 text-xs font-bold uppercase tracking-wider text-pink-600">{phrase.situation}</p></div>))}</div></section>
      <QuizBlock questions={lesson.quiz} />
      <RoleplayBlock scenarios={lesson.roleplay} />
    </article>
  )
}
