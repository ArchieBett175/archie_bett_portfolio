# archie_bett_portfolio
# Portfolio Website

A modern, responsive portfolio website built with React and Node.js, featuring real-time Spotify integration and smooth animations.

## 🚀 Live Demo

[View Live Site](https://archiebettportfolio.vercel.app/)

## 📋 Features

- **Modern Design**: Clean, professional interface with gradient effects and glassmorphism
- **Responsive Layout**: Optimized for desktop, tablet, and mobile devices
- **Spotify Integration**: Real-time display of currently playing and recently played tracks
- **Smooth Animations**: Powered by Framer Motion for engaging user interactions
- **Dynamic Navigation**: Hide/show navigation bar on scroll with smooth transitions
- **Project Showcase**: Interactive project cards with hover effects
- **Contact Section**: Easy-to-use contact form and social links
- **Blog Section**: Space for sharing thoughts and technical articles

## 🛠️ Tech Stack

### Frontend
- **React 19** - Modern React with latest features
- **Vite** - Fast build tool and dev server
- **Tailwind CSS 4** - Utility-first CSS framework
- **Framer Motion** - Production-ready motion library
- **React Router** - Client-side routing
- **React Icons** - Beautiful icon library

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **Spotify Web API** - Music data integration
- **Vercel Serverless Functions** - API endpoints

### Deployment
- **Vercel** - Frontend and serverless functions hosting
- **GitHub** - Version control and CI/CD

## 📁 Project Structure

```
portfolio/
├── src/                    # React source files
│   ├── components/         # Reusable UI components
│   ├── pages/             # Page components
│   ├── hooks/             # Custom React hooks
│   └── styles/            # CSS files
├── api/                   # Serverless API functions
│   ├── spotify-utils.js   # Shared Spotify utilities
│   ├── my-currently-playing.js
│   ├── my-recently-played.js
│   ├── my-top-tracks.js
│   └── my-top-artists.js
├── public/                # Static assets
├── scripts/               # Setup and utility scripts
└── package.json          # Dependencies and scripts
```

## 🚀 Getting Started

### Prerequisites
- Node.js 22.x or higher
- npm or yarn
- Spotify Developer Account

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up Spotify API**
   - Create a Spotify app at [Spotify Developer Dashboard](https://developer.spotify.com/dashboard)
   - Note your Client ID and Client Secret
   - Set redirect URI to `http://localhost:3000/getrefreshtoken`

4. **Get Spotify Refresh Token**
   ```bash
   cd scripts
   node get_refresh_token_app.js
   ```
   - Visit `http://localhost:3000/get-my-token`
   - Authorize your Spotify account
   - Copy the refresh token

5. **Environment Variables**
   Create a `.env` file in the root directory:
   ```env
   CLIENT_SECRET_KEY=your_spotify_client_secret
   SPOTIFY_REFRESH_TOKEN=your_refresh_token
   ```

6. **Run Development Server**
   ```bash
   npm run dev
   ```
   Visit `http://localhost:5173`

## 📱 API Endpoints

The portfolio includes several Spotify API endpoints:

- `GET /api/my-currently-playing` - Current track
- `GET /api/my-recently-played` - Recent listening history
- `GET /api/my-top-tracks` - Top tracks (time_range: short_term, medium_term, long_term)
- `GET /api/my-top-artists` - Top artists
- `GET /api/spotify-token` - Public Spotify access token

### Query Parameters
- `limit` - Number of items to return (default: 10-20)
- `time_range` - For top tracks/artists: short_term, medium_term, long_term

## 🌐 Deployment

### Deploy to Vercel

1. **Connect GitHub Repository**
   - Import your project on [Vercel](https://vercel.com)
   - Auto-detected settings work perfectly

2. **Add Environment Variables**
   In Vercel Dashboard → Settings → Environment Variables:
   ```
   CLIENT_SECRET_KEY=your_spotify_client_secret
   SPOTIFY_REFRESH_TOKEN=your_refresh_token
   ```

3. **Deploy**
   - Vercel automatically deploys on Git push
   - Build command: `npm run build`
   - Output directory: `dist`

## 🎨 Customization

### Colors & Theme
Edit `src/index.css` and component classes to customize:
- Gradient backgrounds
- Color schemes  
- Typography
- Spacing

### Animations
Modify Framer Motion variants in components:
- Navigation hide/show animations
- Page transitions
- Hover effects
- Loading states

### Content
Update personal information in:
- `src/components/Hero.jsx` - Introduction
- `src/components/About.jsx` - About section
- `src/components/Projects.jsx` - Project showcase
- `src/components/Experience.jsx` - Work history

## 🐛 Troubleshooting

### Common Issues

**Spotify API not working locally:**
- API functions only work when deployed to Vercel
- Test Spotify integration after deployment

**Build failures:**
- Ensure all imports have correct file paths
- Check for missing dependencies
- Verify environment variables are set

**Mobile responsiveness:**
- Test on actual devices
- Use browser dev tools for different screen sizes
- Check Tailwind responsive classes

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📬 Contact

Your Name - [your.email@example.com](mailto:your.email@example.com)

Project Link: [https://github.com/yourusername/portfolio](https://github.com/yourusername/portfolio)

## 🙏 Acknowledgments

- [React](https://reactjs.org/) - The web framework used
- [Tailwind CSS](https://tailwindcss.com/) - For styling
- [Framer Motion](https://www.framer.com/motion/) - For animations
- [Spotify Web API](https://developer.spotify.com/documentation/web-api/) - Music integration
- [Vercel](https://vercel.com/) - Hosting platform