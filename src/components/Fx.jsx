function Fx({
  color = "default",
  position = "left-0 top-0", //position
  className = "", // For responsive desing
  translateX = "-50%", //translateX
  translateY = "-50%", //translateY
}) {
  const colors = {
    purple: "#8800ff5b",
    blue: "#009dff5b",
    default: "#ffffff33",
  };
  const backgroundColor = colors[color] || colors.default;
  return (
    <div
      className={`absolute ${position}
         w-[500px] h-[500px] 
        rounded-full z-[-1] blur-[200px]
        animate-blob
        translate-x-[${translateX}] translate-y-[${translateY}]
        ${className}`}
      style={{
        backgroundColor,
      }}
    ></div>
  );
}

export default Fx;
