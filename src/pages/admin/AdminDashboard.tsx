import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Building2, MessageSquare, Users, TrendingUp } from 'lucide-react';

const AdminDashboard = () => {
  const stats = [
    {
      title: 'Total Properties',
      value: '12',
      description: 'Active listings',
      icon: Building2,
      trend: '+2 this month'
    },
    {
      title: 'Enquiries',
      value: '28',
      description: 'New inquiries',
      icon: MessageSquare,
      trend: '+5 this week'
    },
    {
      title: 'Active Users',
      value: '1,234',
      description: 'Website visitors',
      icon: Users,
      trend: '+12% this month'
    },
    {
      title: 'Revenue',
      value: '$45,230',
      description: 'Total commission',
      icon: TrendingUp,
      trend: '+8% this month'
    }
  ];

  const recentActivities = [
    { action: 'New property added', details: 'Luxury Villa in Beverly Hills', time: '2 hours ago' },
    { action: 'Enquiry received', details: 'From john.doe@email.com', time: '4 hours ago' },
    { action: 'Property updated', details: 'Modern Apartment pricing changed', time: '1 day ago' },
    { action: 'New user registration', details: 'sarah.smith@email.com', time: '2 days ago' },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
        <p className="text-muted-foreground">Overview of your real estate business</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card key={index}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
              <stat.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground">{stat.description}</p>
              <p className="text-xs text-primary font-medium mt-1">{stat.trend}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Recent Activities */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Activities</CardTitle>
          <CardDescription>Latest updates from your real estate business</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentActivities.map((activity, index) => (
              <div key={index} className="flex items-center justify-between border-b border-border pb-4 last:border-0 last:pb-0">
                <div>
                  <p className="font-medium text-sm">{activity.action}</p>
                  <p className="text-sm text-muted-foreground">{activity.details}</p>
                </div>
                <span className="text-xs text-muted-foreground">{activity.time}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="cursor-pointer hover:shadow-md transition-shadow">
          <CardHeader>
            <CardTitle className="text-lg">Add New Property</CardTitle>
            <CardDescription>List a new property for sale or rent</CardDescription>
          </CardHeader>
        </Card>
        
        <Card className="cursor-pointer hover:shadow-md transition-shadow">
          <CardHeader>
            <CardTitle className="text-lg">View Enquiries</CardTitle>
            <CardDescription>Check and respond to customer inquiries</CardDescription>
          </CardHeader>
        </Card>
        
        <Card className="cursor-pointer hover:shadow-md transition-shadow">
          <CardHeader>
            <CardTitle className="text-lg">Manage Settings</CardTitle>
            <CardDescription>Configure your admin panel preferences</CardDescription>
          </CardHeader>
        </Card>
      </div>
    </div>
  );
};

export default AdminDashboard;