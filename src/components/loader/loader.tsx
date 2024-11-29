import "./loader.css";

const Loader = ({ className = "", ...rest }: { className?: string }) => {
  return <div className={`loader ${className}`} {...rest}></div>;
};

export default Loader;
