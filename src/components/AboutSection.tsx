import { Card, CardContent } from "@/components/ui/card";
import { ChefHat, Users, Award, Heart } from "lucide-react";

const AboutSection = () => {
  const features = [
    {
      icon: ChefHat,
      title: "Expert Chefs",
      description: "Our team of professional chefs brings decades of culinary experience to create authentic and innovative recipes."
    },
    {
      icon: Users,
      title: "Community Driven",
      description: "Join thousands of cooking enthusiasts sharing their passion, tips, and favorite family recipes from around the world."
    },
    {
      icon: Award,
      title: "Award Winning",
      description: "Recognized by culinary institutions and food critics for our commitment to quality and authentic cooking methods."
    },
    {
      icon: Heart,
      title: "Made with Love",
      description: "Every recipe is tested, perfected, and shared with love to help you create memorable meals for your loved ones."
    }
  ];

  return (
    <section id="about" className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">About Our Kitchen</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Welcome to our culinary world! We're passionate about bringing people together through 
            the joy of cooking. Our mission is to share authentic recipes, cooking techniques, and 
            culinary traditions that have been passed down through generations.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {features.map((feature, index) => (
            <Card key={index} className="bg-card border-border text-center">
              <CardContent className="p-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                  <feature.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-card-foreground mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="bg-gradient-to-r from-primary to-cooking-orange text-white rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Our Story</h3>
          <p className="text-lg opacity-90 max-w-4xl mx-auto">
            Founded in 2020 by a group of food enthusiasts, our cooking community started as a small 
            blog sharing family recipes. Today, we've grown into a vibrant platform where home cooks 
            and professional chefs alike can discover, share, and celebrate the art of cooking. 
            From traditional comfort foods to innovative fusion dishes, we believe every meal tells a story.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;