import Link, { LinkProps } from "next/link";
import { forwardRef, HTMLProps } from "react";

export const NextLink = forwardRef<
  HTMLAnchorElement,
  LinkProps & HTMLProps<HTMLAnchorElement>
>(({ href, children, ...rest }, ref) => {
  return (
    <Link legacyBehavior href={href}>
      <a ref={ref} {...rest}>
        {children}
      </a>
    </Link>
  );
});

NextLink.displayName = "NextLink";
