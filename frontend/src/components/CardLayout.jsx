function CardLayout({ children, title }) {
  return (
    <div className="page-container">
      <div className="page-card">
        {title && <h2>{title}</h2>}
        {children}
      </div>
    </div>
  );
}

export default CardLayout;
