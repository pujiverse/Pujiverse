import { IconType } from 'react-icons';

export interface SocialLink {
  name: string;
  url: string;
  icon: IconType;
}

export interface NavLinkItem {
  name: string;
  path: string;
}

export interface YouTubeVideo {
  id: string;
  title: string;
}

export interface Project {
  title: string;
  description: string;
  githubUrl: string;
  liveUrl?: string;
}

export interface SocialCategory {
  title: string;
  links: SocialLink[];
}