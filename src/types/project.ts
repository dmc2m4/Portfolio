export interface ProjectMedia {
    type: "image" | "video";
    src: string;
    thumbnail?: string;
}

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