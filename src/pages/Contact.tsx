import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: '+1 (555) 123-4567',
      subtitle: 'Call us anytime'
    },
    {
      icon: Mail,
      title: 'Email',
      details: 'info@wenzhomez.com',
      subtitle: 'Send us a message'
    },
    {
      icon: MapPin,
      title: 'Office',
      details: '123 Luxury Avenue',
      subtitle: 'Premium District, City 12345'
    },
    {
      icon: Clock,
      title: 'Hours',
      details: 'Mon - Fri: 9AM - 6PM',
      subtitle: 'Weekend by appointment'
    }
  ];

  return (
    <div className="min-h-screen bg-background pt-24">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Get in <span className="text-gradient">Touch</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to find your dream property? Our luxury real estate experts are here to help you 
            every step of the way.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
          {/* Contact Info */}
          <div className="lg:col-span-1">
            <h2 className="text-2xl font-semibold mb-8">Contact Information</h2>
            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <Card key={index} className="glass-card border-0">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-luxury rounded-lg flex items-center justify-center">
                        <item.icon className="w-6 h-6 text-luxury-foreground" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">{item.title}</h3>
                        <p className="text-luxury font-medium">{item.details}</p>
                        <p className="text-sm text-muted-foreground">{item.subtitle}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Additional Info */}
            <div className="mt-8 p-6 glass-card rounded-lg">
              <h3 className="font-semibold mb-4">Why Choose Wenzhomez?</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• 10+ years of luxury real estate experience</li>
                <li>• Exclusive access to premium properties</li>
                <li>• Personalized service and expert guidance</li>
                <li>• Comprehensive market knowledge</li>
                <li>• End-to-end transaction support</li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="glass-card border-0">
              <CardContent className="p-8">
                <h2 className="text-2xl font-semibold mb-6">Send us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">Full Name</label>
                      <Input
                        placeholder="Your full name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="bg-background/50"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Email Address</label>
                      <Input
                        type="email"
                        placeholder="your.email@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="bg-background/50"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">Phone Number</label>
                      <Input
                        type="tel"
                        placeholder="+1 (555) 123-4567"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="bg-background/50"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Subject</label>
                      <Input
                        placeholder="How can we help you?"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="bg-background/50"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Message</label>
                    <Textarea
                      placeholder="Tell us about your property requirements, budget, preferred locations, or any specific questions you have..."
                      rows={6}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="bg-background/50 resize-none"
                      required
                    />
                  </div>

                  <Button type="submit" className="btn-luxury w-full md:w-auto">
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Map Section */}
        <div className="mb-16">
          <Card className="glass-card border-0 overflow-hidden">
            <div className="aspect-video bg-gradient-to-br from-muted to-muted-dark flex items-center justify-center">
              <div className="text-center text-muted-foreground">
                <MapPin className="w-12 h-12 mx-auto mb-4" />
                <p className="text-lg font-medium">Interactive Map</p>
                <p className="text-sm">Our office location: 123 Luxury Avenue, Premium District</p>
              </div>
            </div>
          </Card>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-hero rounded-2xl p-12 mb-16">
          <div className="max-w-2xl mx-auto text-white">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-lg mb-8 text-white/90">
              Let our experts help you find the perfect luxury property that matches your lifestyle and investment goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="btn-glass bg-white/10 text-white border-white/20 hover:bg-white/20">
                Schedule Consultation
              </Button>
              <Button className="btn-luxury">
                Browse Properties
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;