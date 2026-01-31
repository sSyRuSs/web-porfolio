# Professional Portfolio Website

A modern, responsive portfolio website built with Next.js, React, TypeScript, Tailwind CSS, and shadcn/ui components. Features full GitHub integration.

## Features

- ✨ **shadcn/ui Components** - Beautiful, accessible React components
- 🌙 **Dark Mode** - Toggle between light and dark themes
- 📱 **Responsive** - Mobile-first responsive design
- ⚡ **Fast** - Next.js App Router with static export
- 🎨 **Tailwind CSS** - Utility-first CSS framework
- 📦 **TypeScript** - Type-safe development
- ✅ **ESLint** - Code quality and best practices
- 🔥 **GitHub Integration** - Live stats, activity, and contributions

## GitHub Features

- **GitHub Stats Card** - Total repos, stars, commits
- **Top Languages** - Visual chart of tech stack
- **Contribution Graph** - Year-long activity heatmap
- **GitHub Streak** - Current and longest streaks
- **Trophies** - Achievement badges
- **Profile Views** - Counter badge
- **Followers Count** - Live follower badge
- **Project Stars/Forks** - Real repository stats
- **Tech Stack Badges** - Beautiful technology badges

## Sections

- **Hero** - Introduction with CTA buttons
- **Stats** - Projects, experience, clients count
- **Projects** - Filterable showcase with GitHub links & stats
- **GitHub Activity** - Live GitHub stats and contributions
- **Experience** - Work history timeline
- **Skills** - Tech stack with badges
- **Testimonials** - Client feedback
- **Blog/Articles** - Latest posts
- **Contact Form** - Name, email, message with validation
- **Social Links** - GitHub, LinkedIn, Twitter
- **Copy Email** - One-click email copy

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the result.

### Build for Production

```bash
npm run build
npm start
```

## Customization

### Update Your GitHub Username

Edit [app/page.tsx](app/page.tsx):
```typescript
const githubUsername = "yourusername"; // Change to your GitHub username
```

### Update Your Information

1. Change hero text and description
2. Update projects with your actual repos
3. Modify experience timeline
4. Add your testimonials
5. Update skills and tech stack badges
6. Change social media links
7. Update email address

### Styling

- Modify colors in the Tailwind CSS classes
- Adjust spacing and sizing using Tailwind utilities
- Customize fonts in [app/layout.tsx](app/layout.tsx)

## Project Structure

```
portfolio-web/
├── app/
│   ├── page.tsx          # Main portfolio page
│   ├── layout.tsx        # Root layout
│   └── globals.css       # Global styles
├── public/               # Static assets
├── package.json          # Dependencies
├── tailwind.config.ts    # Tailwind configuration
├── tsconfig.json         # TypeScript configuration
└── README.md             # This file
```

## Deployment

### GitHub Pages (Recommended) ⭐

1. **Tạo GitHub Repository:**
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio setup"
   git branch -M main
   git remote add origin https://github.com/your-username/portfolio-web.git
   git push -u origin main
   ```

2. **Build & Deploy:**
   ```bash
   npm run build
   git add out/
   git commit -m "Deploy to GitHub Pages"
   git push
   ```

3. **Kích hoạt GitHub Pages:**
   - Đi vào **Settings** → **Pages**
   - Chọn **Deploy from a branch**
   - Branch: `main`, Folder: `/root` → Save
   - URL: `https://your-username.github.io/portfolio-web`

**Hoặc dùng GitHub Actions (Tự động deploy):**
Tạo file `.github/workflows/deploy.yml`:
```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm install
      - run: npm run build
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./out
```

### Vercel

Deploy dễ dàng hơn:
```bash
npm install -g vercel
vercel
```

### Netlify

Kết nối GitHub repo trực tiếp
- Đi [netlify.com](https://netlify.com)
- Click "New site from Git"
- Kết nối GitHub account
- Build command: `npm run build`
- Publish directory: `out`

## License

MIT License - feel free to use this template for your portfolio

