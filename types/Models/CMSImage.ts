export interface CMSImage {
  id: number;
  name: string;
  alternativeText: string;
  caption: string;
  width: number;
  height: number;
  formats: string | null;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  provider: string;
  provider_metadata: string;
  created_at: string;
  updated_at: string;
}
