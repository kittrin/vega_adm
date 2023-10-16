import React, {useState} from 'react';
import './styles.css'

const MenuList = ({components, id}) => {
    const [dropDown, setDropdown] = useState(false)
    const clickMenu = ()=>{
        setDropdown(!dropDown)
    }
    window.onclick = (event)=>{
        if (event.target.className!=='drop_button'){
            if (dropDown){
                setDropdown(false)
            }
        }
    }
    return (
        <div className='menuListComposition'>
            <div className={`drop_button`} onClick={clickMenu}>

            </div>

            <div className='submenu' style={dropDown?{display: "block"} : {display: "none"}}>
                {
                    components.map((el)=>
                        <div className='li' onClick={()=>el.changeFunc()}>{el.title}</div>
                    )
                }
            </div>
        </div>
    );
};

export default MenuList;