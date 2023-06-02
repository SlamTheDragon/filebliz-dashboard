import "./icon.scss";


interface IconInterface {
    icon: string;
    title?: string;
    size?: number;
    // color?: string; // deprecation
}

function Icon(props: IconInterface) {
    return (
        <i className={"fa-solid " + props.icon} style={{ fontSize: props.size }} title={props.title}></i>
    );
}

export default Icon;