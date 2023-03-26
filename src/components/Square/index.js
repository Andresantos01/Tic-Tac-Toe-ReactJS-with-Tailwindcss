export function Square({ value, onSquareClickPlayer }) {

    return (
        <div className="flex text-white justify-center items-center bg-sky-500 text-xl square rounded-t-lg rounded-b-lg m-1 w-20 h-20" onClick={onSquareClickPlayer}>
            {value}
        </div>
    )
}

