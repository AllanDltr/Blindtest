import { Button } from "@/components/ui/button"
interface buttonProps {
    id: string;
    disabled: boolean;
    onClick: () => void;
    insideText: string;
}

export const BlindTestButton = ({ id, disabled, onClick, insideText }: buttonProps) => {
    return (
        <Button variant="secondary"
            id={id}
            disabled={disabled}
            onClick={onClick}
            className="bg-zinc-300 hover:bg-zinc-400 font-bold"
        >
            {insideText}
        </Button>
    );
};