"use client";

interface AboutAcademyButtonProps {
    title?: string;
}

const AboutAcademyButton = ({ title }: AboutAcademyButtonProps) => {

    return (
        <div className="flex items-center justify-center w-full">
            {/* Gradient border wrapper */}
            <div 
                className="p-0.5 rounded-md inline-block transition-opacity duration-300 w-fit"
                style={{
                    background: "linear-gradient(90deg, #ffffffff 0%, #ffffffff 25%, #ffffffff 60%, transparent 100%)",
                }}
            >
                {/* Button with left-to-right blue-to-transparent bg */}
                <button
                    className="px-3 py-2 sm:px-4 sm:py-2 md:px-5 md:py-2.5 text-sm sm:text-base md:text-lg lg:text-xl font-medium text-white border-none rounded-md cursor-pointer tracking-wide outline-none block transition-all duration-300 "
                    style={{
                        background: "linear-gradient(90deg, #1E40AF 0%, #1D4ED8 50%, rgba(16, 21, 39, 0.6) 100%)",
                    }}
                >
                    {title}
                </button>
            </div>
        </div>
    );
};

export default AboutAcademyButton;
