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
    const monthlyRate = 0.017; // 1.7% mensual mes vencido
    const monthlyPayment =
        (amount[0] * monthlyRate * Math.pow(1 + monthlyRate, term[0])) /
        (Math.pow(1 + monthlyRate, term[0]) - 1);

    return (
        <Card
            id="simulador"
            className="bg-card/95 backdrop-blur-md border border-white/10 shadow-2xl rounded-2xl overflow-hidden max-w-[380px] mx-auto"
        >
            <CardContent className="p-6 space-y-5">
                {/* Header */}
                <div className="text-center space-y-1">
                    <h3 className="text-lg font-bold text-foreground">
                        Simula tu Crédito
                    </h3>
                    <p className="text-muted-foreground text-xs">
                        Descubre cuánto puedes obtener hoy
                    </p>
                </div>

                {/* Amount Slider */}
                <div className="space-y-3">
                    <div className="flex justify-between items-center">
                        <label className="text-sm font-medium text-foreground">
                            ¿Cuánto necesitas?
                        </label>
                        <span className="text-sm font-bold text-primary">
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
                    <div className="flex justify-between text-[10px] text-muted-foreground">
                        <span>$1M</span>
                        <span>$150M</span>
                    </div>
                </div>

                {/* Term Slider */}
                <div className="space-y-3">
                    <div className="flex justify-between items-center">
                        <label className="text-sm font-medium text-foreground">
                            Plazo (meses)
                        </label>
                        <span className="text-sm font-bold text-primary">
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
                    <div className="flex justify-between text-[10px] text-muted-foreground">
                        <span>12</span>
                        <span>144</span>
                    </div>
                </div>

                {/* Monthly Payment Display */}
                <div className="bg-primary/5 rounded-lg p-3 text-center border border-primary/10">
                    <p className="text-xs text-muted-foreground mb-1">
                        Cuota mensual aproximada
                    </p>
                    <p className="text-xl font-bold text-foreground">
                        {formatCurrency(monthlyPayment)}
                    </p>
                    <p className="text-[10px] text-muted-foreground mt-1">
                        *Tasa referencial
                    </p>
                </div>

                {/* CTA Button */}
                <Button
                    variant="cta"
                    size="lg"
                    className="w-full text-base py-6 font-bold group bg-[#78c0b3] hover:bg-[#78c0b3]/90 text-white shadow-lg hover:shadow-xl icon-thumbs-up"
                >
                    <Sparkles className="w-4 h-4 mr-2" />
                    ¡Lo quiero!
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                </Button>

                {/* Trust Badges */}
                <div className="flex items-center justify-center gap-4 pt-2 border-t border-border">
                    <div className="flex items-center gap-1.5 text-muted-foreground">
                        <Shield className="w-3 h-3" />
                        <span className="text-[10px] font-medium">100% Seguro</span>
                    </div>
                    <div className="h-3 w-px bg-border" />
                    <div className="flex items-center gap-1.5 text-muted-foreground">
                        <Eye className="w-3 h-3" />
                        <span className="text-[10px] font-medium">Vigilado</span>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};

export default CreditSimulator;
