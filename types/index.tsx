export type UserProps = {
    "id": number;
    "name": string;
    "surname": string;
    "profile_image": string;
}

export type PostProps = {
      "id": number;
      "user"?: UserProps;
      "title": string;
      "content"?: string;
      "featured_image_url":string;
      "published_at": string;
 }

 export interface PostCardProps {
   post: PostProps;
   itemsCount: number;
}

export interface PostsdProps {
  posts: PostProps[];
}

export interface UserInfoProps {
  user: UserProps;
}