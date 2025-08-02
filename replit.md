# JetSigma25 - Mathematics Symposium Website

## Overview

This is a full-stack web application for JetSigma25, a Mathematics Symposium organized by the Department of Mathematics at St. Joseph's College of Engineering. The application is built as a modern single-page application (SPA) with a React frontend and Express.js backend, designed to showcase event information, handle registrations, and provide an engaging user experience for participants.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

The application follows a modern full-stack architecture using a monorepo structure with separate client and server directories. It employs a RESTful API design pattern with a React-based frontend and Express.js backend, all written in TypeScript for type safety and better development experience.

### Architecture Decisions:

1. **Monorepo Structure**: Chosen to keep related frontend and backend code in a single repository for easier development and deployment
2. **TypeScript Throughout**: Provides type safety and better developer experience across the entire stack
3. **React SPA**: Single-page application for smooth user experience and modern web standards
4. **Express.js Backend**: Lightweight and flexible server framework suitable for REST APIs
5. **PostgreSQL with Drizzle ORM**: Robust database solution with type-safe database operations

## Key Components

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for lightweight client-side routing
- **UI Library**: Shadcn/ui components built on Radix UI primitives
- **Styling**: Tailwind CSS with custom design system
- **State Management**: TanStack Query for server state management
- **Build Tool**: Vite for fast development and optimized builds

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Database**: PostgreSQL with Drizzle ORM
- **Session Management**: PostgreSQL-based session storage using connect-pg-simple
- **API Design**: RESTful endpoints with /api prefix
- **Error Handling**: Centralized error handling middleware

### Database Layer
- **ORM**: Drizzle ORM for type-safe database operations
- **Database**: PostgreSQL (configured for Neon serverless)
- **Schema**: Shared schema definitions between client and server
- **Migrations**: Drizzle Kit for database migrations

## Data Flow

1. **Client Requests**: React components make API calls using TanStack Query
2. **API Layer**: Express.js handles incoming requests and routes them to appropriate handlers
3. **Business Logic**: Server-side logic processes requests and interacts with the database
4. **Database Operations**: Drizzle ORM handles database queries and transactions
5. **Response**: Data flows back through the API to the client components
6. **UI Updates**: React components re-render based on updated state from TanStack Query

## External Dependencies

### Core Framework Dependencies
- **React Ecosystem**: React, React DOM, React Hook Form with Zod validation
- **UI Components**: Comprehensive Radix UI component library for accessibility
- **Database**: Neon serverless PostgreSQL with Drizzle ORM
- **Development Tools**: Vite, TypeScript, ESBuild for build processes

### Styling and Design
- **Tailwind CSS**: Utility-first CSS framework with custom design tokens
- **Custom Theme**: Dark theme with blue and accent color scheme
- **Font Integration**: Inter and Poppins fonts from Google Fonts
- **Icons**: Font Awesome and Lucide React icons

### Utility Libraries
- **Date Handling**: date-fns for date manipulation
- **Class Management**: clsx and class-variance-authority for conditional styling
- **Carousel**: Embla Carousel for image/content carousels

## Deployment Strategy

### Development Environment
- **Local Development**: Vite dev server for frontend, tsx for backend hot-reload
- **Database**: Environment variable-based configuration for database connection
- **Build Process**: Separate build steps for client (Vite) and server (ESBuild)

### Production Deployment
- **Build Output**: Client builds to `dist/public`, server bundles to `dist/index.js`
- **Static Assets**: Vite handles client-side asset optimization and bundling
- **Server**: Node.js production server serving both API and static files
- **Database**: PostgreSQL with connection pooling via Neon serverless

### Environment Configuration
- **Database URL**: Required environment variable for PostgreSQL connection
- **Session Storage**: PostgreSQL-based session management for scalability
- **Asset Handling**: Vite's asset pipeline for optimized static file serving

The application is designed to be easily deployable to platforms like Replit, with automatic database provisioning and environment setup. The build process creates optimized bundles for both client and server, ensuring fast loading times and efficient resource usage.