import React, { useState } from 'react';
import showdown from 'showdown';

const MarkdownEditor: React.FC = () => {
    const [markdown, setMarkdown] = useState<string>('');
    const converter = new showdown.Converter();

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setMarkdown(e.target.value);
    };

    const getMarkdownText = (): { __html: string } => {
        const rawMarkup = converter.makeHtml(markdown);
        return { __html: rawMarkup };
    };

    return (
        <div className="min-h-screen flex flex-col items-center bg-gray-100 p-4">
            <h1 className="text-2xl font-bold mb-4">Markdown Editor</h1>
            <div className="flex flex-col md:flex-row w-full max-w-4xl">
                <textarea
                    className="w-full md:w-1/2 h-96 p-4 border border-gray-300 rounded-md shadow-md mb-4 md:mb-0 md:mr-2"
                    value={markdown}
                    onChange={handleChange}
                    placeholder="Enter Markdown text here..."
                />
                <div
                    className="w-full md:w-1/2 h-96 p-4 border border-gray-300 rounded-md shadow-md overflow-auto bg-white"
                    dangerouslySetInnerHTML={getMarkdownText()}
                />
            </div>
        </div>
    );
};

export default MarkdownEditor;
