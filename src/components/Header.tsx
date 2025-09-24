import { Search, User, ChefHat } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Header = () => {
  return (
    <header className="bg-background border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        {/* Top section with logo, search, and auth buttons */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <ChefHat className="h-8 w-8 text-primary" />
            <h1 className="text-2xl font-bold text-primary">Cooking</h1>
          </div>
          
          <div className="flex-1 max-w-md mx-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input 
                placeholder="What would you like to cook?" 
                className="pl-10 bg-background border-input"
              />
            </div>
          </div>
          
          <div className="flex items-center space-x-3">
            <Button variant="ghost" className="text-foreground hover:text-primary">
              Log in
            </Button>
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-6">
              Create free account
            </Button>
          </div>
        </div>
        
        {/* Navigation */}
        <nav className="flex space-x-8">
          <a href="#home" className="text-foreground hover:text-primary font-medium border-b-2 border-primary pb-2">
            What to Cook
          </a>
          <a href="#recipes" className="text-muted-foreground hover:text-primary font-medium pb-2">
            Recipes
          </a>
          <a href="#ingredients" className="text-muted-foreground hover:text-primary font-medium pb-2">
            Ingredients
          </a>
          <a href="#occasions" className="text-muted-foreground hover:text-primary font-medium pb-2">
            Occasions
          </a>
          <a href="#about" className="text-muted-foreground hover:text-primary font-medium pb-2">
            About
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;