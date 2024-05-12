export interface Article{
    id: number;
    attributes: {
      title: string;
      images: string;
      date: string;
      content: string;
      createdAt: string;
      publishedAt: string;
    };
}