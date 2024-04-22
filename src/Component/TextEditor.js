import React, { useState, useEffect } from "react";
import Quill from "quill";
import "quill/dist/quill.snow.css";

const TextEditor = () => {
    const [quill, setQuill] = useState(null);

    useEffect(() => {
        const editor = new Quill("#editor-container", {
            theme: "snow",
            modules: {
                toolbar: [
                    [{ header: [1, 2, 3, 4, 5, 6, false] }],
                    ["bold", "italic", "underline"],
                    [{ list: "ordered" }, { list: "bullet" }],
                ],
            },
        });
        setQuill(editor);

        // Load saved data from localStorage when component mounts
        const savedData = localStorage.getItem("editorData");
        if (savedData) {
            editor.setContents(JSON.parse(savedData));
        }

        // Specify empty dependency array to run effect only once
    }, []);

    const saveData = () => {
        if (quill) {
            const delta = quill.getContents();
            const formattedData = JSON.stringify(delta);
            // Save data to localStorage
            localStorage.setItem("editorData", formattedData);
            console.log("Data saved successfully");
        }
    };

    return (
        <div>
            <div id="editor-container"></div>
            <button onClick={saveData}>Save</button>
        </div>
    );
}

export default TextEditor