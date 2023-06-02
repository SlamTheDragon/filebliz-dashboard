interface ButtonInterface {
    classItem: string               // primary | p-accent | safe | info | warn | danger | ctrl | ctrl-b
    children?: React.ReactNode
    disabled?: boolean
    tabIndex?: number
    style?: string
    onclick?: () => any
    onKeyDown?: (event: any) => any
}


export default function Button(props: ButtonInterface) {
    return (
        <button disabled={props.disabled}
            tabIndex={props.tabIndex}
            className={"btn " +  props.classItem}
            onClick={props.onclick}
            onKeyDown={props.onKeyDown}
        >
            {props.children}
        </button>
    );
}