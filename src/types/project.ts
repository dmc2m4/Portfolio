export type ProjectMedia =
    | {
        type: "image";
        src: string;
        alt?: string;
        caption?: string;
    }
    | {
        type: "video";
        src: string;
        poster?: string;
        caption?: string;
    };

export interface Project {
    id: string;
    title: string;
    headline: string;
    category: string;
    description: string;
    thumbnail: string;
    technologies: string[];
    media: ProjectMedia[];
    url?: string;
}