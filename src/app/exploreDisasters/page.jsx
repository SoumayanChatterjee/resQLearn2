import Image from 'next/image';
import Link from 'next/link';

export default function ExploreDisasters() {
  return (
    <div className="bg-slate-200 min-h-screen flex flex-col">
      {/* Header */}
      <nav className="absolute top-0 left-0 w-full flex justify-between items-center px-8 py-4 text-white z-20 bg-slate-800">
        <h1 className="text-2xl font-bold drop-shadow-lg">ResQLearn</h1>
        <ul className="flex space-x-10">
          <li>
            <a href="/home" className="hover:text-blue-400 drop-shadow-lg">Home</a>
          </li>
          <li>
            <a href="/about" className="hover:text-blue-400 drop-shadow-lg">About Us</a>
          </li>
          <li>
            <a href="/contact" className="hover:text-blue-400 drop-shadow-lg">Contact</a>
          </li>
          <li>
            <a href="/login" className="bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-500 shadow-lg">Logout</a>
          </li>
          <li>
            <a href="/profile" className="bg-white text-blue-600 px-4 py-2 rounded-lg hover:bg-gray-200 shadow-lg">Profile</a>
          </li>
        </ul>
      </nav>


      {/* Main Content */}
      <main className="pt-32 pb-20 px-6 flex-1 max-w-7xl mx-auto">
      <div className="text-center mb-12">
  <h2 className="text-4xl md:text-5xl font-extrabold text-blue-800 tracking-tight">
    🌍 Explore the Disasters
  </h2>
  <p className="mt-4 text-gray-600 text-lg max-w-xl mx-auto">
    Be prepared. Stay informed. Learn how to respond to natural disasters with confidence.
  </p>
</div>




        <div className="grid gap-10 md:grid-cols-3 group relative ">
          <DisasterCard
            title="Earthquake"
            image="/earthquake_main.png"
            link="/earthquake"
            description="Understand the causes and safety measures during earthquakes."
          />
          <DisasterCard
            title="Flood"
            image="/flood_main.png"
            link="/flood"
            description="Learn how to stay safe and prepared during floods."
          />
          <DisasterCard
            title="Cyclone"
            image="/cyclonemain.png"
            link="/cyclone"
            description="Explore cyclone preparedness and response strategies."
          />
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 border-t text-center text-sm text-gray-500 py-6">
        &copy; {new Date().getFullYear()} ResQLearn. All rights reserved.
      </footer>
    </div>
  );
}

function DisasterCard({ title, image, link, description }) {
  return (
    <div className="bg-white rounded-xl shadow-md transition transform p-8 text-center
  group-hover:[filter:blur(1px)]
 hover:!blur-none hover:scale-105 hover:z-10 hover:shadow-xl">

        
      <div className="w-36 h-36 mx-auto relative mb-6">
        <Image
          src={image}
          alt={title}
          layout="fill"
          objectFit="contain"
          className="rounded-full"
        />
      </div>
      <h3 className="text-3xl font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600 text-lg mb-4">{description}</p>
      <Link
        href={link}
        className="inline-block bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-500 transition"
      >
        Start Learning
      </Link>
    </div>
  );
}