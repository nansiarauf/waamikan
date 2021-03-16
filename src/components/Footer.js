import ButtonContainer from "./ButtonContainer"

const Footer = () => {
    const styles ={
        background: "grey",
        height: 40,
        width: 150,
        color: "white"
    }
    return (
        <div className="main-footer">
            <footer>
                <div className="form2">
                    <form action="#">
                        <input type="email" placeholder="enter email"/>
                        <ButtonContainer style={styles} title="Subscribe"/>
                    </form>
                </div>
            </footer>
            
        </div>
    )
}

export default Footer
