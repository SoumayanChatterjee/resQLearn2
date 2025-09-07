// pages/index.js
import Navbar from './Navbar';
import About from './about';
import Footer from './footer';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* You can add a hero section here if needed */}
        <About />
      </main>
      
      <Footer />
    </div>
  );
}
