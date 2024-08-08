export enum ImageType {
  JPEG = "image/jpeg",
  PNG = "image/png",
  SVG = "image/svg+xml",
}

export type RequestedImage = {
  readonly height: number;
  readonly width: number;
  readonly url: string;
  readonly type: ImageType;

  readonly base64Encode: () => string;
};

const validateImageType = (type: ImageType) => {
  switch (type) {
    case ImageType.JPEG:
    case ImageType.PNG:
    case ImageType.SVG:
      return;
    default:
      const formattedAcceptedTypes = Object.keys(ImageType)
        .map((type, _) => `'${type}'`)
        .join(",");
      throw new Error(
        `Unsupported image type '${type}'. Accepted types are [${formattedAcceptedTypes}].`
      );
  }
};

export function getImageFromUrl({
  url,
  type,
}: {
  url: string;
  type: ImageType;
}): Promise<RequestedImage> {
  validateImageType(type);

  return new Promise((resolve, reject) => {
    const image = new Image();
    image.src = url;
    image.crossOrigin = "anonymous";

    image.onload = () => {
      resolve({
        height: image.height,
        width: image.width,
        url,
        type,
        base64Encode: () => base64EncodeImage({ image, type }),
      });
    };
    image.onerror = () => reject();
  });
}

export const base64EncodeImage = ({
  image,
  type,
}: {
  image: HTMLImageElement;
  type: ImageType;
}): string => {
  validateImageType(type);

  const canvas = document.createElement("canvas");
  canvas.width = image.width;
  canvas.height = image.height;

  const ctx = canvas.getContext("2d");
  if (!ctx) {
    throw new Error("no context found on the canvas");
  }
  ctx.drawImage(image, 0, 0);

  return canvas.toDataURL(type);
};
