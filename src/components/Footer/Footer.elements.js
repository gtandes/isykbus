import styled from 'styled-components'

export const FooterContainer = styled.div`
    bottom:0;
    width:100vw;
    background: #000;
    padding: 1rem 0 0 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-top: 1.5px solid #c6973f;
    /* position: absolute; */
    /* overflow: hidden; */
`

export const FooterSubscription = styled.section`
    display: flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
    padding: 0;
    color:#fff;
    margin-bottom: 0.5rem;
`

export const FooterSubText = styled.p`
    font-size:0.9rem;
    margin-bottom: 0.5rem;

    @media screen and (max-width:600px){
        font-size: 0.8rem;
    }
`
export const FooterSubHeading = styled.p`
    font-family: 'Roboto', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, Helvetica, sans-serif;
    /* margin-bottom: 0.25rem; */
    font-size: .85rem;

    @media screen and (max-width:600px){
        font-size: 0.8rem;
    }
`
