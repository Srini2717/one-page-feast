import { Clock, Star, Bookmark } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface RecipeCardProps {
  title: string;
  author: string;
  cookingTime: string;
  rating?: number;
  image: string;
  category?: string;
}

const RecipeCard = ({ title, author, cookingTime, rating, image, category }: RecipeCardProps) => {
  return (
    <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-card border border-border">
      <div className="relative">
        <img 
          src={image} 
          alt={title}
          className="w-full h-48 object-cover rounded-t-lg"
        />
        {category && (
          <Badge className="absolute top-3 left-3 bg-cooking-green text-white text-xs px-2 py-1">
            {category}
          </Badge>
        )}
        <Button 
          size="icon" 
          variant="secondary"
          className="absolute top-3 right-3 bg-white/90 hover:bg-white"
        >
          <Bookmark className="h-4 w-4" />
        </Button>
      </div>
      
      <CardContent className="p-4">
        <h3 className="font-semibold text-card-foreground mb-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-sm text-muted-foreground mb-2">{author}</p>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-1 text-sm text-muted-foreground">
            <Clock className="h-4 w-4" />
            <span>{cookingTime}</span>
          </div>
          
          {rating && (
            <div className="flex items-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  className={`h-4 w-4 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                />
              ))}
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default RecipeCard;