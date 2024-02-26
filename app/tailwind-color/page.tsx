import tailwindColorPalette from '@ky-is/tailwind-color-palette'
export default function TailwindColor(){
    const primaryColors = tailwindColorPalette('#f44336', {name: 'primary', grayscale: true, ui: true})

    console.log(primaryColors)

    return (
        <main>
            <div className={`text-[${primaryColors.primary['700']}]`} style={{color: primaryColors.primary['700']}}>
                hola
            </div>
        </main>
    )
}