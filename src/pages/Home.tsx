import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Users, 
  Zap, 
  Shield, 
  ArrowRight, 
  CheckCircle, 
  Star,
  TrendingUp,
  MessageSquare,
  Lightbulb,
  Sparkles,
  Rocket,
  Heart,
  Code,
  Globe
} from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';

export function Home() {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Learning',
      description: 'Get personalized content recommendations and intelligent summaries powered by advanced AI.',
      color: 'violet',
      bgClass: 'bg-gradient-to-br from-violet-100 to-violet-200',
    },
    {
      icon: Users,
      title: 'Filipino Community',
      description: 'Connect with fellow Filipino freelancers and solopreneurs in a supportive environment.',
      color: 'coral',
      bgClass: 'bg-gradient-to-br from-coral-100 to-coral-200',
    },
    {
      icon: Zap,
      title: 'Real-time Collaboration',
      description: 'Engage in live discussions and get instant feedback from industry experts.',
      color: 'lime',
      bgClass: 'bg-gradient-to-br from-lime-100 to-lime-200',
    },
    {
      icon: Shield,
      title: 'Trusted Platform',
      description: 'Safe and secure environment with moderated content and verified professionals.',
      color: 'success',
      bgClass: 'bg-gradient-to-br from-success-100 to-success-200',
    },
  ];

  const testimonials = [
    {
      name: 'Maria Santos',
      role: 'Freelance Designer',
      location: 'Manila',
      content: 'Boardly PH transformed how I learn and connect with other freelancers. The AI summaries save me hours every week!',
      rating: 5,
      avatar: '👩‍🎨',
    },
    {
      name: 'John Cruz',
      role: 'Digital Marketer',
      location: 'Cebu',
      content: 'The community here is incredibly supportive. I\'ve landed three new clients through connections made on Boardly PH.',
      rating: 5,
      avatar: '👨‍💼',
    },
    {
      name: 'Elena Rodriguez',
      role: 'Web Developer',
      location: 'Davao',
      content: 'Finally, a platform that understands the unique challenges of Filipino freelancers. Highly recommended!',
      rating: 5,
      avatar: '👩‍💻',
    },
  ];

  const stats = [
    { label: 'Active Members', value: '2,500+', icon: Users, color: 'coral' },
    { label: 'AI Summaries Generated', value: '15,000+', icon: Brain, color: 'violet' },
    { label: 'Success Stories', value: '500+', icon: Star, color: 'lime' },
    { label: 'Expert Mentors', value: '100+', icon: Lightbulb, color: 'primary' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-50 via-white to-secondary-50 pt-20 pb-32 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
            }}
            transition={{ 
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-primary-200/30 to-secondary-200/30 rounded-full blur-3xl"
          />
          <motion.div 
            animate={{ 
              scale: [1.2, 1, 1.2],
              rotate: [360, 180, 0],
            }}
            transition={{ 
              duration: 25,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-coral-200/30 to-violet-200/30 rounded-full blur-3xl"
          />
          <motion.div 
            animate={{ 
              y: [-20, 20, -20],
              x: [-10, 10, -10],
            }}
            transition={{ 
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-1/2 left-1/2 w-96 h-96 bg-gradient-to-r from-lime-200/20 to-accent-200/20 rounded-full blur-3xl"
          />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <Badge variant="violet" size="lg" className="mb-6" animated glow>
                <Sparkles className="h-4 w-4 mr-2" />
                Now with AI-Powered Features
              </Badge>
              <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-neutral-900 leading-tight">
                Empower Your{' '}
                <motion.span 
                  className="bg-gradient-to-r from-primary-600 via-coral-500 to-violet-600 bg-clip-text text-transparent"
                  animate={{
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  style={{
                    backgroundSize: '200% 200%',
                  }}
                >
                  Freelance Journey
                </motion.span>
              </h1>
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-neutral-600 max-w-3xl mx-auto leading-relaxed mb-12"
            >
              Join the premier AI-powered learning hub designed specifically for Filipino freelancers and solopreneurs. 
              <motion.span 
                className="font-medium text-primary-600"
                animate={{ color: ['#f16b1f', '#ef5f3d', '#8b5cf6', '#f16b1f'] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                {' '}Learn faster, connect deeper, and grow your business with confidence.
              </motion.span>
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
            >
              <Link to="/auth/signup">
                <Button 
                  size="xl" 
                  variant="coral"
                  icon={<Rocket className="h-5 w-5" />} 
                  iconPosition="right"
                  playful
                  className="shadow-2xl shadow-coral-500/25"
                >
                  Start Learning Today
                </Button>
              </Link>
              <Link to="/demo">
                <Button 
                  variant="outline" 
                  size="xl"
                  icon={<MessageSquare className="h-5 w-5" />}
                  playful
                >
                  View Demo
                </Button>
              </Link>
            </motion.div>

            {/* Enhanced Stats */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="text-center group"
                >
                  <motion.div 
                    className={`inline-flex items-center justify-center w-16 h-16 rounded-3xl bg-gradient-to-br from-${stat.color}-100 to-${stat.color}-200 mb-4 group-hover:shadow-lg group-hover:shadow-${stat.color}-500/25 transition-all duration-300`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <stat.icon className={`h-7 w-7 text-${stat.color}-600`} />
                  </motion.div>
                  <div className="text-2xl md:text-3xl font-bold font-display text-neutral-900 mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-neutral-600">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-30">
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="absolute top-20 right-20 w-32 h-32 border-4 border-dashed border-primary-300 rounded-full"
          />
          <motion.div 
            animate={{ rotate: -360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-20 left-20 w-24 h-24 border-4 border-dashed border-coral-300 rounded-full"
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              Built for Filipino{' '}
              <span className="bg-gradient-to-r from-coral-500 to-violet-600 bg-clip-text text-transparent">
                Professionals
              </span>
            </h2>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
              Experience the perfect blend of AI technology and community-driven learning designed for your success.
            </p>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card hover variant="playful" className="text-center h-full group">
                  <motion.div 
                    className={`p-4 rounded-3xl inline-flex mb-6 ${feature.bgClass} group-hover:shadow-lg transition-all duration-300`}
                    whileHover={{ rotate: [0, -5, 5, 0], scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <feature.icon className={`h-8 w-8 text-${feature.color}-600`} />
                  </motion.div>
                  <h3 className="font-display text-lg font-semibold text-neutral-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-neutral-600 leading-relaxed">
                    {feature.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 bg-gradient-to-br from-neutral-50 to-primary-50/30 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              How Boardly PH{' '}
              <span className="bg-gradient-to-r from-lime-500 to-primary-600 bg-clip-text text-transparent">
                Works
              </span>
            </h2>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
              Get started in minutes and transform your learning experience with our simple, powerful platform.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {[
              {
                step: '01',
                icon: Users,
                title: 'Join the Community',
                description: 'Sign up and connect with thousands of Filipino freelancers and entrepreneurs.',
                emoji: '🤝',
                color: 'coral'
              },
              {
                step: '02',
                icon: Lightbulb,
                title: 'Engage & Learn',
                description: 'Participate in discussions, ask questions, and share your expertise with others.',
                emoji: '💡',
                color: 'violet'
              },
              {
                step: '03',
                icon: TrendingUp,
                title: 'Grow Your Business',
                description: 'Apply insights, build connections, and accelerate your professional growth.',
                emoji: '🚀',
                color: 'lime'
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center relative"
              >
                <motion.div 
                  className="relative mb-8"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <motion.div 
                    className={`w-20 h-20 bg-gradient-to-br from-${item.color}-500 to-${item.color}-600 rounded-3xl flex items-center justify-center mx-auto mb-4 shadow-2xl shadow-${item.color}-500/25`}
                    animate={{ 
                      boxShadow: [
                        `0 25px 50px -12px rgba(var(--${item.color}-500), 0.25)`,
                        `0 25px 50px -12px rgba(var(--${item.color}-500), 0.4)`,
                        `0 25px 50px -12px rgba(var(--${item.color}-500), 0.25)`
                      ]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <span className="text-2xl">{item.emoji}</span>
                  </motion.div>
                  <Badge 
                    variant={item.color as any}
                    className="absolute -top-2 -right-2"
                    glow
                  >
                    {item.step}
                  </Badge>
                </motion.div>
                <h3 className="font-display text-xl font-semibold text-neutral-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-neutral-600 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              Success Stories from Our{' '}
              <span className="bg-gradient-to-r from-primary-500 to-secondary-600 bg-clip-text text-transparent">
                Community
              </span>
            </h2>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
              See how Filipino professionals are transforming their careers with Boardly PH.
            </p>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card variant="gradient" className="h-full relative overflow-hidden">
                  <motion.div 
                    className="absolute top-4 right-4 text-4xl opacity-20"
                    animate={{ rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 4, repeat: Infinity }}
                  >
                    {testimonial.avatar}
                  </motion.div>
                  
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: i * 0.1, type: "spring", stiffness: 300 }}
                      >
                        <Star className="h-4 w-4 text-accent-500 fill-current" />
                      </motion.div>
                    ))}
                  </div>
                  <blockquote className="text-neutral-700 leading-relaxed mb-6 relative z-10">
                    "{testimonial.content}"
                  </blockquote>
                  <div className="relative z-10">
                    <div className="font-display font-semibold text-neutral-900">{testimonial.name}</div>
                    <div className="text-sm text-primary-600 font-medium">{testimonial.role}</div>
                    <div className="text-sm text-neutral-500">{testimonial.location}</div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-primary-600 via-coral-500 to-violet-600 text-white relative overflow-hidden">
        {/* Animated background elements */}
        <motion.div 
          animate={{ 
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl"
        />
        <motion.div 
          animate={{ 
            scale: [1.5, 1, 1.5],
            opacity: [0.2, 0.5, 0.2]
          }}
          transition={{ duration: 6, repeat: Infinity }}
          className="absolute bottom-10 right-10 w-48 h-48 bg-white/10 rounded-full blur-xl"
        />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div
              animate={{ 
                rotate: [0, 5, -5, 0],
                scale: [1, 1.02, 1]
              }}
              transition={{ duration: 4, repeat: Infinity }}
              className="inline-block text-6xl mb-6"
            >
              🚀
            </motion.div>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
              Ready to Accelerate Your Growth?
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Join thousands of Filipino professionals who are already building their future with Boardly PH.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link to="/auth/signup">
                <Button 
                  variant="secondary" 
                  size="xl" 
                  className="bg-white text-primary-600 hover:bg-primary-50 shadow-2xl"
                  icon={<Heart className="h-5 w-5" />}
                  playful
                >
                  Join the Community
                </Button>
              </Link>
              <Link to="/demo">
                <Button 
                  variant="outline" 
                  size="xl"
                  className="border-2 border-white text-white hover:bg-white hover:text-primary-600"
                  icon={<Globe className="h-5 w-5" />}
                  playful
                >
                  Explore Demo
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}