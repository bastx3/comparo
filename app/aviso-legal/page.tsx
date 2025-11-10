import { Navbar } from "@/components/navbar";

export default function AvisoLegalPage() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen pt-24 pb-12">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl font-bold mb-8">Aviso Legal</h1>
          
          <div className="prose prose-gray max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4">1. Información General</h2>
              <p className="text-gray-600 leading-relaxed">
                En cumplimiento de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y de Comercio Electrónico, 
                se informa que este sitio web es propiedad de Comparador de precios.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">2. Objeto</h2>
              <p className="text-gray-600 leading-relaxed">
                El presente sitio web tiene por objeto facilitar al público en general el conocimiento de las actividades que esta organización 
                realiza y de los servicios que presta, en particular el servicio de comparación de precios entre diferentes tiendas online.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">3. Condiciones de Uso</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                El acceso a este sitio web es gratuito salvo en lo relativo al coste de la conexión a través de la red de telecomunicaciones 
                suministrada por el proveedor de acceso contratado por los usuarios.
              </p>
              <p className="text-gray-600 leading-relaxed">
                El uso de la información, servicios y datos ofrecidos por este sitio web se realizará bajo la exclusiva responsabilidad del usuario.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">4. Responsabilidad</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Comparador de precios no se hace responsable de los posibles errores de seguridad que se puedan producir ni de los posibles 
                daños que puedan causarse al sistema informático del usuario (hardware y software), los ficheros o documentos almacenados 
                en el mismo, como consecuencia de la presencia de virus en el ordenador del usuario utilizado para la conexión a los servicios 
                y contenidos de la web.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Los precios mostrados son informativos y pueden no estar actualizados en tiempo real. Recomendamos verificar el precio 
                final en la tienda correspondiente antes de realizar cualquier compra.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">5. Propiedad Intelectual</h2>
              <p className="text-gray-600 leading-relaxed">
                Todos los contenidos del sitio web, incluyendo a título enunciativo pero no limitativo, textos, fotografías, gráficos, 
                imágenes, iconos, tecnología, software, así como su diseño gráfico y códigos fuente, constituyen una obra cuya propiedad 
                pertenece a Comparador de precios, sin que puedan entenderse cedidos al usuario ninguno de los derechos de explotación 
                sobre los mismos más allá de lo estrictamente necesario para el correcto uso del sitio web.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">6. Enlaces</h2>
              <p className="text-gray-600 leading-relaxed">
                Este sitio web puede contener enlaces a otros sitios web. Comparador de precios no ejerce control alguno sobre dichos 
                sitios web y no es responsable de sus contenidos ni de los enlaces que contengan.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">7. Protección de Datos</h2>
              <p className="text-gray-600 leading-relaxed">
                Comparador de precios cumple con las directrices del Reglamento General de Protección de Datos (RGPD). 
                Para más información sobre el tratamiento de datos personales, consulte nuestra Política de Privacidad.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">8. Modificaciones</h2>
              <p className="text-gray-600 leading-relaxed">
                Comparador de precios se reserva el derecho de efectuar sin previo aviso las modificaciones que considere oportunas 
                en su portal, pudiendo cambiar, suprimir o añadir tanto los contenidos y servicios que se presten a través de la misma 
                como la forma en la que éstos aparezcan presentados o localizados en su portal.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">9. Legislación Aplicable</h2>
              <p className="text-gray-600 leading-relaxed">
                Las presentes condiciones se rigen por la legislación española. Para cualquier controversia que pudiera derivarse 
                del acceso o uso de este sitio web, las partes se someterán a los Juzgados y Tribunales españoles.
              </p>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}

export const metadata = {
  title: "Aviso Legal - Comparador de precios",
  description: "Aviso legal y condiciones de uso del comparador de precios.",
};