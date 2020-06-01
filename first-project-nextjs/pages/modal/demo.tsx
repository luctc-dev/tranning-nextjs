import React, { useState } from "react";
import Modal from "../../components/ModalDemo";

export default function () {
    const [openModal, setOpenModal] = useState(false);

    return (
        <div className="container">
            <Modal
                title="Tieu de cua Modal"
                isVisible={openModal}
                isRenderHeader={true}
                onCancel={() => {
                    setOpenModal(false);
                }}
                onOk={() => {
                    console.log("handleSubmit");
                    setOpenModal(false);
                }}
                renderFooter={() => {
                    return <p>Custom Footer Ne</p>
                }}
            >
                <h2>Demo Modal</h2>
            </Modal>

            <button onClick={() => {
                setOpenModal(true);
            }}>Open Modal</button>
        </div>
    )
}