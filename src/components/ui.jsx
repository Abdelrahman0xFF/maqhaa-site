import { cn } from './cn'

export function Container({ className, children }) {
  return <div className={cn('mx-auto w-full max-w-6xl px-4 sm:px-6', className)}>{children}</div>
}

export function SectionHeading({ title, description, center = true }) {
  return (
    <div className={cn('mb-12 flex flex-col gap-3', center && 'items-center text-center')}>
      <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">{title}</h2>
      {description && (
        <p className="max-w-2xl text-base leading-relaxed text-muted-foreground">{description}</p>
      )}
    </div>
  )
}

export function Badge({ children, className }) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3 py-1 text-sm font-semibold text-foreground shadow-sm',
        className
      )}
    >
      {children}
    </span>
  )
}

export function Button({ children, variant = 'primary', className, ...props }) {
  const styles = {
    primary:
      'bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm shadow-primary/20',
    outline:
      'border border-border bg-card text-foreground hover:bg-accent hover:text-accent-foreground',
    ghost: 'text-foreground hover:bg-accent hover:text-accent-foreground',
  }
  return (
    <button
      className={cn(
        'inline-flex items-center justify-center gap-2 rounded-lg px-5 py-3 text-base font-bold',
        styles[variant],
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}
