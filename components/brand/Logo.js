import Image from "next/image";

export default function Logo({
  size = 28,
  showWordmark = true,
  variant = "green",
  className = "",
}) {
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <Image
        src={
          variant === "white"
            ? "/ledgview-mark-white.png"
            : "/ledgview-mark-green.png"
        }
        width={size}
        height={size}
        alt="Ledgview logo"
        className="shrink-0"
      />
      {showWordmark && (
        <span className="font-semibold tracking-tight text-ink">ledgview</span>
      )}
    </span>
  );
}
