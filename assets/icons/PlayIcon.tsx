interface Props {
  colour?: string;
  size?: number;
}

export function PlayIcon({ colour = "#191D1A", size = 12 }: Props) {
  return (
    <svg width={size - 1} height={size} viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10.3335 5.99984L0.833496 11.4847L0.833496 0.515009L10.3335 5.99984Z" fill={colour} />
    </svg>
  );
}
