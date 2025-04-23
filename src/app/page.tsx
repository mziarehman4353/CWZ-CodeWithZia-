import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import HeroSection from "@/app/components/Hero/HeroSection"; // Import the Hero section

export default function Home() {
  return (
    <>
      <Header /> {/* Render Header */}
      <HeroSection /> {/* New full-screen Hero section with typing animation */}
      <Footer /> {/* Render Footer */}
    </>
  );
}
