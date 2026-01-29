import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronRight, Loader2 } from "lucide-react";
import { Link } from "react-router-dom";
import { useSegmentos } from "@/hooks/useSegmentos";

const AudienceSegmentation = () => {
  const { data: segmentos, isLoading } = useSegmentos();

  if (isLoading) {
    return (
      <section className="py-16 bg-gray-50" id="audiencias">
        <div className="container flex justify-center">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
        </div>
      </section>
    );
  }

  if (!segmentos || segmentos.length === 0) {
    return null;
  }

  return (
    <section className="py-16 bg-gray-50" id="audiencias">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl font-bold font-archive text-primary mb-4">¿A qué grupo perteneces?</h2>
          <p className="text-gray-600">Selecciona tu perfil para ver beneficios personalizados diseñados para ti.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {segmentos.map((item) => (
            <Link key={item.id} to={item.enlace} className="block group">
              <Card className="p-6 h-full border-2 border-transparent hover:border-primary/20 transition-all duration-300 hover:shadow-lg group-hover:-translate-y-1 bg-white overflow-hidden">
                <div className="flex flex-col h-full">
                  <div className="mb-6 relative h-48 rounded-xl overflow-hidden bg-gray-100">
                    {item.imagen_url ? (
                      <img
                        src={item.imagen_url}
                        alt={item.titulo}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-gray-400">
                        Sin imagen
                      </div>
                    )}
                  </div>

                  <h3 className="text-xl font-bold text-primary mb-2 font-archive">{item.titulo}</h3>
                  <p className="text-gray-600 mb-6 flex-grow">{item.descripcion}</p>

                  <Button
                    variant="ghost"
                    className="w-full justify-between group-hover:text-primary group-hover:bg-primary/5"
                  >
                    Ver beneficios
                    <ChevronRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AudienceSegmentation;
