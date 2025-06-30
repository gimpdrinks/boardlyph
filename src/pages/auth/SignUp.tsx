import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Mail, Lock, User, Eye, EyeOff, Github, ArrowLeft } from 'lucide-react';
import { useAuth } from '../../lib/auth';
import { Button } from '../../components/ui/Button';
import { Input } from '../../components/ui/Input';
import { Card } from '../../components/ui/Card';

export function SignUp() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [acceptTerms, setAcceptTerms] = useState(false);
  
  const { signUp, signInWithGitHub } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      setLoading(false);
      return;
    }

    if (password.length < 6) {
      setError('Password must be at least 6 characters');
      setLoading(false);
      return;
    }

    if (!acceptTerms) {
      setError('Please accept the terms and conditions');
      setLoading(false);
      return;
    }

    try {
      const { error } = await signUp(email, password, fullName);
      if (error) {
        setError(error.message);
      } else {
        navigate('/dashboard');
      }
    } catch (err) {
      setError('An unexpected error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleGitHubSignUp = async () => {
    setLoading(true);
    setError('');

    try {
      const { error } = await signInWithGitHub();
      if (error) {
        setError(error.message);
      }
    } catch (err) {
      setError('An unexpected error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-lime-50/30 to-secondary-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Tropical background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 right-1/3 w-72 h-72 bg-gradient-to-r from-coral-200/25 to-primary-200/25 rounded-full blur-3xl animate-bounce-gentle" />
        <div className="absolute bottom-1/3 left-1/3 w-96 h-96 bg-gradient-to-r from-violet-200/20 to-lime-200/20 rounded-full blur-3xl animate-float" />
      </div>
      
      <div className="max-w-md w-full space-y-8">
        {/* Back to Home */}
        <Link
          to="/"
          className="inline-flex items-center space-x-2 text-neutral-600 hover:text-neutral-900 transition-colors duration-200"
        >
          <ArrowLeft className="h-4 w-4" />
          <span className="text-sm">Back to Home</span>
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Card variant="glass" className="relative backdrop-blur-md">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-display font-bold text-neutral-900 mb-2">
                Join Boardly PH
              </h2>
              <p className="text-neutral-600">
                Start your journey with fellow Filipino professionals
              </p>
            </div>

            {error && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                className="mb-6 p-4 bg-error-50 border border-error-200 rounded-lg"
              >
                <p className="text-sm text-error-700">{error}</p>
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <Input
                label="Full Name"
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                icon={<User className="h-4 w-4" />}
                placeholder="Enter your full name"
                required
              />

              <Input
                label="Email Address"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                icon={<Mail className="h-4 w-4" />}
                placeholder="Enter your email"
                required
              />

              <Input
                label="Password"
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                icon={<Lock className="h-4 w-4" />}
                placeholder="Create a password (min. 6 characters)"
                helper="Must be at least 6 characters long"
                required
              />

              <Input
                label="Confirm Password"
                type={showPassword ? 'text' : 'password'}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                icon={<Lock className="h-4 w-4" />}
                placeholder="Confirm your password"
                required
              />

              <div className="flex items-center">
                <input
                  type="checkbox"
                  checked={showPassword}
                  onChange={(e) => setShowPassword(e.target.checked)}
                  className="rounded border-neutral-300 text-primary-600 focus:ring-primary-500"
                />
                <span className="ml-2 text-sm text-neutral-600">Show passwords</span>
              </div>

              <div className="flex items-start">
                <input
                  type="checkbox"
                  checked={acceptTerms}
                  onChange={(e) => setAcceptTerms(e.target.checked)}
                  className="mt-1 rounded border-neutral-300 text-primary-600 focus:ring-primary-500"
                  required
                />
                <span className="ml-2 text-sm text-neutral-600">
                  I agree to the{' '}
                  <Link to="/terms" className="text-primary-600 hover:text-primary-700">
                    Terms of Service
                  </Link>{' '}
                  and{' '}
                  <Link to="/privacy" className="text-primary-600 hover:text-primary-700">
                    Privacy Policy
                  </Link>
                </span>
              </div>

              <Button
                type="submit"
                size="lg"
                variant="lime"
                loading={loading}
                className="w-full shadow-xl shadow-lime-500/25"
                playful
              >
                Create Account
              </Button>

              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-neutral-300" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-neutral-500">Or continue with</span>
                </div>
              </div>

              <Button
                type="button"
                variant="coral"
                size="lg"
                onClick={handleGitHubSignUp}
                loading={loading}
                icon={<Github className="h-4 w-4" />}
                className="w-full shadow-lg"
                playful
              >
                GitHub
              </Button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-sm text-neutral-600">
                Already have an account?{' '}
                <Link
                  to="/auth/signin"
                  className="font-medium text-primary-600 hover:text-primary-700"
                >
                  Sign in
                </Link>
              </p>
            </div>
          </Card>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center text-sm text-neutral-500 space-y-2"
        >
          <p>Join 2,500+ Filipino professionals</p>
          <p>🔒 Your data is secure and protected</p>
        </motion.div>
      </div>
    </div>
  );
}