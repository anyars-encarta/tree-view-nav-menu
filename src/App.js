import TreeViewNavMenu from './components/tree-view-nav-menu/index';
import menus from './components/tree-view-nav-menu/data';
import './components/tree-view-nav-menu/styles.css';

const App = () => (
  <div className="menu-list-container">
    <TreeViewNavMenu menus={menus} />
  </div>
);

export default App;
