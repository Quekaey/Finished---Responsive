export default function Header({ children }) {
  return (
    <header 
      className="bg-gradient-to-bottom py-10 max-xl:py-8 max-lg:pb-24 max-md:pt-6 max-md:pb-24"
      role="banner"
      aria-label="Site header"
      data-testid="site-header"
    >
      {children}
    </header>
  );
}
