# Ghana Chemical Society - Backend Implementation Guide

## Overview
This document outlines the implementation plan for the Ghana Chemical Society (GCS) backend using Supabase. The implementation is divided into phases, each focusing on specific features and improvements.

## Table of Contents
1. [Database Structure & Security](#database-structure--security)
2. [Authentication & User Management](#authentication--user-management)
3. [Membership System](#membership-system)
4. [Content & Resource Management](#content--resource-management)
5. [Event Management](#event-management)
6. [Analytics & Reporting](#analytics--reporting)
7. [Implementation Timeline](#implementation-timeline)
8. [Testing Strategy](#testing-strategy)
9. [Deployment Process](#deployment-process)
10. [User Management in Supabase Dashboard](#user-management-in-supabase-dashboard)

## Database Structure & Security

### Core Tables

#### User Profiles
```sql
CREATE TABLE gcs_profiles (
    id UUID REFERENCES auth.users(id) PRIMARY KEY,
    name TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL,
    phone TEXT,
    place_of_work TEXT,
    position TEXT,
    membership_type TEXT CHECK (membership_type IN ('student', 'regular', 'corporate', 'honorary')),
    role TEXT DEFAULT 'member' CHECK (role IN ('member', 'admin', 'moderator')),
    status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'approved', 'rejected')),
    is_active BOOLEAN DEFAULT false,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()),
    last_login TIMESTAMP WITH TIME ZONE,
    profile_completed BOOLEAN DEFAULT false
);
```

#### Membership Types
```sql
CREATE TABLE membership_types (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    name TEXT UNIQUE NOT NULL,
    description TEXT,
    price DECIMAL NOT NULL,
    duration_months INTEGER NOT NULL,
    benefits TEXT[],
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW())
);

-- Insert default membership types
INSERT INTO membership_types (name, description, price, duration_months, benefits) VALUES
('student', 'Student Membership', 50.00, 12, ARRAY['Access to resources', 'Event discounts']),
('regular', 'Regular Membership', 100.00, 12, ARRAY['Full access to resources', 'Event participation']),
('corporate', 'Corporate Membership', 500.00, 12, ARRAY['Corporate benefits', 'Multiple user accounts']),
('honorary', 'Honorary Membership', 0.00, 12, ARRAY['Lifetime benefits', 'Special recognition']);
```

#### Membership Management
```sql
CREATE TABLE membership_records (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    user_id UUID REFERENCES gcs_profiles(id),
    type_id UUID REFERENCES membership_types(id),
    start_date TIMESTAMP WITH TIME ZONE NOT NULL,
    end_date TIMESTAMP WITH TIME ZONE NOT NULL,
    status TEXT CHECK (status IN ('active', 'expired', 'cancelled')),
    payment_status TEXT CHECK (payment_status IN ('pending', 'completed', 'failed')),
    payment_id TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW())
);
```

#### Content Management
```sql
CREATE TABLE news_articles (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    title TEXT NOT NULL,
    content TEXT NOT NULL,
    author_id UUID REFERENCES gcs_profiles(id),
    status TEXT CHECK (status IN ('draft', 'published', 'archived')),
    published_at TIMESTAMP WITH TIME ZONE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()),
    tags TEXT[],
    view_count INTEGER DEFAULT 0
);
```

#### Event Management
```sql
CREATE TABLE events (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    title TEXT NOT NULL,
    description TEXT,
    start_date TIMESTAMP WITH TIME ZONE NOT NULL,
    end_date TIMESTAMP WITH TIME ZONE NOT NULL,
    location TEXT,
    capacity INTEGER,
    registration_required BOOLEAN DEFAULT false,
    status TEXT CHECK (status IN ('upcoming', 'ongoing', 'completed', 'cancelled')),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW())
);
```

#### Resource Management
```sql
CREATE TABLE resources (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    title TEXT NOT NULL,
    description TEXT,
    type TEXT CHECK (type IN ('document', 'video', 'link')),
    url TEXT,
    access_level TEXT CHECK (access_level IN ('public', 'member', 'admin')),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()),
    download_count INTEGER DEFAULT 0
);
```

#### Partnership Requests
```sql
CREATE TABLE partnership_requests (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    organization_name TEXT NOT NULL,
    contact_person TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT NOT NULL,
    organization_type TEXT CHECK (organization_type IN ('academic', 'corporate', 'government', 'non_profit')),
    partnership_type TEXT CHECK (partnership_type IN ('research', 'sponsorship', 'training', 'other')),
    description TEXT NOT NULL,
    status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'reviewing', 'approved', 'rejected')),
    reviewed_by UUID REFERENCES gcs_profiles(id),
    reviewed_at TIMESTAMP WITH TIME ZONE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()),
    notes TEXT
);

-- RLS Policies for partnership requests
ALTER TABLE partnership_requests ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Admins can view all partnership requests"
ON partnership_requests FOR SELECT
USING (
    EXISTS (
        SELECT 1 FROM gcs_profiles
        WHERE id = auth.uid()
        AND role = 'admin'
    )
);

CREATE POLICY "Admins can update partnership requests"
ON partnership_requests FOR UPDATE
USING (
    EXISTS (
        SELECT 1 FROM gcs_profiles
        WHERE id = auth.uid()
        AND role = 'admin'
    )
);
```

#### Scholarship Applications
```sql
CREATE TABLE scholarship_applications (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    applicant_id UUID REFERENCES gcs_profiles(id),
    scholarship_type TEXT CHECK (scholarship_type IN ('undergraduate', 'postgraduate', 'research', 'conference')),
    academic_level TEXT NOT NULL,
    institution TEXT NOT NULL,
    program TEXT NOT NULL,
    gpa DECIMAL,
    expected_graduation_date DATE,
    financial_need TEXT NOT NULL,
    motivation_letter TEXT NOT NULL,
    status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'reviewing', 'approved', 'rejected')),
    reviewed_by UUID REFERENCES gcs_profiles(id),
    reviewed_at TIMESTAMP WITH TIME ZONE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()),
    notes TEXT
);

-- RLS Policies for scholarship applications
ALTER TABLE scholarship_applications ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view own applications"
ON scholarship_applications FOR SELECT
USING (auth.uid() = applicant_id);

CREATE POLICY "Admins can view all applications"
ON scholarship_applications FOR SELECT
USING (
    EXISTS (
        SELECT 1 FROM gcs_profiles
        WHERE id = auth.uid()
        AND role = 'admin'
    )
);

CREATE POLICY "Users can create applications"
ON scholarship_applications FOR INSERT
WITH CHECK (auth.uid() = applicant_id);

CREATE POLICY "Admins can update applications"
ON scholarship_applications FOR UPDATE
USING (
    EXISTS (
        SELECT 1 FROM gcs_profiles
        WHERE id = auth.uid()
        AND role = 'admin'
    )
);
```

#### Contact Messages
```sql
CREATE TABLE contact_messages (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    subject TEXT NOT NULL,
    message TEXT NOT NULL,
    status TEXT DEFAULT 'unread' CHECK (status IN ('unread', 'read', 'replied', 'archived')),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()),
    replied_at TIMESTAMP WITH TIME ZONE,
    replied_by UUID REFERENCES gcs_profiles(id),
    reply_message TEXT
);

-- RLS Policies for contact messages
ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Admins can view all contact messages"
ON contact_messages FOR SELECT
USING (
    EXISTS (
        SELECT 1 FROM gcs_profiles
        WHERE id = auth.uid()
        AND role = 'admin'
    )
);

CREATE POLICY "Admins can update contact messages"
ON contact_messages FOR UPDATE
USING (
    EXISTS (
        SELECT 1 FROM gcs_profiles
        WHERE id = auth.uid()
        AND role = 'admin'
    )
);
```

#### Newsletter Subscriptions
```sql
CREATE TABLE newsletter_subscriptions (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    email TEXT UNIQUE NOT NULL,
    status TEXT DEFAULT 'active' CHECK (status IN ('active', 'unsubscribed')),
    subscribed_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()),
    unsubscribed_at TIMESTAMP WITH TIME ZONE,
    preferences JSONB DEFAULT '{"news": true, "events": true, "updates": true}'::jsonb
);

-- RLS Policies for newsletter subscriptions
ALTER TABLE newsletter_subscriptions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can subscribe"
ON newsletter_subscriptions FOR INSERT
WITH CHECK (true);

CREATE POLICY "Users can unsubscribe"
ON newsletter_subscriptions FOR UPDATE
USING (email = auth.jwt()->>'email');
```

#### Program Inquiries
```sql
CREATE TABLE program_inquiries (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    program_id UUID REFERENCES events(id),
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    subject TEXT NOT NULL,
    message TEXT NOT NULL,
    status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'in_progress', 'resolved', 'archived')),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()),
    resolved_at TIMESTAMP WITH TIME ZONE,
    resolved_by UUID REFERENCES gcs_profiles(id),
    resolution_notes TEXT
);

-- RLS Policies for program inquiries
ALTER TABLE program_inquiries ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Admins can view all program inquiries"
ON program_inquiries FOR SELECT
USING (
    EXISTS (
        SELECT 1 FROM gcs_profiles
        WHERE id = auth.uid()
        AND role = 'admin'
    )
);

CREATE POLICY "Admins can update program inquiries"
ON program_inquiries FOR UPDATE
USING (
    EXISTS (
        SELECT 1 FROM gcs_profiles
        WHERE id = auth.uid()
        AND role = 'admin'
    )
);
```

#### Research Grant Applications
```sql
CREATE TABLE research_grant_applications (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    applicant_id UUID REFERENCES gcs_profiles(id),
    project_title TEXT NOT NULL,
    research_area TEXT NOT NULL,
    duration_months INTEGER NOT NULL,
    budget DECIMAL NOT NULL,
    objectives TEXT NOT NULL,
    methodology TEXT NOT NULL,
    expected_outcomes TEXT NOT NULL,
    status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'reviewing', 'approved', 'rejected')),
    reviewed_by UUID REFERENCES gcs_profiles(id),
    reviewed_at TIMESTAMP WITH TIME ZONE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()),
    notes TEXT
);

-- RLS Policies for research grant applications
ALTER TABLE research_grant_applications ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view own applications"
ON research_grant_applications FOR SELECT
USING (auth.uid() = applicant_id);

CREATE POLICY "Admins can view all applications"
ON research_grant_applications FOR SELECT
USING (
    EXISTS (
        SELECT 1 FROM gcs_profiles
        WHERE id = auth.uid()
        AND role = 'admin'
    )
);
```

#### Conference Abstract Submissions
```sql
CREATE TABLE conference_abstracts (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    submitter_id UUID REFERENCES gcs_profiles(id),
    conference_id UUID REFERENCES events(id),
    title TEXT NOT NULL,
    authors TEXT[] NOT NULL,
    affiliations TEXT[] NOT NULL,
    abstract TEXT NOT NULL,
    keywords TEXT[] NOT NULL,
    presentation_type TEXT CHECK (presentation_type IN ('oral', 'poster', 'workshop')),
    status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'reviewing', 'accepted', 'rejected')),
    reviewed_by UUID REFERENCES gcs_profiles(id),
    reviewed_at TIMESTAMP WITH TIME ZONE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()),
    feedback TEXT
);

-- RLS Policies for conference abstracts
ALTER TABLE conference_abstracts ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view own submissions"
ON conference_abstracts FOR SELECT
USING (auth.uid() = submitter_id);

CREATE POLICY "Admins can view all submissions"
ON conference_abstracts FOR SELECT
USING (
    EXISTS (
        SELECT 1 FROM gcs_profiles
        WHERE id = auth.uid()
        AND role = 'admin'
    )
);
```

#### Job Postings
```sql
CREATE TABLE job_postings (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    posted_by UUID REFERENCES gcs_profiles(id),
    company_name TEXT NOT NULL,
    position TEXT NOT NULL,
    location TEXT NOT NULL,
    job_type TEXT CHECK (job_type IN ('full_time', 'part_time', 'contract', 'internship')),
    description TEXT NOT NULL,
    requirements TEXT[] NOT NULL,
    salary_range TEXT,
    application_deadline TIMESTAMP WITH TIME ZONE,
    status TEXT DEFAULT 'active' CHECK (status IN ('active', 'closed', 'expired')),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW())
);

-- RLS Policies for job postings
ALTER TABLE job_postings ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view active job postings"
ON job_postings FOR SELECT
USING (status = 'active');

CREATE POLICY "Admins can manage all job postings"
ON job_postings FOR ALL
USING (
    EXISTS (
        SELECT 1 FROM gcs_profiles
        WHERE id = auth.uid()
        AND role = 'admin'
    )
);
```

#### Job Applications
```sql
CREATE TABLE job_applications (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    job_id UUID REFERENCES job_postings(id),
    applicant_id UUID REFERENCES gcs_profiles(id),
    cover_letter TEXT NOT NULL,
    resume_url TEXT NOT NULL,
    status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'reviewing', 'shortlisted', 'rejected', 'hired')),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW())
);

-- RLS Policies for job applications
ALTER TABLE job_applications ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view own applications"
ON job_applications FOR SELECT
USING (auth.uid() = applicant_id);

CREATE POLICY "Admins can view all applications"
ON job_applications FOR SELECT
USING (
    EXISTS (
        SELECT 1 FROM gcs_profiles
        WHERE id = auth.uid()
        AND role = 'admin'
    )
);
```

#### Mentorship Program
```sql
CREATE TABLE mentorship_programs (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    mentor_id UUID REFERENCES gcs_profiles(id),
    mentee_id UUID REFERENCES gcs_profiles(id),
    start_date TIMESTAMP WITH TIME ZONE NOT NULL,
    end_date TIMESTAMP WITH TIME ZONE,
    status TEXT DEFAULT 'active' CHECK (status IN ('active', 'completed', 'terminated')),
    goals TEXT[] NOT NULL,
    progress_notes TEXT[],
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW())
);

-- RLS Policies for mentorship programs
ALTER TABLE mentorship_programs ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Participants can view own programs"
ON mentorship_programs FOR SELECT
USING (auth.uid() = mentor_id OR auth.uid() = mentee_id);

CREATE POLICY "Admins can view all programs"
ON mentorship_programs FOR SELECT
USING (
    EXISTS (
        SELECT 1 FROM gcs_profiles
        WHERE id = auth.uid()
        AND role = 'admin'
    )
);
```

#### Mentorship Applications
```sql
CREATE TABLE mentorship_applications (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    applicant_id UUID REFERENCES gcs_profiles(id),
    role TEXT CHECK (role IN ('mentor', 'mentee')),
    experience TEXT NOT NULL,
    goals TEXT[] NOT NULL,
    availability TEXT NOT NULL,
    status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'reviewing', 'approved', 'rejected')),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW())
);

-- RLS Policies for mentorship applications
ALTER TABLE mentorship_applications ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view own applications"
ON mentorship_applications FOR SELECT
USING (auth.uid() = applicant_id);

CREATE POLICY "Admins can view all applications"
ON mentorship_applications FOR SELECT
USING (
    EXISTS (
        SELECT 1 FROM gcs_profiles
        WHERE id = auth.uid()
        AND role = 'admin'
    )
);
```

## User Management in Supabase Dashboard

### Managing User Roles and Status

1. **Accessing User Management**
   - Go to Supabase Dashboard
   - Navigate to "Authentication" > "Users"
   - Click on "Table Editor" to view the `gcs_profiles` table

2. **Changing User Role**
   - Find the user in the `gcs_profiles` table
   - Click on the `role` column
   - Select from dropdown options:
     - `member` (default)
     - `admin`
     - `moderator`

3. **Managing Membership Status**
   - Find the user in the `gcs_profiles` table
   - Click on the `status` column
   - Select from dropdown options:
     - `pending` (default)
     - `approved`
     - `rejected`
   - Toggle `is_active` column:
     - `true` for active members
     - `false` for inactive members

4. **Setting Membership Type**
   - Find the user in the `gcs_profiles` table
   - Click on the `membership_type` column
   - Select from dropdown options:
     - `student`
     - `regular`
     - `corporate`
     - `honorary`

### SQL Commands for User Management

```sql
-- Make a user an admin
UPDATE gcs_profiles
SET role = 'admin'
WHERE id = 'user_id_here';

-- Approve a member
UPDATE gcs_profiles
SET status = 'approved', is_active = true
WHERE id = 'user_id_here';

-- Change membership type
UPDATE gcs_profiles
SET membership_type = 'corporate'
WHERE id = 'user_id_here';

-- Deactivate a member
UPDATE gcs_profiles
SET is_active = false
WHERE id = 'user_id_here';
```

### Row Level Security (RLS) Policies

```sql
-- Enable RLS on all tables
ALTER TABLE gcs_profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE membership_types ENABLE ROW LEVEL SECURITY;
ALTER TABLE membership_records ENABLE ROW LEVEL SECURITY;
ALTER TABLE news_articles ENABLE ROW LEVEL SECURITY;
ALTER TABLE events ENABLE ROW LEVEL SECURITY;
ALTER TABLE resources ENABLE ROW LEVEL SECURITY;

-- Example RLS policies
CREATE POLICY "Users can view own profile"
ON gcs_profiles FOR SELECT
USING (auth.uid() = id);

CREATE POLICY "Admins can view all profiles"
ON gcs_profiles FOR SELECT
USING (
    EXISTS (
        SELECT 1 FROM gcs_profiles
        WHERE id = auth.uid()
        AND role = 'admin'
    )
);

-- Allow admins to update any profile
CREATE POLICY "Admins can update any profile"
ON gcs_profiles FOR UPDATE
USING (
    EXISTS (
        SELECT 1 FROM gcs_profiles
        WHERE id = auth.uid()
        AND role = 'admin'
    )
);
```

## Authentication & User Management

### Authentication Hooks
```typescript
const useAuth = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, session) => {
        setUser(session?.user ?? null);
        setLoading(false);
      }
    );

    return () => subscription.unsubscribe();
  }, []);

  return { user, loading };
};
```

### Profile Management
```typescript
const profileService = {
  async updateProfile(userId: string, data: Partial<Profile>) {
    const { data: profile, error } = await supabase
      .from('gcs_profiles')
      .update(data)
      .eq('id', userId)
      .select()
      .single();

    if (error) throw error;
    return profile;
  },

  async updateUserRole(userId: string, role: 'member' | 'admin' | 'moderator') {
    const { data: profile, error } = await supabase
      .from('gcs_profiles')
      .update({ role })
      .eq('id', userId)
      .select()
      .single();

    if (error) throw error;
    return profile;
  },

  async updateUserStatus(userId: string, status: 'pending' | 'approved' | 'rejected', isActive: boolean) {
    const { data: profile, error } = await supabase
      .from('gcs_profiles')
      .update({ status, is_active: isActive })
      .eq('id', userId)
      .select()
      .single();

    if (error) throw error;
    return profile;
  }
};
```

## Membership System

### Membership Management
```typescript
const membershipService = {
  async createMembership(userId: string, typeId: string) {
    const { data: membership, error } = await supabase
      .from('membership_records')
      .insert({
        user_id: userId,
        type_id: typeId,
        start_date: new Date(),
        end_date: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000),
        status: 'active',
        payment_status: 'pending'
      })
      .select()
      .single();

    if (error) throw error;
    return membership;
  }
};
```

### Payment Integration
```typescript
// Edge Function for payment processing
export async function processPayment(req: Request) {
  const { membership_id, payment_method } = await req.json();
  
  // Process payment with Stripe
  const payment = await stripe.paymentIntents.create({
    amount: 1000,
    currency: 'usd',
    payment_method,
    confirm: true
  });

  // Update membership status
  await supabase
    .from('membership_records')
    .update({ payment_status: 'completed' })
    .eq('id', membership_id);

  return new Response(JSON.stringify({ success: true }));
}
```

## Content & Resource Management

### Content Management
```typescript
const contentService = {
  async createArticle(data: ArticleData) {
    const { data: article, error } = await supabase
      .from('news_articles')
      .insert(data)
      .select()
      .single();

    if (error) throw error;
    return article;
  }
};
```

### Resource Management
```typescript
const resourceService = {
  async uploadResource(file: File, metadata: ResourceMetadata) {
    const { data, error } = await supabase.storage
      .from('resources')
      .upload(`${Date.now()}-${file.name}`, file);

    if (error) throw error;

    const { data: resource, error: resourceError } = await supabase
      .from('resources')
      .insert({
        ...metadata,
        url: data.path
      })
      .select()
      .single();

    if (resourceError) throw resourceError;
    return resource;
  }
};
```

## Event Management

### Event System
```typescript
const eventService = {
  async createEvent(data: EventData) {
    const { data: event, error } = await supabase
      .from('events')
      .insert(data)
      .select()
      .single();

    if (error) throw error;
    return event;
  },

  async registerForEvent(eventId: string, userId: string) {
    const { data: registration, error } = await supabase
      .from('event_registrations')
      .insert({
        event_id: eventId,
        user_id: userId,
        status: 'registered'
      })
      .select()
      .single();

    if (error) throw error;
    return registration;
  }
};
```

## Analytics & Reporting

### Analytics Views
```sql
CREATE VIEW member_statistics AS
SELECT 
    p.id,
    p.name,
    COUNT(DISTINCT e.id) as events_attended,
    COUNT(DISTINCT r.id) as resources_accessed,
    m.status as membership_status
FROM gcs_profiles p
LEFT JOIN event_registrations er ON p.id = er.user_id
LEFT JOIN events e ON er.event_id = e.id
LEFT JOIN resource_access ra ON p.id = ra.user_id
LEFT JOIN resources r ON ra.resource_id = r.id
LEFT JOIN membership_records m ON p.id = m.user_id
GROUP BY p.id, p.name, m.status;
```

### Reporting System
```typescript
const reportService = {
  async generateMemberReport() {
    const { data, error } = await supabase
      .from('member_statistics')
      .select('*');

    if (error) throw error;
    return data;
  }
};
```

### Analytics Views for Forms
```sql
CREATE VIEW contact_message_statistics AS
SELECT 
    status,
    COUNT(*) as total_messages,
    COUNT(CASE WHEN status = 'replied' THEN 1 END) as replied_messages,
    AVG(EXTRACT(EPOCH FROM (replied_at - created_at))/3600) as avg_response_time_hours
FROM contact_messages
GROUP BY status;

CREATE VIEW program_inquiry_statistics AS
SELECT 
    p.title as program_title,
    i.status,
    COUNT(*) as total_inquiries,
    COUNT(CASE WHEN i.status = 'resolved' THEN 1 END) as resolved_inquiries,
    AVG(EXTRACT(EPOCH FROM (i.resolved_at - i.created_at))/3600) as avg_resolution_time_hours
FROM program_inquiries i
JOIN events p ON i.program_id = p.id
GROUP BY p.title, i.status;

CREATE VIEW newsletter_statistics AS
SELECT 
    status,
    COUNT(*) as total_subscribers,
    COUNT(CASE WHEN status = 'active' THEN 1 END) as active_subscribers,
    COUNT(CASE WHEN status = 'unsubscribed' THEN 1 END) as unsubscribed
FROM newsletter_subscriptions
GROUP BY status;
```

### Additional Analytics Views
```sql
CREATE VIEW research_grant_statistics AS
SELECT 
    status,
    COUNT(*) as total_applications,
    COUNT(CASE WHEN status = 'approved' THEN 1 END) as approved_applications,
    AVG(budget) as average_budget,
    AVG(duration_months) as average_duration
FROM research_grant_applications
GROUP BY status;

CREATE VIEW conference_abstract_statistics AS
SELECT 
    presentation_type,
    status,
    COUNT(*) as total_submissions,
    COUNT(CASE WHEN status = 'accepted' THEN 1 END) as accepted_submissions
FROM conference_abstracts
GROUP BY presentation_type, status;

CREATE VIEW job_board_statistics AS
SELECT 
    job_type,
    status,
    COUNT(*) as total_postings,
    COUNT(CASE WHEN status = 'active' THEN 1 END) as active_postings
FROM job_postings
GROUP BY job_type, status;

CREATE VIEW mentorship_statistics AS
SELECT 
    role,
    status,
    COUNT(*) as total_applications,
    COUNT(CASE WHEN status = 'approved' THEN 1 END) as approved_applications
FROM mentorship_applications
GROUP BY role, status;
```

## Implementation Timeline

1. **Weeks 1-2: Database & Security**
   - Set up database schema
   - Implement RLS policies
   - Configure authentication

2. **Weeks 3-4: Authentication & User Management**
   - Implement auth hooks
   - Create profile management
   - Set up user roles

3. **Weeks 5-6: Membership System**
   - Create membership types
   - Implement payment processing
   - Set up renewal system

4. **Weeks 7-8: Content & Resource Management**
   - Implement content creation
   - Set up file storage
   - Create access control

5. **Weeks 9-10: Event Management**
   - Create event system
   - Implement registration
   - Set up notifications

6. **Weeks 11-12: Analytics & Reporting**
   - Create analytics views
   - Implement reporting system
   - Set up monitoring

## Testing Strategy

1. **Unit Tests**
   - Test individual functions
   - Verify data transformations
   - Check error handling

2. **Integration Tests**
   - Test database operations
   - Verify authentication flow
   - Check payment processing

3. **End-to-End Tests**
   - Test complete user flows
   - Verify system integration
   - Check performance

## Deployment Process

1. **Development**
   - Use Supabase development project
   - Implement features
   - Run tests

2. **Staging**
   - Deploy to staging environment
   - Perform integration testing
   - Verify functionality

3. **Production**
   - Deploy to production
   - Monitor performance
   - Handle user feedback

## Maintenance

1. **Regular Tasks**
   - Database backups
   - Security updates
   - Performance monitoring

2. **User Support**
   - Handle user issues
   - Process feedback
   - Implement improvements

3. **System Updates**
   - Update dependencies
   - Implement new features
   - Optimize performance

### Partnership Management Service
```typescript
const partnershipService = {
  async createPartnershipRequest(data: PartnershipRequestData) {
    const { data: request, error } = await supabase
      .from('partnership_requests')
      .insert(data)
      .select()
      .single();

    if (error) throw error;
    return request;
  },

  async updatePartnershipStatus(requestId: string, status: 'pending' | 'reviewing' | 'approved' | 'rejected', notes?: string) {
    const { data: request, error } = await supabase
      .from('partnership_requests')
      .update({
        status,
        reviewed_by: auth.user()?.id,
        reviewed_at: new Date(),
        notes
      })
      .eq('id', requestId)
      .select()
      .single();

    if (error) throw error;
    return request;
  },

  async getPartnershipRequests(status?: string) {
    const query = supabase
      .from('partnership_requests')
      .select('*')
      .order('created_at', { ascending: false });

    if (status) {
      query.eq('status', status);
    }

    const { data, error } = await query;
    if (error) throw error;
    return data;
  }
};
```

### Scholarship Management Service
```typescript
const scholarshipService = {
  async createApplication(data: ScholarshipApplicationData) {
    const { data: application, error } = await supabase
      .from('scholarship_applications')
      .insert({
        ...data,
        applicant_id: auth.user()?.id
      })
      .select()
      .single();

    if (error) throw error;
    return application;
  },

  async updateApplicationStatus(applicationId: string, status: 'pending' | 'reviewing' | 'approved' | 'rejected', notes?: string) {
    const { data: application, error } = await supabase
      .from('scholarship_applications')
      .update({
        status,
        reviewed_by: auth.user()?.id,
        reviewed_at: new Date(),
        notes
      })
      .eq('id', applicationId)
      .select()
      .single();

    if (error) throw error;
    return application;
  },

  async getApplications(status?: string) {
    const query = supabase
      .from('scholarship_applications')
      .select('*')
      .order('created_at', { ascending: false });

    if (status) {
      query.eq('status', status);
    }

    const { data, error } = await query;
    if (error) throw error;
    return data;
  },

  async getUserApplications(userId: string) {
    const { data, error } = await supabase
      .from('scholarship_applications')
      .select('*')
      .eq('applicant_id', userId)
      .order('created_at', { ascending: false });

    if (error) throw error;
    return data;
  }
};

### Contact Management Service
```typescript
const contactService = {
  async createContactMessage(data: ContactMessageData) {
    const { data: message, error } = await supabase
      .from('contact_messages')
      .insert(data)
      .select()
      .single();

    if (error) throw error;
    return message;
  },

  async updateMessageStatus(messageId: string, status: 'unread' | 'read' | 'replied' | 'archived', reply?: string) {
    const { data: message, error } = await supabase
      .from('contact_messages')
      .update({
        status,
        reply_message: reply,
        replied_at: reply ? new Date() : null,
        replied_by: reply ? auth.user()?.id : null
      })
      .eq('id', messageId)
      .select()
      .single();

    if (error) throw error;
    return message;
  },

  async getMessages(status?: string) {
    const query = supabase
      .from('contact_messages')
      .select('*')
      .order('created_at', { ascending: false });

    if (status) {
      query.eq('status', status);
    }

    const { data, error } = await query;
    if (error) throw error;
    return data;
  }
};
```

### Newsletter Service
```typescript
const newsletterService = {
  async subscribe(email: string, preferences?: NewsletterPreferences) {
    const { data: subscription, error } = await supabase
      .from('newsletter_subscriptions')
      .insert({
        email,
        preferences: preferences || { news: true, events: true, updates: true }
      })
      .select()
      .single();

    if (error) throw error;
    return subscription;
  },

  async unsubscribe(email: string) {
    const { data: subscription, error } = await supabase
      .from('newsletter_subscriptions')
      .update({
        status: 'unsubscribed',
        unsubscribed_at: new Date()
      })
      .eq('email', email)
      .select()
      .single();

    if (error) throw error;
    return subscription;
  },

  async updatePreferences(email: string, preferences: NewsletterPreferences) {
    const { data: subscription, error } = await supabase
      .from('newsletter_subscriptions')
      .update({ preferences })
      .eq('email', email)
      .select()
      .single();

    if (error) throw error;
    return subscription;
  }
};
```

### Program Inquiry Service
```typescript
const programInquiryService = {
  async createInquiry(data: ProgramInquiryData) {
    const { data: inquiry, error } = await supabase
      .from('program_inquiries')
      .insert(data)
      .select()
      .single();

    if (error) throw error;
    return inquiry;
  },

  async updateInquiryStatus(inquiryId: string, status: 'pending' | 'in_progress' | 'resolved' | 'archived', notes?: string) {
    const { data: inquiry, error } = await supabase
      .from('program_inquiries')
      .update({
        status,
        resolution_notes: notes,
        resolved_at: status === 'resolved' ? new Date() : null,
        resolved_by: status === 'resolved' ? auth.user()?.id : null
      })
      .eq('id', inquiryId)
      .select()
      .single();

    if (error) throw error;
    return inquiry;
  },

  async getInquiries(programId?: string, status?: string) {
    const query = supabase
      .from('program_inquiries')
      .select('*')
      .order('created_at', { ascending: false });

    if (programId) {
      query.eq('program_id', programId);
    }
    if (status) {
      query.eq('status', status);
    }

    const { data, error } = await query;
    if (error) throw error;
    return data;
  }
};
```

### Research Grant Service
```typescript
const researchGrantService = {
  async createApplication(data: ResearchGrantData) {
    const { data: application, error } = await supabase
      .from('research_grant_applications')
      .insert({
        ...data,
        applicant_id: auth.user()?.id
      })
      .select()
      .single();

    if (error) throw error;
    return application;
  },

  async updateApplicationStatus(applicationId: string, status: string, notes?: string) {
    const { data: application, error } = await supabase
      .from('research_grant_applications')
      .update({
        status,
        reviewed_by: auth.user()?.id,
        reviewed_at: new Date(),
        notes
      })
      .eq('id', applicationId)
      .select()
      .single();

    if (error) throw error;
    return application;
  }
};

### Conference Abstract Service
```typescript
const conferenceAbstractService = {
  async submitAbstract(data: AbstractData) {
    const { data: abstract, error } = await supabase
      .from('conference_abstracts')
      .insert({
        ...data,
        submitter_id: auth.user()?.id
      })
      .select()
      .single();

    if (error) throw error;
    return abstract;
  },

  async updateAbstractStatus(abstractId: string, status: string, feedback?: string) {
    const { data: abstract, error } = await supabase
      .from('conference_abstracts')
      .update({
        status,
        reviewed_by: auth.user()?.id,
        reviewed_at: new Date(),
        feedback
      })
      .eq('id', abstractId)
      .select()
      .single();

    if (error) throw error;
    return abstract;
  }
};

### Job Board Service
```typescript
const jobBoardService = {
  async createJobPosting(data: JobPostingData) {
    const { data: posting, error } = await supabase
      .from('job_postings')
      .insert({
        ...data,
        posted_by: auth.user()?.id
      })
      .select()
      .single();

    if (error) throw error;
    return posting;
  },

  async applyForJob(jobId: string, data: JobApplicationData) {
    const { data: application, error } = await supabase
      .from('job_applications')
      .insert({
        ...data,
        job_id: jobId,
        applicant_id: auth.user()?.id
      })
      .select()
      .single();

    if (error) throw error;
    return application;
  }
};

### Mentorship Service
```typescript
const mentorshipService = {
  async applyForMentorship(data: MentorshipApplicationData) {
    const { data: application, error } = await supabase
      .from('mentorship_applications')
      .insert({
        ...data,
        applicant_id: auth.user()?.id
      })
      .select()
      .single();

    if (error) throw error;
    return application;
  },

  async createMentorshipProgram(mentorId: string, menteeId: string, goals: string[]) {
    const { data: program, error } = await supabase
      .from('mentorship_programs')
      .insert({
        mentor_id: mentorId,
        mentee_id: menteeId,
        goals,
        start_date: new Date()
      })
      .select()
      .single();

    if (error) throw error;
    return program;
  },

  async updateProgramProgress(programId: string, progressNote: string) {
    const { data: program, error } = await supabase
      .from('mentorship_programs')
      .update({
        progress_notes: supabase.raw('array_append(progress_notes, ?)', [progressNote])
      })
      .eq('id', programId)
      .select()
      .single();

    if (error) throw error;
    return program;
  }
}; 