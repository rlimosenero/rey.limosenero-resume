const Footer = () => {
  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center text-muted-foreground">
          <p className="text-sm">
            © {new Date().getFullYear()} Rey B. Limosenero. Built with Spring Boot-level precision.
          </p>
          <p className="text-xs mt-2">
            Available for freelance opportunities and full-time positions
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
