export default function FirstAidPage() {
  return (
    <main className="min-h-screen bg-[#E6ECF3] text-gray-800">
      {/* heading section */}
      <div className="bg-slate-700 py-8 text-center">
        <h1 className="text-4xl font-bold flex items-center justify-center gap-2 text-slate-100">
          🩹 First Aid Basics
        </h1>
        <p className="text-gray-200  font-semibold mt-4">
          Learn essential first aid actions and emergency response tips.
        </p>
      </div>

      {/* video cards */}
      <div className="grid md:grid-cols-2 gap-1 px-6 py-10 place-items-center">
        <div className="bg-white rounded-2xl shadow hover:shadow-xl transition p-6 max-w-xl w-full">
          <div className="aspect-w-16 aspect-h-9 overflow-hidden rounded-lg">
            <iframe
              src="https://www.youtube.com/embed/gn6xt1ca8A0"
              title="What To Do During an Earthquake"
              className="w-full h-full"
              allowFullScreen
            ></iframe>
          </div>
          <h2 className="text-xl font-semibold mt-6 text-center">
            What To Do During an Earthquake
          </h2>
          <p className="text-sm text-gray-700 text-center">UNDRR</p>
        </div>

        <div className="bg-white rounded-2xl shadow hover:shadow-xl transition p-6 max-w-xl w-full">
          <div className="aspect-w-16 aspect-h-9 overflow-hidden rounded-lg">
            <iframe
              src="https://www.youtube.com/embed/ea1RJUOiNfQ"
              title="Earthquake Safety Tips"
              className="w-full h-full"
              allowFullScreen
            ></iframe>
          </div>
          <h2 className="text-xl font-semibold mt-6 text-center">
            First Aid Basics Everyone Should Know
          </h2>
          <p className="text-sm text-gray-700 text-center">St John Ambulance</p>
        </div>
      </div>
    </main>
  );
}