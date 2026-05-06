export type ResponsiveImageProps = {
  smallSrc: string;
  largeSrc: string;
  alt?: string;
  className?: string;
  sizes?: string;
};
export default function ResponsiveImage({
  smallSrc,
  largeSrc,
  alt = "",
  className = "",
  sizes = "(max-width: 640px) calc(100vw - 40px), 640px",
}: ResponsiveImageProps) {
  return (
    <img
      src={new URL(smallSrc, import.meta.url).href}
      srcSet={`
        ${new URL(smallSrc, import.meta.url).href} 335w,
        ${new URL(largeSrc, import.meta.url).href} 624w
      `}
      sizes={sizes}
      alt={alt}
      className={className}
      loading="lazy"
    />
  );
}
