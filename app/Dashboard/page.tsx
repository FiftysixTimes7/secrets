
export default function Dashboard() {
    return (
        <div className="flex min-h-screen">
            <div className="w-1/4 bg-gray-200 p-4">
                Sidebar content here
            </div>
            <div className="flex flex-col items-center justify-center p-4">
                <div className="mb-4">
                    <label htmlFor="title" className="block text-lg font-semibold text-center">Title:</label>
                    <input
                        type="text"
                        id="title"
                        className="w-full p-2 border border-gray-300 rounded place-content-center"
                        placeholder="Enter your title here"
                    />
                </div>
                <div className="mb-4 w-full">
                    <label htmlFor="content" className="block text-lg font-semibold text-center">What's Your
                        Secret:</label>
                    <textarea
                        id="content"
                        className="w-1/2 h-48 p-2 border border-gray-300 rounded"
                        placeholder="Type your text here"
                    />
                </div>
                <div className="flex items-center justify-between w-full">
                    <label htmlFor="toggle-public-private" className="flex items-center cursor-pointer">
                        <div className="relative">
                            <input
                                type="checkbox"
                                id="toggle-public-private"
                                className="sr-only"
                            />
                            <div className="block bg-gray-600 w-14 h-8 rounded-full"></div>
                            <div
                                className={`dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition-transform `}></div>
                        </div>
                        <div className="ml-3 text-gray-700 font-medium">
                        </div>
                    </label>
                </div>
            </div>
        </div>
    );
}