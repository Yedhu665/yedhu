export function PortfolioFooter() {
  return (
    <footer className="py-8 border-t border-border">
      <div className="section-container flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Yedhukrishna JC. All rights reserved.
        </p>
        <p className="text-sm text-muted-foreground">
          Built with React & Tailwind CSS
        </p>
      </div>
    </footer>
  );
}
