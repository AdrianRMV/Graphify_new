import SideBarRight from "./SideBarRight";
import SidebarLeft from "./SidebarLeft";

function MainContent() {
    return (
        <>
            <div id="main-content-container">
                <SidebarLeft />
                <h1>Main Content</h1>
                <SideBarRight />
            </div>
        </>
    );
}

export default MainContent;
