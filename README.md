# Sree Agasthiya Maha Siva Nadi Astrology Website

A modern static website built with **Astro 4.5** and **Tailwind CSS** for the Nadi Astrology center.

## 🚀 Technology Stack

- **Astro 4.5** - Modern static site generator
- **Tailwind CSS 3.4** - Utility-first CSS framework
- **TypeScript** - Type-safe development

## 📋 Features

- ⚡ Lightning-fast static site generation
- 📱 Fully responsive design
- 🎨 Modern UI with Tailwind CSS
- 🌐 Multilingual support (Tamil, English, Hindi, Malayalam, Telugu)
- ♿ SEO optimized
- 📞 Integrated WhatsApp and phone contact
- 🖼️ Image gallery with filtering
- 📝 Contact form with WhatsApp integration

## 🏗️ Project Structure

```
/
├── public/
│   └── assets/
│       └── images/
│           └── nadi/          # Place all images here
├── src/
│   ├── components/
│   │   ├── Header.astro       # Navigation header
│   │   ├── Footer.astro       # Site footer
│   │   ├── Services.astro     # Services showcase
│   │   ├── Testimonials.astro # Client testimonials
│   │   ├── FAQ.astro          # Frequently asked questions
│   │   ├── WhyUs.astro        # Why choose us section
│   │   └── WhatsAppButton.astro # Floating WhatsApp button
│   ├── layouts/
│   │   └── Layout.astro       # Base layout
│   └── pages/
│       ├── index.astro        # Home page
│       ├── guruji-thillaimani.astro
│       ├── original-nadi-jothidam.astro
│       ├── accurate-nadi-jothidam.astro
│       ├── siva-nadi-astrology.astro
│       ├── nadi-astrology-history.astro
│       ├── nadi-astrology-procedure.astro
│       ├── online-nadi-astrology-procedure.astro
│       ├── genuine-astrologer.astro
│       ├── vaitheeswaran-koil.astro
│       ├── trichy.astro
│       ├── gallery.astro
│       ├── contact.astro
│       ├── nadi-astrology-tamil.astro
│       ├── nadi-astrology-english.astro
│       ├── nadi-astrology-hindi.astro
│       ├── nadi-astrology-malayalam.astro
│       └── nadi-astrology-telugu.astro
├── astro.config.mjs
├── tailwind.config.mjs
├── tsconfig.json
└── package.json
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

The development server will start at `http://localhost:4321`

## 📂 Adding Images

Place all images in the `public/assets/images/nadi/` directory:

```
public/
└── assets/
    └── images/
        └── nadi/
            ├── 1.png          # Agasthiya Nadi
            ├── 2.jpg          # Siva Nadi
            ├── 3.jpg          # Bhrigu Nadi
            ├── 4.jpg          # Kaushika Nadi
            ├── 5.jpg          # Vashista Nadi
            ├── 6.jpg          # Bogar Nadi
            ├── thillaimani1.jpg
            ├── nadi2.png
            ├── cli1.jpg through cli8.jpg  # Gallery images
            └── original2.png
```

## 🎨 Customization

### Colors

Edit `tailwind.config.mjs` to change the color scheme:

```js
theme: {
  extend: {
    colors: {
      primary: '#d97706',    // Orange
      secondary: '#92400e',  // Dark brown
      accent: '#f59e0b'      // Amber
    }
  }
}
```

### Content

All page content is in the `src/pages/` directory. Edit `.astro` files to update text and structure.

### Components

Reusable components are in `src/components/`. Modify these to change shared elements across pages.

## 📞 Contact Information

Update contact details in:
- `src/components/Footer.astro`
- `src/components/Header.astro`
- `src/pages/contact.astro`

## 🌐 Deployment

### Build for Production

```bash
npm run build
```

The static files will be generated in the `dist/` folder.

### Deploy Options

- **Netlify**: Drop the `dist` folder or connect your Git repository
- **Vercel**: Import your project and deploy
- **GitHub Pages**: Push `dist` folder to gh-pages branch
- **Any Static Host**: Upload the `dist` folder contents

## 📝 Pages Included

1. **Home** - Main landing page with all sections
2. **Guruji Thillaimani** - About the astrologer
3. **Services** - Different types of Nadi readings
4. **Procedures** - How in-person and online readings work
5. **Locations** - Vaitheeswaran Koil and Trichy information
6. **Language Pages** - Tamil, English, Hindi, Malayalam, Telugu
7. **Gallery** - Photo gallery with filtering
8. **Contact** - Contact form and information

## 🔧 Support

For issues or questions:
- Email: ma.thillaimani@gmail.com
- Phone: +91 95006 39334

## 📄 License

© 2024 Sree Agasthiya Maha Siva Nadi Astrology. All Rights Reserved.
