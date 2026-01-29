import { useState, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Eye } from "lucide-react";

const CreditSimulator = () => {
  const [amount, setAmount] = useState([10000000]);
  const [term, setTerm] = useState([36]);

  const formatCurrency = useCallback((value: number) => {
    return new Intl.NumberFormat("es-CO", {
      style: "currency",
      currency: "COP",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  }, []);

  // Simple monthly payment calculation (approximate)
  const monthlyRate = 0.012; // 1.2% monthly
  const monthlyPayment =
    (amount[0] * monthlyRate * Math.pow(1 + monthlyRate, term[0])) /
    (Math.pow(1 + monthlyRate, term[0]) - 1);

  return (
    <Card className="bg-card/95 backdrop-blur-md border-2 border-primary/20 shadow-elevated rounded-3xl overflow-hidden">
      <CardContent className="p-6 md:p-8 space-y-6">
        {/* Header */}
        <div className="text-center space-y-2">
          <h3 className="text-xl md:text-2xl font-bold text-foreground">
            Simula tu Crédito
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
            max={50000000}
            step={500000}
            className="w-full"
          />
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>$1.000.000</span>
            <span>$50.000.000</span>
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
            max={84}
            step={6}
            className="w-full"
          />
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>12 meses</span>
            <span>84 meses</span>
          </div>
        </div>

        {/* Monthly Payment Display */}
        <div className="bg-accent rounded-xl p-4 text-center">
          <p className="text-sm text-muted-foreground mb-1">
            Cuota mensual aproximada
          </p>
          <p className="text-2xl md:text-3xl font-bold text-foreground">
            {formatCurrency(monthlyPayment)}
          </p>
          <p className="text-xs text-muted-foreground mt-1">
            *Tasa de referencia 1.2% M.V.
          </p>
        </div>

        {/* CTA Button */}
        <Button
          variant="cta"
          size="xl"
          className="w-full text-lg py-6 font-bold"
        >
          ¡Lo quiero! Solicitar Ahora
        </Button>

        {/* Trust Badges */}
        <div className="flex items-center justify-center gap-6 pt-2 pb-1 border-t border-border">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Shield className="w-5 h-5" />
            <span className="text-xs font-medium">Truora Verificado</span>
          </div>
          <div className="h-4 w-px bg-border" />
          <div className="flex items-center gap-2 text-muted-foreground">
            <Eye className="w-5 h-5" />
            <span className="text-xs font-medium">Vigilado Supersociedades</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CreditSimulator;
