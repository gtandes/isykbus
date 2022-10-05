import React, { useRef, useEffect, useCallback } from 'react';
import { useSpring, animated } from 'react-spring';
import styled from 'styled-components';
import { MdClose } from 'react-icons/md';

import Form from './Form'

const Background = styled.div`
  width: 100%;
  height: 100vh;
  position: sticky;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-right: -4rem;
  z-index: 3 !important;

  @media screen and (max-height:480px) {
    transform: translateY(-10%);
  }

  @media screen and (max-width:1024px){
    resize: vertical;
    transform: translateY(-3%);
  }

  @media screen and (max-width:768px){
    width: 40vw;
  }

  @media screen and (max-width:1024px) and (max-height:480px){
    transform: translateY(-8%);
  }

  @media screen and (max-width:480px){
    height: 100vh;
    width: 100vw;
    top: 0.05rem;
    backface-visibility: hidden;
    transform: translateY(2%);
  }

  @media screen and (max-width:480px) and (max-height:480px){
    height: 100vh;
    width: 100vw;
    top: 0.05rem;
    backface-visibility: hidden;
    transform: translateY(2%);
  }
`;


const ModalWrapper = styled.div`
  width: 400px;
  height: 700px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #fff;
  color: #404040;
  display: grid;
  grid-template-columns: 1fr;
  position: relative;
  z-index: 3 !important;
  border: 1px solid #fff;
  border-radius: 10px;
  overflow-y: auto;

  @media screen and (max-height:480px) {
    max-height: 264px;
    max-width: 42vw;
  }

  @media screen and (max-width:1023px){
    resize: vertical;
    overflow-y: auto;
  }

  @media screen and (max-width:768px){
    width: 42.5vw;
  }

  @media screen and (max-width:768px)and (max-height:480px){
    max-height: 200px;
  }

  @media screen and (max-width:480px){
    width: 100vw;
    height: 100vh;
    backface-visibility: hidden;
  }

  @media screen and (max-width:480px) and (max-height:480px){
    min-height: 100vh;
    min-width: 100vw;
    transform: translateY(2%);
    backface-visibility: hidden;
  }
`;


const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1.8;
  color: #141414;
  position: absolute;
  top: 0;

  p {
    margin-bottom: 1rem;
  }

  button {
    padding: 10px 24px;
    background: #141414;
    color: #fff;
    border: none;
  }
`;


const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 10;
`;

export const Modal = ({ showModal, setShowModal }) => {
  const modalRef = useRef();

  const animation = useSpring({
    config: {
      duration: 250
    },
    opacity: showModal ? 1 : 0,
    transform: showModal ? `translateY(0%)` : `translateY(100%)`
  });

  const closeModal = e => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };

  const keyPress = useCallback(
    e => {
      if (e.key === 'Escape' && showModal) {
        setShowModal(false);
        // console.log('I pressed');
      }
    },
    [setShowModal, showModal]
  );

  useEffect(
    () => {
      document.addEventListener('keydown', keyPress);
      return () => document.removeEventListener('keydown', keyPress);
    },
    [keyPress]
  );

  return (
    <>
      {showModal ? (
        <Background onClick={closeModal} ref={modalRef}>
          <animated.div style={animation}>
            <ModalWrapper showModal={showModal}>
              <ModalContent>
                <div style={{backgroundColor:"#e2e2e2", width:"100%"}}>
                  <h5 style={{margin:"1.5rem 0 1.5rem 2rem"}}>iSkyBus</h5>
                </div>

               <Form/>
              </ModalContent>

              <CloseModalButton
                aria-label='Close modal'
                onClick={() => setShowModal(prev => !prev)}
              />
            </ModalWrapper>
          </animated.div>
        </Background>
      ) : null}
    </>
  );
};
