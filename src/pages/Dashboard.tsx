import React from 'react';
import { motion } from 'framer-motion';
import { 
  TrendingUp, 
  MessageSquare, 
  Users, 
  Brain,
  Calendar,
  Award,
  BookOpen,
  ArrowRight,
  Plus
} from 'lucide-react';
import { useAuth } from '../lib/auth';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';

export function Dashboard() {
  const { user } = useAuth();

  const stats = [
    {
      label: 'Posts Created',
      value: '12',
      change: '+3 this week',
      color: 'primary',
      icon: MessageSquare,
    },
    {
      label: 'Reputation Score',
      value: '847',
      change: '+52 this month',
      color: 'success',
      icon: Award,
    },
    {
      label: 'Community Rank',
      value: '#127',
      change: '+15 positions',
      color: 'secondary',
      icon: TrendingUp,
    },
    {
      label: 'Learning Streak',
      value: '7 days',
      change: 'Keep it up!',
      color: 'accent',
      icon: BookOpen,
    },
  ];

  const recentActivity = [
    {
      type: 'post',
      title: 'How to handle difficult clients as a freelancer',
      board: 'Freelancing Tips',
      time: '2 hours ago',
      stats: { upvotes: 5, replies: 3 },
    },
    {
      type: 'reply',
      title: 'Replied to "Best tools for remote collaboration"',
      board: 'Tools & Resources',
      time: '5 hours ago',
      stats: { upvotes: 12, replies: 0 },
    },
    {
      type: 'upvote',
      title: 'Upvoted "Building a personal brand in the Philippines"',
      board: 'Marketing & Branding',
      time: '1 day ago',
      stats: { upvotes: 0, replies: 0 },
    },
  ];

  const recommendedBoards = [
    {
      name: 'Freelancing Success',
      description: 'Tips and strategies for successful freelancing',
      members: '1,234',
      posts: '456',
      trending: true,
    },
    {
      name: 'AI & Automation',
      description: 'Leveraging AI tools for business growth',
      members: '892',
      posts: '234',
      trending: true,
    },
    {
      name: 'Philippine Business',
      description: 'Local business insights and opportunities',
      members: '2,156',
      posts: '789',
      trending: false,
    },
  ];

  const aiInsights = [
    {
      title: 'Content Recommendation',
      description: 'Based on your interests, check out discussions about project management tools.',
      action: 'View Recommendations',
    },
    {
      title: 'Trending Topics',
      description: 'AI tools and remote work are trending in your favorite boards this week.',
      action: 'Explore Trends',
    },
    {
      title: 'Learning Path',
      description: 'Complete your freelancing fundamentals pathway - 2 topics remaining.',
      action: 'Continue Learning',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 to-primary-50/20 py-8 relative overflow-hidden">
      {/* Subtle tropical background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-gradient-to-r from-coral-100/30 to-violet-100/30 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-gradient-to-r from-lime-100/30 to-primary-100/30 rounded-full blur-3xl" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Welcome Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-display font-bold text-neutral-900">
                Welcome back, {user?.user_metadata?.full_name || user?.email}! 👋
              </h1>
              <p className="text-neutral-600 mt-1">
                Here's what's happening in your learning journey today.
              </p>
            </div>
            <div className="hidden md:flex space-x-3">
              <Button variant="outline" icon={<Calendar className="h-4 w-4" />}>
                Schedule
              </Button>
              <Button variant="coral" icon={<Plus className="h-4 w-4" />} playful>
                New Post
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
        >
          {stats.map((stat, index) => (
            <Card key={index} hover variant="gradient" glow>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-neutral-600 mb-1">{stat.label}</p>
                  <p className="text-2xl font-bold text-neutral-900">{stat.value}</p>
                  <p className={`text-sm text-${stat.color}-600`}>{stat.change}</p>
                </div>
                <div className={`p-3 bg-gradient-to-br from-${stat.color}-100 to-${stat.color}-200 rounded-2xl shadow-lg`}>
                  <stat.icon className={`h-6 w-6 text-${stat.color}-600`} />
                </div>
              </div>
            </Card>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* AI Insights */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Card variant="gradient">
                <div className="flex items-center space-x-2 mb-6">
                  <Brain className="h-5 w-5 text-primary-600" />
                  <h2 className="text-xl font-semibold text-neutral-900">
                    AI-Powered Insights
                  </h2>
                  <Badge variant="violet" size="sm" animated glow>New</Badge>
                </div>
                <div className="space-y-4">
                  {aiInsights.map((insight, index) => (
                    <div 
                      key={index}
                      className="p-4 bg-gradient-to-r from-violet-50 via-coral-50/50 to-lime-50 rounded-2xl border border-violet-200 shadow-sm hover:shadow-lg transition-all duration-300"
                    >
                      <h3 className="font-medium text-neutral-900 mb-2">
                        {insight.title}
                      </h3>
                      <p className="text-sm text-neutral-600 mb-3">
                        {insight.description}
                      </p>
                      <Button variant="ghost" size="sm" className="text-primary-600 hover:text-primary-700">
                        {insight.action} <ArrowRight className="h-3 w-3 ml-1 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  ))}
                </div>
              </Card>
            </motion.div>

            {/* Recent Activity */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <Card>
                <h2 className="text-xl font-semibold text-neutral-900 mb-6">
                  Recent Activity
                </h2>
                <div className="space-y-4">
                  {recentActivity.map((activity, index) => (
                    <div key={index} className="flex items-start space-x-4 p-4 hover:bg-neutral-50 rounded-lg transition-colors duration-200">
                      <div className={`p-2 rounded-lg ${
                        activity.type === 'post' ? 'bg-primary-100' :
                        activity.type === 'reply' ? 'bg-success-100' :
                        'bg-accent-100'
                      }`}>
                        <MessageSquare className={`h-4 w-4 ${
                          activity.type === 'post' ? 'text-primary-600' :
                          activity.type === 'reply' ? 'text-success-600' :
                          'text-accent-600'
                        }`} />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-medium text-neutral-900 mb-1">
                          {activity.title}
                        </h3>
                        <div className="flex items-center space-x-4 text-sm text-neutral-600">
                          <span>{activity.board}</span>
                          <span>•</span>
                          <span>{activity.time}</span>
                          {activity.stats.upvotes > 0 && (
                            <>
                              <span>•</span>
                              <span>{activity.stats.upvotes} upvotes</span>
                            </>
                          )}
                          {activity.stats.replies > 0 && (
                            <>
                              <span>•</span>
                              <span>{activity.stats.replies} replies</span>
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 text-center">
                  <Button variant="ghost">View All Activity</Button>
                </div>
              </Card>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Recommended Boards */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Card>
                <h3 className="text-lg font-semibold text-neutral-900 mb-4">
                  Recommended Boards
                </h3>
                <div className="space-y-4">
                  {recommendedBoards.map((board, index) => (
                    <div key={index} className="p-3 hover:bg-neutral-50 rounded-lg transition-colors duration-200">
                      <div className="flex items-start justify-between mb-2">
                        <h4 className="font-medium text-neutral-900">{board.name}</h4>
                        {board.trending && (
                          <Badge variant="coral" size="sm" animated glow>🔥 Trending</Badge>
                        )}
                      </div>
                      <p className="text-sm text-neutral-600 mb-3">
                        {board.description}
                      </p>
                      <div className="flex items-center justify-between text-xs text-neutral-500">
                        <div className="flex space-x-4">
                          <span>{board.members} members</span>
                          <span>{board.posts} posts</span>
                        </div>
                        <Button variant="lime" size="sm" playful>Join</Button>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </motion.div>

            {/* Quick Actions */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <Card>
                <h3 className="text-lg font-semibold text-neutral-900 mb-4">
                  Quick Actions
                </h3>
                <div className="space-y-3">
                  <Button variant="outline" size="sm" className="w-full justify-start">
                    <Plus className="h-4 w-4 mr-2" />
                    Create New Post
                  </Button>
                  <Button variant="outline" size="sm" className="w-full justify-start">
                    <Users className="h-4 w-4 mr-2" />
                    Find Communities
                  </Button>
                  <Button variant="outline" size="sm" className="w-full justify-start">
                    <BookOpen className="h-4 w-4 mr-2" />
                    Browse Learning Paths
                  </Button>
                  <Button variant="outline" size="sm" className="w-full justify-start">
                    <MessageSquare className="h-4 w-4 mr-2" />
                    View Discussions
                  </Button>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}