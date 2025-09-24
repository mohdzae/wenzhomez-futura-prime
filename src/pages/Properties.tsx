import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Filter, Grid, List, MapPin, Bed, Bath, Square } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import property1 from '@/assets/property-1.jpg';
import property2 from '@/assets/property-2.jpg';
import property3 from '@/assets/property-3.jpg';

const Properties = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [filters, setFilters] = useState({
    search: '',
    location: '',
    propertyType: '',
    priceRange: '',
    bedrooms: '',
  });

  // Mock properties data
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
      type: "Penthouse",
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
      type: "Apartment",
      featured: false
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
      type: "Villa",
      featured: true
    },
    // Duplicate for demonstration
    {
      id: 4,
      title: "Contemporary City Loft",
      location: "Manhattan, New York",
      price: "$1,950,000",
      beds: 2,
      baths: 2,
      area: "1,800",
      image: property1,
      type: "Apartment",
      featured: false
    },
    {
      id: 5,
      title: "Hillside Luxury Estate",
      location: "Beverly Hills, CA",
      price: "$8,500,000",
      beds: 6,
      baths: 5,
      area: "6,200",
      image: property2,
      type: "Villa",
      featured: true
    },
    {
      id: 6,
      title: "Ocean View Penthouse",
      location: "Miami Beach, FL",
      price: "$5,200,000",
      beds: 4,
      baths: 3,
      area: "3,800",
      image: property3,
      type: "Penthouse",
      featured: false
    }
  ];

  const PropertyCard = ({ property }: { property: any }) => (
    <div className="property-card">
      <div className="property-card-image">
        <img src={property.image} alt={property.title} loading="lazy" />
        <div className="absolute top-4 left-4 flex space-x-2">
          {property.featured && (
            <Badge className="bg-luxury text-luxury-foreground">Featured</Badge>
          )}
          <Badge variant="secondary" className="glass">
            {property.type}
          </Badge>
        </div>
        <div className="absolute top-4 right-4">
          <Badge className="glass font-semibold">{property.price}</Badge>
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-center text-sm text-muted-foreground mb-2">
          <MapPin className="w-4 h-4 mr-1" />
          {property.location}
        </div>
        
        <h3 className="text-xl font-semibold mb-4">{property.title}</h3>

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

        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-luxury">{property.price}</span>
          <Link to={`/properties/${property.id}`}>
            <Button className="btn-glass">View Details</Button>
          </Link>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-background pt-24">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Luxury <span className="text-gradient">Properties</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Discover exceptional properties in premium locations worldwide
          </p>
        </div>

        {/* Filters */}
        <div className="glass-card p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="Search properties..."
                value={filters.search}
                onChange={(e) => setFilters({ ...filters, search: e.target.value })}
                className="pl-10"
              />
            </div>

            <Select value={filters.location} onValueChange={(value) => setFilters({ ...filters, location: value })}>
              <SelectTrigger>
                <SelectValue placeholder="Location" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="manhattan">Manhattan, NY</SelectItem>
                <SelectItem value="beverly-hills">Beverly Hills, CA</SelectItem>
                <SelectItem value="miami-beach">Miami Beach, FL</SelectItem>
              </SelectContent>
            </Select>

            <Select value={filters.propertyType} onValueChange={(value) => setFilters({ ...filters, propertyType: value })}>
              <SelectTrigger>
                <SelectValue placeholder="Property Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="apartment">Apartment</SelectItem>
                <SelectItem value="villa">Villa</SelectItem>
                <SelectItem value="penthouse">Penthouse</SelectItem>
                <SelectItem value="mansion">Mansion</SelectItem>
              </SelectContent>
            </Select>

            <Select value={filters.priceRange} onValueChange={(value) => setFilters({ ...filters, priceRange: value })}>
              <SelectTrigger>
                <SelectValue placeholder="Price Range" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1m-3m">$1M - $3M</SelectItem>
                <SelectItem value="3m-5m">$3M - $5M</SelectItem>
                <SelectItem value="5m-10m">$5M - $10M</SelectItem>
                <SelectItem value="10m+">$10M+</SelectItem>
              </SelectContent>
            </Select>

            <Select value={filters.bedrooms} onValueChange={(value) => setFilters({ ...filters, bedrooms: value })}>
              <SelectTrigger>
                <SelectValue placeholder="Bedrooms" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">1+ Bedroom</SelectItem>
                <SelectItem value="2">2+ Bedrooms</SelectItem>
                <SelectItem value="3">3+ Bedrooms</SelectItem>
                <SelectItem value="4">4+ Bedrooms</SelectItem>
                <SelectItem value="5">5+ Bedrooms</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button variant="outline" className="btn-glass">
                <Filter className="w-4 h-4 mr-2" />
                More Filters
              </Button>
              <span className="text-sm text-muted-foreground">
                {properties.length} properties found
              </span>
            </div>

            <div className="flex items-center space-x-2">
              <Button
                variant={viewMode === 'grid' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setViewMode('grid')}
                className={viewMode === 'grid' ? 'btn-luxury' : 'btn-glass'}
              >
                <Grid className="w-4 h-4" />
              </Button>
              <Button
                variant={viewMode === 'list' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setViewMode('list')}
                className={viewMode === 'list' ? 'btn-luxury' : 'btn-glass'}
              >
                <List className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Properties Grid */}
        <div className={`grid gap-8 mb-12 ${
          viewMode === 'grid' 
            ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' 
            : 'grid-cols-1'
        }`}>
          {properties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mb-12">
          <Button className="btn-luxury">
            Load More Properties
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Properties;