import React, { useState } from 'react';
import { Search, MapPin, Home, DollarSign } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import heroProperty from '@/assets/hero-property.jpg';

const HeroSection = () => {
  const [searchData, setSearchData] = useState({
    location: '',
    propertyType: '',
    priceRange: '',
  });

  const handleSearch = () => {
    console.log('Search:', searchData);
    // Navigate to properties page with filters
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center hero-background">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroProperty})` }}
      />
      
      {/* Overlay */}
      <div className="hero-overlay" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center text-white">
        <div className="max-w-4xl mx-auto">
          {/* Hero Text */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Find Your
            <span className="block text-luxury-gradient">Dream Home</span>
          </h1>
          <p className="text-xl md:text-2xl mb-12 text-white/90 max-w-2xl mx-auto">
            Discover exceptional luxury properties that redefine modern living. 
            Your perfect home awaits in the most prestigious locations.
          </p>

          {/* Search Container */}
          <div className="search-container">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
              {/* Location */}
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                <Input
                  placeholder="Enter location"
                  value={searchData.location}
                  onChange={(e) => setSearchData({ ...searchData, location: e.target.value })}
                  className="pl-10 h-12 bg-background/90 border-border/20 focus:bg-background"
                />
              </div>

              {/* Property Type */}
              <div className="relative">
                <Home className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5 z-10" />
                <Select value={searchData.propertyType} onValueChange={(value) => setSearchData({ ...searchData, propertyType: value })}>
                  <SelectTrigger className="pl-10 h-12 bg-background/90 border-border/20 focus:bg-background">
                    <SelectValue placeholder="Property Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="apartment">Apartment</SelectItem>
                    <SelectItem value="villa">Villa</SelectItem>
                    <SelectItem value="penthouse">Penthouse</SelectItem>
                    <SelectItem value="mansion">Mansion</SelectItem>
                    <SelectItem value="townhouse">Townhouse</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Price Range */}
              <div className="relative">
                <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5 z-10" />
                <Select value={searchData.priceRange} onValueChange={(value) => setSearchData({ ...searchData, priceRange: value })}>
                  <SelectTrigger className="pl-10 h-12 bg-background/90 border-border/20 focus:bg-background">
                    <SelectValue placeholder="Price Range" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="500k-1m">$500K - $1M</SelectItem>
                    <SelectItem value="1m-2m">$1M - $2M</SelectItem>
                    <SelectItem value="2m-5m">$2M - $5M</SelectItem>
                    <SelectItem value="5m-10m">$5M - $10M</SelectItem>
                    <SelectItem value="10m+">$10M+</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Search Button */}
              <Button onClick={handleSearch} className="btn-hero h-12">
                <Search className="w-5 h-5 mr-2" />
                Search
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div className="text-primary">
                <div className="text-2xl font-bold text-luxury">500+</div>
                <div className="text-sm text-muted-foreground">Premium Properties</div>
              </div>
              <div className="text-primary">
                <div className="text-2xl font-bold text-luxury">50+</div>
                <div className="text-sm text-muted-foreground">Luxury Locations</div>
              </div>
              <div className="text-primary">
                <div className="text-2xl font-bold text-luxury">98%</div>
                <div className="text-sm text-muted-foreground">Client Satisfaction</div>
              </div>
              <div className="text-primary">
                <div className="text-2xl font-bold text-luxury">10+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;