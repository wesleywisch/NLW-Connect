import type { ComponentProps } from "react";

interface IconButtonProps extends ComponentProps<'button'> {
  children: React.ReactNode;
}

export function IconButton({ children, ...props }: IconButtonProps) {
  return (
    <button 
      className="p-1.5 bg-gray-500 text-blue rounded-md cursor-pointer transition-colors duration-300 hover:bg-blue hover:text-gray-900"
      children={children}
      {...props}
    />
  )
}