import React, { useEffect, useRef } from "react";
import "quill/dist/quill.snow.css";
import Quill from "quill";
import Toolbar from "quill/modules/toolbar";
import Snow from "quill/themes/snow";
import Image from "quill/formats/image";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";

Quill.register({
    "modules/toolbar": Toolbar,
    "themes/snow": Snow,
    "formats/image": Image,
});

const EditorText = ({ setEditorHtml }) => {
    const quillRef = useRef(null);

    useEffect(() => {
        if (quillRef.current) {
            const quill = new Quill(quillRef.current, {
                theme: "snow",
                modules: {
                    toolbar: [
                        [{ header: [1, 2, 3, false] }],
                        ["bold", "italic"],
                        [{ list: "ordered" }, { list: "bullet" }],
                        ["image"],
                        ["link"],
                    ],
                },
            });

            // Menangani saat gambar dimasukkan ke editor
            quill.getModule("toolbar").addHandler("image", () => {
                const input = document.createElement("input");
                input.setAttribute("type", "file");
                input.setAttribute("accept", "image/*");
                input.click();

                // Menangani pemilihan gambar
                input.onchange = async () => {
                    const file = input.files[0];
                    const formData = new FormData();
                    formData.append("image", file);

                    try {
                        // Mengirimkan gambar ke backend
                        const response = await axios.post(
                            "/upload-image",
                            formData,
                            {
                                headers: {
                                    "Content-Type": "multipart/form-data",
                                },
                            }
                        );

                        // Mendapatkan URL gambar dari backend
                        const imageUrl = response.data.imageUrl;

                        // Sisipkan gambar ke dalam editor menggunakan URL gambar yang sudah diunggah
                        const range = quill.getSelection(true);
                        quill.insertEmbed(range.index, "image", imageUrl);
                    } catch (error) {
                        console.error("Failed to upload image:", error);
                    }
                };
            });

            // Menangkap perubahan konten dalam editor
            quill.on("text-change", () => {
                const html = quill.root.innerHTML;
                setEditorHtml(html);
            });
        }
    }, []);

    return (
        <div id="editor" ref={quillRef} />
    );
};

export default EditorText;
