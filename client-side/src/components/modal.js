import React from "react";
import styled from "styled-components";

const Modal = ({ handleClose, showItem, children, items }) => {

    const Overlay = styled.div`
        position: fixed;
        z-index: 100;
        top: 0;
        left: 0;
        width:100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.6);
    `;

    const Card = styled.section`
        position:fixed;
        display: flex;
        background: white;
        width: 80%;
        height: 50%;
        top:50%;
        left:50%;
        border-radius: 14px;
        padding: 20px 15px;
        transform: translate(-50%,-50%);
    `;

    const Button = styled.button`
        align-self: flex-end;
        width: 100%;
        margin: 0 50px;
        outline: none;
        padding:10px 15px;
        border: 1px solid black;
        border-radius: 20px;
        background-color: white;
        color: black;
    `;

     return showItem ?  
        <Overlay>
            {console.log(items)}
          <Card>
            {children}
            <Button onClick={handleClose}>Fechar modal</Button>
          </Card>
        </Overlay>
        : null
  };

export default Modal;