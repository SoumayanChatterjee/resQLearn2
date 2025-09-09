export default function FireSafetyPage() {
  return (
    <main className="min-h-screen bg-gray-100 text-gray-800 px-6 py-8">
      <h1 className="text-3xl font-bold mb-6">🔥 Fire Safety & Evacuation</h1>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white shadow-lg rounded-lg p-4">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/UlKS_A7Xg1E?si=M6sbfNQkZCF9gItf" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" refernerpolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
          <h2 className="text-lg font-semibold mt-3">Fire Safety and Prevention Tips</h2>
          <p className="text-sm text-gray-600">NFPA</p>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-4">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/cnn-yvszLXE?si=HOme3MMsQBUuq15x" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" refernerpolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
          <h2 className="text-lg font-semibold mt-3">How to Use a Fire Extinguisher</h2>
          <p className="text-sm text-gray-600">Fire Safety Training</p>
        </div>
      </div>
    </main>
  );
}