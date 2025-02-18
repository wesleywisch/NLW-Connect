import { ComponentProps } from "react";

interface InputRootProps extends ComponentProps<'div'> {
  error?: boolean;
}

interface InputIconProps extends ComponentProps<'span'> {
  children?: React.ReactNode;
}

interface InputFieldProps extends ComponentProps<'input'> {
  children?: React.ReactNode;
}

export function InputRoot({ error = false, ...props }: InputRootProps) {
  return(
    <div 
      data-error={error}
      className="group bg-gray-800 h-12 border border-gray-600 rounded-xl px-4 flex items-center gap-2 focus-within:border-gray-100 data-[error=true]:border-danger"
      {...props}
    />
  )
}

export function InputIcon({ children, ...props }: InputIconProps) {
  return(
    <span 
      className="text-gray-400 group-focus-within:text-gray-100 group-[&:not(:has(input:placeholder-shown))]:text-gray-100 group-data-[error=true]:text-danger"
      children={children}
      {...props}
    />
  )
}

export function InputField({ children, ...props }: InputFieldProps) {
  return(
    <input 
      className="flex-1 outline-none placeholder-gray-400"
      children={children}
      {...props}
    />
  )
}