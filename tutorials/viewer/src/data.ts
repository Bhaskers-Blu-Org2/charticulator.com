export interface TutorialCaption {
    section?: string;

    timeBegin?: number;
    timeEnd?: number;
    text?: string;
}

export interface TutorialMetadata {
    name: string;
    category: string;
    thumbnail: string;
    videoSource: {
        webm?: string;
        mp4?: string;
    };
    duration: number;
    captions: TutorialCaption[];
}