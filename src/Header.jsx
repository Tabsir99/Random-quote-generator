


export default function Header({handleClick}) {
   
    return (
        <header>

            <div id='img'></div>
            <nav>
                <a href='#'>Home</a>
                <a href='https://portfolio-tabsir.vercel.app'>About</a>
                <a id='fav' onClick={handleClick}>Favorite Quotes</a>
            </nav>

        </header>
    )
}
