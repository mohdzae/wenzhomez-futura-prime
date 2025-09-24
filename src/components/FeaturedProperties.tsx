import React from 'react';
import { ArrowRight, Bed, Bath, Square, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import property1 from '@/assets/property-1.jpg';
import property2 from '@/assets/property-2.jpg';
import property3 from '@/assets/property-3.jpg';

const FeaturedProperties = () => {
  const properties = [
    {
      id: 1,
      title: "Modern Downtown Penthouse",
      location: "Manhattan, New York",
      price: "$2,850,000",
      beds: 3,
      baths: 2,
      area: "2,400",
      image: property1,
      featured: true
    },
    {
      id: 2,
      title: "Luxury Rooftop Apartment",
      location: "Beverly Hills, CA",
      price: "$4,200,000",
      beds: 4,
      baths: 3,
      area: "3,200",
      image: property2,
      featured: true
    },
    {
      id: 3,
      title: "Waterfront Modern Villa",
      location: "Miami Beach, FL",
      price: "$6,750,000",
      beds: 5,
      baths: 4,
      area: "4,800",
      image: property3,
      featured: true
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="text-gradient">Properties</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover our handpicked selection of exceptional luxury properties 
            in the most prestigious locations around the world.
          </p>
        </div>

        {/* Properties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {properties.map((property) => (
            <div key={property.id} className="property-card">
              {/* Property Image */}
              <div className="property-card-image">
                <img 
                  src={property.image} 
                  alt={property.title}
                  loading="lazy"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-luxury text-luxury-foreground px-3 py-1 rounded-full text-sm font-medium">
                    Featured
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="glass px-3 py-1 rounded-full text-sm font-medium">
                    {property.price}
                  </span>
                </div>
              </div>

              {/* Property Info */}
              <div className="p-6">
                <div className="flex items-center text-sm text-muted-foreground mb-2">
                  <MapPin className="w-4 h-4 mr-1" />
                  {property.location}
                </div>
                
                <h3 className="text-xl font-semibold mb-4 text-foreground">
                  {property.title}
                </h3>

                {/* Property Features */}
                <div className="flex items-center space-x-6 mb-6 text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <Bed className="w-4 h-4 mr-1" />
                    {property.beds} Beds
                  </div>
                  <div className="flex items-center">
                    <Bath className="w-4 h-4 mr-1" />
                    {property.baths} Baths
                  </div>
                  <div className="flex items-center">
                    <Square className="w-4 h-4 mr-1" />
                    {property.area} sq ft
                  </div>
                </div>

                {/* CTA */}
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-luxury">
                    {property.price}
                  </span>
                  <Button variant="outline" className="btn-glass">
                    View Details
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Button className="btn-luxury">
            View All Properties
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperties;