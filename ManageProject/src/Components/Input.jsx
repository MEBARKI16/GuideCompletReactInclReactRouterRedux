import React from "react";
const Input = React.forwardRef(({ isTextArea, label, ...props }, ref) => {
    const classeInput = "w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600";
    return (
        <p className="flex flex-col gap-1 my-4">
            <label className="text-sm font-bold uppercase text-stone-500">{label}</label>
            {isTextArea ? <textarea ref={ref} className={classeInput} {...props} required /> : <input ref={ref} className={classeInput} {...props} required />}
        </p>
    );
});
export default Input;