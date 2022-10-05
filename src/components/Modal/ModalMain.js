import React, { useState } from 'react';
import styled from 'styled-components';
import { Modal } from './components/Modal';
import '../../App.css'

import {MdMessage} from 'react-icons/md'

const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  height: 0.5rem;
  z-index: 1;
  position: sticky;
  bottom: 1rem;
  right: 1rem;
`;

const Button = styled.button`
  min-width: 0.5rem;
  margin-bottom: 1rem;
  margin-right: 1.5rem;
  padding: .3rem 0.85rem;
  border-radius: 50%;
  border: none;
  background: #e2e2e2;
  color: black;
  font-size: 2.25rem;
  cursor: pointer;
  box-shadow: 1px 1px 5px 1px #ccc;
  backface-visibility: hidden;
`;

function ModalMain() {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(prev => !prev);
  };

  return (
    <>
      <Container>
        <Modal showModal={showModal} setShowModal={setShowModal} />

        <Button onClick={openModal}>
          <MdMessage/>
        </Button>
      </Container>
    </>
  );
}

export default ModalMain;
