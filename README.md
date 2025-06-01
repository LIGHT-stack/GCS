# Ghana Chemical Society Website

![Ghana Chemical Society Logo](https://via.placeholder.com/150x50?text=GCS)

## Project Overview

The Ghana Chemical Society (GCS) website is a comprehensive platform designed to serve chemists and chemistry enthusiasts across Ghana. This website provides information about GCS events, programs, membership benefits, resources, and community initiatives.

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (Latest LTS version recommended)
- npm (comes with Node.js)

## Security Updates

Before running the project, it's recommended to address potential security vulnerabilities:

```bash
# Step 1: Install dependencies
npm install

# Step 2: Run audit fix with force flag to update development dependencies
npm audit fix --force

# Step 3: Update Vite to latest version to resolve remaining vulnerabilities
npm install vite@latest
```

These steps will ensure you're running with the most secure versions of the development dependencies.

## Getting Started

Follow these steps to run the project locally:

1. **Install Dependencies**
   ```bash
   npm install
   ```

   Key dependencies include:
   - React ^18.3.1
   - TypeScript ^5.8.3
   - Vite ^5.4.19
   - Tailwind CSS ^3.4.11
   - React Router ^6.26.2
   - React Query ^5.56.2
   - Framer Motion ^12.12.2
   - Shadcn UI (via Radix UI components)
   - Supabase ^2.49.8

2. **Start Development Server**
   ```bash
   npm run dev
   ```

3. **Access the Website**
   Open your browser and navigate to `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm test` - Run tests
- `npm run test:coverage` - Run tests with coverage report

## Detailed Features

### 1. Homepage (Index)
- **Hero Section**: Dynamic welcome area with key messaging and call-to-action buttons
- **Events Carousel**: Auto-playing showcase of upcoming events with interactive controls
- **Programs Overview**: Highlights of key GCS programs and initiatives
- **Impact Section**: Visual representation of GCS achievements and contributions
- **Animated Background**: Dynamic visual elements enhancing user experience

### 2. Authentication System
- **User Registration**: New member signup with email verification
- **Login System**: Secure authentication with password protection
- **Password Management**:
  - Forgot password functionality
  - Password reset process
  - Email verification system
- **Protected Routes**: Secure access control for member-only content

### 3. Membership Area (Protected)
- **Dashboard**: Personalized member interface
- **Benefits Overview**: Detailed list of membership advantages
- **Registration Process**:
  - New member registration
  - Membership renewal system
  - Payment integration
- **Members-Only Content**: Exclusive resources and materials

### 4. Community Section
- **International Partners**:
  - Global collaboration showcase
  - Partnership details and achievements
- **Local Partners**:
  - Ghana-based partnerships
  - Collaborative initiatives
- **Events and Programs**:
  - Comprehensive event calendar
  - Detailed program descriptions
  - Registration capabilities
- **Outreach Activities**:
  - Community engagement initiatives
  - Educational programs
  - Social impact projects

### 5. Resources Section
- **Scientific Journals**:
  - Access to chemical research publications
  - Journal submission guidelines
- **Publications**:
  - GCS official publications
  - Research papers and articles
- **News Articles**:
  - Industry updates
  - Society news and announcements
- **Chemical Science Resources**:
  - Educational materials
  - Research tools and databases

### 6. Partnership Section
- **Partnership Programs**:
  - Types of partnerships available
  - Application process
  - Partner benefits
- **Funding Opportunities**:
  - Research grants
  - Scholarships
  - Sponsorship programs
- **Application System**:
  - Online application form
  - Document submission
  - Application tracking
  - Success confirmation process

### 7. About Page
- **Society History**: Comprehensive timeline of GCS
- **Mission & Vision**: Organizational goals and future direction
- **Leadership**:
  - Current executive board
  - Department heads
  - Committee members
- **Contact Information**:
  - Office locations
  - Communication channels
  - Social media presence

## Technical Implementation

### 1. Routing System

The website implements a comprehensive routing system using React Router with the following structure:

#### Public Routes
- Home: `/`
- About: `/about`
- Partnership:
  - Main: `/partnership`
  - Apply: `/partnership/apply`
  - Success: `/partnership/apply/success`
- Community:
  - Main: `/community`
  - International Partners: `/community/international-partners`
  - Local Partners: `/community/local-partners`
  - Events & Programs: `/community/events-programs`
  - Program Details: `/community/events-programs/:programId`
  - Outreach: `/community/outreach`
- Resources:
  - Main: `/resources`
  - Journals: `/resources/journals`
  - Publications: `/resources/publications`
  - News & Articles: `/resources/news-articles`
- Events: `/events/:eventId`

#### Authentication Routes
- Login: `/auth`
- Register: `/auth/register`
- Verify Email: `/auth/verify`
- Forgot Password: `/auth/forgot-password`
- Reset Password: `/auth/reset-password`
- Auth Callback: `/auth/callback`

#### Protected Routes
These routes require authentication:
- Dashboard: `/dashboard`
- Membership: `/membership`
- Members Area: `/membership/members-area`

The routing system features:
- Protected route guards using `ProtectedRoute` component
- Proper navigation handling in components
- Consistent route naming convention
- Dynamic route parameters for events and programs
- Automatic redirection for unauthenticated users

### 2. Core Technologies
- **Vite ^5.4.19**: 
  - Fast development server with HMR
  - Optimized production builds
  - TypeScript and React support out of the box

- **React ^18.3.1**: 
  - Component-based architecture
  - Virtual DOM for efficient updates
  - Hooks for state management
  - Concurrent rendering features

- **TypeScript ^5.8.3**:
  - Static type checking
  - Enhanced IDE support
  - Better code maintainability
  - Type-safe component props

### 2. UI/UX Implementation
- **Tailwind CSS ^3.4.11**:
  - Utility-first CSS framework
  - Responsive design utilities
  - Custom design system integration
  - JIT (Just-In-Time) compilation

- **Shadcn UI**:
  - High-quality, accessible components
  - Customizable themes
  - Radix UI primitives
  - Consistent design language

- **Framer Motion ^12.12.2**:
  - Smooth page transitions
  - Interactive animations
  - Gesture support
  - Animation sequences

### 3. Routing & Navigation
- **React Router ^6.26.2**:
  - Client-side routing
  - Protected route implementation
  - Dynamic route parameters
  - Nested routing support

### 4. State Management & Data Handling
- **React Query ^5.56.2**:
  - Server state management
  - Automatic background refetching
  - Cache management
  - Optimistic updates

- **Supabase ^2.49.8**:
  - Authentication system
  - Real-time data sync
  - Database management
  - File storage

### 5. Performance Optimization
- **Code Splitting**:
  - Lazy loading of components
  - Route-based chunking
  - Dynamic imports

- **Asset Optimization**:
  - Image optimization
  - Font loading strategies
  - CSS minification

### 6. Development Tools
- **ESLint**: Code quality and consistency
- **Vitest**: Unit and integration testing
- **TypeScript ESLint**: Type-aware linting
- **PostCSS**: CSS processing and optimization

### 7. Build & Deployment
- **Development Mode**: Fast refresh and HMR
- **Production Build**: Optimized and minified output
- **Environment Management**: Development/Production configs
- **Testing Pipeline**: Automated testing setup
- **Embla Carousel**: For carousel/slider components

## Project Structure & Organization

### Directory Layout
```
src/
├── components/       # Reusable UI components
├── pages/           # Route components/pages
├── hooks/           # Custom React hooks
├── lib/             # Utility functions and libraries
├── data/            # Static data and constants
├── types/           # TypeScript type definitions
├── styles/          # Global styles and themes
├── assets/          # Static assets (images, fonts)
└── tests/           # Test files
```

### Key Components

#### 1. Core Components
- `Navbar`: Site navigation and user menu
- `Footer`: Site-wide footer with links and info
- `AnimatedBackground`: Dynamic visual effects
- `LoadingSpinner`: Loading state indicator

#### 2. Feature Components
- `EventsSection`: Events display and management
- `ProgramsSection`: Programs showcase
- `OurImpactSection`: Impact statistics and info
- `Hero`: Homepage hero section

#### 3. Authentication Components
- `ProtectedRoute`: Route guard for authenticated content
- `Login`: User authentication form at `/auth`
- `Register`: New user registration at `/auth/register`
- `PasswordReset`: Password recovery workflow
- `VerifyEmail`: Email verification handling
- `AuthCallback`: OAuth callback handling

### Code Quality & Standards

#### 1. TypeScript Implementation
- Strict type checking enabled
- Interface-first approach
- Proper type exports
- Generic components where applicable

#### 2. Component Structure
- Functional components with hooks
- Props interface definitions
- JSDoc documentation
- Consistent file naming

#### 3. State Management
- React Query for server state
- Local state with hooks
- Context for global state
- Proper error boundaries

#### 4. Testing Strategy
- Unit tests for utilities
- Component testing with Vitest
- Integration tests for features
- E2E testing capability

## Code Organization

The codebase follows a clear organization pattern:

- `src/pages/`: Page-level components
- `src/components/`: Reusable UI components
- `src/hooks/`: Custom React hooks
- `src/lib/`: Utility functions and shared code
- `src/components/ui/`: UI component library (shadcn)

Components are organized by feature domain:
- `src/components/about/`: Components related to the About page
- `src/components/community/`: Components for Community features
- `src/components/events/`: Event-related components
- `src/components/membership/`: Membership-related components
- `src/components/resources/`: Resource section components

## Best Practices Implemented

- **Componentization**: Small, focused components with clear responsibilities
- **Responsive Design**: Mobile-first approach ensuring good UX across devices
- **Performance Optimization**: Lazy loading images, code splitting
- **React Hooks**: Proper use of useState, useEffect, useContext, and custom hooks
- **Accessibility**: Semantic HTML, ARIA attributes, keyboard navigation
- **Type Safety**: TypeScript for improved code quality and developer experience
- **Animation**: Smooth transitions and micro-interactions for better UX
- **Code Documentation**: JSDoc comments for better code readability

## Getting Started

### Prerequisites

- Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

### Setup Instructions

```sh
# Step 1: Clone the repository
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory
cd ghana-chemical-society-website

# Step 3: Install dependencies
npm install

# Step 4: Start the development server
npm run dev
```

## Editing the Project

### Using Lovable

Simply visit the [Lovable Project](https://lovable.dev/projects/b239944e-566a-4966-9ebc-c78b2170cbca) and start prompting. Changes made via Lovable will be committed automatically to the repository.

### Using Your Preferred IDE

You can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

### Editing Directly in GitHub

- Navigate to the desired file(s)
- Click the "Edit" button (pencil icon)
- Make your changes and commit

### Using GitHub Codespaces

- Navigate to the main page of the repository
- Click on the "Code" button (green button)
- Select the "Codespaces" tab
- Click on "New codespace"

## Deployment

### Production Build

To create a production build:

```bash
npm run build
```

This will create an optimized production build in the `dist` directory.

### Development Server

To run the development server:

```bash
npm run dev
```

The development server will be available at `http://localhost:5173`.

### Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### Deployment Checklist

1. Ensure all tests pass:
   ```bash
   npm test
   ```

2. Check for linting errors:
   ```bash
   npm run lint
   ```

3. Create production build
4. Test the production build locally:
   ```bash
   npm run preview
   ```

5. Deploy to your hosting provider of choice (e.g., Vercel, Netlify, etc.)

## Vercel Deployment

This project is configured for deployment on Vercel. Follow these steps to deploy:

### Prerequisites

1. Create a [Vercel account](https://vercel.com/signup) if you don't have one
2. Install the Vercel CLI:
   ```bash
   npm install -g vercel
   ```
3. Log in to Vercel via CLI:
   ```bash
   vercel login
   ```

### Environment Variables

Before deploying, set up these environment variables in your Vercel project settings:

1. `VITE_SUPABASE_URL`: Your Supabase project URL
2. `VITE_SUPABASE_ANON_KEY`: Your Supabase anonymous key

These can be set in the Vercel dashboard under Project Settings > Environment Variables.

### Deployment Steps

1. **Option 1: Deploy via Vercel Dashboard**
   - Push your code to a Git repository (GitHub, GitLab, or Bitbucket)
   - Import your repository in the Vercel dashboard
   - Vercel will automatically detect it as a Vite project
   - Configure your environment variables
   - Click Deploy

2. **Option 2: Deploy via CLI**
   ```bash
   # First time deployment
   vercel

   # Subsequent deployments
   vercel --prod
   ```

### Vercel Configuration

The project includes a `vercel.json` configuration file with:
- Build settings for Vite
- Route configurations for SPA
- Environment variable mappings

### Post-Deployment

1. **Verify your deployment**:
   - Check the deployment URL provided by Vercel
   - Test all major functionalities
   - Verify environment variables are working

2. **Set up custom domain** (optional):
   - Go to your project settings in Vercel
   - Navigate to the Domains section
   - Add and configure your custom domain

3. **Enable automatic deployments**:
   - Vercel automatically deploys when you push to your main branch
   - Configure branch deployments in your project settings

### Troubleshooting

If you encounter issues:

1. **Build failures**:
   - Check the build logs in Vercel dashboard
   - Verify all dependencies are properly listed in package.json
   - Ensure environment variables are correctly set

2. **Runtime errors**:
   - Check browser console for errors
   - Verify API endpoints and environment variables
   - Test the same build locally using `vercel dev`

3. **Performance issues**:
   - Use Vercel Analytics to identify problems
   - Check for large bundle sizes in the build output
   - Consider implementing lazy loading for routes

4. **Dependency conflicts**:
   If you encounter Vite dependency conflicts (e.g., `ERESOLVE could not resolve`), try these steps:
   - Check your `package.json` for Vite version compatibility
   - Ensure Vite version matches peer dependency requirements
   - If needed, downgrade Vite to v5.x using:
     ```bash
     npm install vite@^5.0.0
     ```
   - Remove any non-critical dev dependencies that might cause conflicts

## License

© 2024 Ghana Chemical Society. All rights reserved.
