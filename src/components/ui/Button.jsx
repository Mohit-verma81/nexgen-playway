export default function Button({ href, children, variant = 'primary', className = '', ...props }) {
  const cls = `btn-${variant} ${className}`.trim()
  if (href) return <a href={href} className={cls} {...props}>{children}</a>
  return <button className={cls} {...props}>{children}</button>
}
