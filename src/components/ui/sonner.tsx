import { Toaster as Sonner, toast } from 'sonner';

type ToasterProps = React.ComponentProps<typeof Sonner>;

/**
 * Toast host. The upstream shadcn version pulled `next-themes` in purely to
 * read a theme value; this site is always dark-first and drives its palette
 * from CSS variables, so that dependency is unnecessary.
 */
const Toaster = (props: ToasterProps) => (
  <Sonner
    theme="dark"
    position="bottom-right"
    className="toaster group"
    toastOptions={{
      classNames: {
        toast:
          'group toast font-mono !border !border-primary-green/30 !bg-surface/95 !text-text-base !backdrop-blur-xl !rounded-none',
        title: '!text-fluid-sm !font-bold',
        description: '!text-text-muted !text-fluid-xs',
        actionButton: '!bg-primary-green !text-black',
        cancelButton: '!bg-muted !text-text-muted',
      },
    }}
    {...props}
  />
);

export { Toaster, toast };
