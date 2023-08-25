import { ReactNode } from "react";

const BlockHighlight = ({ children, color }: { children: ReactNode, color: string }) => {
    return (
        <span className={`block absolute -inset-1 -skew-y-3 bg-${color} relative inline-block mb-3 p-2 opacity-90`}>
            {children}
        </span>
    )
};

export default BlockHighlight;