import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Plus, Edit, Trash2, Save, X } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface Property {
  id: string;
  title: string;
  description: string;
  location: string;
  propertyType: string;
  price: number;
  bedrooms: number;
  bathrooms: number;
  image: string;
  status: 'active' | 'inactive';
}

const AssetsManagement = () => {
  const { toast } = useToast();
  const [showForm, setShowForm] = useState(false);
  const [editingProperty, setEditingProperty] = useState<Property | null>(null);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    location: '',
    propertyType: '',
    price: '',
    bedrooms: '',
    bathrooms: '',
    image: ''
  });

  // Mock properties data
  const [properties, setProperties] = useState<Property[]>([
    {
      id: '1',
      title: 'Modern Luxury Villa',
      description: 'Beautiful villa with stunning views',
      location: 'Beverly Hills, CA',
      propertyType: 'Villa',
      price: 2500000,
      bedrooms: 5,
      bathrooms: 4,
      image: '/placeholder.svg',
      status: 'active'
    },
    {
      id: '2',
      title: 'Downtown Apartment',
      description: 'Spacious apartment in city center',
      location: 'Manhattan, NY',
      propertyType: 'Apartment',
      price: 850000,
      bedrooms: 2,
      bathrooms: 2,
      image: '/placeholder.svg',
      status: 'active'
    },
    {
      id: '3',
      title: 'Suburban House',
      description: 'Family-friendly house with garden',
      location: 'Austin, TX',
      propertyType: 'House',
      price: 450000,
      bedrooms: 3,
      bathrooms: 2,
      image: '/placeholder.svg',
      status: 'inactive'
    }
  ]);

  const resetForm = () => {
    setFormData({
      title: '',
      description: '',
      location: '',
      propertyType: '',
      price: '',
      bedrooms: '',
      bathrooms: '',
      image: ''
    });
    setEditingProperty(null);
    setShowForm(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (editingProperty) {
      // Update existing property
      setProperties(prev => prev.map(prop => 
        prop.id === editingProperty.id 
          ? {
              ...prop,
              title: formData.title,
              description: formData.description,
              location: formData.location,
              propertyType: formData.propertyType,
              price: Number(formData.price),
              bedrooms: Number(formData.bedrooms),
              bathrooms: Number(formData.bathrooms),
              image: formData.image || '/placeholder.svg'
            }
          : prop
      ));
      toast({ title: 'Property updated successfully!' });
    } else {
      // Add new property
      const newProperty: Property = {
        id: Date.now().toString(),
        title: formData.title,
        description: formData.description,
        location: formData.location,
        propertyType: formData.propertyType,
        price: Number(formData.price),
        bedrooms: Number(formData.bedrooms),
        bathrooms: Number(formData.bathrooms),
        image: formData.image || '/placeholder.svg',
        status: 'active'
      };
      setProperties(prev => [...prev, newProperty]);
      toast({ title: 'Property added successfully!' });
    }
    
    resetForm();
  };

  const handleEdit = (property: Property) => {
    setEditingProperty(property);
    setFormData({
      title: property.title,
      description: property.description,
      location: property.location,
      propertyType: property.propertyType,
      price: property.price.toString(),
      bedrooms: property.bedrooms.toString(),
      bathrooms: property.bathrooms.toString(),
      image: property.image
    });
    setShowForm(true);
  };

  const handleDelete = (propertyId: string) => {
    setProperties(prev => prev.filter(prop => prop.id !== propertyId));
    toast({ title: 'Property deleted successfully!' });
  };

  const toggleStatus = (propertyId: string) => {
    setProperties(prev => prev.map(prop => 
      prop.id === propertyId 
        ? { ...prop, status: prop.status === 'active' ? 'inactive' : 'active' }
        : prop
    ));
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Assets Management</h1>
          <p className="text-muted-foreground">Manage your property listings</p>
        </div>
        <Button 
          onClick={() => setShowForm(true)}
          className="gap-2"
          disabled={showForm}
        >
          <Plus className="h-4 w-4" />
          Add New Property
        </Button>
      </div>

      {/* Add/Edit Form */}
      {showForm && (
        <Card>
          <CardHeader>
            <CardTitle>
              {editingProperty ? 'Edit Property' : 'Add New Property'}
            </CardTitle>
            <CardDescription>
              {editingProperty ? 'Update property details' : 'Fill in the details for the new property'}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="title">Property Title</Label>
                  <Input
                    id="title"
                    value={formData.title}
                    onChange={(e) => setFormData({...formData, title: e.target.value})}
                    placeholder="e.g., Modern Luxury Villa"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="location">Location</Label>
                  <Input
                    id="location"
                    value={formData.location}
                    onChange={(e) => setFormData({...formData, location: e.target.value})}
                    placeholder="e.g., Beverly Hills, CA"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="propertyType">Property Type</Label>
                  <Select value={formData.propertyType} onValueChange={(value) => setFormData({...formData, propertyType: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select property type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Villa">Villa</SelectItem>
                      <SelectItem value="Apartment">Apartment</SelectItem>
                      <SelectItem value="House">House</SelectItem>
                      <SelectItem value="Condo">Condo</SelectItem>
                      <SelectItem value="Townhouse">Townhouse</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="price">Price ($)</Label>
                  <Input
                    id="price"
                    type="number"
                    value={formData.price}
                    onChange={(e) => setFormData({...formData, price: e.target.value})}
                    placeholder="e.g., 2500000"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="bedrooms">Bedrooms</Label>
                  <Input
                    id="bedrooms"
                    type="number"
                    value={formData.bedrooms}
                    onChange={(e) => setFormData({...formData, bedrooms: e.target.value})}
                    placeholder="e.g., 3"
                    min="1"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="bathrooms">Bathrooms</Label>
                  <Input
                    id="bathrooms"
                    type="number"
                    value={formData.bathrooms}
                    onChange={(e) => setFormData({...formData, bathrooms: e.target.value})}
                    placeholder="e.g., 2"
                    min="1"
                    required
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  value={formData.description}
                  onChange={(e) => setFormData({...formData, description: e.target.value})}
                  placeholder="Describe the property features and amenities..."
                  rows={3}
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="image">Image URL (optional)</Label>
                <Input
                  id="image"
                  value={formData.image}
                  onChange={(e) => setFormData({...formData, image: e.target.value})}
                  placeholder="https://example.com/image.jpg"
                />
              </div>
              
              <div className="flex gap-2">
                <Button type="submit" className="gap-2">
                  <Save className="h-4 w-4" />
                  {editingProperty ? 'Update Property' : 'Add Property'}
                </Button>
                <Button type="button" variant="outline" onClick={resetForm} className="gap-2">
                  <X className="h-4 w-4" />
                  Cancel
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      )}

      {/* Properties List */}
      <Card>
        <CardHeader>
          <CardTitle>Properties ({properties.length})</CardTitle>
          <CardDescription>All your listed properties</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Property</TableHead>
                <TableHead>Location</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>Beds/Baths</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {properties.map((property) => (
                <TableRow key={property.id}>
                  <TableCell>
                    <div className="font-medium">{property.title}</div>
                    <div className="text-sm text-muted-foreground line-clamp-1">
                      {property.description}
                    </div>
                  </TableCell>
                  <TableCell>{property.location}</TableCell>
                  <TableCell>{property.propertyType}</TableCell>
                  <TableCell>${property.price.toLocaleString()}</TableCell>
                  <TableCell>{property.bedrooms} / {property.bathrooms}</TableCell>
                  <TableCell>
                    <Badge 
                      variant={property.status === 'active' ? 'default' : 'secondary'}
                      className="cursor-pointer"
                      onClick={() => toggleStatus(property.id)}
                    >
                      {property.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => handleEdit(property)}
                        className="gap-1"
                      >
                        <Edit className="h-3 w-3" />
                        Edit
                      </Button>
                      <Button
                        size="sm"
                        variant="destructive"
                        onClick={() => handleDelete(property.id)}
                        className="gap-1"
                      >
                        <Trash2 className="h-3 w-3" />
                        Delete
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default AssetsManagement;