export const DesktopOnly = () => {};

export const MobileOnly = ({ children }) => {
  return <div className="mobile-only">{children}</div>;
};
