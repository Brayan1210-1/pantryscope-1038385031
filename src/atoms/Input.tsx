

interface InputProps {
    type: string;
    label: string;
    value: string
    placeHolder: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input = (props: InputProps) => {
    return (
        <div className="grid-cols-1">
            <label className="text-xs">{props.label}</label>
            <input placeholder={props.placeHolder} value={props.value} onChange={props.onChange} type={props.type} id={props.label}

                className="border-solid border-black bg-gray-200 rounded-sm"
            >

            </input>
        </div>
    );
}