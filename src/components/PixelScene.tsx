export default function PixelScene() {
  return (
    <section className="pixel-card overflow-hidden rounded-3xl bg-sky-100">
      <div className="relative h-56 bg-gradient-to-b from-sky-200 to-emerald-100">
        <div className="absolute bottom-0 left-0 right-0 h-20 border-t-4 border-gray-900 bg-emerald-200" />
        <div className="absolute bottom-14 left-8 right-8 h-24 rounded-t-2xl border-4 border-gray-900 bg-white">
          <div className="border-b-4 border-gray-900 bg-pink-300 px-4 py-2 text-center text-sm font-black uppercase tracking-wider">Pharmacy</div>
          <div className="grid grid-cols-3 gap-2 p-3"><div className="h-8 border-4 border-gray-900 bg-blue-100" /><div className="h-8 border-4 border-gray-900 bg-green-100" /><div className="h-8 border-4 border-gray-900 bg-purple-100" /></div>
        </div>
        <div className="absolute bottom-7 left-14"><div className="mx-auto h-8 w-8 rounded-full border-4 border-gray-900 bg-pink-200" /><div className="mt-[-2px] h-12 w-10 border-4 border-gray-900 bg-white" /></div>
        <div className="absolute bottom-7 right-16"><div className="mx-auto h-8 w-8 rounded-full border-4 border-gray-900 bg-orange-200" /><div className="mt-[-2px] h-12 w-10 border-4 border-gray-900 bg-blue-300" /></div>
      </div>
    </section>
  )
}
