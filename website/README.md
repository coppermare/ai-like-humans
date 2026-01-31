# AI Like Humans - Landing Page

Interactive landing page showcasing AI personality research using the BFI-44 methodology.

## Features

- 🎨 **Interactive Model Cards** - Click any AI model to see detailed personality analysis
- 📊 **Visual Personality Scores** - Color-coded bars showing Big Five traits
- 💬 **Full Responses** - Read each model's self-reflection on the personality test
- 🎭 **Character Matches** - See which famous character each AI resembles
- 🔗 **Easy Sharing** - One-click sharing functionality
- 🌙 **Dark Mode** - Automatic dark mode support
- 📱 **Responsive Design** - Works beautifully on all devices

## Tech Stack

- **Framework**: Next.js 16 with App Router
- **UI Components**: shadcn/ui
- **Styling**: Tailwind CSS v4
- **Typography**: Geist Mono (monospace font)
- **Language**: TypeScript

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Data Structure

All AI personality data is stored in `/lib/ai-data.ts`, including:
- Personality scores (OCEAN traits)
- Character analogies
- Distinctive traits
- Full test responses

## Deployment

This is a standard Next.js app that can be deployed to:
- Vercel (recommended)
- Netlify
- Any platform supporting Next.js

## Research Methodology

Based on the BFI-44 (Big Five Inventory) validated by Google DeepMind's 2025 research in *Nature Machine Intelligence*.

## License

MIT
