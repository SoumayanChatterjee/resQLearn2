// pages/about.js
import Navbar from './Navbar';
import Footer from './footer';

export default function about() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow px-6 py-12 bg-gray-100 text-gray-800">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-blue-900 mb-6">About Us</h2>
          <p className="text-lg leading-relaxed mb-4">
            <strong>DisasterEdu</strong> is an initiative to educate and prepare students and staff in schools and colleges
            for disaster situations. Our goal is to build awareness, teach essential survival skills, and provide digital tools
            to respond efficiently during emergencies.
          </p>
          <p className="text-lg leading-relaxed mb-4">
            This platform is a product of the <strong>Smart India Hackathon (SIH)</strong>, aimed at bringing innovation and
            technology together for social good. We believe that preparedness is key to saving lives, and educational institutions
            play a crucial role in building a resilient future.
          </p>
          <p className="text-lg leading-relaxed">
            Through engaging modules, real-world simulations, and access to vital resources, DisasterEdu empowers every student
            and educator to act confidently and responsibly in the face of disaster.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}
