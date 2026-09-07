export default function BackgroundFX() {
  return (
    <>
      {/* tactical grid, fades toward the bottom */}
      <div className="fx-grid pointer-events-none fixed inset-0 z-0" aria-hidden />
      {/* film grain */}
      <div className="fx-noise pointer-events-none fixed inset-0 z-40 opacity-[0.05]" aria-hidden />
      {/* CRT scanlines above everything, very subtle */}
      <div className="fx-scan pointer-events-none fixed inset-0 z-40 opacity-25" aria-hidden />
      {/* vignette to pull focus inward */}
      <div className="fx-vignette pointer-events-none fixed inset-0 z-40" aria-hidden />
    </>
  );
}
