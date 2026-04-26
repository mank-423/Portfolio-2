import type { Metadata, Viewport } from 'next'
import './globals.css'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#f97316',
}

export const metadata: Metadata = {
  title: {
    default: 'Mayank Kumar | Full-Stack Developer',
    template: '%s | Mayank Kumar'
  },
  description: 'Full-Stack Developer specializing in MERN stack, React Native, Next.js, and cloud technologies. View my portfolio, projects, and experience in building scalable web applications.',
  keywords: ['Full-Stack Developer', 'MERN Stack', 'React Native', 'Next.js', 'Portfolio', 'Web Developer', 'Mayank Kumar', 'Software Engineer'],
  authors: [{ name: 'Mayank Kumar', url: 'https://github.com/mank-423' }],
  creator: 'Mayank Kumar',
  publisher: 'Mayank Kumar',
  formatDetection: {
    email: true,
    address: false,
    telephone: true,
  },
  
  // Open Graph / Facebook
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://mayank-kl2e.onrender.com',
    siteName: 'Mayank Kumar Portfolio',
    title: 'Mayank Kumar | Full-Stack Developer',
    description: 'Full-Stack Developer specializing in MERN stack, React Native, and cloud technologies. Check out my projects and experience.',
    images: [
      {
        url: 'https://avatars.githubusercontent.com/u/96490105?v=4',
        width: 1200,
        height: 630,
        alt: 'Mayank Kumar - Full-Stack Developer',
      },
    ],
  },
  
  // Twitter
  twitter: {
    card: 'summary_large_image',
    title: 'Mayank Kumar | Full-Stack Developer',
    description: 'Full-Stack Developer specializing in MERN stack, React Native, and cloud technologies.',
    creator: '@mayank_kumar',
    images: ['https://pbs.twimg.com/profile_images/1963607166155460611/JPI1k7yf_400x400.jpg'],
  },
  
  // Robots
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  
  // Icons
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  
  // Manifest
  manifest: '/site.webmanifest',
  
  // Alternates
  alternates: {
    canonical: 'https://mayank-kl2e.onrender.com',
  },
  
  
  // Other metadata
  category: 'technology',
  classification: 'Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Additional meta tags */}
        <meta name="application-name" content="Mayank Kumar Portfolio" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Mayank Portfolio" />
        
        {/* Dublin Core */}
        <meta name="DC.title" content="Mayank Kumar | Full-Stack Developer" />
        <meta name="DC.creator" content="Mayank Kumar" />
        <meta name="DC.description" content="Full-Stack Developer portfolio showcasing projects and experience" />
        <meta name="DC.language" content="en" />
      </head>
      <body className="bg-[var(--background)] text-[var(--foreground)]">
        {children}
      </body>
    </html>
  )
}