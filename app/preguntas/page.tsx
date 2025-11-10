import { Navbar } from "@/components/navbar";
import FAQ from "@/components/faq";

export default function PreguntasPage() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen pt-24 pb-12">
        <FAQ />
      </div>
    </>
  );
}

export const metadata = {
  title: "Preguntas Frecuentes - Comparador de precios",
  description: "Resuelve todas tus dudas sobre nuestro comparador de precios. Preguntas frecuentes y respuestas detalladas.",
  keywords: ["preguntas frecuentes", "faq", "ayuda", "comparador precios", "dudas"],
};