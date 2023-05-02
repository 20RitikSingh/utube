import React from 'react'
import './sidebarElement.css'
function SidebarElement({title,Icon}) {
  return (
    <div className='sidebarElement'>
        <div><div class="icon">{Icon}</div> &nbsp;&nbsp;{title}</div>
    </div>
  )
}

export default SidebarElement