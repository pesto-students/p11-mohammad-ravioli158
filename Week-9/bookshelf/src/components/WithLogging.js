// Higher-Order Component (HOC)
export const WithLogging = (Component) => (props) => {
  console.log(`${Component.name} rendered`);
  return <Component {...props} />;
};

