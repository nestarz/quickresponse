import QRCode from "qrcode";

export default ({ query: { text, dark, light, width, scale, margin } }, res) =>
  QRCode.toFileStream(
    res.writeHead(200, { "Content-Type": "image/png" }),
    text,
    {
      width,
      scale,
      margin,
      color: { dark, light },
    }
  );
