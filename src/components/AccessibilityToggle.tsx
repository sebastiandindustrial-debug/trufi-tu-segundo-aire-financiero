import { useState, useEffect } from "react";
import { Type, ZoomIn } from "lucide-react";
import { Button } from "@/components/ui/button";

const AccessibilityToggle = () => {
  const [isLargeText, setIsLargeText] = useState(false);

  useEffect(() => {
    // Check if preference was saved
    const savedPreference = localStorage.getItem("trufi-large-text");
    if (savedPreference === "true") {
      setIsLargeText(true);
      document.documentElement.classList.add("large-text");
    }
  }, []);

  const toggleLargeText = () => {
    const newValue = !isLargeText;
    setIsLargeText(newValue);
    
    if (newValue) {
      document.documentElement.classList.add("large-text");
      localStorage.setItem("trufi-large-text", "true");
    } else {
      document.documentElement.classList.remove("large-text");
      localStorage.setItem("trufi-large-text", "false");
    }
  };

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleLargeText}
      className="flex items-center gap-1.5 text-muted-foreground hover:text-foreground"
      aria-label={isLargeText ? "Reducir tamaño de letra" : "Aumentar tamaño de letra"}
      title={isLargeText ? "Letra Normal" : "Letra Grande"}
    >
      {isLargeText ? (
        <Type className="w-4 h-4" />
      ) : (
        <ZoomIn className="w-4 h-4" />
      )}
      <span className="hidden sm:inline text-xs font-medium">
        {isLargeText ? "Aa" : "A+"}
      </span>
    </Button>
  );
};

export default AccessibilityToggle;
