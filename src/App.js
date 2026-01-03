import React from "react";
import "./App.css";
import { Toaster } from "./components/ui/toaster";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import ClientTicker from "./components/ClientTicker";
import Services from "./components/Services";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App min-h-screen bg-[#0a0a0a]">
      <Header />
      <main>
        <Hero />
        <About />
        <ClientTicker />
        <Services />
        <ContactForm />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}

export default App;
