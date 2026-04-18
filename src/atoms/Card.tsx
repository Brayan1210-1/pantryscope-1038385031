import type { ReactNode } from "react";

interface CardProp {
    children: ReactNode;
}


export const Card = ({ children }: CardProp) => {
    return (
        <div className="h-80 w-100 bg-green-100 justify-center-safe justify-items-center 
        rounded-md">
            {children}
        </div>
    )
}
