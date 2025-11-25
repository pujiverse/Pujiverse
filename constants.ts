import { 
  FaYoutube, FaInstagram, FaFacebookF, FaLinkedinIn, 
  FaTiktok, FaPatreon, FaSnapchatGhost, FaPinterest, FaReddit, 
  FaQuora, FaBlogger, FaTumblr, FaMedium, FaVimeo, FaGithub, 
  FaProductHunt, FaBehance, FaDribbble, FaDiscord, FaWhatsapp, 
  FaTelegramPlane, FaGlobe, FaFilm
} from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { SiSubstack, SiBluesky, SiRumble, SiDailymotion } from 'react-icons/si';
import { NavLinkItem, SocialLink, YouTubeVideo, Project, SocialCategory } from './types';

export const SITE_NAME = 'Pujiverse';
export const TAGLINE = 'Connecting creativity, tech, and ideas.';
export const SHORT_BIO = `
Hello! I'm Pujith Sakhamuri, a passionate creator exploring the intersections of technology, innovation, and engaging content. 
This is my digital home, where you can find all my adventures, projects, and insights. 
Join me on this journey as we connect, learn, and grow together!
`;

export const PROFILE_IMAGE_URL = 'https://github.com/pujiverse.png'; 

export const CONTACT_EMAIL = 'techwithpujith@gmail.com';
export const WHATSAPP_LINK = 'https://wa.me/message/HPIAGRGKO23SM1'; 

export const YOUTUBE_CHANNEL_LINK = 'https://youtube.com/@PujiverseTech';
export const INSTAGRAM_LINK = 'https://instagram.com/pujiverseofficial';
export const FACEBOOK_PAGE_LINK = 'https://www.facebook.com/pujithsakhamuri';
export const TELEGRAM_CHANNEL_LINK = 'https://t.me/pujiverse';
export const X_PROFILE_LINK = 'https://x.com/pujiverse';
export const LINKEDIN_PROFILE_LINK = 'https://www.linkedin.com/in/pujiverse-pujith-700819392/';

export const TELEGRAM_CHANNEL_DESCRIPTION = `
Join the Pujiverse Telegram channel for exclusive updates, behind-the-scenes content, and direct notifications about new projects and videos. 
It's the fastest way to stay connected with everything happening in the Pujiverse!
`;

export const LINKEDIN_SUMMARY = `
I am a passionate technology enthusiast and creator with a strong background in software development and digital content creation. 
My journey involves exploring the latest in AI, web development, and creative tech. 
I enjoy building tools that solve real-world problems and sharing my knowledge through various media channels. 
Connect with me to discuss technology, innovation, and potential collaborations.
`;

// Primary Socials for Footer/Hero
export const SOCIAL_LINKS: SocialLink[] = [
  { name: 'YouTube', url: 'https://youtube.com/@PujiverseTech', icon: FaYoutube },
  { name: 'Instagram', url: 'https://instagram.com/pujiverseofficial', icon: FaInstagram },
  { name: 'X', url: 'https://x.com/pujiverse', icon: FaXTwitter },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/pujiverse-pujith-700819392/', icon: FaLinkedinIn },
  { name: 'GitHub', url: 'https://github.com/pujiverse', icon: FaGithub },
  { name: 'Discord', url: 'https://discord.gg/pujiverse', icon: FaDiscord },
];

export const HEADER_NAV_LINKS: NavLinkItem[] = [
  { name: 'Home', path: '/' },
  { name: 'Projects', path: '/projects' },
  { name: 'Social Hub', path: '/socials' },
  { name: 'Contact', path: '/contact' },
];

export const PROJECTS: Project[] = [
  {
    title: "My Professional Portfolio",
    description: "A comprehensive online portfolio showcasing IT career experience, projects, GitHub repositories, and social media presence.",
    githubUrl: "https://github.com/pujithchowdarys/my-protfolio",
    liveUrl: "https://pujith-sakhamuri-portfolio.vercel.app/"
  },
  {
    title: "Pujiverse Creation Spark",
    description: "An application that takes an idea and generates creative content like songs, stories, or narrations with downloadable lyrics and voiceovers in multiple languages.",
    githubUrl: "https://github.com/pujithchowdarys/Creative-Spark",
    liveUrl: "https://pujiverse-creative-spark.vercel.app/"
  },
  {
    title: "Recipe Voice-over Generator",
    description: "Generate cooking voice-overs from recipe steps and nutritional information in multiple languages.",
    githubUrl: "https://github.com/pujithchowdarys/Recipe-Voice-over-Generator",
    liveUrl: "https://pujiverse-recipe-voice-over-generat.vercel.app/"
  },
  {
    title: "YouTube Video Creator",
    description: "Generate perfect YouTube video scripts, voiceovers, and background music for any category to streamline your content creation process.",
    githubUrl: "https://github.com/pujithchowdarys/PujiVerse-Video-Content-Creator",
    liveUrl: "https://puji-verse-video-content-creator.vercel.app/"
  },
  {
    title: "Pujith Connects",
    description: "A personal website centralizing Pujith Sakhamuri's online presence, including social media, projects, and contact information.",
    githubUrl: "https://github.com/pujithchowdarys/Pujiverse",
    liveUrl: "https://pujiverse.vercel.app/"
  },
  {
    title: "Pujiverse Presentation Generator",
    description: "Generate animated PowerPoint presentations with voiceovers and video on any topic using AI. Enter a topic, and the app will create slide content, generate a corresponding voiceover, and allow you to download both the PPTX file, audio, and a combined video.",
    githubUrl: "https://github.com/pujithchowdarys/AI-Animated-Presentation-Generator"
  },
  {
    title: "Business Manager Pro",
    description: "A comprehensive web application to manage daily business, chits, household expenses, and loans with insightful summary reports. This app provides a clean, intuitive interface for all your financial tracking needs.",
    githubUrl: "https://github.com/pujithchowdarys/biz-manager",
    liveUrl: "https://biz-manager-eight.vercel.app/#/"
  },
  {
    title: "Text-to-Video Generator",
    description: "A sophisticated web application that transforms textual prompts into high-quality videos using the Gemini API. Users can specify aspect ratio and resolution for their creations.",
    githubUrl: "https://github.com/pujithchowdarys/text-to-video",
    liveUrl: "https://pujiverse-text-to-video.vercel.app/"
  },
  {
    title: "Movie Storyteller & Live AI",
    description: "Generate movie stories, analyze video transcripts, engage in real-time conversations, and get answers using Gemini AI with text-to-speech narration.",
    githubUrl: "https://github.com/pujithchowdarys/movie-subtitle-to-story",
    liveUrl: "https://pujiverse-subtitle-to-story.vercel.app/"
  },
  {
    title: "PPT Voiceover Generator",
    description: "Generates voiceovers for each 'slide' of text input, allowing playback and download.",
    githubUrl: "https://github.com/pujithchowdarys/PPT-Voiceover-Generator",
    liveUrl: "https://pujiverse-ppt-voiceover-generator.vercel.app/"
  },
  {
    title: "VidPrompt Studio",
    description: "A browser-based web app that allows creators to upload videos, enter prompts to generate scripts and cut timeframes, automatically trim, combine, and narrate scenes, edit the result with an in-browser video editor, and download the final video locally.",
    githubUrl: "https://github.com/pujithchowdarys/VidPrompt-Studio_new",
    liveUrl: "https://pujiverse-vid-prompt-studio-new.vercel.app/"
  },
  {
    title: "Smart Scene Cutter",
    description: "Get video and cut the scenes as described.",
    githubUrl: "https://github.com/pujithchowdarys/SmartSceneCutter",
    liveUrl: "https://smart-scene-cutter.vercel.app/"
  }
];

export const SOCIAL_CATEGORIES: SocialCategory[] = [
  {
    title: "The Pujiverse Empire (YouTube)",
    links: [
      { name: 'Pujiverse Tech', url: 'https://www.youtube.com/@PujiverseTech', icon: FaYoutube },
      { name: 'Pujiverse Calm', url: 'https://www.youtube.com/@PujiverseCalm', icon: FaYoutube },
      { name: 'Pujiverse Shorts', url: 'https://www.youtube.com/@PUJIVERSE-AI', icon: FaYoutube },
      { name: 'Pujiverse Stories', url: 'https://www.youtube.com/@PujiverseStories', icon: FaYoutube },
      { name: 'Pujiverse Kids', url: 'https://www.youtube.com/@PujiverseKids', icon: FaYoutube },
      { name: 'PujiVerse Wisdom', url: 'https://www.youtube.com/@PujiVerseWisdom', icon: FaYoutube },
      { name: 'Pujiverse Mythos', url: 'https://www.youtube.com/@PujiverseMythos', icon: FaYoutube },
      { name: 'Pujiverse Gaming', url: 'https://www.youtube.com/@PujiverseGaming', icon: FaYoutube },
      { name: 'Pujiverse News', url: 'https://www.youtube.com/@PujiverseNews', icon: FaYoutube },
      { name: 'Pujiverse Cine', url: 'https://www.youtube.com/@PujiverseCine', icon: FaYoutube },
      { name: 'Pujiverse History', url: 'https://www.youtube.com/@PujiverseHistory', icon: FaYoutube },
      { name: 'PujiVerse Beatz', url: 'https://www.youtube.com/@PujiVerseBeatz', icon: FaYoutube },
      { name: 'Pujiverse Wealth', url: 'https://www.youtube.com/@PujiverseWealth', icon: FaYoutube },
      { name: 'Pujiverse Fit', url: 'https://www.youtube.com/@PujiverseFit', icon: FaYoutube },
      { name: 'Pujiverse Lingo', url: 'https://www.youtube.com/@PujiverseLingo', icon: FaYoutube },
      { name: 'Pujiverse Vibes', url: 'https://www.youtube.com/@PujiverseVibes', icon: FaYoutube },
      { name: 'Pujiverse Vlogs', url: 'https://www.youtube.com/@PujiverseVlogs', icon: FaYoutube },
      { name: 'Pujiverse Food', url: 'https://www.youtube.com/@PujiverseFood', icon: FaYoutube },
    ]
  },
  {
    title: "Social Networks",
    links: [
      { name: 'Instagram', url: 'https://www.instagram.com/pujiverseofficial', icon: FaInstagram },
      { name: 'Facebook', url: 'https://www.facebook.com/pujithsakhamuri', icon: FaFacebookF },
      { name: 'X (Twitter)', url: 'https://x.com/pujiverse', icon: FaXTwitter },
      { name: 'LinkedIn', url: 'https://www.linkedin.com/in/pujiverse-pujith-700819392/', icon: FaLinkedinIn },
      { name: 'TikTok', url: 'https://www.tiktok.com/@pujiverse', icon: FaTiktok },
      { name: 'Snapchat', url: 'https://snapchat.com/t/pujiverse', icon: FaSnapchatGhost },
      { name: 'Pinterest', url: 'https://in.pinterest.com/pujiverse/', icon: FaPinterest },
      { name: 'Reddit', url: 'https://www.reddit.com/user/pujiverse', icon: FaReddit },
      { name: 'Bluesky', url: 'https://bsky.app/profile/pujiverse.bsky.social', icon: SiBluesky },
      { name: 'Threads', url: 'https://www.threads.net/@pujiverseofficial', icon: FaGlobe },
    ]
  },
  {
    title: "Tech & Creativity",
    links: [
      { name: 'GitHub', url: 'https://github.com/pujiverse', icon: FaGithub },
      { name: 'Product Hunt', url: 'https://www.producthunt.com/@pujiverse', icon: FaProductHunt },
      { name: 'Behance', url: 'https://www.behance.net/pujithsakhamu', icon: FaBehance },
      { name: 'Dribbble', url: 'https://dribbble.com/pujiverse', icon: FaDribbble },
      { name: 'Patreon', url: 'https://www.patreon.com/pujiverse', icon: FaPatreon },
      { name: 'Discord', url: 'https://discord.gg/pujiverse', icon: FaDiscord },
    ]
  },
  {
    title: "Blogs & Knowledge",
    links: [
      { name: 'Medium', url: 'https://medium.com/@pujiverse', icon: FaMedium },
      { name: 'Quora', url: 'https://www.quora.com/profile/Pujiverse', icon: FaQuora },
      { name: 'Blogger', url: 'https://pujiverse.blogspot.com', icon: FaBlogger },
      { name: 'Tumblr', url: 'https://www.tumblr.com/pujiverse', icon: FaTumblr },
      { name: 'Substack', url: 'https://substack.com/@pujiverse', icon: SiSubstack },
    ]
  },
  {
    title: "Video Platforms",
    links: [
      { name: 'Rumble', url: 'https://rumble.com/user/pujiverse', icon: SiRumble },
      { name: 'Vimeo', url: 'https://vimeo.com/pujiverse', icon: FaVimeo },
      { name: 'Dailymotion', url: 'https://www.dailymotion.com/pujiverse', icon: SiDailymotion },
      { name: 'Likee', url: 'https://l.likee.video/p/pujiverse', icon: FaFilm }, 
      { name: 'Trendo', url: 'https://s.trendo.vip/Jjoq', icon: FaFilm }, 
      { name: 'Moj', url: 'https://mojapp.in/@pujiverse', icon: FaFilm }, 
    ]
  },
  {
    title: "Direct Contact",
    links: [
      { name: 'WhatsApp', url: 'https://wa.me/message/HPIAGRGKO23SM1', icon: FaWhatsapp },
      { name: 'Telegram', url: 'https://t.me/pujiverse', icon: FaTelegramPlane },
    ]
  }
];

export const YOUTUBE_FEATURED_VIDEOS: YouTubeVideo[] = [
  { id: 'dQw4w9WgXcQ', title: 'Welcome to Pujiverse' },
  { id: 'anotherVideoID', title: 'Latest Tech Review' },
  { id: 'yetAnotherID', title: 'Vlog: A Day in the Life' },
];