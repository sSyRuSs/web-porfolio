<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->

- [x] Verify that the copilot-instructions.md file in the .github directory is created.

- [x] Clarify Project Requirements
  - Next.js with TypeScript, Tailwind CSS, and App Router

- [x] Scaffold the Project
  - Initialized with create-next-app@latest with TypeScript, Tailwind CSS, App Router, and ESLint

- [x] Customize the Project
  - Created professional portfolio with hero section, projects showcase, skills section, and contact area
  - Implemented dark mode toggle
  - Built with responsive design and modern UI patterns

- [x] Install Required Extensions
  - No additional extensions required (VS Code built-in support for TypeScript and Tailwind sufficient)

- [x] Compile the Project
  - Dependencies installed successfully during scaffolding
  - No compilation errors

- [x] Create and Run Task
  - Use npm run dev to start development server at http://localhost:3000

- [ ] Launch the Project
  - Ready to start development server

- [x] Ensure Documentation is Complete
  - README.md updated with project overview, features, and instructions
  - copilot-instructions.md cleaned and updated

## Project Overview

**Portfolio Website** - A modern, responsive portfolio website showcasing projects, skills, and contact information.

### Technology Stack

- Next.js 16.1.6 (App Router)
- React 19.2.3
- TypeScript 5
- Tailwind CSS 4
- ESLint 9

### Key Features

- Responsive design with mobile-first approach
- Dark mode toggle with localStorage support
- Hero section with call-to-action buttons
- Featured projects showcase with tags
- Skills and technologies section
- Contact section with email link
- Sticky navigation header
- Smooth transitions and hover effects

### Quick Commands

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm start        # Start production server
npm run lint     # Run ESLint
```

### Customization Guide

1. Update hero text in app/page.tsx
2. Modify projects array with your actual work
3. Update skills categories and technologies
4. Change contact email address
5. Customize colors using Tailwind CSS classes
6. Update metadata in app/layout.tsx

### File Structure

- `app/page.tsx` - Main portfolio component
- `app/layout.tsx` - Root layout with metadata
- `app/globals.css` - Global styles
- `tailwind.config.ts` - Tailwind configuration
- `tsconfig.json` - TypeScript configuration
