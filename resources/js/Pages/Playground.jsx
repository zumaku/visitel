import React, { useEffect, useRef } from "react";
import "quill/dist/quill.snow.css";
import Quill from "quill/core";
import Toolbar from "quill/modules/toolbar";
import Snow from "quill/themes/snow";
import Bold from "quill/formats/bold";
import Italic from "quill/formats/italic";
import Header from "quill/formats/header";

Quill.register({
    "modules/toolbar": Toolbar,
    "themes/snow": Snow,
    "formats/bold": Bold,
    "formats/italic": Italic,
    "formats/header": Header,
});

const Playground = () => {
    const quillRef = useRef(null);

    useEffect(() => {
        if (quillRef.current) {
            new Quill(quillRef.current, {
                theme: "snow",
            });
        }
    }, []);

    return <div id="editor" ref={quillRef} />;
};

export default Playground;
