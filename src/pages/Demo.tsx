import React from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  MessageSquare, 
  Users, 
  TrendingUp, 
  Clock,
  ThumbsUp,
  Pin,
  CheckCircle,
  ArrowRight
} from 'lucide-react';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { formatDistanceToNow } from 'date-fns';

export function Demo() {
  const samplePosts = [
    {
      id: '1',
      title: 'How to Price Your Freelance Services Competitively in the Philippine Market',
      content: 'I\'ve been struggling with pricing my graphic design services. Local clients expect very low rates, but international clients pay much more. How do you balance this? Looking for advice from fellow Filipino freelancers...',
      type: 'question',
      author: {
        name: 'Maria Santos',
        avatar: 'MS',
        role: 'Graphic Designer',
      },
      stats: {
        upvotes: 24,
        replies: 12,
        views: 156,
      },
      tags: ['pricing', 'freelancing', 'business'],
      isPinned: false,
      isSolved: false,
      createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000), // 2 hours ago
      aiSummary: null,
    },
    {
      id: '2',
      title: 'Complete Guide: Building Your Personal Brand as a Filipino Solopreneur',
      content: 'After 5 years of freelancing and building my agency, here\'s everything I learned about personal branding in the Philippine market. This comprehensive guide covers social media strategy, networking, content creation, and more...',
      type: 'tutorial',
      author: {
        name: 'John Cruz',
        avatar: 'JC',
        role: 'Marketing Consultant',
      },
      stats: {
        upvotes: 87,
        replies: 23,
        views: 432,
      },
      tags: ['branding', 'marketing', 'solopreneur', 'tutorial'],
      isPinned: true,
      isSolved: false,
      createdAt: new Date(Date.now() - 6 * 60 * 60 * 1000), // 6 hours ago
      aiSummary: 'This tutorial covers essential personal branding strategies for Filipino solopreneurs, including social media optimization, networking techniques, content strategy, and building authentic professional relationships in the local market.',
    },
    {
      id: '3',
      title: 'Best Project Management Tools for Remote Teams',
      content: 'Our team has grown to 8 remote members across different time zones in the Philippines. We\'re looking for recommendations on project management tools that work well for Filipino teams...',
      type: 'discussion',
      author: {
        name: 'Elena Rodriguez',
        avatar: 'ER',
        role: 'Agency Owner',
      },
      stats: {
        upvotes: 15,
        replies: 18,
        views: 98,
      },
      tags: ['tools', 'remote-work', 'management'],
      isPinned: false,
      isSolved: true,
      createdAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000), // 1 day ago
      aiSummary: 'Discussion covers popular project management tools including Asana, Trello, and Monday.com, with specific focus on features that benefit Filipino remote teams such as timezone management and collaboration features.',
    },
  ];

  const aiFeatures = [
    {
      icon: Brain,
      title: 'Smart Summaries',
      description: 'AI automatically generates concise summaries of long discussions',
      demo: 'See how complex threads are distilled into key insights',
    },
    {
      icon: TrendingUp,
      title: 'Content Recommendations',
      description: 'Personalized content suggestions based on your interests',
      demo: 'Discover relevant discussions and resources',
    },
    {
      icon: MessageSquare,
      title: 'Topic Analysis',
      description: 'Automatic tagging and categorization of posts',
      demo: 'Watch AI identify and organize discussion topics',
    },
  ];

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'question': return '❓';
      case 'tutorial': return '📚';
      case 'discussion': return '💬';
      case 'resource': return '📎';
      default: return '💭';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'question': return 'warning';
      case 'tutorial': return 'success';
      case 'discussion': return 'primary';
      case 'resource': return 'secondary';
      default: return 'neutral';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 to-coral-50/30 pt-8 relative overflow-hidden">
      {/* Tropical background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-primary-100/20 to-lime-100/20 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-violet-100/25 to-coral-100/25 rounded-full blur-3xl animate-float" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge variant="violet" size="lg" className="mb-4" animated glow>
              🚀 Interactive Demo
            </Badge>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-neutral-900 mb-4">
              Experience Boardly PH in Action
            </h1>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
              Explore real discussions from our Filipino freelancer community and see how AI enhances your learning experience.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="mb-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-2xl font-display font-bold text-neutral-900">Featured Discussions</h2>
                  <Badge variant="lime" animated glow>Live Demo</Badge>
                </div>
                <p className="text-neutral-600">
                  These are real examples of the engaging discussions happening in our community every day.
                </p>
              </Card>
            </motion.div>

            {/* Sample Posts */}
            {samplePosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              >
                <Card hover variant="gradient" className="relative">
                  {post.isPinned && (
                    <div className="absolute top-4 right-4">
                      <Pin className="h-4 w-4 text-primary-600" />
                    </div>
                  )}
                  
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center">
                        <span className="text-white font-semibold text-sm">
                          {post.author.avatar}
                        </span>
                      </div>
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center space-x-2 mb-2">
                        <span className="text-lg">{getTypeIcon(post.type)}</span>
                        <Badge variant={getTypeColor(post.type) as any} size="sm">
                          {post.type}
                        </Badge>
                        {post.isSolved && (
                          <Badge variant="success" size="sm">
                            <CheckCircle className="h-3 w-3 mr-1" />
                            Solved
                          </Badge>
                        )}
                      </div>

                      <h3 className="text-lg font-semibold text-neutral-900 mb-2 hover:text-primary-600 cursor-pointer">
                        {post.title}
                      </h3>

                      <p className="text-neutral-600 mb-4 line-clamp-3">
                        {post.content}
                      </p>

                      {post.aiSummary && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          className="bg-gradient-to-r from-violet-50 to-coral-50 rounded-2xl p-4 mb-4 border-l-4 border-violet-500 shadow-sm"
                        >
                          <div className="flex items-center space-x-2 mb-2">
                            <Brain className="h-4 w-4 text-primary-600" />
                            <span className="text-sm font-medium text-primary-700">AI Summary</span>
                          </div>
                          <p className="text-sm text-neutral-700">{post.aiSummary}</p>
                        </motion.div>
                      )}

                      <div className="flex flex-wrap items-center gap-2 mb-4">
                        {post.tags.map((tag, tagIndex) => (
                          <Badge key={tagIndex} variant="neutral" size="sm">
                            #{tag}
                          </Badge>
                        ))}
                      </div>

                      <div className="flex items-center justify-between text-sm text-neutral-500">
                        <div className="flex items-center space-x-4">
                          <span className="font-medium text-neutral-700">{post.author.name}</span>
                          <span>{post.author.role}</span>
                          <div className="flex items-center space-x-1">
                            <Clock className="h-3 w-3" />
                            <span>{formatDistanceToNow(post.createdAt)} ago</span>
                          </div>
                        </div>

                        <div className="flex items-center space-x-4">
                          <div className="flex items-center space-x-1">
                            <ThumbsUp className="h-4 w-4" />
                            <span>{post.stats.upvotes}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <MessageSquare className="h-4 w-4" />
                            <span>{post.stats.replies}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Users className="h-4 w-4" />
                            <span>{post.stats.views}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* AI Features */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Card>
                <h3 className="text-lg font-semibold text-neutral-900 mb-4">
                  AI-Powered Features
                </h3>
                <div className="space-y-4">
                  {aiFeatures.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-3">
                     <div className="p-2 bg-gradient-to-br from-violet-100 to-violet-200 rounded-2xl shadow-sm">
                       <feature.icon className="h-4 w-4 text-violet-600" />
                      </div>
                      <div>
                        <h4 className="font-medium text-neutral-900 mb-1">
                          {feature.title}
                        </h4>
                        <p className="text-sm text-neutral-600 mb-1">
                          {feature.description}
                        </p>
                        <p className="text-xs text-violet-600">
                          {feature.demo}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </motion.div>

            {/* Community Stats */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <Card>
                <h3 className="text-lg font-semibold text-neutral-900 mb-4">
                  Community Snapshot
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-neutral-600">Active Members</span>
                    <span className="font-semibold text-neutral-900">2,847</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-neutral-600">Daily Discussions</span>
                    <span className="font-semibold text-neutral-900">156</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-neutral-600">Questions Solved</span>
                    <span className="font-semibold text-neutral-900">94%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-neutral-600">AI Summaries</span>
                    <span className="font-semibold text-neutral-900">1,247</span>
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Card className="bg-gradient-to-br from-coral-500 via-primary-500 to-violet-500 text-white relative overflow-hidden">
                {/* Animated background effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 animate-pulse-slow" />
                
                <h3 className="text-lg font-semibold mb-2">
                  Ready to Join?
                </h3>
                <p className="text-primary-100 mb-4 text-sm">
                  Start your journey with fellow Filipino professionals today.
                </p>
                <Button 
                  variant="lime" 
                  size="sm" 
                  className="w-full bg-white text-coral-600 hover:bg-coral-50 shadow-xl relative z-10"
                  icon={<ArrowRight className="h-4 w-4" />}
                  iconPosition="right"
                  playful
                >
                  Get Started Free
                </Button>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}