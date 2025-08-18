export default function Main({ children }) {
  return (
    <main 
      id="main-content"
      role="main"
      aria-label="Main content"
      data-testid="main-content"
      className="relative"
    >
      {children}
    </main>
  );
}
