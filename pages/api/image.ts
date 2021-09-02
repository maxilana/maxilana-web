// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

/*import sharp from 'sharp';
import axios from 'axios';*/

interface Data {
  name: string;
}

/*interface TransformOptions {
  blur?: number;
  cropMode?: 'entropy' | 'attention';
  height: number;
  width: number;
  quality: number;
  format: 'jpg' | 'webp';
}

const download = (url: string) =>
  axios({
    method: 'get',
    url,
    responseType: 'stream',
  }).then((response) => response.data);

const isNumeric = (n: string | number) => !isNaN(parseFloat(n as string)) && isFinite(n as number);

const transform = ({ blur, height, width, quality, format = 'jpg' }: TransformOptions) => {
  const sharpObj = sharp();
  // Width and height set...
  if (Number.isInteger(height) && Number.isInteger(width)) {
    sharpObj.resize(width, height);

    // Only width set...
  } else if (isNumeric(width)) {
    sharpObj.resize(width);

    // Only height set...
  } else if (isNumeric(height)) {
    sharpObj.resize(null, height);
  }

  // Blur
  if (blur && isNumeric(blur)) {
    // Clamp between 0.3 and 1000
    sharpObj.blur(Math.min(1000, Math.max(blur, 0.3)));
  }

  // JPEG quality
  if (format === 'jpg') {
    sharpObj.jpeg({
      quality: isNumeric(quality) ? Math.max(1, Math.min(100, quality)) : 80,
    });
  } else {
    sharpObj.webp({
      quality: isNumeric(quality) ? Math.max(1, Math.min(100, quality)) : 80,
    });
  }
  return sharpObj;
};*/

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  /*const { url, w, h, q, blur } = req.query;

  const format =
    req?.headers?.accept && req?.headers?.accept.includes('image/webp') ? 'webp' : 'jpg';

  download(decodeURIComponent(url as string))
    .then((response) =>
      response
        .pipe(
          transform({
            blur: parseInt(blur as string),
            height: parseInt(h as string),
            width: parseInt(w as string),
            quality: parseInt(q as string),
            format,
          }),
        )
        .pipe(res),
    )
    .catch((err) => {
      res.status(404).send('');
    });*/
  res.status(200).json({ name: 'Jhon Lennon' });
}
