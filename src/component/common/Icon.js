export default function Icon({ name, className = '', ...restProps }) {
  return <i className={`icon-${name} ${className}`} {...restProps} />;
}
