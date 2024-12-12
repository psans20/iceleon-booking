export default function Product() {
    return (
        <div className="px-6 py-4 md:px-72 md:py-6 mx-6">
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

            {/* Additional Section */}
            <div className="mt-8">
            <h1 className="text-lg font-semibold mb-4 md:text-xl">Room in Watergraafsmeer, Netherlands</h1>
            <p>1 double bed Private attached bathroom</p>

            <div className="mt-8 border-b p-4 border-gray-300">
                        <div className="flex items-center">
                            <img
                                src="https://a0.muscache.com/im/pictures/user/1b70958a-abe7-47f8-995c-391afcea7310.jpg?im_w=240&im_format=avif"
                                alt="Superhost"
                                className="w-12 h-12 rounded-full mr-4"
                            />
                            <div>
                                <p className="font-semibold">Hosted by Rob & Fang</p>
                                <p className="text-gray-600 text-sm">Superhost &#x2022; 13 years hosting</p>
                            </div>
                        </div>
                    </div>
                

            </div>
        </div>
    );
}
