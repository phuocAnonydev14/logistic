export interface Category extends BaseEntity{
  name_VN: string;
  name_EN: string;
  slug: string;
  image: string;
  description_VN?: string;
  description_EN?: string;
  products: Product[];
}

export interface Product extends BaseEntity{
  name_VN: string;
  name_EN: string;
  slug: string;
  images: ImageType[];
  description_VN: string; // html string
  description_EN: string; // html string
  ingredients: string; // html string
  price_VND: number;
  price_USD: number;
  category: Category;
}


export interface BaseEntity {
  id: number
  createdAt?: string;
  updatedAt?: string;
  deletedAt?: string;
}

export interface ImageType {
  id: number;
  imageUrl: string;
  type: string;
  collect_id: number;
  set_id: number;
}


export interface GetAllFilter {
  limit?: number;
  page?: number;
  order?: string;
  filter?: Record<any, any> | {};
  search?: any;
}


export interface Pagination {
  limit: number,
  page: number,
  totalItems: number,
  totalPages: number
}
