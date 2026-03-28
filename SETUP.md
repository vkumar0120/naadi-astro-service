# Setup Instructions

Follow these steps to get your website running:

## Step 1: Install Dependencies

Open a terminal in this directory and run:

```bash
npm install
```

## Step 2: Add Images

Download or copy all images from the original website to:
```
public/assets/images/nadi/
```

Required images are listed in `public/assets/images/nadi/README.md`

## Step 3: Start Development Server

```bash
npm run dev
```

Your site will be available at: http://localhost:4321

## Step 4: Customize Content

- Edit pages in `src/pages/` to update content
- Modify components in `src/components/` to change reusable elements
- Update colors in `tailwind.config.mjs`

## Step 5: Build for Production

When ready to deploy:

```bash
npm run build
```

The production-ready files will be in the `dist/` folder.

## Step 6: Deploy

Upload the `dist/` folder to your hosting provider:
- Netlify
- Vercel  
- GitHub Pages
- Any static hosting service

## Need Help?

Check the main README.md for detailed documentation.
