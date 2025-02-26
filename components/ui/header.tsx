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




"use client";

import Logo from "./logo";

export default function Header({ show = false }) {
  if (!show) return null;

  return (
    <header className="z-30 mt-2 w-full md:mt-5">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Header container with flex to center the logo */}
        <div className="relative flex h-14 items-center justify-center rounded-2xl bg-gray-900/90 px-3">
          {/* Centered Logo */}
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <Logo />
          </div>
        </div>
      </div>
    </header>
  );
}
