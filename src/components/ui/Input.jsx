import React from "react";

const Input = ({
  label,
  name,
  type = "text",
  placeholder,
  register,
  error,
  className = "",
  wrapperClass = "",
  ...rest
}) => {
  return (
    <div className={`w-full ${wrapperClass}`}>
      {label && (
        <label
          htmlFor={name}
          className="block mb-1 text-sm sm:text-lg font-medium text-gray-950"
        >
          {label}
        </label>
      )}

      <div className="relative">
        <input
          id={name}
          name={name}
          type={type}
          placeholder={placeholder}
          {...(register && register(name))}
          className={`w-full px-4 py-3 rounded-lg outline-none transition-all
            bg-gray-200 bg-opacity-15 placeholder:text-gray-500
            focus:ring-2 focus:ring-white/30
            ${className}
          `}
          {...rest}
        />
      </div>

      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  );
};

export default Input;
