


export default function Search({ onChange}) {
    
    return (
        <>
       <select id="search" onChange={onChange}>
        <option> Select Author </option>
        <option>Muhammad sm.</option>
        <option>Elon Musk</option>
        <option>Steve Jobs</option>
        <option>Aristotle</option>
       </select>
        </>
    )
}