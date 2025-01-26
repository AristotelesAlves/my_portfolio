export function LineGrid() {
    return (
        <div className="grid grid-cols-3 gap-4 p-4">
            {Array.from({ length: 9 }, (_, index) => (
                <div 
                    key={index} 
                    className="border-2 border-gray-300 rounded-lg p-6 flex items-center justify-center text-gray-700 text-lg font-medium"
                >
                    Cell {index + 1}
                </div>
            ))}
        </div>
    );
}
