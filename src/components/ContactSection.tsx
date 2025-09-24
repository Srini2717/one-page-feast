import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const ContactSection = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Us",
      description: "123 Culinary Street, Food District, Kitchen City, KC 12345"
    },
    {
      icon: Phone,
      title: "Call Us",
      description: "+1 (555) 123-COOK (2665)"
    },
    {
      icon: Mail,
      title: "Email Us",
      description: "hello@cookingcommunity.com"
    },
    {
      icon: Clock,
      title: "Office Hours",
      description: "Monday - Friday: 9AM - 6PM PST"
    }
  ];

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
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-semibold text-foreground mb-6">Get In Touch</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {contactInfo.map((info, index) => (
                <Card key={index} className="bg-card border-border">
                  <CardContent className="p-4">
                    <div className="flex items-start space-x-3">
                      <div className="inline-flex items-center justify-center w-10 h-10 bg-primary/10 rounded-full flex-shrink-0">
                        <info.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-card-foreground mb-1">{info.title}</h4>
                        <p className="text-sm text-muted-foreground">{info.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="bg-gradient-to-r from-primary to-cooking-orange text-white rounded-lg p-6">
              <h4 className="text-xl font-semibold mb-3">Join Our Newsletter</h4>
              <p className="mb-4 opacity-90">
                Get weekly recipes, cooking tips, and exclusive content delivered to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Input 
                  placeholder="Your email address" 
                  className="bg-white/20 border-white/30 text-white placeholder:text-white/70"
                />
                <Button variant="secondary" className="whitespace-nowrap">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div>
            <h3 className="text-2xl font-semibold text-foreground mb-6">Send Us a Message</h3>
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
      </div>
    </section>
  );
};

export default ContactSection;