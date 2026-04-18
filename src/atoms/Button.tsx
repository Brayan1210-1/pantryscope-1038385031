interface ButtonProps {
    name: string;
    onClick: () => void;
    style?: string;
}

export const Button = (props: ButtonProps) => {
    return (
        <button className="outline-solid border-black bg-blue-300" onClick={props.onClick}>
            {props.name}
        </button>
    )

} 