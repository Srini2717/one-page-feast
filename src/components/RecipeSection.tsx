import RecipeCard from "./RecipeCard";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Recipe {
  id: number;
  title: string;
  author: string;
  cookingTime: string;
  rating?: number;
  image: string;
  category?: string;
}

interface RecipeSectionProps {
  title: string;
  subtitle?: string;
  recipes: Recipe[];
}

const RecipeSection = ({ title, subtitle, recipes }: RecipeSectionProps) => {
  return (
    <section className="py-8">
      <div className="flex items-center justify-between mb-6">
        <div>
          {subtitle && (
            <p className="text-sm font-medium text-muted-foreground mb-1 uppercase tracking-wide">
              {subtitle}
            </p>
          )}
          <h2 className="text-3xl font-bold text-foreground">{title}</h2>
        </div>
        
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="icon" className="rounded-full">
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon" className="rounded-full">
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.id} {...recipe} />
        ))}
      </div>
    </section>
  );
};

export default RecipeSection;