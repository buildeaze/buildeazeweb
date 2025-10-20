export const inputStyles = {
  base: `
    w-full
    px-4 py-3
    rounded-xl
    border border-[#E5DDD2]
    bg-white
    text-[#2F2F2F]
    placeholder:text-[#6F6F6F]
    focus:outline-none focus:ring-2 focus:ring-[#1A472A]/20 focus:border-[#1A472A]
    transition-all duration-300
  `,
  search: `
    pl-12 pr-4
    bg-white/90 backdrop-blur-sm
    focus:bg-white
  `,
  select: `
    appearance-none
    bg-no-repeat
    bg-[right_1rem_center]
    pr-10
  `,
  checkbox: `
    w-5 h-5
    rounded-lg
    border-[#E5DDD2]
    text-[#1A472A]
    focus:ring-[#1A472A]/20
    focus:ring-offset-2
    transition-shadow
  `,
  radio: `
    w-5 h-5
    rounded-full
    border-[#E5DDD2]
    text-[#1A472A]
    focus:ring-[#1A472A]/20
    focus:ring-offset-2
    transition-shadow
  `,
};