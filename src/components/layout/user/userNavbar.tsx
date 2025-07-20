
// import React from "react";
// import { Button } from "@/components/ui/button";

// type NavLink = {
//   label: string;
//   href: string;
// };

// const navLinks: NavLink[] = [
//   { label: "About Us", href: "/about" },
//   { label: "Booking", href: "/booking" },
//   { label: "Event", href: "/event" },
// ];

// const UserNavbar: React.FC = () => {
//   return (
//     <header className="text-gray-600 body-font">
//       <div className="container flex flex-col flex-wrap items-center px-8 py-1 mx-auto md:flex-row">
//         <a
//           className="flex items-center mb-4 font-medium text-purple-700 title-font md:mb-0"
//           href="#"
//         >
//           <span className="ml-3 text-xl">Logo</span>
//         </a>
//         <nav className="flex flex-wrap items-center justify-center text-base md:mr-auto md:ml-4 md:py-1 md:pl-4">
//           {navLinks.map((link, index) => (
//             <a
//               key={index}
//               href={link.href}
//               className="mr-5 text-purple-700 hover:text-gray-500"
//             >
//               {link.label}
//             </a>
//           ))}
//         </nav>
//         <div className="p-4 text-purple-700 border-purple-700">
//           <Button variant="outline">Login</Button>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default UserNavbar;
