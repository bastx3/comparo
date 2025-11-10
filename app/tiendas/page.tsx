import { Navbar } from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Search, 
  ShoppingCart,
  ExternalLink,
  Construction
} from "lucide-react";
import Link from "next/link";

const tiendas = [
  {
    name: "Amazon",
    description: "La mayor tienda online del mundo con millones de productos",
    status: "active",
    href: "/tienda/amazon/",
    color: "orange",
    features: ["Análisis completo con IA", "Histórico de precios", "Reseñas verificadas"]
  },
  {
    name: "Carrefour",
    description: "Supermercado online con productos de alimentación y hogar",
    status: "active", 
    href: "/tienda/carrefour/",
    color: "blue",
    features: ["Ofertas semanales", "Recogida en tienda", "Productos frescos"]
  },
  {
    name: "MediaMarkt",
    description: "Especialistas en tecnología y electrónica",
    status: "active",
    href: "/tienda/mediamarkt/",
    color: "red", 
    features: ["Tecnología", "Gaming", "Electrodomésticos"]
  },
  {
    name: "PcComponentes",
    description: "Expertos en componentes PC y gaming",
    status: "active",
    href: "/tienda/pccomponentes/",
    color: "blue",
    features: ["Componentes PC", "Gaming", "Montaje gratuito"]
  },
  {
    name: "AliExpress",
    description: "Productos únicos desde China a precios increíbles",
    status: "development",
    href: "/tienda/amazon/",
    color: "orange",
    features: ["En desarrollo", "Próximamente disponible"]
  },
  {
    name: "Myprotein", 
    description: "Suplementos deportivos y nutrición",
    status: "development",
    href: "/tienda/amazon/",
    color: "blue",
    features: ["En desarrollo", "Próximamente disponible"]
  },
  {
    name: "Xiaomi",
    description: "Tecnología y ecosistema smart",
    status: "development", 
    href: "/tienda/amazon/",
    color: "orange",
    features: ["En desarrollo", "Próximamente disponible"]
  },
  {
    name: "Fnac",
    description: "Cultura, libros, música y entretenimiento",
    status: "development",
    href: "/tienda/amazon/",
    color: "orange", 
    features: ["En desarrollo", "Próximamente disponible"]
  },
  {
    name: "El Corte Inglés",
    description: "Grandes almacenes con productos premium",
    status: "development",
    href: "/tienda/amazon/",
    color: "green",
    features: ["En desarrollo", "Próximamente disponible"]
  }
];

export default function TiendasPage() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen pt-24 pb-12">
        {/* Hero */}
        <div className="py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Tiendas Compatibles
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Comparamos precios en las mejores tiendas online de España. Encuentra las mejores ofertas en un solo lugar.
            </p>
          </div>
        </div>

        {/* Grid de tiendas */}
        <div className="px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {tiendas.map((tienda) => (
                <Card key={tienda.name} className={`hover:shadow-lg transition-shadow ${
                  tienda.status === 'development' ? 'opacity-75' : ''
                }`}>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="flex items-center gap-2">
                        <div className={`w-8 h-8 bg-${tienda.color}-600 rounded flex items-center justify-center`}>
                          <span className="text-white font-bold text-sm">
                            {tienda.name.charAt(0)}
                          </span>
                        </div>
                        {tienda.name}
                      </CardTitle>
                      {tienda.status === 'development' && (
                        <Badge variant="outline" className="bg-yellow-50 text-yellow-700 border-yellow-200">
                          <Construction className="h-3 w-3 mr-1" />
                          En desarrollo
                        </Badge>
                      )}
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-600 text-sm">
                      {tienda.description}
                    </p>
                    
                    <div className="space-y-2">
                      {tienda.features.map((feature, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full" />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="pt-4">
                      <Button asChild variant="outline" className="w-full">
                        <Link href={tienda.href}>
                          {tienda.status === 'development' ? (
                            <>
                              <ShoppingCart className="mr-2 h-4 w-4" />
                              Ver Amazon (Principal)
                            </>
                          ) : (
                            <>
                              <ExternalLink className="mr-2 h-4 w-4" />
                              Ver {tienda.name}
                            </>
                          )}
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="py-20 px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              ¿Listo para empezar a comparar?
            </h2>
            <p className="text-gray-600 mb-8">
              Encuentra las mejores ofertas en todas estas tiendas desde un solo lugar.
            </p>
            <Button asChild size="lg">
              <Link href="/#buscar">
                Empezar a Comparar <Search className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export const metadata = {
  title: "Tiendas Compatibles - Comparador de precios",
  description: "Descubre todas las tiendas donde comparamos precios: Amazon, Carrefour, MediaMarkt, PcComponentes y más.",
  keywords: ["tiendas", "amazon", "carrefour", "mediamarkt", "pccomponentes", "comparador precios"],
};