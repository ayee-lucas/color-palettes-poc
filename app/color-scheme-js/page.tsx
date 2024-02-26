import chroma from 'chroma-js';
export default function ColorSchemeJs() {

    const contrastRatio = 5.5
    const white = chroma('white')
    const black = chroma('black')
    const color = chroma('#3A61C3')

    const contrastW = chroma.contrast(color, white)
    const contrastFinal = chroma.contrast(color, contrastW >= contrastRatio ? white : black)
    const text = contrastW >= contrastRatio ? 'white' : 'black'


    return (
        <main className="w-full p-10 ">
            <h1 className="text-2xl font-bold">Color scheme JS</h1>
            <section className="w-full flex flex-col">
                <div className="w-full h-full rounded-lg" style={{backgroundColor: color.hex()}}>
                    <span className="px-2 py-10 text-2xl" style={{color: text }}>{`Color: ${color.hex()} Contrast: ${contrastFinal}`}</span>
                </div>
            </section>
        </main>
    )
}