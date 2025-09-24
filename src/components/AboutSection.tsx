import { Card, CardContent } from "@/components/ui/card";
import { ChefHat, Users, BookOpen, Award } from "lucide-react";

const AboutSection = () => {
  const features = [
    {
      icon: ChefHat,
      title: "Expert Recipes",
      description: "Curated by professional chefs and cooking enthusiasts"
    },
    {
      icon: Users,
      title: "Community Driven",
      description: "Join thousands of home cooks sharing their favorite recipes"
    },
    {
      icon: BookOpen,
      title: "Step by Step",
      description: "Detailed instructions with photos for every cooking level"
    },
    {
      icon: Award,
      title: "Quality Tested",
      description: "Every recipe is tested and rated by our community"
    }
  ];

  return (
    <section id="about" className="py-16 bg-accent/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">About Our Cooking Community</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We're passionate about bringing people together through the joy of cooking. 
            Discover new flavors, share your creations, and learn from fellow food lovers.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="text-center bg-card border-border hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-4">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-card-foreground mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-primary to-cooking-orange text-white rounded-lg p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Join Our Cooking Journey</h3>
            <p className="mb-6">
              Start your culinary adventure today. Share recipes, discover new cuisines, 
              and connect with food lovers from around the world.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="text-center">
                <div className="text-3xl font-bold">50,000+</div>
                <div className="text-sm opacity-90">Recipes</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">2M+</div>
                <div className="text-sm opacity-90">Community Members</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">10M+</div>
                <div className="text-sm opacity-90">Meals Cooked</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;