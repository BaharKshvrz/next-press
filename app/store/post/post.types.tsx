export type Post = {
  "id": number;
  "title": string;
  "featured_image_url":string;
  "published_at": string;
}

export interface RecentlyViewedState {
  posts: Post[];
}