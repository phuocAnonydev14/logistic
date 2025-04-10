import {BaseEntity, ImageType} from "@/types/app.type";

export interface BlogType extends BaseEntity {
  title_EN?: string;
  title_VN?: string;
  desc_EN?: string;
  desc_VN?: string;
  content_EN?: string;
  content_VN?: string;
  slug?: string;
  thumbnail?: ImageType;
}


