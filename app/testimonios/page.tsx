import { Navbar } from "@/components/navbar";
import Testimonials from "@/components/testimonials";

export default function TestimoniosPage() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen pt-24 pb-12">
        <Testimonials />
      </div>
    </>
  );
}

export const metadata = {
  title: "Testimonios - Comparador de precios",
  description: "Lee las opiniones y experiencias de nuestros usuarios con el comparador de precios.",
  keywords: ["testimonios", "opiniones", "reseñas", "usuarios", "comparador precios"],
};