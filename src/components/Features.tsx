import { QrCode, Store, TrendingUp, Percent, Gift, Share2 } from "lucide-react";

const features = [
  {
    icon: QrCode,
    title: "QR Code Integration",
    description: "Generate QR codes for offline campaigns. Bridge physical and digital marketing seamlessly.",
  },
  {
    icon: Store,
    title: "In-Store Mode",
    description: "Perfect for retail locations. Collect customer data with every interaction for better insights.",
  },
  {
    icon: TrendingUp,
    title: "Real-Time Analytics",
    description: "Track engagement, claims, and conversions. Make data-driven decisions with detailed insights.",
  },
  {
    icon: Percent,
    title: "Smart Probability",
    description: "Control win rates with precision. Balance excitement with budget using probability-based distribution.",
  },
  {
    icon: Gift,
    title: "Prize Management",
    description: "Easily configure prizes, track redemptions, and manage inventory all in one place.",
  },
  {
    icon: Share2,
    title: "Social Integration",
    description: "Unlock extra plays with social sharing. Grow your social media presence organically.",
  },
];

const Features = () => {
  return (
    <section className="relative py-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold">
            Everything You Need to{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Succeed
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Powerful features designed for modern marketers
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
            >
              <div className="mb-6 inline-block p-4 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-8 h-8 text-primary" />
              </div>
              
              <h3 className="text-2xl font-semibold mb-4 group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
