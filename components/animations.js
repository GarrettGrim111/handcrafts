// Hover + clicking

// whileHover={{scale: 1.0}},
// whileTap={{scale: 0.95}}}

export const TextDrop = {
  initial: { y: -260, opacity: 0 },
  animate: { y: 0, opacity: 1, transition: { duration: 0.6 } },
};

export const Stagger = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { staggerChildren: 0.4 } },
  exit: { opacity: 0 },
};

export const PictureChange = {
  initial: { x: 150, y: -20, opacity: 0 },
  animate: { x: 0, opacity: 1 },
  exit: { x: -150, y: 40, opacity: 0 },
};

export const ProfileChange = {
  initial: { x: -150, opacity: 0 },
  animate: { x: 0, opacity: 1, transition: { delay: 1.5 } },
};


