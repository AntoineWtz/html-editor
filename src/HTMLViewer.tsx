import React, { useState } from 'react';

const HTMLViewer: React.FC = () => {
    const [htmlText, setHtmlText] = useState<string>('');

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setHtmlText(e.target.value);
    };

    return (
        <div className="min-h-screen flex flex-col items-center bg-gray-100 p-4">
            <h1 className="text-2xl font-bold mb-4">Simple HTML Editor</h1>
            <div className="flex flex-col md:flex-row w-full max-w-4xl">
                <textarea
                    className="w-full md:w-1/2 h-96 p-4 border border-gray-300 rounded-md shadow-md mb-4 md:mb-0 md:mr-2"
                    value={htmlText}
                    onChange={handleChange}
                    placeholder="Enter HTML text here..."
                />
                <div
                    className="w-full md:w-1/2 h-96 p-4 border border-gray-300 rounded-md shadow-md overflow-auto bg-white"
                >
                    <pre>{htmlText}</pre>
                </div>
            </div>
        </div>
    );
};

export default HTMLViewer;
