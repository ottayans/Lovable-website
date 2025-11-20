import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTA = () => {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/30 via-transparent to-transparent" />
      
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
            Ready to Transform Your{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Marketing?
            </span>
          </h2>
          
          <p className="text-xl sm:text-2xl text-muted-foreground max-w-2xl mx-auto">
            Join hundreds of businesses creating unforgettable customer experiences
          </p>
          
          <div className="pt-8">
            <Button 
              size="xl" 
              variant="hero"
              className="group"
            >
              Create Your First Campaign
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
