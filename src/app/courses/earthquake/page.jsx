// export default function EarthquakePage() {
//   return (
//     <main className="min-h-screen bg-gray-100 text-gray-800 px-6 py-8">
//       <h1 className="text-3xl font-bold mb-6">🌍 Earthquake Preparedness</h1>

//       <div className="grid md:grid-cols-2 gap-6">
//         <div className="bg-white shadow-lg rounded-lg p-4">
//           {/* <iframe
//             className="w-full h-64 rounded-lg"
//             src="https://www.youtube.com/embed/gn6xt1ca8A0"
//             title="What To Do During an Earthquake"
//             allowFullScreen
//           ></iframe>
//           <h2 className="text-lg font-semibold mt-3">What To Do During an Earthquake</h2>
//           <p className="text-sm text-gray-600">UNDRR</p>
//         </div>

//         <div className="bg-white shadow-lg rounded-lg p-4">
//           <iframe
//             className="w-full h-64 rounded-lg"
//             src="https://www.youtube.com/embed/ea1RJUOiNfQ"
//             title="Earthquake Safety Tips"
//             allowFullScreen
//           ></iframe> */}
//           <iframe width="560" height="315" src="https://www.youtube.com/embed/BLEPakj1YTY?si=z89IxJUNihd7fpZP" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" refernerpolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
//           <iframe width="560" height="315" src="https://www.youtube.com/embed/r5EbbrVXoQw?si=5qEvj4NwYyC81zJJ" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" refernerpolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
//           <h2 className="text-lg font-semibold mt-3">Earthquake Safety Tips</h2>
//           <p className="text-sm text-gray-600">National Geographic</p>
//         </div>
//       </div>
//     </main>
//   );
// }
export default function EarthquakePage() {
  return (
    <main className="min-h-screen bg-gray-100 text-gray-800 px-6 py-8">
      <h1 className="text-3xl font-bold mb-6">🌍 Earthquake Preparedness</h1>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Video 1 */}
        <div className="bg-white shadow-lg rounded-lg p-4">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/BLEPakj1YTY?si=z89IxJUNihd7fpZP"
            title="What To Do During an Earthquake"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="w-full h-64 rounded-lg"
          ></iframe>
          <h2 className="text-lg font-semibold mt-3">
            What To Do During an Earthquake
          </h2>
          <p className="text-sm text-gray-600">UNDRR</p>
        </div>

        {/* Video 2 */}
        <div className="bg-white shadow-lg rounded-lg p-4">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/r5EbbrVXoQw?si=5qEvj4NwYyC81zJJ"
            title="Earthquake Safety Tips"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="w-full h-64 rounded-lg"
          ></iframe>
          <h2 className="text-lg font-semibold mt-3">Earthquake Safety Tips</h2>
          <p className="text-sm text-gray-600">National Geographic</p>
        </div>
      </div>
    </main>
  );
}
