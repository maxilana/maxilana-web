interface ItemId {
  id: number;
  itemID: string;
}

export interface CMSFilters {
  id: number;
  search: string | null;
  categories: ItemId[];
  products: ItemId[];
}
