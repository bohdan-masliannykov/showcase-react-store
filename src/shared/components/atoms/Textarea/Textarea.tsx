import { forwardRef, TextareaHTMLAttributes } from "react";
type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
    errors: any;
}
export const Textarea: React.FC<TextareaProps> = forwardRef(({ errors, ...rest }, ref: any) => {
    return (
        <>
            <textarea ref={ref} className={`${errors?.message ? 'border border-red-500' : ''} shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`} {...rest} ></textarea>
            <p className='text-red-500 text-xs italic'>{errors?.message}</p>
        </>
    );
});