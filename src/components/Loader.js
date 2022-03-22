const Loader = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column"
      }}
    >
      <div className="loader"></div>
      <h2>Markdown Editor</h2>
    </div>
  );
};

export default Loader;
