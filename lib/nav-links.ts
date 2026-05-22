export type NavLinkItem = {
  label: string
  href: string
}

export const primaryNavLinks: NavLinkItem[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/#contact" },
]

export const heroNavLinks: NavLinkItem[] = [
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "#contact" },
]
