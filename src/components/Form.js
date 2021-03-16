import ButtonContainer from "./ButtonContainer"

const Form = () => {
    const styles ={
        background: "grey",
        height: 40,
        width: 150,
        color: "white"
    }
    return (
        <div className="form-container">
            <form action="#" id="msg-form">
                <input type="text" placeholder="Name"/>
                <input type="email" placeholder="Enter email"/>
                <textarea name="msg1" id="msg1" placeholder="Type here"></textarea>
                <ButtonContainer styles={styles} title="Submit"/>
            </form>
        </div>
    )
}

export default Form
