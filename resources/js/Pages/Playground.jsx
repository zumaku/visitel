import { useState } from "react";
import JoditEditor from "jodit-react";

const Editor = ({ placeholder }) => {
	const [content, setContent] = useState('');

	const config = {
		readonly: false,
		placeholder: placeholder || 'Start typings...'
	};

	const handleBlur = (newContent) => {
		setContent(newContent);
	};

    const handleKirim = () => {
        console.log(content);
    }

	return (
		<>
            <JoditEditor
                value={content}
                config={config}
                tabIndex={1} // tabIndex of textarea
                onBlur={handleBlur} // preferred to use only this option to update the content for performance reasons
            />
            <button onClick={handleKirim}>Kirim</button>
        </>
	);
};

export default function Playground() {
    return (
        <div className="w-full flex-center p-10">
            <Editor placeholder={"Editorku"} />
        </div>
    )
}
