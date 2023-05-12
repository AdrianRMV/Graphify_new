function Header() {
    return (
        <>
            <div className="bg-[#2C2C2C] w-full flex h-9 items-center">
                <div className="left-content-header w-1/4 bg-sky-500 h-full flex items-center justify-center">
                    {/* Logo */}
                    {/* Flecha */}
                    {/* Cuadrado */}
                    {/* Circulo */}
                    {/* Linea */}
                    {/* Texto */}
                    Hola
                </div>
                <div className="center-content-header w-2/4 text-center text-white">
                    Name
                </div>
                <div className="right-content-header w-1/4">
                    {/* Menu de usuario (Cerrar Sesion, etc...) */}
                    <div className="user-bubble"></div>
                    {/* Button Share */}
                    <a href="#" className="rounded-md bg-sky-500">
                        Share
                    </a>
                </div>
            </div>
        </>
    );
}

export default Header;
