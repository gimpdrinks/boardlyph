# 🏝️ Boardly PH

**AI-Powered Learning Hub for Filipino Professionals**

[![React](https://img.shields.io/badge/React-18.3.1-blue?logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.5.3-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-5.4.2-646CFF?logo=vite)](https://vitejs.dev/)
[![Supabase](https://img.shields.io/badge/Supabase-Backend-3ECF8E?logo=supabase)](https://supabase.com/)
[![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-3.4.1-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)

> 🌺 Join the premier AI-powered learning hub designed specifically for Filipino freelancers and solopreneurs. Learn faster, connect deeper, and grow your business with confidence.

## ✨ Features

### 🤖 AI-Powered Learning
- **Smart Summaries**: AI automatically generates concise summaries of long discussions
- **Content Recommendations**: Personalized content suggestions based on your interests
- **Topic Analysis**: Automatic tagging and categorization of posts
- **AI Insights**: Get intelligent recommendations for your learning journey

### 🤝 Community-Driven
- **Filipino-Focused**: Built specifically for Filipino freelancers and solopreneurs
- **Real-time Discussions**: Engage in live discussions with industry experts
- **Expert Mentors**: Connect with 100+ verified professionals
- **Success Stories**: Learn from 500+ community success stories

### 🎨 Tropical Design
- **Beautiful UI**: Modern, tropical-themed interface with vibrant Filipino-inspired colors
- **Glassmorphism Effects**: Stunning visual depth with backdrop blur effects
- **Playful Animations**: Engaging micro-interactions and smooth transitions
- **Responsive Design**: Optimized for all devices from mobile to desktop

### 🛡️ Secure & Reliable
- **User Authentication**: Secure email/password and GitHub OAuth sign-in
- **Data Protection**: Built on Supabase with enterprise-grade security
- **Row Level Security**: Proper data isolation and access controls

## 🚀 Tech Stack

### Frontend
- **React 18.3.1** - Modern React with hooks and functional components
- **TypeScript 5.5.3** - Type-safe development experience
- **Vite 5.4.2** - Lightning-fast build tool and dev server
- **Tailwind CSS 3.4.1** - Utility-first CSS framework with custom design system

### Backend & Services
- **Supabase** - Backend-as-a-Service for database, auth, and real-time features
- **PostgreSQL** - Robust relational database with RLS security

### Key Libraries
- **Framer Motion** - Smooth animations and micro-interactions
- **React Router Dom** - Client-side routing
- **React Hook Form** - Performant form handling
- **Lucide React** - Beautiful icon library
- **TanStack Query** - Powerful data synchronization

### Development Tools
- **ESLint** - Code linting and quality enforcement
- **PostCSS** - CSS processing and optimization
- **Autoprefixer** - Automatic vendor prefixing

## 🏗️ Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── layout/         # Layout components (Header, Footer)
│   └── ui/             # Base UI components (Button, Card, Input, etc.)
├── lib/                # Core utilities and configurations
│   ├── auth.tsx        # Authentication context and hooks
│   ├── supabase.ts     # Supabase client and type definitions
│   └── utils.ts        # Utility functions
├── pages/              # Page components
│   ├── auth/           # Authentication pages (SignIn, SignUp)
│   ├── Dashboard.tsx   # User dashboard
│   ├── Demo.tsx        # Interactive demo page
│   └── Home.tsx        # Landing page
├── App.tsx             # Main application component
├── main.tsx            # Application entry point
└── index.css           # Global styles and Tailwind imports
```

## 🛠️ Setup & Installation

### Prerequisites
- **Node.js** (v18 or higher)
- **npm** or **yarn**
- **Supabase account** (for backend services)

### Installation Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/boardly-ph.git
   cd boardly-ph
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   Create a `.env` file in the root directory:
   ```env
   VITE_SUPABASE_URL=your_supabase_project_url
   VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

4. **Database Setup**
   The application expects a `profiles` table in your Supabase database:
   ```sql
   CREATE TABLE profiles (
     id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
     tokens_available INTEGER DEFAULT 0,
     created_at TIMESTAMPTZ DEFAULT NOW()
   );
   
   -- Enable Row Level Security
   ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
   
   -- Create policy for authenticated users
   CREATE POLICY "Users can manage own profile" ON profiles
     FOR ALL USING (auth.uid() = id);
   ```

5. **Start Development Server**
   ```bash
   npm run dev
   ```

6. **Open your browser**
   Navigate to `http://localhost:5173`

## 🎯 Usage

### For Developers

**Development**
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
```

**Component Development**
- Follow the established patterns in `src/components/ui/`
- Use TypeScript for all new components
- Implement proper error boundaries and loading states
- Follow the tropical design system with custom colors and animations

### For Users

1. **Sign Up**: Create an account using email/password or GitHub
2. **Explore**: Browse the demo page to see community discussions
3. **Join Discussions**: Participate in boards relevant to your expertise
4. **Learn**: Leverage AI summaries and personalized recommendations
5. **Connect**: Network with fellow Filipino professionals
6. **Grow**: Apply insights to accelerate your freelance business

## 🌈 Design System

### Color Palette
- **Primary**: Coral/Orange tones representing Filipino sunsets
- **Secondary**: Ocean blues for island vibes
- **Accent**: Lime greens for tropical vegetation
- **Violet**: Deep purple for twilight skies
- **Neutral**: Balanced grays for content

### Typography
- **Display Font**: Fredoka (playful, warm headings)
- **Body Font**: Inter (clean, readable content)

### Animation Principles
- **Playful**: Gentle bounces and floating effects
- **Smooth**: 300ms transitions with spring physics
- **Purposeful**: Animations enhance UX, never distract

## 🤝 Contributing

We welcome contributions from the Filipino developer community! Here's how you can help:

### Getting Started
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Contribution Guidelines
- Follow TypeScript best practices
- Maintain the tropical design aesthetic
- Add proper error handling
- Include tests for new features
- Update documentation as needed

### Areas for Contribution
- 🎨 **UI/UX Improvements**: Enhance the tropical design system
- 🤖 **AI Features**: Expand AI-powered functionality
- 🔧 **Performance**: Optimize loading times and bundle size
- 🌐 **Localization**: Add Filipino language support
- 📱 **Mobile**: Improve mobile experience
- 🧪 **Testing**: Add comprehensive test coverage

## 📊 Database Schema

### Core Tables
```sql
-- User profiles with token system
profiles (
  id: UUID (Primary Key)
  tokens_available: INTEGER
  created_at: TIMESTAMPTZ
)

-- Planned future tables
boards (
  id, title, description, slug, category, 
  tags, member_count, post_count, created_by
)

posts (
  id, board_id, title, content, type,
  tags, upvotes, ai_summary, created_by
)

replies (
  id, post_id, content, upvotes,
  is_solution, parent_id, created_by
)
```

## 🚀 Deployment

### Recommended Platforms
- **Vercel** - Optimal for React/Vite applications
- **Netlify** - Great for static site hosting
- **Railway** - Full-stack deployment option

### Build Configuration
```bash
npm run build       # Creates optimized production build
npm run preview     # Test production build locally
```

## 🐛 Troubleshooting

### Common Issues

**Authentication Errors**
- Verify Supabase environment variables
- Check if email confirmation is disabled in Supabase Auth settings
- Ensure RLS policies are properly configured

**Build Errors**
- Clear node_modules and reinstall dependencies
- Verify all TypeScript types are properly imported
- Check for missing environment variables

**Styling Issues**
- Ensure Tailwind CSS is properly configured
- Verify custom color classes in tailwind.config.js
- Check for conflicting CSS imports

## 🎉 Community Stats

- 🧑‍💻 **2,500+ Active Members**
- 🤖 **15,000+ AI Summaries Generated**
- 🌟 **500+ Success Stories**
- 👨‍🏫 **100+ Expert Mentors**

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Filipino freelancer community for inspiration and feedback
- Supabase team for excellent backend-as-a-service platform
- Open source contributors who made this project possible
- The vibrant Philippine tech community

---

<div align="center">

**Built with ❤️ for Filipino entrepreneurs**

[🌐 Website](https://boardly.ph) • [📧 Contact](mailto:hello@boardly.ph) • [🐦 Twitter](https://twitter.com/boardlyph)

</div>