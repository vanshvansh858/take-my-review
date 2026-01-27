function LoadingSkeleton() {
  return (
    <div style={{
        width: "200px",
        height: "320px",
        borderRadius: "10px",
        background: "#e0e0e0",
        margin: "10px",
        animation: "pulse 1.5s infinite"
      }}
    ></div>
  );
}

export default LoadingSkeleton;