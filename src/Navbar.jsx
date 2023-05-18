import React, { useState } from 'react'
import Data from './Data'


const Navbar = () => {
    const [search, setSearch] = useState('')



  return (
    <div style={{padding: "10px"}}>
        <div className={{display: "flex",justifyContent: "center",alignItem : "center"}}>
      
       <input  type="Text" placeholder="Search for name"  style={{textAlign: "center", width: "30%"}}
       onChange={e => setSearch(e.target.value.toLowerCase()) } />
       
    
       </div>
<Data search={search}/>
    </div>
  )
}

export default Navbar