# Deployment Guide

This guide covers deploying the AI Like Humans landing page to production.

## Quick Deploy to Vercel (Recommended)

The easiest way to deploy this Next.js app is using Vercel:

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Add landing page"
   git push
   ```

2. **Deploy to Vercel**
   - Visit [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - **IMPORTANT**: Set "Root Directory" to `website` in the project settings
   - Vercel will auto-detect Next.js and configure everything
   - Click "Deploy"

That's it! Your site will be live in minutes.

## Alternative Deployment Options

### Netlify

1. Push your code to GitHub
2. Visit [netlify.com](https://netlify.com)
3. Import your repository
4. Build command: `npm run build`
5. Publish directory: `.next`

### Docker

```dockerfile
FROM node:20-alpine AS base

# Install dependencies
FROM base AS deps
WORKDIR /app
COPY package*.json ./
RUN npm ci

# Build
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# Production
FROM base AS runner
WORKDIR /app
ENV NODE_ENV=production
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs
EXPOSE 3000
ENV PORT=3000

CMD ["node", "server.js"]
```

Build and run:
```bash
docker build -t ai-like-humans .
docker run -p 3000:3000 ai-like-humans
```

## Environment Variables

This app doesn't require any environment variables for production. All data is statically embedded.

## Custom Domain

### On Vercel
1. Go to your project settings
2. Navigate to "Domains"
3. Add your custom domain
4. Configure DNS records as instructed

### DNS Configuration
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

## Performance Optimizations

The site is already optimized for production:
- ✅ Static generation (pre-rendered at build time)
- ✅ Automatic code splitting
- ✅ Image optimization ready (when images are added)
- ✅ CSS optimization via Tailwind CSS
- ✅ Font optimization with next/font

## Monitoring

Consider adding:
- **Vercel Analytics**: Built-in, zero-config
- **Google Analytics**: Add to `app/layout.tsx`
- **Sentry**: For error tracking

## SEO Checklist

- ✅ Meta tags configured
- ✅ OpenGraph tags for social sharing
- ✅ Twitter Card tags
- ✅ Semantic HTML structure
- ✅ Accessible components
- ⚠️ Add sitemap.xml (optional)
- ⚠️ Add robots.txt (optional)

## Post-Deployment

1. Test all functionality:
   - Click each model card
   - Test share button
   - Verify all links work
   - Check responsive design on mobile

2. Share your site:
   - Update GitHub repository URL in the UI
   - Share on social media
   - Submit to relevant communities

## Troubleshooting

### Build Fails
- Check Node.js version (requires 18+)
- Clear cache: `rm -rf .next node_modules && npm install`

### Site Not Updating
- Trigger a new deployment
- Check cache settings
- Verify git push was successful

### Slow Performance
- Enable Vercel Analytics to identify issues
- Check if static generation is working
- Verify no blocking API calls

## Cost

- **Vercel Free Tier**: Perfect for this project
  - 100GB bandwidth/month
  - Unlimited static sites
  - Automatic SSL

The site is entirely static, so costs are minimal on any platform.
