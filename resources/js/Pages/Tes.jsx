import { textStyle } from "@/styles"

export default function Tes() {
    return(
        <div className="flex flex-col w-3/3 h-screen justify-start items-start p-10">
            <div className="mb-20">
                <h1 className={`${textStyle.h1}`}>Heading 1</h1>
                <p>Font: Telkomsel Batik Sans, Size: 48px, Weight: Bold </p>
            </div>
            <div className="mb-20">
                <h2 className={textStyle.h2}>Heading 2</h2>
                <p>Font: Telkomsel Batik Sans, Size: 32px, Weight: Bold </p>
            </div>
            <div className="mb-20">
                <h3 className={textStyle.h3}>Heading 3 Title In Two Line</h3>
                <p>Font: Telkomsel Batik Sans, Size: 24px, Weight: Bold </p>
            </div>
            <div className="mb-20">
                <p className={textStyle.body}>Body - Most fonts have a particular weight which corresponds to one of the numbers in Common weight name mapping. However some fonts, called variable fonts, can support a range of weights with a more or less fine granularity, and this can give the designer a much closer degree of control over the chosen weight.</p>
                <p>Font: Poppins, Size: 16px, Weight: Reguler </p>
            </div>
            <div className="mb-20">
                <p className={textStyle.bodyHeavy}>Body Heavy - Most fonts have a particular weight which corresponds to one of the numbers in Common weight name mapping. However some fonts, called variable fonts, can support a range of weights with a more or less fine granularity.</p>
                <p>Font: Poppins, Size: 16px, Weight: Reguler </p>
            </div>
            <div className="mb-20">
                <p className={textStyle.bodySm}>Body Small - Most fonts have a particular weight which corresponds to one of the numbers in Common weight name mapping.</p>
                <p>Font: Poppins, Size: 14px, Weight: Reguler </p>
            </div>
            <div className="mb-20">
                <p className={textStyle.bodyHeavySm}>Body Small Heavy</p>
                <p>Font: Poppins, Size: 14px, Weight: SemiBold </p>
            </div>
            <div className="mb-20">
                <a href="#" className={textStyle.links}>Links - See More</a>
                <p>Font: Poppins, Size: 16px, Weight: SemiBold</p>
            </div>
            <div className="mb-20">

            </div>
        </div>
    )
} 