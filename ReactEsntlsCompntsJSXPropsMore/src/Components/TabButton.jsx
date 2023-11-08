const TabButton = ({ children, onSelect, isActive }) => {

    return (
        <li><button className={isActive} onClick={onSelect}>{children}</button></li>
    );
}
export default TabButton;