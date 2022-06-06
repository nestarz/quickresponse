import QRCode from "qrcode";

export default ({ query: { text, dark, light, width, scale, margin } }, res) =>
  QRCode.toFileStream(
    res.writeHead(200, {
      "Content-Type": "image/png",
      "Cache-Control": `s-maxage=${86400 * 30}, stale-while-revalidate`,
    }),
    text,
    {
      width,
      scale,
      margin,
      color: { dark, light },
    }
  );
