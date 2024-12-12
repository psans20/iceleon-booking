export default function Product() {
    return (
        <div className="px-6 py-4 md:px-10 md:py-6">
            <h1 className="text-2xl font-semibold mb-4 md:text-3xl">Amstel Nest - an urban retreat for two</h1>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {/* Main large image */}
                <div className="col-span-2 row-span-2">
                    <img
                        src="https://a0.muscache.com/im/ml/photo_enhancement/pictures/4703255/285aabad_original.jpg?im_w=1200&im_format=avif"
                        alt="Main room"
                        className="rounded-lg w-full h-48 md:h-full object-cover"
                    />
                </div>

                {/* Two smaller images on the top right */}
                <img
                    src="https://a0.muscache.com/im/ml/photo_enhancement/pictures/4703269/541300e8_original.jpg?im_w=720&im_format=avif"
                    alt="Detail"
                    className="rounded-lg w-full h-24 md:h-72 object-cover"
                />
                <img
                    src="https://a0.muscache.com/im/ml/photo_enhancement/pictures/4703165/2cb92eac_original.jpg?im_w=720&im_format=avif"
                    alt="Another detail"
                    className="rounded-lg w-full h-24 md:h-72 object-cover"
                />

                {/* Bottom-right smaller images */}
                <img
                    src="https://a0.muscache.com/im/ml/photo_enhancement/pictures/4703177/5e63d6b3_original.jpg?im_w=720&im_format=avif"
                    alt="Detail 3"
                    className="rounded-lg w-full h-24 md:h-72 object-cover"
                />
                <div className="relative">
                    <img
                        src="https://a0.muscache.com/im/ml/photo_enhancement/pictures/4703209/8f8776ab_original.jpg?im_w=720&im_format=avif"
                        alt="Detail 4"
                        className="rounded-lg w-full h-24 md:h-72 object-cover"
                    />
                    <button className="absolute bottom-2 left-2 px-3 py-2 bg-white text-black text-xs md:text-sm font-medium rounded shadow">
                        Show all photos
                    </button>
                </div>
            </div>

            {/* Share and Save buttons */}
            <div className="flex justify-between mt-4 md:mt-6">
                <button className="text-gray-500 underline hover:text-gray-700">Share</button>
                <button className="text-gray-500 underline hover:text-gray-700">Save</button>
            </div>

            {/* Additional screenshot */}
            <div className="mt-10">
                <img
                    src="https://cdn.discordapp.com/attachments/1316609851673153537/1316610443963531355/1web.png"
                    alt="Additional screenshot"
                    className="rounded-lg w-full h-auto"
                />
            </div>
        </div>
    );
}
