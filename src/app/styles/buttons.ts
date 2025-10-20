const baseButtonStyles = `
  transition-all duration-300
  font-medium
  rounded-xl
  flex items-center justify-center gap-2
`;

export const buttonStyles = {
  primary: `
    ${baseButtonStyles}
    bg-[#1A472A] hover:bg-[#143621]
    text-white
    shadow-lg shadow-[#1A472A]/15 hover:shadow-[#1A472A]/25
  `,
  secondary: `
    ${baseButtonStyles}
    bg-[#F9F6F2] hover:bg-[#EFE9E1]
    text-[#2F2F2F]
    border border-[#E5DDD2]
  `,
  accent: `
    ${baseButtonStyles}
    bg-[#DAA520] hover:bg-[#C69320]
    text-white
    shadow-lg shadow-[#DAA520]/20 hover:shadow-[#DAA520]/30
  `,
  outline: `
    ${baseButtonStyles}
    border-2 border-[#1A472A]
    text-[#1A472A] hover:text-white
    hover:bg-[#1A472A]
  `,
  ghost: `
    ${baseButtonStyles}
    text-[#2F2F2F] hover:text-[#1A472A]
    hover:bg-[#1A472A]/10
  `,
  sizes: {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  },
};