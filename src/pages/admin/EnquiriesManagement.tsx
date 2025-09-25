import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Trash2, Archive, Mail, Phone, Calendar } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface Enquiry {
  id: string;
  name: string;
  email: string;
  phone: string;
  message: string;
  date: string;
  status: 'new' | 'read' | 'archived';
  propertyInterest?: string;
}

const EnquiriesManagement = () => {
  const { toast } = useToast();
  
  // Mock enquiries data
  const [enquiries, setEnquiries] = useState<Enquiry[]>([
    {
      id: '1',
      name: 'John Doe',
      email: 'john.doe@email.com',
      phone: '+1 (555) 123-4567',
      message: 'I am interested in the Modern Luxury Villa. Could you please provide more details about the property and schedule a viewing?',
      date: '2024-01-15T10:30:00Z',
      status: 'new',
      propertyInterest: 'Modern Luxury Villa'
    },
    {
      id: '2',
      name: 'Sarah Smith',
      email: 'sarah.smith@email.com',
      phone: '+1 (555) 987-6543',
      message: 'Hello, I would like to know more about financing options for the Downtown Apartment. What are the available mortgage rates?',
      date: '2024-01-14T15:45:00Z',
      status: 'read',
      propertyInterest: 'Downtown Apartment'
    },
    {
      id: '3',
      name: 'Michael Johnson',
      email: 'michael.j@email.com',
      phone: '+1 (555) 456-7890',
      message: 'I am looking for a family home in a quiet neighborhood. Do you have any properties that match this criteria?',
      date: '2024-01-13T09:15:00Z',
      status: 'read'
    },
    {
      id: '4',
      name: 'Emily Davis',
      email: 'emily.davis@email.com',
      phone: '+1 (555) 234-5678',
      message: 'Can you send me the floor plans for the Suburban House? Also, is the garden suitable for children to play?',
      date: '2024-01-12T14:20:00Z',
      status: 'archived',
      propertyInterest: 'Suburban House'
    },
    {
      id: '5',
      name: 'Robert Wilson',
      email: 'robert.wilson@email.com',
      phone: '+1 (555) 345-6789',
      message: 'I would like to schedule a property tour for this weekend. What times are available?',
      date: '2024-01-11T11:00:00Z',
      status: 'new'
    }
  ]);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'new':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300';
      case 'read':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300';
      case 'archived':
        return 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300';
    }
  };

  const markAsRead = (enquiryId: string) => {
    setEnquiries(prev => prev.map(enquiry => 
      enquiry.id === enquiryId 
        ? { ...enquiry, status: 'read' as const }
        : enquiry
    ));
    toast({ title: 'Enquiry marked as read' });
  };

  const archiveEnquiry = (enquiryId: string) => {
    setEnquiries(prev => prev.map(enquiry => 
      enquiry.id === enquiryId 
        ? { ...enquiry, status: 'archived' as const }
        : enquiry
    ));
    toast({ title: 'Enquiry archived' });
  };

  const deleteEnquiry = (enquiryId: string) => {
    setEnquiries(prev => prev.filter(enquiry => enquiry.id !== enquiryId));
    toast({ title: 'Enquiry deleted' });
  };

  const newEnquiriesCount = enquiries.filter(e => e.status === 'new').length;
  const totalEnquiries = enquiries.length;

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Enquiries Management</h1>
        <p className="text-muted-foreground">Manage customer inquiries and messages</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Enquiries</CardTitle>
            <Mail className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalEnquiries}</div>
            <p className="text-xs text-muted-foreground">All time enquiries</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">New Enquiries</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">{newEnquiriesCount}</div>
            <p className="text-xs text-muted-foreground">Require attention</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Response Rate</CardTitle>
            <Phone className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">92%</div>
            <p className="text-xs text-muted-foreground">Average response time: 2hrs</p>
          </CardContent>
        </Card>
      </div>

      {/* Enquiries Table */}
      <Card>
        <CardHeader>
          <CardTitle>All Enquiries</CardTitle>
          <CardDescription>Customer messages and property inquiries</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Contact Info</TableHead>
                <TableHead>Message</TableHead>
                <TableHead>Property Interest</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {enquiries.map((enquiry) => (
                <TableRow key={enquiry.id}>
                  <TableCell>
                    <div className="space-y-1">
                      <div className="font-medium">{enquiry.name}</div>
                      <div className="text-sm text-muted-foreground flex items-center gap-1">
                        <Mail className="h-3 w-3" />
                        {enquiry.email}
                      </div>
                      <div className="text-sm text-muted-foreground flex items-center gap-1">
                        <Phone className="h-3 w-3" />
                        {enquiry.phone}
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="max-w-md">
                      <p className="text-sm line-clamp-3">{enquiry.message}</p>
                    </div>
                  </TableCell>
                  <TableCell>
                    {enquiry.propertyInterest ? (
                      <Badge variant="outline" className="text-xs">
                        {enquiry.propertyInterest}
                      </Badge>
                    ) : (
                      <span className="text-muted-foreground text-sm">General inquiry</span>
                    )}
                  </TableCell>
                  <TableCell>
                    <div className="text-sm">{formatDate(enquiry.date)}</div>
                  </TableCell>
                  <TableCell>
                    <Badge className={getStatusColor(enquiry.status)}>
                      {enquiry.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      {enquiry.status === 'new' && (
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => markAsRead(enquiry.id)}
                          className="gap-1"
                        >
                          <Mail className="h-3 w-3" />
                          Mark Read
                        </Button>
                      )}
                      {enquiry.status !== 'archived' && (
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => archiveEnquiry(enquiry.id)}
                          className="gap-1"
                        >
                          <Archive className="h-3 w-3" />
                          Archive
                        </Button>
                      )}
                      <Button
                        size="sm"
                        variant="destructive"
                        onClick={() => deleteEnquiry(enquiry.id)}
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

export default EnquiriesManagement;