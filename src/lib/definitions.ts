export type ImagePlaceholder = {
  id: string;
  description: string;
  imageUrl: string;
  imageHint: string;
  width: number;
  height: number;
};

export type SubCategory = {
  slug: string;
  name: string;
};

export type Project = {
  slug: string;
  title: string;
  category: string; // e.g. 'residential'
  subcategory?: string; // e.g. 'flats'
  categoryName: string;
  subcategoryName?: string;
  location: string;
  year: number;
  description: string;
  coverImageId: string;
  galleryImageIds: string[];
};

export type Category = {
  slug: string;
  name: string;
  description: string;
  imageId: string;
  subcategories?: SubCategory[];
};

export type Award = {
  year: number;
  title:string;
  project: string;
  organization: string;
};
