function GlowOrb({
  color = "default",
  position = "left-0 top-0",
  className = "",
  translateX = "-50%",
  translateY = "-50%",
}) {
  const colors = {
    purple: "rgba(181, 65, 255, 0.36)",
    blue: "rgba(32, 125, 255, 0.28)",
    default: "rgba(255, 255, 255, 0.14)",
  };
  const resolvedColor =
    color?.startsWith?.("#") || color?.startsWith?.("rgb") ? color : colors[color] || colors.default;

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute z-[-1] size-[20rem] rounded-full blur-[120px] animate-glow-float md:size-[26rem] ${position} ${className}`}
      style={{
        backgroundColor: resolvedColor,
        "--glow-x": translateX,
        "--glow-y": translateY,
      }}
    />
  );
}

export default GlowOrb;
