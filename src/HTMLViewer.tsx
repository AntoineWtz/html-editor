import React, { useState } from 'react';
import showdown from 'showdown';

const HTMLEditor: React.FC = () => {
    const [html, setHTML] = useState<string>('');
    const converter = new showdown.Converter();

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setHTML(e.target.value);
    };

    const getHtmlText = (): { __html: string } => {
        const rawMarkup = converter.makeHtml(html);
        return { __html: rawMarkup };
    };

    return (
        <div className="min-h-screen flex flex-col items-center bg-gray-50 p-4">
            <h1 className="text-2xl font-bold m-4">HTML Editor</h1>
            <p className="text-gray-600 text-center m-4">Enter HTML in the left box and see the preview on the right.</p>
            <div className="flex flex-col md:flex-row w-full max-w-4xl">
                <textarea
                    className="w-full m-2 md:w-1/2 h-96 p-4 border border-gray-300 rounded-md shadow-md mb-4 md:mb-0 md:mr-2"
                    value={html}
                    onChange={handleChange}
                    placeholder="Copy HTML here..."
                />
                <div
                    className="w-full m-2 md:w-1/2 h-96 p-4 border border-gray-300 rounded-md shadow-md overflow-auto bg-white"
                    dangerouslySetInnerHTML={getHtmlText()}
                />
            </div>
        </div>
    );
};

export default HTMLEditor;
