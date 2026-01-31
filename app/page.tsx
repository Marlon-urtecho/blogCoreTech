import Hero from "@/components/main/Hero";
import Navbar from "@/components/main/Navbar";
import ServicesSection from "@/components/main/ServicesSection";
import Footer from "@/components/main/Footer";
import ContactForm from "@/components/main/ContactForm";


export default function Home() {
  return (
    <>
      <Navbar /> 
      <main >
        <Hero/>
      </main>
      <ServicesSection />

      <ContactForm/>
      <Footer/>
      
    </>
  );
}
