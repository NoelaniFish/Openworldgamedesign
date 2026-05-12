interface ShadowProps {
  x: number;
  y: number;
  width: number;
  height: number;
  offsetY: number;
  zIndex?: number;
}

export function Shadow({ x, y, width, height, offsetY, zIndex = 0 }: ShadowProps) {
  return (
    <div
      className="absolute pointer-events-none"
      style={{
        width: `${width}px`,
        height: `${height}px`,
        left: `${x - width / 2}px`,
        top: `${y + offsetY}px`,
        background: 'radial-gradient(ellipse, rgba(0, 0, 0, 0.3) 0%, transparent 70%)',
        borderRadius: '50%',
        zIndex
      }}
    />
  );
}
