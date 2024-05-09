


export default function Header({handleClick}) {
   
    return (
        <header>

            <img src="/designer.png" width={40} alt="Logo"/>
            <nav>
                <a href='#'>Home</a>
                <a href='https://portfolio-tabsir.vercel.app'>About</a>
                <a id='fav' onClick={handleClick}>Favorites</a>
            </nav>

        </header>
    )
}