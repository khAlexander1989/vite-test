function HelloWorld() {
  return (
    <div>
      <h2>HelloWorld Component</h2>
      <h3>{import.meta.env.VITE_APP_NAME}</h3>
    </div>
  );
}

export default HelloWorld;
