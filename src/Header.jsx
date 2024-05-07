


export default function Header({handleClick}) {
   
    return (
        <header>

            <img src="/public/designer.png" width={40}/>
            <nav>
                <a href='#'>Home</a>
                <a href='https://portfolio-tabsir.vercel.app'>About</a>
                <a id='fav' onClick={handleClick}>Favorite Quotes</a>
            </nav>

        </header>
    )
}