import React from "react";
import styled from "styled-components";

const Modal = ({ handleClose, show, children }) => {

    const Overlay = styled.div`
        position: fixed;
        top: 0;
        left: 0;
        width:100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.6);
    `;

    const Card = styled.section`
        position:fixed;
        background: white;
        width: 80%;
        height: 50%;
        top:50%;
        left:50%;
        transform: translate(-50%,-50%);
    `;

    const Button = styled.button`
        align-self: flex-end;
        width: 80%;
        color 

    `;

     return (
        <Overlay>
          <Card>
            {children}
            <Button onClick={handleClose}>close</Button>
          </Card>
        </Overlay>
      );
     
  };

export default Modal;