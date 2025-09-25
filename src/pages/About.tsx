import React from 'react';
import { Award, Users, Home, Star } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Home, value: '500+', label: 'Properties Sold' },
    { icon: Users, value: '1000+', label: 'Happy Clients' },
    { icon: Award, value: '15+', label: 'Years Experience' },
    { icon: Star, value: '4.9', label: 'Client Rating' },
  ];

  const team = [
    {
      name: 'Sarah Johnson',
      role: 'CEO & Founder',
      experience: '15+ years',
      specialties: 'Luxury Properties, Commercial Real Estate'
    },
    {
      name: 'Michael Chen',
      role: 'Senior Real Estate Agent',
      experience: '12+ years',
      specialties: 'Residential Sales, Investment Properties'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Property Manager',
      experience: '8+ years',
      specialties: 'Property Management, Rental Services'
    }
  ];

  return (
    <div className="min-h-screen bg-background pt-24">
      <div className="container mx-auto px-6">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="text-gradient">Wenzhomez</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            For over 15 years, Wenzhomez has been the premier destination for luxury real estate. 
            We specialize in connecting discerning clients with exceptional properties in the world's 
            most prestigious locations.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-luxury rounded-full flex items-center justify-center">
                <stat.icon className="w-8 h-8 text-luxury-foreground" />
              </div>
              <div className="text-3xl font-bold text-luxury mb-2">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Mission Section */}
        <div className="glass-card p-8 mb-16">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-muted-foreground mb-4">
                At Wenzhomez, we believe that finding the perfect property should be an extraordinary experience. 
                Our mission is to redefine luxury real estate by providing unparalleled service, expert guidance, 
                and access to the world's most exclusive properties.
              </p>
              <p className="text-muted-foreground">
                We combine cutting-edge technology with personalized service to ensure every client receives 
                the attention and expertise they deserve. From first-time buyers to seasoned investors, 
                we're committed to exceeding expectations at every step.
              </p>
            </div>
            <div className="space-y-4">
              <div className="p-4 bg-luxury/10 rounded-lg">
                <h3 className="font-semibold text-luxury mb-2">Excellence</h3>
                <p className="text-sm text-muted-foreground">
                  We maintain the highest standards in everything we do.
                </p>
              </div>
              <div className="p-4 bg-luxury/10 rounded-lg">
                <h3 className="font-semibold text-luxury mb-2">Integrity</h3>
                <p className="text-sm text-muted-foreground">
                  Transparency and honesty are the foundation of our relationships.
                </p>
              </div>
              <div className="p-4 bg-luxury/10 rounded-lg">
                <h3 className="font-semibold text-luxury mb-2">Innovation</h3>
                <p className="text-sm text-muted-foreground">
                  We leverage the latest technology to serve our clients better.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">
            Meet Our <span className="text-gradient">Expert Team</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="glass-card p-6 text-center">
                <div className="w-20 h-20 mx-auto mb-4 bg-gradient-luxury rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-luxury-foreground">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <p className="text-luxury font-medium mb-2">{member.role}</p>
                <p className="text-sm text-muted-foreground mb-3">{member.experience}</p>
                <p className="text-sm text-muted-foreground">{member.specialties}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center glass-card p-12 mb-16">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Find Your <span className="text-gradient">Dream Property</span>?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let our experienced team guide you through your real estate journey. 
            Contact us today to get started.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-luxury">Schedule Consultation</button>
            <button className="btn-glass">Browse Properties</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;