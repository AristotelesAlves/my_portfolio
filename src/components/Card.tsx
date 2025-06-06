import LogoCard from "./LogoCard";

export default function Card() {


    const stask = ['kotlin', 'androidstudio', 'java', 'docker'];

    return (
        <div className="p-2 border-2 border-[#303030] rounded-xl w-72 h-96 backdrop-blur-md text-white flex flex-col gap-4">
            <div className="w-full flex justify-center items-center">
            <img 
                className="max-h-60 w-full object-cover rounded-lg border-2 border-[#303030]" 
                src="https://i.pinimg.com/736x/f4/95/34/f49534a88b9b720c4b0857ec164c0132.jpg" 
                alt="Imagem do projeto" 
            />
            </div>

            <div className="flex flex-col gap-2 w-full h-full flex-1">
                <h2>Work Hub - Mobile</h2>
                <p>Aplicativo mobile de um site de prestação de serviços</p>
                <div className="flex">
                {stask.map((item, index) => (
                    <div
                        key={index}
                        className={`w-12 flex items-center p-2 border bg-black rounded-full border-[#303030] ${index !== 0 ? '-ml-3' : ''}`}
                        style={{ zIndex: stask.length - index }}
                    >
                        <LogoCard logoName={item} width={35} height={35} />
                    </div>
                ))}
            </div>
            </div>
        </div>
    )
}