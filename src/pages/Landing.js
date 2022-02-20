import React from "react";
import { Form, Header, Main, Modal } from "../components";
import { Footer } from "../layouts";

const Landing = () => {
    return (
        <div className="content">
            <Modal>
                <Form />
            </Modal>
            <Header />
            <Main />
            <Footer />
        </div>
    )
}

export default Landing;