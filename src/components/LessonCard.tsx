import { Clock, Star } from 'lucide-react'
import type { Lesson } from '../data/lessons'

type Props = { lesson: Lesson; index: number }

export default function LessonCard({ lesson, index }: Props) {
  return (
    <article className="pixel-card rounded-2xl bg-white p-5 transition active:translate-x-1 active:translate-y-1 active:shadow-none">
      <div className="flex items-start gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border-4 border-gray-900 bg-yellow-200 text-xl font-black">{index + 1}</div>
        <div className="min-w-0 flex-1">
          <div className="mb-2 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-pink-600"><Star size={14} />{lesson.level}</div>
          <h3 className="text-lg font-black leading-tight text-gray-900">{lesson.title}</h3>
          <p className="mt-2 text-sm leading-5 text-gray-600">{lesson.subtitle}</p>
          <div className="mt-3 flex items-center gap-2 text-sm font-bold text-gray-700"><Clock size={16} />{lesson.estimatedMinutes} min</div>
        </div>
      </div>
    </article>
  )
}
