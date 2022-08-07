export default function writeWorldFile(
  data: {
    xScale: number | string;
    ySkew: number | string;
    xSkew: number | string;
    yScale: number | string;
    xOrigin: number | string;
    yOrigin: number | string;
  },
  options?: { debug?: boolean; sep?: string }
): string;
