export default function Title({ children }) {
    return (
        <h2 className="text-5xl md:text-6xl lg:text-7xl
        font-bold text-center mt-8 mb-[60px] text-white"
        >
            {children}
        </h2>
    );
}
