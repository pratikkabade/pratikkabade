import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import { githubURL, readmeURL } from "../constants/NameData";

export const About = () => {
    const [sections, setSections] = useState<string[]>([]);

    useEffect(() => {
        fetch(readmeURL)
            .then((res) => res.text())
            .then((text) => {
                const parts = text.split(/(?=^## )/m);

                const filtered = parts.filter(
                    (part) => !part.trimStart().toLowerCase().startsWith("## connect")
                );

                // filtered chunks:
                // [0] intro (before first ##)
                // [1] ## current projects
                // [2] ## 🕰️ legacy work
                // [3] ## what i'm doing
                // [4] ## philosophy  ← now its own screen

                const screen1 = filtered.slice(0, 2).join("\n");
                const screen2 = filtered.slice(2, 3).join("\n");
                const screen3 = filtered.slice(3, 4).join("\n");
                const screen4 = filtered.slice(4).join("\n");

                setSections([screen1, screen2, screen3, screen4]);
            })
            .catch((err) => console.error("Error loading README:", err));
    }, []);

    return (
        <>
            {sections.map((section, index) => (
                <div
                    key={index}
                    className="h-screen text-white p-4 w-3/4 max-md:w-full mx-auto md overflow-y-auto"
                >
                    {index === 0 && (
                        <a
                            href={githubURL}
                            target="_blank"
                            rel="noreferrer"
                            className="font-mono text-xs block mb-2 opacity-60 mt-10 w-fit"
                        >
                            pratikkabade/README.md
                        </a>
                    )}
                    <ReactMarkdown
                        remarkPlugins={[remarkGfm]}
                        rehypePlugins={[rehypeRaw]}
                    >
                        {section}
                    </ReactMarkdown>
                </div>
            ))}
        </>
    );
};