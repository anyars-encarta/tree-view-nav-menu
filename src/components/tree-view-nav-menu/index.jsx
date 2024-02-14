import MenuList from "./menu-list";

const TreeViewNavMenu = ({menus = []}) => {
    return <div className="tree-view-container">
        <MenuList list={menus} />
    </div>
};

export default TreeViewNavMenu;