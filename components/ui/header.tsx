// "use client";

// import Logo from "./logo";
// export default function Header({ show = false }) {
//   if (!show) return null;

//   return (
//     <header className="z-30 mt-2 w-full md:mt-5">
//       <div className="mx-auto max-w-6xl px-4 sm:px-6">
//         <div className="relative flex h-14 items-center justify-center rounded-2xl bg-gray-900/90 px-3">
//           <div className="flex items-center gap-2">
//             <Logo />
//             <span className="text-white text-lg font-semibold"></span>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// }

// "use client";

// import Logo from "./logo";

// export default function Header() {
//   return (
//     <header className="absolute top-4 left-1/2 transform -translate-x-1/2 z-30">
//       <div className="flex justify-center">
//         <Logo />
//       </div>
//     </header>
//   );
// }




"use client";

import { useState } from "react";
import { Menu } from "lucide-react";
import Logo from "./logo";

export default function Header({ show = false }) {
  const [isOpen, setIsOpen] = useState(false);

  if (!show) return null;

  return (
    <header className="z-30 mt-2 w-full md:mt-5">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative flex h-14 items-center justify-between rounded-2xl bg-gray-900/90 px-3">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Logo />
            <span className="text-white text-lg font-semibold"></span>
          </div>

          {/* Navigation Menu */}
          <nav className="hidden md:flex gap-6 text-white font-medium">
            <a href="#about" className="hover:text-gray-400">About</a>
            <a href="#work" className="hover:text-gray-400">Work</a>
            <a href="#contact" className="hover:text-gray-400">Contact</a>
            <a href="#resume" className="hover:text-gray-400">Resume</a>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white p-2" 
            onClick={() => setIsOpen(!isOpen)}
          >
            <Menu size={24} />
          </button>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="absolute top-full right-0 mt-2 w-48 bg-gray-800 rounded-md shadow-lg md:hidden">
              <a href="#about" className="block px-4 py-2 text-white hover:bg-gray-700">About</a>
              <a href="#work" className="block px-4 py-2 text-white hover:bg-gray-700">Work</a>
              <a href="#contact" className="block px-4 py-2 text-white hover:bg-gray-700">Contact</a>
              <a href="#resume" className="block px-4 py-2 text-white hover:bg-gray-700">Resume</a>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
