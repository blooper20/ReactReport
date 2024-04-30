import FancyBorder from "./FancyBorder";

function Dialog(props) {
    return (
        <FancyBorder color="blue">
            <h1>
                {props.title}
            </h1>
            <p>
                {props.mesaage}
            </p>
        </FancyBorder>
    )
}

function WelcomeDialog(props) {
    return (
        <Dialog
            title="어서오세요"
            
            mesaage="우리 사이트에 방문하신 것을 환영합니다!"
            />
    );
}

export default WelcomeDialog;