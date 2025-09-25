import React from 'react';
import { Shield, FileText, Cookie, Eye } from 'lucide-react';

const Legal = () => {
  const sections = [
    {
      id: 'privacy',
      title: 'Privacy Policy',
      icon: Eye,
      content: `
        At Wenzhomez Real Estate, we are committed to protecting your privacy and personal information. 
        This Privacy Policy explains how we collect, use, and safeguard your data when you use our services.

        Information We Collect:
        • Personal information (name, email, phone number)
        • Property preferences and search history
        • Communication records and inquiries
        • Website usage data and cookies

        How We Use Your Information:
        • To provide personalized property recommendations
        • To communicate about listings and services
        • To improve our website and user experience
        • To comply with legal obligations

        Data Protection:
        We implement industry-standard security measures to protect your personal information. 
        Your data is encrypted and stored securely, and we never sell your information to third parties.
      `
    },
    {
      id: 'terms',
      title: 'Terms of Service',
      icon: FileText,
      content: `
        Welcome to Wenzhomez Real Estate. By using our website and services, you agree to these Terms of Service.

        Use of Our Services:
        • You must be at least 18 years old to use our services
        • You agree to provide accurate and complete information
        • You will not use our services for any illegal purposes
        • You respect the intellectual property rights of our content

        Property Listings:
        • All property information is provided for informational purposes
        • Prices and availability are subject to change without notice
        • Virtual tours and photos may not reflect current property conditions
        • We are not responsible for third-party listing inaccuracies

        Limitation of Liability:
        Wenzhomez Real Estate shall not be liable for any indirect, incidental, special, 
        or consequential damages arising from your use of our services.

        These terms are governed by the laws of the jurisdiction where our company is registered.
      `
    },
    {
      id: 'cookies',
      title: 'Cookie Policy',
      icon: Cookie,
      content: `
        This Cookie Policy explains how Wenzhomez Real Estate uses cookies and similar technologies 
        on our website to enhance your browsing experience.

        What Are Cookies:
        Cookies are small text files stored on your device when you visit our website. 
        They help us remember your preferences and improve your experience.

        Types of Cookies We Use:
        • Essential Cookies: Required for basic website functionality
        • Performance Cookies: Help us analyze website usage and performance
        • Functional Cookies: Remember your preferences and settings
        • Marketing Cookies: Used to deliver relevant advertisements

        Managing Cookies:
        You can control and delete cookies through your browser settings. 
        However, disabling certain cookies may affect website functionality.

        Third-Party Cookies:
        We may use third-party services (Google Analytics, social media platforms) 
        that place their own cookies on your device.

        Updates to This Policy:
        We may update this Cookie Policy from time to time. 
        Please check this page periodically for any changes.
      `
    }
  ];

  return (
    <div className="min-h-screen bg-background pt-24">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Legal <span className="text-gradient">Information</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Important legal information regarding your use of Wenzhomez Real Estate services. 
            Please read these documents carefully.
          </p>
        </div>

        {/* Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {sections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className="btn-glass flex items-center space-x-2"
            >
              <section.icon className="w-4 h-4" />
              <span>{section.title}</span>
            </a>
          ))}
        </div>

        {/* Legal Sections */}
        <div className="space-y-12 mb-16">
          {sections.map((section, index) => (
            <div
              key={section.id}
              id={section.id}
              className="glass-card p-8"
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-luxury rounded-lg flex items-center justify-center">
                  <section.icon className="w-6 h-6 text-luxury-foreground" />
                </div>
                <h2 className="text-2xl font-bold">{section.title}</h2>
              </div>
              
              <div className="prose prose-lg max-w-none">
                {section.content.split('\n\n').map((paragraph, pIndex) => (
                  <p key={pIndex} className="text-muted-foreground mb-4 whitespace-pre-line">
                    {paragraph.trim()}
                  </p>
                ))}
              </div>
              
              <div className="mt-6 pt-6 border-t border-border">
                <p className="text-sm text-muted-foreground">
                  Last updated: {new Date().toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="glass-card p-8 text-center mb-16">
          <div className="w-16 h-16 mx-auto mb-4 bg-gradient-luxury rounded-full flex items-center justify-center">
            <Shield className="w-8 h-8 text-luxury-foreground" />
          </div>
          <h2 className="text-2xl font-bold mb-4">Questions About Our Legal Policies?</h2>
          <p className="text-muted-foreground mb-6">
            If you have any questions about these legal documents or need clarification, 
            please don't hesitate to contact our legal team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-luxury">Contact Legal Team</button>
            <a href="mailto:legal@wenzhomez.com" className="btn-glass">
              Email: legal@wenzhomez.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Legal;