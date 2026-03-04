import { useEffect, useState } from "react";
import { Check } from "lucide-react";

const PageLoader = ({ onFinished }: { onFinished: () => void }) => {
    const [stage, setStage] = useState<"initial" | "snap" | "approve" | "exit">("initial");

    useEffect(() => {
        // Stage 1: Initial Pulse -> Snap (after 1s)
        const snapTimer = setTimeout(() => {
            setStage("snap");
        }, 1000);

        // Stage 2: Snap -> Approve (after snap animation, ~0.5s)
        const approveTimer = setTimeout(() => {
            setStage("approve");
        }, 1500);

        // Stage 3: Approve -> Exit (stay approved for 1s, then exit)
        const exitTimer = setTimeout(() => {
            setStage("exit");
        }, 2500);

        // Cleanup -> Main App (after exit animation)
        const finishTimer = setTimeout(() => {
            onFinished();
        }, 3000);

        return () => {
            clearTimeout(snapTimer);
            clearTimeout(approveTimer);
            clearTimeout(exitTimer);
            clearTimeout(finishTimer);
        };
    }, [onFinished]);

    if (stage === "exit" && typeof window !== "undefined") {
        // Optional: could return null here if we want hard unmount, 
        // but we usually want the fade out transition handled by parent or CSS.
        // In this implementation, we handle fade-out via class.
    }

    return (
        <div
            className={`fixed inset-0 z-[100] flex items-center justify-center bg-white transition-opacity duration-500 ${stage === "exit" ? "opacity-0 pointer-events-none" : "opacity-100"
                }`}
        >
            <div className="relative flex flex-col items-center">
                {/* Logo Container */}
                <div
                    className={`relative transition-all duration-300 transform ${stage === "snap" ? "scale-90" : stage === "approve" ? "scale-100" : "scale-100 animate-pulse-soft"
                        }`}
                >
                    <img
                        src="/lovable-uploads/Logo-trufi-menu.png"
                        alt="Trufi Loading"
                        className="w-48 md:w-64 object-contain"
                    />

                    {/* Approval Checkmark Overlay */}
                    <div
                        className={`absolute -bottom-2 -right-2 bg-emerald-500 rounded-full p-2 shadow-lg transform transition-all duration-500 ${stage === "approve" || stage === "exit"
                                ? "scale-100 opacity-100 rotate-0"
                                : "scale-0 opacity-0 -rotate-180"
                            }`}
                    >
                        <Check className="w-6 h-6 text-white stroke-[4]" />
                    </div>
                </div>

                {/* Loading Text (Optional, good for UX) */}
                <div className={`mt-8 text-primary font-medium text-lg transition-opacity duration-300 ${stage === "approve" ? "opacity-0" : "opacity-100"}`}>
                    Cargando...
                </div>
            </div>
        </div>
    );
};

export default PageLoader;
