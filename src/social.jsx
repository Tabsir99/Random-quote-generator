
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'


export default function Social({children ,quote}) {
    
    return (
        <div id='Social'>
        <div id='share'>

        
        <a href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(quote)}`}><FontAwesomeIcon id='twitter' icon={faTwitter} /></a>

        </div>
        {children}
        
    </div>
    )
}