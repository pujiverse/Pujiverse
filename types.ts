export interface SocialLink {
  name: string;
  url: string;
  icon: React.ElementType; // For React Icons components
}

export interface NavLinkItem {
  name: string;
  path: string;
}

export interface YouTubeVideo {
  id: string;
  title: string;
}
