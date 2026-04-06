export default function CirclePhoto({ src, alt, size = "h-16 w-16" }) {
  return (
    <img
      src={src}
      alt={alt}
      className={`${size} rounded-full object-cover ring-4 ring-white shadow-md`}
    />
  );
}

