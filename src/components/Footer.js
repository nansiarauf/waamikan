import ButtonContainer from "./ButtonContainer"

const Footer = () => {
    const styles ={
        background: "grey",
        height: 40,
        width: 100,
        color: "black"
    }
    return (
            <footer className="container">
                <div className="partners">
                    <ul>
                        <li>EPSON</li>
                        <li>MINDRAY</li>
                        <li>KODAK</li>
                    </ul>
                </div>
                <div className="customers">
                    <ul>
                        <li>SONOTECH</li>
                        <li>IRAN Clinic</li>
                        <li>COCOA Clinic</li>
                    </ul>
                </div>
                <div id="intouch">
                    <p><strong>Get in touch</strong></p>
                    <p>0205092580</p>
                    <p>0501370860</p>
                </div>
                <div id="copyright">
                    <p>Copyright &copy;2021 Waamikan&#8482;</p>
                </div>
                <div className="form2">
                    <form action="#">
                        <input type="email" placeholder="enter email"/>
                        <ButtonContainer styles={styles} title="Subscribe"/>
                    </form>
                </div>
            </footer>
    )
}

export default Footer
