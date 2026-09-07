import { Typography } from "@material-tailwind/react";

const footerNav = [
  { name: "Products", href: "/products" },
  { name: "Pricing", href: "/pricing" },
  { name: "Privacy Policy", href: "/privacy" },
  { name: "Terms of Service", href: "/terms" },
  { name: "Contact", href: "/contact" },
];

const currentYear = new Date().getFullYear();

export function FooterTwo() {
  return (
    <footer className="mt-10 px-8 pt-12 pb-6 border-t border-blue-gray-50">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8">
          <div className="text-center md:text-left">
            <Typography variant="h4" color="blue-gray" className="mb-1">
              Home Cloud LLC
            </Typography>
            <Typography color="gray" className="font-normal text-sm">
              Take back control. Own your photos, media, and private data at home.
            </Typography>
          </div>

          <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {footerNav.map((item) => (
              <li key={item.name}>
                <Typography
                  as="a"
                  href={item.href}
                  color="gray"
                  className="text-sm font-normal transition-colors hover:text-blue-gray-900"
                >
                  {item.name}
                </Typography>
              </li>
            ))}
          </ul>
        </div>

        <div className="border-t border-blue-gray-50 pt-6 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-4">
          <Typography color="gray" className="text-xs font-normal">
            &copy; {currentYear} Home Cloud LLC. All rights reserved.
          </Typography>
          <Typography color="gray" className="text-xs font-normal">
            Designed for privacy & local data ownership.
          </Typography>
        </div>
      </div>
    </footer>
  );
}

export default FooterTwo;
