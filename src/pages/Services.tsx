import React from 'react';
import { Home, Search, DollarSign, Users, Building, Key, TrendingUp, Shield } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Search,
      title: 'Property Search',
      description: 'Comprehensive property search with advanced filters and personalized recommendations based on your preferences.',
      features: ['Advanced search filters', 'Market analysis', 'Property comparisons', 'Neighborhood insights']
    },
    {
      icon: Home,
      title: 'Buying Services',
      description: 'End-to-end support for property purchases, from initial search to closing and beyond.',
      features: ['Property evaluation', 'Negotiation support', 'Legal assistance', 'Closing coordination']
    },
    {
      icon: DollarSign,
      title: 'Selling Services',
      description: 'Maximize your property value with our comprehensive selling services and marketing expertise.',
      features: ['Property valuation', 'Professional photography', 'Marketing strategy', 'Buyer screening']
    },
    {
      icon: Building,
      title: 'Property Management',
      description: 'Professional property management services to maintain and optimize your real estate investments.',
      features: ['Tenant screening', 'Rent collection', 'Maintenance coordination', 'Financial reporting']
    },
    {
      icon: TrendingUp,
      title: 'Investment Advisory',
      description: 'Expert guidance on real estate investments with market analysis and portfolio optimization.',
      features: ['Market research', 'Investment analysis', 'Portfolio planning', 'Risk assessment']
    },
    {
      icon: Key,
      title: 'Rental Services',
      description: 'Complete rental solutions for both landlords and tenants with transparent processes.',
      features: ['Tenant placement', 'Lease agreements', 'Property inspections', 'Renewal management']
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Initial Consultation',
      description: 'We start with a comprehensive consultation to understand your needs, preferences, and budget.'
    },
    {
      step: '02',
      title: 'Property Search',
      description: 'Our team conducts a targeted search based on your criteria, presenting only the best options.'
    },
    {
      step: '03',
      title: 'Property Tours',
      description: 'We arrange and accompany you on property tours, providing expert insights and guidance.'
    },
    {
      step: '04',
      title: 'Negotiation & Closing',
      description: 'We handle negotiations and coordinate the entire closing process for a smooth transaction.'
    }
  ];

  return (
    <div className="min-h-screen bg-background pt-24">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="text-gradient">Services</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive real estate services designed to meet all your property needs. 
            From buying and selling to investment and management, we've got you covered.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="glass-card p-6 hover:shadow-luxury transition-all duration-300">
              <div className="w-12 h-12 mb-4 bg-gradient-luxury rounded-lg flex items-center justify-center">
                <service.icon className="w-6 h-6 text-luxury-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-muted-foreground mb-4">{service.description}</p>
              
              <ul className="space-y-2">
                {service.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-center text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 bg-luxury rounded-full mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Process Section */}
        <div className="glass-card p-8 mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">
            Our <span className="text-gradient">Process</span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-luxury rounded-full flex items-center justify-center">
                  <span className="text-xl font-bold text-luxury-foreground">{step.step}</span>
                </div>
                <h3 className="text-lg font-semibold mb-3">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="glass-card p-8">
            <div className="w-12 h-12 mb-4 bg-gradient-luxury rounded-lg flex items-center justify-center">
              <Users className="w-6 h-6 text-luxury-foreground" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Expert Team</h3>
            <p className="text-muted-foreground">
              Our experienced team of real estate professionals brings decades of combined experience 
              and deep market knowledge to every transaction.
            </p>
          </div>
          
          <div className="glass-card p-8">
            <div className="w-12 h-12 mb-4 bg-gradient-luxury rounded-lg flex items-center justify-center">
              <Shield className="w-6 h-6 text-luxury-foreground" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Trusted Service</h3>
            <p className="text-muted-foreground">
              We maintain the highest standards of integrity and transparency, ensuring that your 
              interests are always our top priority throughout the entire process.
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center glass-card p-12 mb-16">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Get <span className="text-gradient">Started</span>?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your real estate needs and discover how we can help you 
            achieve your property goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-luxury">Book Consultation</button>
            <button className="btn-glass">Call +1 (555) 123-4567</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;