interface IAboutArticle {
  id: number;
  image: string;
  alt: string;
  text?: string[];
}

interface ITopic {
  id: number;
  text: string;
}

interface IAboutStudent {
  title: string;
  description: string;
  subtitles: string[];
  topics: ITopic[];
  results: string;
}

interface IAboutResearch {
  title: string;
  description: string;
}

export interface IAboutData {
  articles: IAboutArticle[];
  student: IAboutStudent;
  research: IAboutResearch;
}
