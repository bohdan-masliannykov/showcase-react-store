import { useNavigate } from "react-router-dom";

export const BackButton = () => {
    const navigate = useNavigate();

    return (
        <div onClick={() => navigate(-1)} className="cursor-pointer inline-flex items-center gap-x-1 text-sm text-gray-800 hover:text-blue-600 dark:text-neutral-200 dark:hover:text-blue-500">
            <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6" /></svg>
            Back
        </div>
    )
}