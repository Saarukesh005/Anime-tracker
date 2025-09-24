
import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'upload.wikimedia.org',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'm.media-amazon.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'encrypted-tbn0.gstatic.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.justwatch.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'play-lh.googleusercontent.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'i.pinimg.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'demonslayer-hinokami.sega.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'd28hgpri8am2if.cloudfront.net',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'prodimage.images-bn.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'cdn.hobbyconsolas.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images2.alphacoders.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images5.alphacoders.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'wallpapers.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.hdqwalls.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images8.alphacoders.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.wallpapersden.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'mfiles.alphacoders.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images6.alphacoders.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'avatarfiles.alphacoders.com',
        port: '',
        pathname: '/**',
      }
    ],
  },
};

export default nextConfig;

    
    

    

    


    