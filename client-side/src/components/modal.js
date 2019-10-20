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
        flex-direction: column;
        background: white;
        width: 80%;
        height: 50%;
        top:50%;
        left:50%;
        border-radius: 14px;
        padding: 20px 15px;
        transform: translate(-50%,-50%);
        overflowY: scroll;
    `;

    const Button = styled.button`
        align-self: flex-end;
        width: 400px;
        margin: 0 auto;
        outline: none;
        padding:10px 15px;
        border: 1px solid black;
        border-radius: 20px;
        background-color: white;
        color: black;
        margin-top: 20px 0;
    `;

    const Title = styled.h2`
        color: black;
        font-size: 20px;
        margin: 0 auto;
    `;

    const Description = styled.p`
        color: black;
        font-size: 12px;
        margin: 0 auto;
    `;

     return showItem ?  
        <Overlay>
          <Card>
            {children}
            {console.log(items ? items.properties[0] : null)}
            <Title>{items? items.name : "Sem nome explicito"}</Title>
            {console.log(items)}
            {items && items.properties[0] ?
            <Description>{items.properties[0].description}</Description> :
            <Description>"Sem descricao aparente"</Description>
            }
            <Button onClick={handleClose}>Fechar modal</Button>
          </Card>
        </Overlay>
        : null
  };

export default Modal;