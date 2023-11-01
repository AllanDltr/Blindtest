interface buttonProps {
    id: string;
    disabled: boolean;
    onClick: () => void;
    insideText: string;
}

export const BlindTestButton = ({ id, disabled, onClick, insideText }: buttonProps) => {
    return (
        <button
            id={id}
            disabled={disabled}
            onClick={onClick}
            className="bg-zinc-300 hover:bg-zinc-400 text-black font-bold py-2 px-4 rounded-full"
        >
            {insideText}
        </button>
    );
};