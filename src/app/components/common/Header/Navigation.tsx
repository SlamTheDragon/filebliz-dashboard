import ThemeSwitcher from "../../widgets/ThemeSwitcher/ThemeSwitcher";
import Button from "../Button/Button";


function BrandHeader() {
    return (
        <div className="primary-navigation">
            <Button classItem={""}>FILEBLIZ</Button>
        </div>
    );

}
function MainNavigation() {
    return (
        <>
            <div className="sect-A">
                <h1>Dashboard</h1>
            </div>

            <div className="sect-B">
                <ThemeSwitcher/>
                <Button classItem={"primary"}>Sign In</Button>
            </div>
        </>
    );
}

function Header() {
    return (
        <div className="navigation">
            <MainNavigation/>
        </div>
    );
}

export default { Header, BrandHeader }