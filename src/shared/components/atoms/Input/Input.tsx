import { forwardRef, InputHTMLAttributes } from "react";
type InputProps = InputHTMLAttributes<HTMLInputElement> & {
    errors: any;
}

export const Input: React.FC<InputProps> = forwardRef(({ errors, ...rest }, ref: any) => {
    return (
        <>
            <input ref={ref} className={`${errors?.message ? 'border border-red-500' : ''} shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`} {...rest} />
            <p className='text-red-500 text-xs italic'>{errors?.message}</p>
        </>
    )
});