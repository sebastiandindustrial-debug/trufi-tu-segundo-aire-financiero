import { useState, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Eye, ArrowRight, Sparkles } from "lucide-react";

const CreditSimulator = () => {
  const [amount, setAmount] = useState([30000000]);
  const [term, setTerm] = useState([60]);

  const formatCurrency = useCallback((value: number) => {
    return new Intl.NumberFormat("es-CO", {
      style: "currency",
      currency: "COP",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  }, []);

  // Cálculo de cuota mensual aproximado (tasa de referencia del mercado)
  const monthlyRate = 0.015; // 1.5% mensual aproximado
  const monthlyPayment =
    (amount[0] * monthlyRate * Math.pow(1 + monthlyRate, term[0])) /
    (Math.pow(1 + monthlyRate, term[0]) - 1);

  return (
    <Card 
      id="simulador" 
      className="bg-card/95 backdrop-blur-md border-2 border-primary/20 shadow-elevated rounded-3xl overflow-hidden"
    >
      <CardContent className="p-7 md:p-9 space-y-7">
        {/* Header */}
        <div className="text-center space-y-2">
          <h3 className="text-xl md:text-2xl font-bold text-foreground">
            Simula tu Crédito de Libranza
          </h3>
          <p className="text-muted-foreground text-sm md:text-base">
            Descubre cuánto puedes obtener hoy
          </p>
        </div>

        {/* Amount Slider */}
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <label className="text-sm md:text-base font-medium text-foreground">
              ¿Cuánto necesitas?
            </label>
            <span className="text-lg md:text-xl font-bold text-primary">
              {formatCurrency(amount[0])}
            </span>
          </div>
          <Slider
            value={amount}
            onValueChange={setAmount}
            min={1000000}
            max={150000000}
            step={1000000}
            className="w-full"
          />
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>$1.000.000</span>
            <span>$150.000.000</span>
          </div>
        </div>

        {/* Term Slider */}
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <label className="text-sm md:text-base font-medium text-foreground">
              Plazo en meses
            </label>
            <span className="text-lg md:text-xl font-bold text-primary">
              {term[0]} meses
            </span>
          </div>
          <Slider
            value={term}
            onValueChange={setTerm}
            min={12}
            max={144}
            step={12}
            className="w-full"
          />
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>12 meses</span>
            <span>144 meses</span>
          </div>
        </div>

        {/* Monthly Payment Display */}
        <div className="bg-gradient-to-br from-primary/5 to-accent rounded-xl p-5 text-center border border-primary/10">
          <p className="text-sm text-muted-foreground mb-1">
            Cuota mensual aproximada
          </p>
          <p className="text-2xl md:text-3xl font-bold text-foreground">
            {formatCurrency(monthlyPayment)}
          </p>
          <p className="text-xs text-muted-foreground mt-2">
            *Tasa de referencia del mercado
          </p>
        </div>

        {/* CTA Button - Prioridad visual absoluta */}
        <Button
          variant="cta"
          size="xl"
          className="w-full text-lg py-7 font-bold group bg-secondary hover:bg-secondary/90 text-primary shadow-xl hover:shadow-2xl"
        >
          <Sparkles className="w-5 h-5 mr-2" />
          ¡Lo quiero! Solicitar Ahora
          <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
        </Button>

        {/* Trust Badges */}
        <div className="flex items-center justify-center gap-6 pt-3 pb-1 border-t border-border">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Shield className="w-4 h-4" />
            <span className="text-xs font-medium">Proceso Seguro</span>
          </div>
          <div className="h-4 w-px bg-border" />
          <div className="flex items-center gap-2 text-muted-foreground">
            <Eye className="w-4 h-4" />
            <span className="text-xs font-medium">Vigilado Supersociedades</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CreditSimulator;
