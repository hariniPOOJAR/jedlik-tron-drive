import React, { useState } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "./components/ThemeProvider";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import AboutUsPage from "./pages/AboutUsPage";
import FeaturesPage from "./pages/FeaturesPage";
import TechSpecsPage from "./pages/TechSpecsPage";
import ContactUsPage from "./pages/ContactUsPage";
import LocateUsPage from "./pages/LocateUsPage";
import FAQPage from "./pages/FAQPage";
import FreeTrialPage from "./pages/FreeTrialPage";
import GalleryPage from "./pages/GalleryPage";
import OurTeamPage from "./pages/OurTeamPage";
import MentorsPage from "./pages/MentorsPage";

const queryClient = new QueryClient();

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={setCurrentPage} />;
      case 'about':
        return <AboutUsPage />;
      case 'features':
        return <FeaturesPage />;
      case 'techspecs':
        return <TechSpecsPage />;
      case 'contact':
        return <ContactUsPage />;
      case 'locate':
        return <LocateUsPage />;
      case 'faq':
        return <FAQPage />;
      case 'freetrial':
        return <FreeTrialPage />;
      case 'gallery':
        return <GalleryPage />;
      case 'ourteam':
        return <OurTeamPage />;
      case 'mentors':
        return <MentorsPage />;
      default:
        return <HomePage onNavigate={setCurrentPage} />;
    }
  };

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <div className="min-h-screen tron-grid-bg animate-grid-flow">
            <Navbar currentPage={currentPage} onNavigate={setCurrentPage} />
            <main className="relative z-10">
              {renderPage()}
            </main>
            <Footer />
          </div>
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
