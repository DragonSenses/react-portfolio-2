import React from "react";

export default function Navbar() {
  const links = [
    ["Blog", "https://google.com"],
    ["Email", "mailto:me@example.com"],
    ["GitHub", "https://github.com/DragonSenses"],
  ];

  return (
    <div className="sticky-0 flex justify-between items-center gap-4 sm:gap-8
      p-4 text-xs sm:text-sm">
      <a className='text-sm sm:text-base' href='/'>Navbar Title Header</a>

      <div className="flex items-center gap-4">
        {links.map((link, index) => {
          return (
            <a href={link[1]} target="_blank" rel="noreferrer">
              {link[0]}
            </a>
          );
        })}
      </div>
    </div>
  );
}
