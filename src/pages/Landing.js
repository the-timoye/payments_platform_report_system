import React, { useState } from "react";
import { Form, Header, Main, Modal } from "../components";
import { Footer } from "../layouts";

const Landing = () => {
    const [showModal, setShowModal] = useState(false);
    return (
        <div className="content">
            {showModal &&
                <Modal toggle={() => setShowModal(false)}>
                    <Form />
                </Modal>}
            <Header />
            <Main toggleModal={() => setShowModal(true)} />
            <Footer />
        </div>
    )
}

export default Landing;