export default function FirstAidPage() {
  return (
    <main className="min-h-screen bg-gray-100 text-gray-800 px-6 py-8">
      <h1 className="text-3xl font-bold mb-6">🩹 First Aid Basics</h1>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white shadow-lg rounded-lg p-4">
          <iframe
            className="w-full h-64 rounded-lg"
            src="https://www.youtube.com/embed/gn6xt1ca8A0"
            title="What To Do During an Earthquake"
            allowFullScreen
          ></iframe>
          <h2 className="text-lg font-semibold mt-3">What To Do During an Earthquake</h2>
          <p className="text-sm text-gray-600">UNDRR</p>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-4">
          <iframe
            className="w-full h-64 rounded-lg"
            src="https://www.youtube.com/embed/ea1RJUOiNfQ"
            title="Earthquake Safety Tips"
            allowFullScreen
          ></iframe>
          <h2 className="text-lg font-semibold mt-3">First Aid Basics Everyone Should Know</h2>
          <p className="text-sm text-gray-600">St John Ambulance</p>
        </div>
      </div>
    </main>
  );
}