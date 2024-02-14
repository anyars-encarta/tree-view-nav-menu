import MenuList from './menu-list';

// eslint-disable-next-line
const TreeViewNavMenu = ({ menus = [] }) => (
  <div className="tree-view-container">
    <MenuList list={menus} />
  </div>
);

export default TreeViewNavMenu;
