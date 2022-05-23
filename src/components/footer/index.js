import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDiscord, faEthereum, faReddit, faTwitter } from '@fortawesome/free-brands-svg-icons'

class Footer extends React.Component{

    render() {
        const FooterMain = styled.div`
            background-color: #111;
            height: 70px;
            display: flex;
            align-items: center;
            justify-content: center;
        `

        const SocialIcons = styled.div`
            .social_icon {
                font-size: 50px;
                color: #FFF;
                margin: 0 5px;
                cursor: pointer;
                transition: .5s;
                &:hover {
                    color: #7dd3fc;
                }
            }
        `
        return (
            <FooterMain>
                <SocialIcons>
                    <FontAwesomeIcon icon={faDiscord} className="social_icon" onClick={() => window.open('https://discord.gg/wallstreetbets')}/>
                    <FontAwesomeIcon icon={faTwitter} className="social_icon" onClick={() => window.open('https://www.twitter.com/dgenfrends')} />
                    <FontAwesomeIcon icon={faReddit} className="social_icon" onClick={() => window.open('https://reddit.com/r/wallstreetbets')} />
                    <FontAwesomeIcon icon={faEthereum} className="social_icon" onClick={() => window.open('https://www.linkedin.com')} />
                </SocialIcons>
            </FooterMain>
        )
    }
}
export default Footer