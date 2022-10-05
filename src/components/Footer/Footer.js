import React from 'react'
import {FooterContainer, FooterSubscription, FooterSubHeading, FooterSubText} from './Footer.elements'

const Footer = () => {
    return (
        <FooterContainer>
            <FooterSubscription>
                <FooterSubText>
                    {`Copyright © ${new Date().getFullYear()} iSkyBus Transport Inc. -  All Rights Reserved`}
                </FooterSubText>
                <FooterSubHeading>
                    Powered by Remora Systems
                </FooterSubHeading>

            </FooterSubscription>
        </FooterContainer>
    )
}

export default Footer
