import { useState } from "react";
import MenuList from "./menu-list";
import { FaMinus, FaPlus } from 'react-icons/fa';

const MenuItem = ({item}) => {
    const [displayCurrentChildren, setDisplayCurrentChildren] = useState({});

    const handleToggleChildren = (getCurrentlabel) => {
      setDisplayCurrentChildren({
        ...displayCurrentChildren,
        [getCurrentlabel] : !displayCurrentChildren[getCurrentlabel],
      });
    }

  return <li>
    <div className="menu-item">
      <p>{item.label}</p>
      {
        item && item.children && item.children.length ? 
        <span onClick={() => handleToggleChildren(item.label)}>
            {
                displayCurrentChildren[item.label] ? <FaMinus className='toggle-icons'/> : <FaPlus className='toggle-icons'/>
            }
        </span>
        : null
      }
    </div>
    
    {
        item && item.children && item.children.length > 0 && displayCurrentChildren[item.label] ? (
        <MenuList list={item.children}/>
        ) : null
    }
  </li>
}

export default MenuItem;