import { Section } from "./Section";

export function Products() {

    return (
        <div className="w-full ">
            <Section name={'Our Portfolio'}></Section>
            <div className="space-y-24">

                {/* First Section */}
                <div className="flex flex-wrap md:space-y-5 lg:space-y-0 items-center justify-center">
                    <figure className="relative w-full lg:w-1/2">
                        <img className="w-full rounded-t-lg md:rounded-lg" src="/products/spun-yarn-synthetic.webp" alt="image description" />
                        <figcaption className="px-1 md:px-4 text-left w-full font-semibold space-y-5">
                            <p className="p-1 md:p-4 bg-opacity-30 bg-black rounded-lg absolute uppercase text-white top-2 md:top-6 text-md md:text-xl lg:text-3xl">Spun Yarn</p>
                            <p className="p-2 bg-opacity-30 bg-black rounded-lg absolute text-white tracking-tighter bottom-2 md:bottom-6 text-xs md:text-md lg:text-lg">COTTON : Natural (Raw White), Melange, Solid Dyed</p>
                        </figcaption>
                    </figure>
                    <div className="relative overflow-x-auto w-full lg:w-1/2 lg:px-5">
                        <table className="bg-white bg-opacity-80 rounded-lg w-full text-sm text-left text-gray-500">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-100">
                                <tr>
                                    <th scope="col" className="px-2 py-3 sm:px-6">Product name</th>
                                    <th scope="col" className="px-2 py-3 sm:px-6">Color</th>
                                    <th scope="col" className="px-2 py-3 sm:px-6">Category</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-b">
                                    <th scope="row" className="px-2 py-1 sm:px-6 font-medium text-gray-900 whitespace-nowrap">
                                        Cotton
                                    </th>
                                    <td className="px-2 py-1 sm:px-6">
                                        100%
                                    </td>
                                    <td className="px-2 py-1 sm:px-6">
                                        Raw White, Melange, Solid Dyed
                                    </td>
                                </tr>
                                <tr className="border-b">
                                    <th scope="row" className="px-2 py-1 sm:px-6 font-medium text-gray-900 whitespace-nowrap">
                                        Cotton Spun
                                    </th>
                                    <td className="px-2 py-1 sm:px-6">
                                        Open End, Ring Spun
                                    </td>
                                    <td className="px-2 py-1 sm:px-6">
                                        8s to 20s,
                                        10s to 80s
                                    </td>
                                </tr>
                                <tr className="border-b ">
                                    <th scope="row" className="px-2 py-1 sm:px-6 font-medium text-gray-900 whitespace-nowrap">
                                        Yarn Type
                                    </th>
                                    <td className="px-2 py-1 sm:px-6">
                                        Raw White
                                    </td>
                                    <td className="px-2 py-1 sm:px-6">
                                        Carded. Combed, Compact, BCI, Organic
                                    </td>
                                </tr>
                                <tr className="border-b ">
                                    <th scope="row" className="px-2 py-1 sm:px-6 font-medium text-gray-900 whitespace-nowrap">
                                        Cotton Blends
                                    </th>
                                    <td className="px-2 py-1 sm:px-6">
                                        blends
                                    </td>
                                    <td className="px-2 py-1 sm:px-6">
                                        Modal, Polyester, Viscose
                                    </td>
                                </tr>
                                <tr className="border-b ">
                                    <th scope="row" className="px-2 py-1 sm:px-6 font-medium text-gray-900 whitespace-nowrap">
                                        Ply
                                    </th>
                                    <td className="px-2 py-1 sm:px-6">
                                        Single & Double
                                    </td>
                                    <td className="px-2 py-1 sm:px-6">
                                        10s to 40s, in some case upto 80s
                                    </td>
                                </tr>
                                <tr className="border-b ">
                                    <th scope="row" className="px-2 py-1 sm:px-6 font-medium text-gray-900 whitespace-nowrap">
                                        Cotton
                                    </th>
                                    <td className="px-2 py-1 sm:px-6">
                                        Single
                                    </td>
                                    <td className="px-2 py-1 sm:px-6">
                                        Spandex/Lycra Corespun
                                    </td>
                                </tr>
                                <tr className="">
                                    <th scope="row" className="px-2 py-1 sm:px-6 font-medium text-gray-900 whitespace-nowrap">
                                        Cotton
                                    </th>
                                    <td className="px-2 py-1 sm:px-6">
                                        Carpets
                                    </td>
                                    <td className="px-2 py-1 sm:px-6">
                                        Ne 8s to 20s Multifold
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Second Section */}
                <div className="flex flex-wrap md:space-y-5 lg:space-y-0 items-center justify-center">
                    <figure className="relative w-full lg:w-1/2">
                        <img className="w-full rounded-t-lg md:rounded-lg" src="/products/synthetic-yarn-dyed-2.webp" alt="image description" />
                        <figcaption className="px-1 md:px-4 text-left w-full font-semibold space-y-5">
                            <p className="p-1 md:p-4 bg-opacity-30 bg-black rounded-lg absolute uppercase text-white top-2 md:top-6 text-md md:text-xl lg:text-3xl">Spun Yarn</p>
                            <p className="p-2 bg-opacity-30 bg-black rounded-lg absolute text-white tracking-tighter bottom-2 md:bottom-6 text-xs md:text-md lg:text-lg">SYNTHETIC : Natural (Raw White), Melange, Solid Dyed</p>
                        </figcaption>
                    </figure>
                    <div className="relative overflow-x-auto w-full lg:w-1/2 lg:px-5">
                        <table className="bg-white bg-opacity-80 rounded-lg w-full text-sm text-left text-gray-500">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-100">
                                <tr>
                                    <th scope="col" className="px-2 py-3 sm:px-6">Product name</th>
                                    <th scope="col" className="px-2 py-3 sm:px-6">Color</th>
                                    <th scope="col" className="px-2 py-3 sm:px-6">Category</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-b">
                                    <th scope="row" className="px-2 py-1 sm:px-6 font-medium text-gray-900 whitespace-nowrap">
                                        Polyester
                                    </th>
                                    <td className="px-2 py-1 sm:px-6">
                                        100%
                                    </td>
                                    <td className="px-2 py-1 sm:px-6">
                                        Raw White, Melange, Solid Dyed
                                    </td>
                                </tr>
                                <tr className="border-b">
                                    <th scope="row" className="px-2 py-1 sm:px-6 font-medium text-gray-900 whitespace-nowrap">
                                        Viscose
                                    </th>
                                    <td className="px-2 py-1 sm:px-6">
                                        100%
                                    </td>
                                    <td className="px-2 py-1 sm:px-6">
                                        Raw White, Melange, Solid Dyed
                                    </td>
                                </tr>
                                <tr className="border-b">
                                    <th scope="row" className="px-2 py-1 sm:px-6 font-medium text-gray-900 whitespace-nowrap">
                                        Poly/Vis
                                    </th>
                                    <td className="px-2 py-1 sm:px-6">
                                        blends
                                    </td>
                                    <td className="px-2 py-1 sm:px-6">
                                        Raw White, Melange, Solid Dyed
                                    </td>
                                </tr>
                                <tr className="border-b">
                                    <th scope="row" className="px-2 py-1 sm:px-6 font-medium text-gray-900 whitespace-nowrap">
                                        Poly/Cotton
                                    </th>
                                    <td className="px-2 py-1 sm:px-6">
                                        blends
                                    </td>
                                    <td className="px-2 py-1 sm:px-6">
                                        Raw White, Melange, Solid Dyed
                                    </td>
                                </tr>
                                <tr className="border-b">
                                    <th scope="row" className="px-2 py-1 sm:px-6 font-medium text-gray-900 whitespace-nowrap">
                                        Count Range
                                    </th>
                                    <td className="px-2 py-1 sm:px-6">
                                        Ne
                                    </td>
                                    <td className="px-2 py-1 sm:px-6">
                                        10s to 40s, in some case up to 60s
                                    </td>
                                </tr>
                                <tr className="border-b">
                                    <th scope="row" className="px-2 py-1 sm:px-6 font-medium text-gray-900 whitespace-nowrap">
                                        Ply
                                    </th>
                                    <td className="px-2 py-1 sm:px-6">
                                        Single & Double
                                    </td>
                                    <td className="px-2 py-1 sm:px-6">
                                        10s to 40s, in some case up to 60s
                                    </td>
                                </tr>
                                <tr className="">
                                    <th scope="row" className="px-2 py-1 sm:px-6 font-medium text-gray-900 whitespace-wrap md:whitespace-nowrap">
                                        Poly, Poly/Cot, Viscose
                                    </th>
                                    <td className="px-2 py-1 sm:px-6">
                                        Carpets
                                    </td>
                                    <td className="px-2 py-1 sm:px-6">
                                        Ne 8s to 20s Multifold
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Third Section */}
                <div className="flex flex-wrap md:space-y-5 lg:space-y-0 items-center justify-center">
                    <figure className="relative w-full lg:w-1/2">
                        <img className="w-full rounded-t-lg md:rounded-lg" src="/products/filament-yarn.webp" alt="image description" />
                        <figcaption className="px-1 md:px-4 text-left w-full font-semibold space-y-5">
                            <p className="p-1 md:p-4 bg-opacity-30 bg-black rounded-lg absolute uppercase text-white top-2 md:top-6 text-md md:text-xl lg:text-3xl">Filament Yarn</p>
                            <p className="p-2 bg-opacity-30 bg-black rounded-lg absolute text-white tracking-tighter bottom-2 md:bottom-6 text-xs md:text-md lg:text-lg">SYNTHETIC : Natural (Raw White), Melange, Solid Dyed</p>
                        </figcaption>
                    </figure>
                    <div className="relative overflow-x-auto w-full lg:w-1/2 lg:px-5">
                        <table className="bg-white bg-opacity-80 rounded-lg w-full text-sm text-left text-gray-500">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-100">
                                <tr>
                                    <th scope="col" className="px-2 py-3 sm:px-6">Product name</th>
                                    <th scope="col" className="px-2 py-3 sm:px-6">Color</th>
                                    <th scope="col" className="px-2 py-3 sm:px-6">Category</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-b">
                                    <th scope="row" className="px-2 py-1 sm:px-6 font-medium text-gray-900 whitespace-nowrap">
                                        Polyester
                                    </th>
                                    <td className="px-2 py-1 sm:px-6">
                                        100%
                                    </td>
                                    <td className="px-2 py-1 sm:px-6">
                                        <ul className="list-disc pl-5">
                                            <li>Semi Dull</li>
                                            <li>Full Dull</li>
                                            <li>Dope Dyed</li>
                                            <li>Bright</li>
                                            <li>Crimp</li>
                                            <li>Melange</li>
                                            <li>Fancy Yarn</li>
                                        </ul>
                                    </td>

                                </tr>
                                <tr className="border-b">
                                    <th scope="row" className="px-2 py-1 sm:px-6 font-medium text-gray-900 whitespace-nowrap">
                                        Polyester
                                    </th>
                                    <td className="px-2 py-1 sm:px-6">
                                        100%
                                    </td>
                                    <td className="px-2 py-1 sm:px-6">
                                        <table className="min-w-full">
                                            <tbody>
                                                <tr>
                                                    <td className="md:px-2 py-1">DTY</td>
                                                    <td className="md:px-2 py-1">Draw Texturised Yarn</td>
                                                </tr>
                                                <tr>
                                                    <td className="md:px-2 py-1">FDY</td>
                                                    <td className="md:px-2 py-1">Fully Drawn Yarn</td>
                                                </tr>
                                                <tr>
                                                    <td className="md:px-2 py-1">ATY</td>
                                                    <td className="md:px-2 py-1">Air Textured Yarn</td>
                                                </tr>
                                                <tr>
                                                    <td className="md:px-2 py-1">POY</td>
                                                    <td className="md:px-2 py-1">Partially Oriented Yarn</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </td>

                                </tr>
                                <tr className="">
                                    <th scope="row" className="px-2 py-1 sm:px-6 font-medium text-gray-900 whitespace-nowrap">
                                        Viscose
                                    </th>
                                    <td className="px-2 py-1 sm:px-6">
                                        100%
                                    </td>
                                    <td className="px-2 py-1 sm:px-6">
                                        Filament Yarns
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

