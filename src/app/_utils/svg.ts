/**
 * Converts a string into a base64 encoded string.
 */
export const toBase64 = (str: string) =>
  typeof window === 'undefined'
    ? Buffer.from(str).toString('base64')
    : window.btoa(str);

/**
 * Converts an XML string to an embeddable data URL.
 */
export const toDataURL = (xml: string):`data:image/${string}` =>
  `data:image/svg+xml;base64,${toBase64(xml)}`;

/**
 * Creates a loading animation/skeleton by defining an SVG with XML.
 */
export const loadingSkeletonXML = (
  w: number,
  h: number,
  bgColor: string,
  swipeColor: string,
) => `
    <svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <defs>
        <linearGradient id="g">
          <stop stop-color="${bgColor}" offset="20%" />
          <stop stop-color="${swipeColor}" offset="50%" />
          <stop stop-color="${bgColor}" offset="70%" />
        </linearGradient>
      </defs>
      <rect width="${w}" height="${h}" fill="${bgColor}" />
      <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
      <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
    </svg>
  `;
