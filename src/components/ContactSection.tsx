import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const ContactSection = () => {

  return (
    <section id="contact" className="py-16 bg-accent/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">Contact Us</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have a question about a recipe? Want to share your cooking story? 
            We'd love to hear from you! Get in touch with our culinary team.
          </p>
        </div>
        
        <div className="max-w-2xl mx-auto">
          <h3 className="text-2xl font-semibold text-foreground mb-6 text-center">Send Us a Message</h3>
            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-card-foreground mb-2 block">
                        First Name
                      </label>
                      <Input placeholder="John" />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-card-foreground mb-2 block">
                        Last Name
                      </label>
                      <Input placeholder="Doe" />
                    </div>
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium text-card-foreground mb-2 block">
                      Email
                    </label>
                    <Input type="email" placeholder="john@example.com" />
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium text-card-foreground mb-2 block">
                      Subject
                    </label>
                    <Input placeholder="Recipe question, feedback, or suggestion" />
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium text-card-foreground mb-2 block">
                      Message
                    </label>
                    <Textarea 
                      placeholder="Tell us about your cooking experience or ask us anything..."
                      rows={5}
                    />
                  </div>
                  
                  <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;