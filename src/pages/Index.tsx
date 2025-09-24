import Header from "@/components/Header";
import RecipeSection from "@/components/RecipeSection";
import ContactSection from "@/components/ContactSection";

// Import recipe images
import pastaImage from "@/assets/pasta-marinara.jpg";
import stirFryImage from "@/assets/vegetable-stir-fry.jpg";
import chickenImage from "@/assets/grilled-chicken.jpg";
import saladImage from "@/assets/mediterranean-salad.jpg";

const Index = () => {
  const newestRecipes = [
    {
      id: 1,
      title: "Classic Marinara Pasta",
      author: "Maria Rossi",
      cookingTime: "25 minutes",
      rating: 5,
      image: pastaImage,
      category: "ITALIAN"
    },
    {
      id: 2,
      title: "Colorful Vegetable Stir-Fry",
      author: "Chef Wong",
      cookingTime: "15 minutes",
      rating: 4,
      image: stirFryImage,
      category: "HEALTHY"
    },
    {
      id: 3,
      title: "Herb Grilled Chicken",
      author: "John Smith",
      cookingTime: "30 minutes",
      rating: 5,
      image: chickenImage,
      category: "GRILLED"
    },
    {
      id: 4,
      title: "Mediterranean Fresh Salad",
      author: "Elena Costa",
      cookingTime: "10 minutes",
      rating: 4,
      image: saladImage,
      category: "HEALTHY"
    }
  ];

  const popularRecipes = [
    {
      id: 5,
      title: "Creamy Mushroom Risotto",
      author: "Chef Antonio",
      cookingTime: "35 minutes",
      rating: 5,
      image: pastaImage,
    },
    {
      id: 6,
      title: "Spicy Thai Curry",
      author: "Siriporn Lee",
      cookingTime: "25 minutes",
      rating: 4,
      image: stirFryImage,
    },
    {
      id: 7,
      title: "BBQ Pulled Pork",
      author: "Mike Johnson",
      cookingTime: "4 hours",
      rating: 5,
      image: chickenImage,
    },
    {
      id: 8,
      title: "Greek Quinoa Bowl",
      author: "Anna Dimitriou",
      cookingTime: "20 minutes",
      rating: 4,
      image: saladImage,
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4">
        {/* Home section */}
        <section id="home">
          <RecipeSection 
            title="Our Newest Recipes"
            subtitle="GET THE LATEST"
            recipes={newestRecipes}
          />
        </section>

        {/* Recipes section */}
        <section id="recipes">
          <RecipeSection 
            title="Most Popular This Week"
            recipes={popularRecipes}
          />
        </section>
      </main>

      {/* Contact section */}
      <ContactSection />
      
      <footer className="bg-muted py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">
            © 2024 Cooking Community. Made with ❤️ for food lovers everywhere.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
