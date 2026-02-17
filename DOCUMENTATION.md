# Aatharva Bodhi Website - Technical Documentation

## Table of Contents
1. [Sitemap & Navigation](#sitemap--navigation)
2. [Design System Specification](#design-system-specification)
3. [CMS Schema](#cms-schema)
4. [Wix Automations Plan](#wix-automations-plan)
5. [Velo Backend Plan](#velo-backend-plan)
6. [SEO Plan](#seo-plan)
7. [Pre-Launch QA Checklist](#pre-launch-qa-checklist)

---

## Sitemap & Navigation

### Primary Navigation Structure
```
Home
├── Services
│   ├── CSR Impact Assessment
│   ├── Market Research & Product Launch Studies
│   ├── New Product Launch Surveys
│   ├── Innovation Through Technology
│   ├── Data Engineering Solutions
│   └── Data, Cloud, AI, Automation
├── Solutions
│   ├── Data Engineering
│   ├── Cloud Modernization
│   ├── AI Enablement
│   └── Automation
├── Industries
│   ├── CSR/ESG
│   ├── Consumer/Retail
│   ├── Healthcare
│   ├── BFSI
│   ├── Manufacturing
│   ├── Public Sector
│   └── NGO/Foundations
├── Case Studies
│   └── [Dynamic Case Study Detail Pages]
├── Frameworks
├── About
├── Careers
├── Blog / Insights
│   └── [Dynamic Blog Post Pages]
└── Contact
    ├── Book a Consultation Form
    ├── Request Proposal Form
    └── Newsletter Signup
```

### URL Structure
- `/` - Home
- `/services` - Services overview
- `/services/[service-slug]` - Dynamic service detail pages
- `/solutions` - Solutions/Capabilities hub
- `/industries` - Industries overview
- `/case-studies` - Case studies overview
- `/case-studies/[case-study-slug]` - Dynamic case study detail pages
- `/frameworks` - Frameworks & Methodology
- `/about` - About us
- `/careers` - Careers
- `/insights` or `/blog` - Blog overview
- `/insights/[post-slug]` - Dynamic blog post pages
- `/contact` - Contact page
- `/thank-you-lead` - Thank you page (lead forms)
- `/thank-you-newsletter` - Thank you page (newsletter)
- `/privacy` - Privacy Policy
- `/terms` - Terms of Service
- `/404` - 404 error page

---

## Design System Specification

### Colors
- **Primary:** `#003366` (Enterprise Deep Blue)
- **Primary Dark:** `#001f3f`
- **Primary Light:** `#004d99`
- **Secondary:** `#2c3e50` (Charcoal)
- **Accent:** `#0066cc`
- **Text:** `#1a1a1a`
- **Text Light:** `#666666`
- **Text Lighter:** `#999999`
- **Background:** `#ffffff`
- **Background Light:** `#f8f9fa`
- **Border:** `#e0e0e0`

### Typography
- **Font Family:** Inter (Google Fonts)
- **Font Sizes:**
  - XS: 12px (0.75rem)
  - SM: 14px (0.875rem)
  - Base: 16px (1rem)
  - LG: 18px (1.125rem)
  - XL: 20px (1.25rem)
  - 2XL: 24px (1.5rem)
  - 3XL: 30px (1.875rem)
  - 4XL: 36px (2.25rem)
  - 5XL: 48px (3rem)

- **Font Weights:** 300 (Light), 400 (Normal), 500 (Medium), 600 (Semibold), 700 (Bold)
- **Line Heights:** 1.2 (tight), 1.5 (normal), 1.75 (relaxed)

### Spacing (8px grid)
- XS: 4px (0.25rem)
- SM: 8px (0.5rem)
- MD: 16px (1rem)
- LG: 24px (1.5rem)
- XL: 32px (2rem)
- 2XL: 48px (3rem)
- 3XL: 64px (4rem)
- 4XL: 96px (6rem)

### Components
- Buttons: Primary (solid), Secondary (outline)
- Cards: Border, shadow on hover
- Forms: Input, Select, Textarea with validation states
- Navigation: Sticky header, mobile-responsive
- Typography: Strict hierarchy, high contrast

---

## CMS Schema

### Collection: Services
**Fields:**
- `_id` (Auto-generated)
- `title` (Text, Required) - Service name
- `slug` (Text, Required, Unique) - URL-friendly identifier
- `description` (Rich Text) - Service description
- `outcome` (Text) - Business outcome statement
- `icon` (Media) - Service icon/image
- `whatWeDo` (Rich Text) - Bullet points of activities
- `deliverables` (Rich Text) - List of deliverables
- `toolsMethods` (Rich Text) - Tools and methods used
- `timeline` (Text) - Typical timeline (e.g., "8-12 weeks")
- `engagementModel` (Text) - Engagement model (e.g., "Fixed-price project")
- `faqs` (Reference) - Reference to FAQs collection
- `metaTitle` (Text) - SEO meta title
- `metaDescription` (Text) - SEO meta description
- `published` (Boolean) - Published status
- `order` (Number) - Display order

**Dynamic Page URL:** `/services/[slug]`

---

### Collection: CaseStudies
**Fields:**
- `_id` (Auto-generated)
- `title` (Text, Required) - Case study title
- `slug` (Text, Required, Unique) - URL-friendly identifier
- `tag` (Text) - Category tag (CSR Impact, Market Research, etc.)
- `description` (Rich Text) - Short description
- `clientContext` (Rich Text) - Client background
- `problem` (Rich Text) - Problem statement
- `constraints` (Rich Text) - Project constraints
- `approach` (Rich Text) - Our approach
- `architecture` (Rich Text) - Architecture/process details
- `implementation` (Rich Text) - Implementation details
- `results` (Rich Text) - Results (with placeholder numbers)
- `tools` (Rich Text) - Tools used
- `lessonsLearned` (Rich Text) - Key learnings
- `industry` (Text) - Industry (Manufacturing, Healthcare, etc.)
- `region` (Text) - Region(s) served
- `service` (Reference) - Reference to Services collection
- `featured` (Boolean) - Featured on homepage
- `metaTitle` (Text) - SEO meta title
- `metaDescription` (Text) - SEO meta description
- `published` (Boolean) - Published status
- `order` (Number) - Display order

**Dynamic Page URL:** `/case-studies/[slug]`

---

### Collection: Industries
**Fields:**
- `_id` (Auto-generated)
- `name` (Text, Required) - Industry name
- `slug` (Text, Required, Unique) - URL-friendly identifier
- `description` (Rich Text) - Industry description
- `services` (Reference, Multiple) - Related services
- `caseStudies` (Reference, Multiple) - Related case studies
- `metaTitle` (Text) - SEO meta title
- `metaDescription` (Text) - SEO meta description

---

### Collection: BlogPosts
**Fields:**
- `_id` (Auto-generated)
- `title` (Text, Required) - Post title
- `slug` (Text, Required, Unique) - URL-friendly identifier
- `excerpt` (Text) - Short excerpt
- `content` (Rich Text) - Full post content
- `author` (Reference) - Reference to TeamMembers collection
- `publishDate` (Date) - Publication date
- `category` (Text) - Category (CSR, Research, Technology)
- `tags` (Text, Multiple) - Tags
- `featuredImage` (Media) - Featured image
- `metaTitle` (Text) - SEO meta title
- `metaDescription` (Text) - SEO meta description
- `published` (Boolean) - Published status

**Dynamic Page URL:** `/insights/[slug]`

---

### Collection: Testimonials
**Fields:**
- `_id` (Auto-generated)
- `quote` (Text, Required) - Testimonial quote
- `authorName` (Text) - Author name (can be placeholder)
- `authorRole` (Text) - Author role
- `authorOrg` (Text) - Author organization
- `service` (Reference) - Related service
- `industry` (Text) - Industry
- `featured` (Boolean) - Featured on homepage
- `order` (Number) - Display order

---

### Collection: TeamMembers
**Fields:**
- `_id` (Auto-generated)
- `name` (Text, Required) - Team member name
- `role` (Text) - Job title/role
- `bio` (Rich Text) - Biography
- `photo` (Media) - Profile photo
- `email` (Text) - Contact email
- `linkedin` (URL) - LinkedIn profile
- `order` (Number) - Display order

---

### Collection: Jobs
**Fields:**
- `_id` (Auto-generated)
- `title` (Text, Required) - Job title
- `slug` (Text, Required, Unique) - URL-friendly identifier
- `description` (Rich Text) - Job description
- `requirements` (Rich Text) - Requirements
- `location` (Text) - Location (Remote, etc.)
- `type` (Text) - Job type (Full-time, Part-time)
- `published` (Boolean) - Published status
- `applications` (Reference, Multiple) - Reference to JobApplications

**Dynamic Page URL:** `/careers/[slug]`

---

### Collection: JobApplications
**Fields:**
- `_id` (Auto-generated)
- `job` (Reference) - Reference to Jobs collection
- `name` (Text, Required)
- `email` (Text, Required)
- `phone` (Text)
- `resume` (Media) - Uploaded resume
- `coverLetter` (Rich Text)
- `status` (Text) - New, Reviewing, Interview, Rejected, Hired
- `submittedDate` (Date) - Submission date

---

### Collection: Leads
**Fields:**
- `_id` (Auto-generated)
- `name` (Text, Required)
- `email` (Text, Required)
- `company` (Text)
- `role` (Text)
- `country` (Text)
- `service` (Text) - Service interest
- `projectType` (Text) - CSR, Research, Tech, Combined
- `budget` (Text) - Budget range
- `timeline` (Text) - Timeline
- `message` (Rich Text) - Additional message
- `formType` (Text) - Consultation, Proposal, Newsletter
- `status` (Text) - New, Contacted, Qualified, Proposal Sent, Closed
- `source` (Text) - Form source/page
- `submittedDate` (Date) - Submission timestamp
- `contactedDate` (Date) - First contact date
- `notes` (Rich Text) - Internal notes

---

### Collection: Methodologies (Optional)
**Fields:**
- `_id` (Auto-generated)
- `title` (Text, Required)
- `slug` (Text, Required, Unique)
- `description` (Rich Text)
- `framework` (Rich Text) - Framework details
- `category` (Text) - Impact Assessment, Research, Data Integrity
- `order` (Number)

---

## Wix Automations Plan

### Automation 1: Lead Form Submission
**Trigger:** Form submission (Consultation or Proposal form)
**Actions:**
1. Create record in Leads collection
2. Check for duplicate (email + company)
3. If duplicate found, update existing record; else create new
4. Send confirmation email to user
5. Send notification email to admin
6. Optional: Trigger webhook to CRM (placeholder)

**Email Templates:**
- **User Confirmation:** "Thank you for your interest. We'll be in touch within [X] business days."
- **Admin Notification:** "New lead: [Name] from [Company] - [Service Interest]"

---

### Automation 2: Newsletter Signup
**Trigger:** Newsletter form submission
**Actions:**
1. Check if email exists in Leads collection
2. If exists, update formType to include "Newsletter"
3. If new, create record with formType = "Newsletter"
4. Send welcome email with newsletter confirmation
5. Add to email marketing list (if integrated)

---

### Automation 3: Lead Status Updates
**Trigger:** Manual status update in Leads collection
**Actions:**
1. If status changes to "Contacted", update contactedDate
2. If status changes to "Proposal Sent", send proposal email template
3. Log status change in notes field

---

### Automation 4: Case Study View Tracking (Optional)
**Trigger:** Page view on case study detail page
**Actions:**
1. Increment view counter (if tracking field exists)
2. Log view analytics

---

### Automation 5: Blog Post Publication
**Trigger:** Blog post published status changes to true
**Actions:**
1. Generate sitemap update
2. Send notification to subscribers (if newsletter integration exists)
3. Post to social media (if integrated)

---

## Velo Backend Plan

### Functions Overview

#### 1. Form Submission Handler (`submitLead`)
**Purpose:** Handle form submissions with validation, deduplication, and spam protection

**Parameters:**
- `formData` (Object) - Form submission data
- `formType` (String) - "consultation", "proposal", "newsletter"

**Logic:**
```javascript
export async function submitLead(formData, formType) {
  // 1. Validation
  validateFormData(formData);
  
  // 2. Honeypot check
  if (formData.website) {
    return { success: false, error: 'Spam detected' };
  }
  
  // 3. Rate limiting check
  if (await isRateLimited(formData.email)) {
    return { success: false, error: 'Rate limit exceeded' };
  }
  
  // 4. Deduplication
  const existingLead = await findDuplicateLead(formData.email, formData.company);
  
  if (existingLead) {
    // Update existing lead
    await updateLead(existingLead._id, formData, formType);
  } else {
    // Create new lead
    await createLead(formData, formType);
  }
  
  // 5. Send emails
  await sendConfirmationEmail(formData.email, formType);
  await sendAdminNotification(formData, formType);
  
  return { success: true };
}
```

---

#### 2. Deduplication Function (`findDuplicateLead`)
**Purpose:** Check for existing leads by email and company

**Logic:**
```javascript
import wixData from 'wix-data';

export async function findDuplicateLead(email, company) {
  const results = await wixData.query('Leads')
    .eq('email', email)
    .or(wixData.query('Leads').eq('company', company))
    .find();
  
  return results.items[0] || null;
}
```

---

#### 3. Rate Limiting Function (`isRateLimited`)
**Purpose:** Prevent spam by limiting submissions per email/IP

**Logic:**
```javascript
import wixData from 'wix-data';

export async function isRateLimited(email) {
  const oneMinuteAgo = new Date(Date.now() - 60000);
  
  const recentSubmissions = await wixData.query('Leads')
    .eq('email', email)
    .gte('submittedDate', oneMinuteAgo)
    .find();
  
  return recentSubmissions.items.length >= 3; // Max 3 per minute
}
```

---

#### 4. Email Functions
**Purpose:** Send confirmation and notification emails

**Templates:**
- `consultation-confirmation` - User confirmation for consultation
- `proposal-confirmation` - User confirmation for proposal request
- `newsletter-welcome` - Newsletter welcome email
- `admin-lead-notification` - Admin notification for new leads

---

#### 5. Validation Functions
**Purpose:** Validate form data

**Checks:**
- Required fields
- Email format
- Phone format (if applicable)
- Text length limits
- XSS prevention (sanitize inputs)

---

#### 6. Case Study Filtering (`filterCaseStudies`)
**Purpose:** Filter case studies by region, service, industry

**Logic:**
```javascript
export async function filterCaseStudies(filters) {
  let query = wixData.query('CaseStudies').eq('published', true);
  
  if (filters.region) {
    query = query.contains('region', filters.region);
  }
  
  if (filters.service) {
    query = query.eq('service', filters.service);
  }
  
  if (filters.industry) {
    query = query.eq('industry', filters.industry);
  }
  
  return await query.find();
}
```

---

## SEO Plan

### Meta Title Templates

**Homepage:**
`Aatharva Bodhi | CSR + Research + Technology Consulting`

**Services:**
`[Service Name] | Aatharva Bodhi - [Outcome Statement]`

**Case Studies:**
`[Case Study Title] | Case Study | Aatharva Bodhi`

**Blog Posts:**
`[Post Title] | Insights | Aatharva Bodhi`

**Generic:**
`[Page Title] | Aatharva Bodhi`

---

### Meta Description Templates

**Homepage:**
`CSR + Research + Technology consulting that turns insights into measurable impact. Global delivery | Research rigor | Tech-enabled impact.`

**Services:**
`[Service description]. Outcome: [Outcome statement]. Learn more about our [service name] services.`

**Case Studies:**
`[Case study description]. Results: [Key results]. Read the full case study.`

---

### Schema Markup Recommendations

#### 1. Organization Schema
```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Aatharva Bodhi",
  "description": "CSR + Research + Technology consulting",
  "url": "https://www.aatharvabodhi.com",
  "logo": "https://www.aatharvabodhi.com/logo.png",
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "Customer Service",
    "areaServed": ["US", "SG", "EU", "JP", "CN"]
  }
}
```

#### 2. ProfessionalService Schema
```json
{
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Aatharva Bodhi",
  "serviceType": "CSR Consulting, Market Research, Data Engineering",
  "areaServed": ["United States", "Singapore", "Europe", "Japan", "China"]
}
```

#### 3. Article Schema (Blog Posts)
```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "[Article Title]",
  "author": {
    "@type": "Organization",
    "name": "Aatharva Bodhi"
  },
  "datePublished": "[Date]",
  "publisher": {
    "@type": "Organization",
    "name": "Aatharva Bodhi"
  }
}
```

---

### Internal Linking Strategy

**Hub Pages:**
- Home → Services, Case Studies, Frameworks, Contact
- Services → Related Case Studies, Frameworks, Contact
- Case Studies → Related Services, Industries, Contact
- Blog → Related Services, Case Studies

**Anchor Text:**
- Use descriptive anchor text (e.g., "CSR Impact Assessment" not "click here")
- Link to relevant internal pages naturally within content

---

### Blog Post Ideas (25 Topics)

1. Measuring CSR Impact: A Framework for Action
2. Product Launch Surveys: Avoiding Common Pitfalls
3. Data Engineering for Impact Measurement
4. Market Research Best Practices for Global Product Launches
5. ESG Data Collection and Reporting: A Practical Guide
6. Cloud Migration Strategies for Data-Intensive Organizations
7. Survey Design: Sampling Strategies and Bias Control
8. Impact Attribution in CSR Programs: Methods and Challenges
9. Building Data Lakehouses for Real-Time Analytics
10. Responsible AI: Governance Frameworks for Enterprise
11. Multi-Region Market Research: Cultural Considerations
12. KPI Taxonomy: From Inputs to Impact
13. Data Quality Frameworks: Ensuring Integrity in Impact Measurement
14. Automation in Impact Reporting: RPA and Workflow Solutions
15. Stakeholder Engagement Surveys: Best Practices
16. Theory of Change: Designing Effective Logic Models
17. Cloud-Native Data Pipelines: Architecture Patterns
18. Product-Market Fit: Research Methods and Validation
19. CSR ROI: Measuring Financial Returns on Social Investments
20. API Integration for Data Collection: Technical Guide
21. Statistical Significance in Survey Research
22. Data Governance for Compliance: GDPR, CCPA Considerations
23. Predictive Analytics for CSR Program Optimization
24. Multi-Stakeholder Impact Assessment: Methodologies
25. Technology Stack Selection: Cloud Platforms Comparison

---

## Pre-Launch QA Checklist

### Functionality
- [ ] All forms submit successfully
- [ ] Form validation works (required fields, email format)
- [ ] Honeypot field prevents spam
- [ ] Rate limiting prevents abuse
- [ ] Deduplication works correctly
- [ ] Email confirmations sent to users
- [ ] Admin notifications sent
- [ ] Thank you pages redirect correctly
- [ ] Mobile menu toggle works
- [ ] FAQ accordion expands/collapses
- [ ] Case study filters work
- [ ] All internal links work
- [ ] External links open in new tab
- [ ] 404 page displays correctly

### Design & UX
- [ ] Consistent spacing and typography
- [ ] All images load correctly
- [ ] Colors meet accessibility contrast ratios (WCAG AA)
- [ ] Buttons have hover states
- [ ] Cards have hover effects
- [ ] Forms have focus states
- [ ] Mobile responsive (320px, 768px, 1024px, 1920px)
- [ ] Tablet layout works correctly
- [ ] Desktop layout works correctly
- [ ] No horizontal scrolling on mobile
- [ ] Text is readable at all sizes
- [ ] Icons display correctly

### Content
- [ ] All placeholder text replaced or clearly marked
- [ ] All CTAs are clear and actionable
- [ ] No broken links
- [ ] All images have alt text
- [ ] Consistent tone and voice
- [ ] No typos or grammatical errors
- [ ] Contact information is accurate
- [ ] Legal pages (Privacy, Terms) are complete

### Performance
- [ ] Page load times < 3 seconds
- [ ] Images optimized (WebP format, appropriate sizes)
- [ ] CSS minified
- [ ] JavaScript minified
- [ ] No console errors
- [ ] No 404 errors in console
- [ ] Fonts load efficiently

### SEO
- [ ] All pages have unique meta titles
- [ ] All pages have meta descriptions
- [ ] URLs are SEO-friendly (slugs)
- [ ] Schema markup implemented
- [ ] Sitemap.xml generated
- [ ] Robots.txt configured
- [ ] Canonical URLs set
- [ ] Open Graph tags for social sharing
- [ ] Twitter Card tags

### Accessibility
- [ ] Keyboard navigation works
- [ ] Focus indicators visible
- [ ] ARIA labels on interactive elements
- [ ] Alt text on images
- [ ] Form labels associated with inputs
- [ ] Color contrast meets WCAG AA (4.5:1 for text)
- [ ] Screen reader friendly
- [ ] Skip to main content link (if applicable)

### Browser Testing
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)
- [ ] Mobile Safari (iOS)
- [ ] Chrome Mobile (Android)

### Security
- [ ] Forms have CSRF protection
- [ ] Input sanitization prevents XSS
- [ ] Rate limiting prevents abuse
- [ ] Honeypot fields prevent bots
- [ ] Email validation prevents injection
- [ ] HTTPS enabled
- [ ] Privacy Policy linked
- [ ] Terms of Service linked

### Analytics & Tracking
- [ ] Google Analytics installed (if applicable)
- [ ] Form submission tracking
- [ ] Page view tracking
- [ ] Conversion tracking (CTAs)
- [ ] Error tracking (404s)

### CMS Setup
- [ ] All collections created
- [ ] Field types correct
- [ ] Required fields set
- [ ] Dynamic pages configured
- [ ] URL patterns set correctly
- [ ] Permissions configured
- [ ] Sample data added (if needed)

### Email Setup
- [ ] Email templates created
- [ ] SMTP configured
- [ ] Test emails sent successfully
- [ ] Email formatting correct
- [ ] Unsubscribe links (if applicable)

---

## Implementation Notes

### Placeholders to Replace
- `[X%]` - Percentage values in case studies
- `[N weeks]` - Timeline values
- `[USD X]` - Currency values
- `[Name]` - Testimonial author names
- `[Fortune 500 Company]` - Client organization names
- `[Address Placeholder]` - Physical addresses
- Email addresses (us@, sg@, etc.)

### Next Steps
1. Set up Wix CMS collections
2. Configure dynamic pages
3. Implement Velo backend functions
4. Set up Wix Automations
5. Configure email templates
6. Add real content and images
7. Set up analytics
8. Perform QA testing
9. Launch

---

**Document Version:** 1.0  
**Last Updated:** February 2026
