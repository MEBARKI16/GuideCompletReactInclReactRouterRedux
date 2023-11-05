const TabButton = ({ children }) => {
    function HandleClick() {
        console.log('hello world');
    }
    return (
        <li><button onClick={HandleClick}>{children}</button></li>
    );
}
export default TabButton;