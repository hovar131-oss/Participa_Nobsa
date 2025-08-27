import Header from "./components/Header";
import ParticipationSection from "./components/ParticipationSection";
import ImageGallery from "./components/ImageGallery";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="container mx-auto px-4 py-8">
        <ParticipationSection />
        {/* Imagenes 
        <div className="mt-16">
          <ImageGallery />
        </div>
        */}
      </main>
      <Footer />
    </div>
  );
}

export default App;
