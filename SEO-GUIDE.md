# SEO Configuration for Nadi Astrology Website

## ✅ Completed SEO Setup

### 1. Meta Tags (Layout.astro)
- Title tags (unique per page)
- Meta descriptions
- Keywords optimization
- Canonical URLs
- Open Graph tags (Facebook sharing)
- Twitter Card tags
- Author information

### 2. Structured Data (JSON-LD)
- LocalBusiness schema
- Contact information
- Geographic coordinates
- Social media profiles
- Business hours

### 3. Sitemaps & Robots
- `robots.txt` - Allow all search engines
- `sitemap.xml` - 17 pages indexed
- Proper priority and change frequency

---

## Google Search Console Setup

### Step 1: Verify Domain Ownership
1. Go to [Google Search Console](https://search.google.com/search-console)
2. Click "Add Property"
3. Choose **Domain** property type
4. Enter: `agasthiyamahasivanaadijothidam.com`

### Step 2: DNS Verification (AWS Route 53)
Google will provide a TXT record:
```
Type: TXT
Name: @
Value: google-site-verification=XXXXXXXXXXXXX
```

**Add to AWS Route 53:**
1. Go to Route 53 → Hosted Zones
2. Select your domain
3. Create Record:
   - Type: `TXT`
   - Name: `agasthiyamahasivanaadijothidam.com`
   - Value: Copy from Google (paste the entire verification string)
   - TTL: `300`
4. Click "Create records"
5. Return to Google Search Console → Click "Verify"

### Step 3: Submit Sitemap
After verification:
1. In Google Search Console → Sitemaps
2. Add sitemap URL: `https://agasthiyamahasivanaadijothidam.com/sitemap.xml`
3. Click "Submit"

---

## Google Analytics Setup (Optional)

### Add GA4 Tracking:
1. Create account at [analytics.google.com](https://analytics.google.com)
2. Get Measurement ID (G-XXXXXXXXXX)
3. Add to `Layout.astro` before `</head>`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

---

## SEO Best Practices Applied

✅ **Mobile-Friendly**: Responsive Tailwind design  
✅ **Fast Loading**: Astro static generation  
✅ **Clean URLs**: No query parameters  
✅ **HTTPS**: Auto SSL via Vercel  
✅ **Semantic HTML**: Proper heading hierarchy  
✅ **Alt Text**: Add to all images (recommended)  
✅ **Internal Linking**: Navigation structure  
✅ **Social Sharing**: Open Graph tags  
✅ **Local SEO**: Structured data with location  

---

## Target Keywords Optimized

Primary: `nadi astrology`, `siva nadi`, `vaitheeswaran koil`  
Secondary: `nadi jothidam`, `palm leaf astrology`, `agasthiya nadi`  
Location: `tamil nadu astrology`, `trichy astrologer`  
Service: `accurate nadi predictions`, `online nadi reading`

---

## Post-Launch SEO Tasks

1. **Submit to Google Search Console** (within 24 hours)
2. **Add Google Analytics** (track visitors)
3. **Create Google Business Profile** (local SEO)
4. **Submit to Bing Webmaster Tools**
5. **Build backlinks** (directory listings, social media)
6. **Add alt text to all images** (accessibility + SEO)
7. **Regular content updates** (blog/articles about nadi astrology)

---

## Expected Timeline

- **Indexing**: 1-3 days after verification
- **Ranking**: 2-4 weeks for competitive keywords
- **Local Search**: 1-2 weeks (with Google Business Profile)

---

## Monitoring

Check Search Console weekly for:
- Indexing status
- Search impressions
- Click-through rates
- Mobile usability issues
- Core Web Vitals scores
