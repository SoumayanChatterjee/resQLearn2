export default function FireSafetyPage() {
  return (
    <main className="min-h-screen bg-[#E6ECF3] text-gray-800">
      
      {/* Heading block with background */}
      <div className="bg-slate-700 py-8 text-center">
        <h1 className="text-4xl font-bold flex items-center justify-center text-slate-100 gap-2">
          🔥 Fire Safety & Evacuation
        </h1>
        <p className="text-gray-200 font-semibold mt-4">
          Learn essential fire safety practices and emergency evacuation steps.
        </p>
      </div>

      {/* Cards section */}
      <div className="grid md:grid-cols-2 gap-1 px-6 py-10 place-items-center">
        <div className="bg-white rounded-2xl shadow hover:shadow-xl transition p-6 max-w-xl w-full">
          <div className="aspect-w-16 aspect-h-9 overflow-hidden rounded-lg">
            <iframe
              src="https://www.youtube.com/embed/UlKS_A7Xg1E?si=M6sbfNQkZCF9gItf"
              title="Fire Safety and Prevention Tips"
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <h2 className="text-xl font-semibold mt-6 text-center">
            Fire Safety and Prevention Tips
          </h2>
          <p className="text-sm text-gray-700 text-center">NFPA</p>
        </div>

        <div className="bg-white rounded-2xl shadow hover:shadow-xl transition p-6 max-w-xl w-full">
          <div className="aspect-w-16 aspect-h-9 overflow-hidden rounded-lg">
            <iframe
              src="https://www.youtube.com/embed/cnn-yvszLXE?si=HOme3MMsQBUuq15x"
              title="How to Use a Fire Extinguisher"
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <h2 className="text-xl font-semibold mt-6 text-center">
            How to Use a Fire Extinguisher
          </h2>
          <p className="text-sm text-gray-700 text-center">Fire Safety Training</p>
        </div>
      </div>
    </main>
  );
}