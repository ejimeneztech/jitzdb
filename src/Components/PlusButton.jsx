export default function PlusButton(props) {

    const handleClick = () => {
        props.onClick();
    }

    return (<button onClick={handleClick}>+</button>);
}