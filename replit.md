# Overview

This is a personal portfolio website for Sandhya Shrestha built with React and Vite. The application showcases professional experience, skills, projects, and contact information through a modern, interactive single-page application with smooth animations and responsive design.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture

The application follows a component-based React architecture using functional components and modern React patterns:

- **Build Tool**: Vite for fast development and optimized production builds
- **Styling**: CSS modules with component-specific stylesheets for better maintainability
- **Component Structure**: Modular components (Header, Home, About, Skills, Projects, Gallery, Contact, Footer) for clear separation of concerns
- **Animation Strategy**: CSS-based animations and transitions for smooth user interactions without external libraries
- **Responsive Design**: Grid and flexbox layouts with mobile-first responsive breakpoints

## Design Patterns

- **Component Isolation**: Each component has its own CSS file to prevent style conflicts
- **Gradient-Heavy Design**: Consistent use of linear gradients across components for visual cohesion
- **Animation Architecture**: Keyframe animations for entrance effects, hover states, and background patterns
- **Typography System**: Inter font family with consistent weight hierarchy throughout the application

## Development Configuration

- **TypeScript Support**: Configured but optional (JSX files can be renamed to TSX)
- **Hot Module Replacement**: Vite's built-in HMR for rapid development
- **ES Modules**: Modern module system with tree-shaking support
- **Host Configuration**: Configured to run on all network interfaces (0.0.0.0) for accessibility

# External Dependencies

## Core Framework
- **React 18.2.0**: Main UI library for component-based architecture
- **React DOM 18.2.0**: React rendering for web browsers
- **Vite 5.0.0**: Build tool and development server

## Development Tools
- **@vitejs/plugin-react**: Vite plugin for React support with Fast Refresh
- **TypeScript 5.2.2**: Optional type checking support
- **@types/react & @types/react-dom**: Type definitions for React

## External Assets
- **Font Awesome 6.0.0**: Icon library loaded via CDN for social media and UI icons
- **Google Fonts (Inter)**: Web font for consistent typography across the application
- **Custom favicon**: SVG favicon for branding

The application is designed to run entirely client-side with no backend dependencies, making it suitable for static hosting platforms.