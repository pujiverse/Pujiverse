import { IconType } from 'react-icons';
import { FaYoutube, FaInstagram, FaFacebookF, FaXTwitter, FaLinkedinIn } from 'react-icons/fa6';
import { FaTelegramPlane } from 'react-icons/fa';
import { NavLinkItem, SocialLink, YouTubeVideo } from './types';

export const SITE_NAME = 'Pujiverse';
export const TAGLINE = 'Connecting creativity, tech, and ideas.';
export const SHORT_BIO = `
Hello! I'm Pujith Sakhamuri, a passionate creator exploring the intersections of technology, innovation, and engaging content. 
This is my digital home, where you can find all my adventures, projects, and insights. 
Join me on this journey as we connect, learn, and grow together!
`;

export const PROFILE_IMAGE_URL = 'https://picsum.photos/400/400?random=1'; // Placeholder image

export const CONTACT_EMAIL = 'contact@pujithconnects.com';
export const WHATSAPP_LINK = 'https://wa.me/1234567890'; // Placeholder WhatsApp link

export const SOCIAL_LINKS: SocialLink[] = [
  { name: 'YouTube', url: 'https://youtube.com/@yourchannel', icon: FaYoutube },
  { name: 'Instagram', url: 'https://instagram.com/yourhandle', icon: FaInstagram },
  { name: 'Facebook', url: 'https://facebook.com/yourpage', icon: FaFacebookF },
  { name: 'Telegram', url: 'https://t.me/yourchannel', icon: FaTelegramPlane },
  { name: 'X', url: 'https://x.com/yourhandle', icon: FaXTwitter },
  { name: 'LinkedIn', url: 'https://linkedin.com/in/yourprofile', icon: FaLinkedinIn },
];

export const HEADER_NAV_LINKS: NavLinkItem[] = [
  { name: 'Home', path: '/' },
  { name: 'YouTube', path: '/youtube' },
  { name: 'Instagram', path: '/instagram' },
  { name: 'Facebook', path: '/facebook' },
  { name: 'Telegram', path: '/telegram' },
  { name: 'X', path: '/x' },
  { name: 'LinkedIn', path: '/linkedin' },
  { name: 'Contact', path: '/contact' },
];

export const YOUTUBE_FEATURED_VIDEOS: YouTubeVideo[] = [
  { id: 'dQw4w9WgXcQ', title: 'Featured Video 1' }, // Replace with actual YouTube video IDs
  { id: 'anotherVideoID', title: 'Featured Video 2' },
  { id: 'yetAnotherID', title: 'Featured Video 3' },
];

export const YOUTUBE_CHANNEL_LINK = 'https://youtube.com/@yourchannel'; // Replace with actual YouTube channel link

export const INSTAGRAM_LINK = 'https://instagram.com/yourhandle'; // Replace with actual Instagram link

export const FACEBOOK_PAGE_LINK = 'https://facebook.com/yourpage'; // Replace with actual Facebook page link

export const TELEGRAM_CHANNEL_LINK = 'https://t.me/yourchannel'; // Replace with actual Telegram channel link
export const TELEGRAM_CHANNEL_DESCRIPTION = `Join my Telegram channel for real-time updates, exclusive content, and community discussions. Don't miss out on important announcements and behind-the-scenes glimpses!`;

export const X_PROFILE_LINK = 'https://x.com/yourhandle'; // Replace with actual X (Twitter) profile link

export const LINKEDIN_PROFILE_LINK = 'https://linkedin.com/in/yourprofile'; // Replace with actual LinkedIn profile link
export const LINKEDIN_SUMMARY = `
With a background in technology and a passion for creative problem-solving, I'm dedicated to leveraging digital platforms to share knowledge and foster connections. My work spans various domains, always aiming to inspire and innovate. Connect with me on LinkedIn to explore professional opportunities and collaborations.
`;