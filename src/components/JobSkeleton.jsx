function JobSkeleton() {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        padding: "16px",
        marginBottom: "12px",
        borderRadius: "6px",
        backgroundColor: "#f5f5f5",
      }}
    >
      <div style={{ height: "20px", width: "60%", background: "#ddd" }} />
      <div
        style={{
          height: "14px",
          width: "40%",
          background: "#e0e0e0",
          marginTop: "8px",
        }}
      />
    </div>
  );
}

export default JobSkeleton;
