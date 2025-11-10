import { Navbar } from "@/components/navbar";
import Features from "@/components/features";

export default function FuncionalidadesPage() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen pt-24 pb-12">
        <Features />
      </div>
    </>
  );
}

export const metadata = {
  title: "Funcionalidades - Comparador de precios",
  description: "Descubre todas las funcionalidades de nuestro comparador de precios: histórico, análisis con IA, alertas y más.",
  keywords: ["funcionalidades", "comparador precios", "historico precios", "analisis ia", "alertas precio"],
};