import imageExists from '~/api/imageExists';

const imageBaseURL = process.env.NEXT_PUBLIC_PRODUCT_IMAGES_BASEURL;
if (!imageBaseURL) {
  throw Error('Environment variable NEXT_PUBLIC_PRODUCT_IMAGES_BASEURL is missing');
}

const galleryLimit = 5;

const generateProductGallery = async (code: string, result: string[] = []): Promise<string[]> => {
  const image = result.length + 1;
  const url = `${imageBaseURL}/${code}_${image}.jpg`;
  if (image <= galleryLimit && (await imageExists(url))) {
    return generateProductGallery(code, [...result, url]);
  }
  return [`${imageBaseURL}/${code}.jpg`, ...result];
};

export default generateProductGallery;
