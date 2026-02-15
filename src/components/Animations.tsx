import { useEffect, useRef, useState } from "react";

function useIntersectionObserver() {
    const [isVisible, setVisible] = useState(false);
    const domRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => setVisible(entry.isIntersecting));
        });

        const el = domRef.current;
        if (el) observer.observe(el);
        return () => { if (el) observer.unobserve(el); };
    }, []);

    return { isVisible, domRef };
}

export function FadeInSection({ children }: { children: React.ReactNode }) {
    const { isVisible, domRef } = useIntersectionObserver();
    return (
        <div className={`fade-in-section w-fit ${isVisible ? "is-visible" : ""}`} ref={domRef}>
            {children}
        </div>
    );
}

export function MoveDownSection({ children }: { children: React.ReactNode }) {
    const { isVisible, domRef } = useIntersectionObserver();
    return (
        <div className={`move-down-section h-fit w-fit ${isVisible ? "is-visible" : ""}`} ref={domRef}>
            {children}
        </div>
    );
}