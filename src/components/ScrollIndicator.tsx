import { MousePointer2 } from "lucide-react";

const ScrollIndicator = () => {
  return (
    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce z-20">
      <div className="w-6 h-10 border-2 border-primary-foreground rounded-full flex items-start justify-center p-2">
        <div className="w-1 h-2 bg-primary-foreground rounded-full animate-[scroll_1.5s_ease-in-out_infinite]" />
      </div>
      <span className="text-primary-foreground text-sm font-medium">Scroll</span>
    </div>
  );
};

export default ScrollIndicator;
