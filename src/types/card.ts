export interface Card {
  id: string;
  title: string;
  description: string;
  created_at: string;
}

export interface CreateCardDto {
  title: string;
  description: string;
}

export interface UpdateCardDto {
  id: string;
  title?: string;
  description?: string;
}
