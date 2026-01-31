import "./loading.css";

function LoadingSkeleton() {
  return (
    <div className="skeleton-card">
      <div className="skeleton-poster shimmer"></div>
      <div className="skeleton-info">
        <div className="skeleton-title shimmer"></div>
        <div className="skeleton-subtitle shimmer"></div>
      </div>
    </div>
  );
}

export default LoadingSkeleton;
