import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Bed, Bath, Square, MapPin, Heart, Share2, Phone, Mail, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import ImageGallery from '@/components/ImageGallery';
import property1 from '@/assets/property-1.jpg';
import property2 from '@/assets/property-2.jpg';
import property3 from '@/assets/property-3.jpg';

const PropertyDetail = () => {
  const { id } = useParams();
  const [inquiryForm, setInquiryForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  // Mock property data - will be replaced with real data later
  const properties = {
    '1': {
      id: 1,
      title: "Modern Downtown Penthouse",
      location: "Manhattan, New York",
      price: "$2,850,000",
      beds: 3,
      baths: 2,
      area: "2,400",
      type: "Penthouse",
      featured: true,
      description: "Experience luxury living at its finest in this stunning downtown penthouse. Floor-to-ceiling windows offer breathtaking city views, while the open-concept design creates an perfect entertaining space. Premium finishes throughout including marble countertops, hardwood floors, and state-of-the-art appliances.",
      features: ["City Views", "Hardwood Floors", "Marble Kitchen", "Private Balcony", "Parking Included", "Gym Access"],
      images: [property1, property2, property3, property1, property2],
      agent: {
        name: "Sarah Mitchell",
        phone: "+1 (555) 123-4567",
        email: "sarah@wenzhomez.com",
        image: "/placeholder.svg"
      }
    },
    '2': {
      id: 2,
      title: "Luxury Rooftop Apartment",
      location: "Beverly Hills, CA",
      price: "$4,200,000",
      beds: 4,
      baths: 3,
      area: "3,200",
      type: "Apartment",
      featured: false,
      description: "Indulge in the ultimate luxury lifestyle with this exquisite rooftop apartment. Featuring panoramic mountain views, private rooftop terrace, and resort-style amenities. Every detail has been carefully curated to provide an unparalleled living experience.",
      features: ["Mountain Views", "Rooftop Terrace", "Pool Access", "Smart Home", "Wine Cellar", "Concierge"],
      images: [property2, property3, property1, property2, property3],
      agent: {
        name: "Michael Chen",
        phone: "+1 (555) 987-6543",
        email: "michael@wenzhomez.com",
        image: "/placeholder.svg"
      }
    },
    '3': {
      id: 3,
      title: "Waterfront Modern Villa",
      location: "Miami Beach, FL",
      price: "$6,750,000",
      beds: 5,
      baths: 4,
      area: "4,800",
      type: "Villa",
      featured: true,
      description: "Discover waterfront elegance in this architectural masterpiece. Direct ocean access, infinity pool, and expansive outdoor entertainment areas make this the perfect retreat. Modern design meets coastal luxury in every square foot.",
      features: ["Ocean Access", "Infinity Pool", "Private Beach", "Wine Cellar", "Home Theater", "Guest House"],
      images: [property3, property1, property2, property3, property1],
      agent: {
        name: "Isabella Rodriguez",
        phone: "+1 (555) 456-7890",
        email: "isabella@wenzhomez.com",
        image: "/placeholder.svg"
      }
    }
  };

  const property = properties[id as keyof typeof properties];

  if (!property) {
    return (
      <div className="min-h-screen bg-background pt-24 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Property Not Found</h1>
          <Link to="/properties">
            <Button className="btn-luxury">Back to Properties</Button>
          </Link>
        </div>
      </div>
    );
  }

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock form submission - will be replaced with real API later
    console.log('Inquiry submitted:', inquiryForm);
    alert('Thank you for your inquiry! We\'ll contact you soon.');
    setInquiryForm({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-background pt-24">
      <div className="container mx-auto px-6">
        {/* Breadcrumb */}
        <div className="flex items-center mb-8">
          <Link to="/properties" className="flex items-center text-muted-foreground hover:text-luxury transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Properties
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Image Gallery */}
            <ImageGallery images={property.images} />

            {/* Property Info */}
            <div className="glass-card p-8 mt-8">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <div className="flex items-center space-x-4 mb-4">
                    {property.featured && (
                      <Badge className="bg-luxury text-luxury-foreground">Featured</Badge>
                    )}
                    <Badge variant="secondary" className="glass">
                      {property.type}
                    </Badge>
                  </div>
                  <h1 className="text-3xl md:text-4xl font-bold mb-2">{property.title}</h1>
                  <div className="flex items-center text-muted-foreground mb-4">
                    <MapPin className="w-5 h-5 mr-2" />
                    {property.location}
                  </div>
                  <div className="text-3xl font-bold text-luxury">{property.price}</div>
                </div>
                <div className="flex space-x-2">
                  <Button variant="outline" size="icon" className="btn-glass">
                    <Heart className="w-5 h-5" />
                  </Button>
                  <Button variant="outline" size="icon" className="btn-glass">
                    <Share2 className="w-5 h-5" />
                  </Button>
                </div>
              </div>

              {/* Property Specs */}
              <div className="grid grid-cols-3 gap-6 mb-8 p-6 bg-secondary/30 rounded-lg">
                <div className="text-center">
                  <Bed className="w-8 h-8 mx-auto mb-2 text-luxury" />
                  <div className="text-2xl font-bold">{property.beds}</div>
                  <div className="text-sm text-muted-foreground">Bedrooms</div>
                </div>
                <div className="text-center">
                  <Bath className="w-8 h-8 mx-auto mb-2 text-luxury" />
                  <div className="text-2xl font-bold">{property.baths}</div>
                  <div className="text-sm text-muted-foreground">Bathrooms</div>
                </div>
                <div className="text-center">
                  <Square className="w-8 h-8 mx-auto mb-2 text-luxury" />
                  <div className="text-2xl font-bold">{property.area}</div>
                  <div className="text-sm text-muted-foreground">sq ft</div>
                </div>
              </div>

              {/* Description */}
              <div className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">About This Property</h2>
                <p className="text-muted-foreground leading-relaxed">{property.description}</p>
              </div>

              {/* Features */}
              <div>
                <h2 className="text-2xl font-semibold mb-4">Property Features</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {property.features.map((feature, index) => (
                    <div key={index} className="flex items-center p-3 bg-secondary/20 rounded-lg">
                      <div className="w-2 h-2 bg-luxury rounded-full mr-3"></div>
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Agent Info */}
            <div className="glass-card p-6">
              <h3 className="text-xl font-semibold mb-4">Contact Agent</h3>
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center">
                  <span className="text-xl font-bold">{property.agent.name.split(' ').map(n => n[0]).join('')}</span>
                </div>
                <div>
                  <div className="font-semibold">{property.agent.name}</div>
                  <div className="text-sm text-muted-foreground">Licensed Real Estate Agent</div>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center">
                  <Phone className="w-4 h-4 mr-3 text-luxury" />
                  <span className="text-sm">{property.agent.phone}</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-4 h-4 mr-3 text-luxury" />
                  <span className="text-sm">{property.agent.email}</span>
                </div>
              </div>
              <div className="mt-6 space-y-3">
                <Button className="w-full btn-luxury">
                  <Phone className="w-4 h-4 mr-2" />
                  Call Now
                </Button>
                <Button variant="outline" className="w-full btn-glass">
                  <Calendar className="w-4 h-4 mr-2" />
                  Schedule Tour
                </Button>
              </div>
            </div>

            {/* Inquiry Form */}
            <div className="glass-card p-6">
              <h3 className="text-xl font-semibold mb-4">Send Inquiry</h3>
              <form onSubmit={handleInquirySubmit} className="space-y-4">
                <Input
                  placeholder="Your Name"
                  value={inquiryForm.name}
                  onChange={(e) => setInquiryForm({ ...inquiryForm, name: e.target.value })}
                  required
                />
                <Input
                  type="email"
                  placeholder="Email Address"
                  value={inquiryForm.email}
                  onChange={(e) => setInquiryForm({ ...inquiryForm, email: e.target.value })}
                  required
                />
                <Input
                  type="tel"
                  placeholder="Phone Number"
                  value={inquiryForm.phone}
                  onChange={(e) => setInquiryForm({ ...inquiryForm, phone: e.target.value })}
                />
                <Textarea
                  placeholder="Your Message"
                  value={inquiryForm.message}
                  onChange={(e) => setInquiryForm({ ...inquiryForm, message: e.target.value })}
                  rows={4}
                  required
                />
                <Button type="submit" className="w-full btn-luxury">
                  Send Inquiry
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetail;