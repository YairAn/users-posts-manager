
const DeleteButton = (props) => {
    return (
        <div>
            <button class='tc fr' onClick={() => props.onClick(props.id)}>delete</button>
        </div>
    );
}

export default DeleteButton;