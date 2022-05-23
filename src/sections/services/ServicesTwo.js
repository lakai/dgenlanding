import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import styled from 'styled-components'
import AnimationContainer from 'components/animation-container'
import AnimatedHeading from 'components/animated-heading'

class ServicesTwo extends React.Component {

    shouldComponentUpdate() {
        return false
    }
      
    render() {

        const Section = styled.section`
            position: relative;
            overflow: hidden;
            background-color: #111;
            padding: 100px 0 50px 0;
            .heading {
                width: 100%;
            }
          }
        `

        const ServiceRow = styled(Row)`
            margin-top: 100px;
        `

         const ServiceHeading = styled.h4`
            font-size: 28px;
            font-weight: 500;
            font-family: Teko;
            color: #fff;
            margin-bottom: 0px;
        `

        const ServiceSeparator = styled.div`
            height: 2px;
            width: 90px;
            background-color: #7dd3fc;
            margin-bottom: 5px;
         `

         const ServiceNumber = styled.h5`
            position: absolute;
            font-size: 60px;
            color: #fff;
            font-weight: 900;
            top: -50px;
            opacity: .5;
            z-index: -1;
            transition: .2s;
         `

         const ServiceElement = styled.div`
            margin-bottom: 100px;
            border-radius: 20px;
            transition: .2s;
            position: relative;
            &:hover ${ServiceNumber} {
                opacity: .3 !important;
                color: #7dd3fc;
            }
        `

         const ServiceText = styled.p`
            font-size: 14px;
            font-weight: 700;
            color: #c5c5c5;
            padding-right: 25px;
         `


        return(
            <Section id="services">
                <Container>
                    <AnimatedHeading text="Road Map" />
                    <ServiceRow>
                        <Col md={3}>
                            <AnimationContainer animation="fadeInDown" delay={500}>
                                    <ServiceElement>
                                        <ServiceNumber>
                                            01
                                        </ServiceNumber>
                                        <ServiceHeading>
                                            NFT Launch
                                        </ServiceHeading>
                                        <ServiceSeparator/>
                                        <ServiceText>
                                            Mint Date (TBD)
                                        </ServiceText>
                                    </ServiceElement>
                            </AnimationContainer>
                        </Col>
                        <Col md={3}>
                            <AnimationContainer animation="fadeInDown"  delay={500}>
                                <ServiceElement>
                                    <ServiceNumber>
                                        02
                                    </ServiceNumber>
                                    <ServiceHeading>
                                        MERCH DROP
                                    </ServiceHeading>
                                    <ServiceSeparator/>
                                    <ServiceText>
                                        Limited Editions of DGEN\FRENDS APPAREL.
                                        Exclusive Golden DGEN\FRENDS Vinyl Figurines by YouTooz
                                    </ServiceText>
                                </ServiceElement>
                            </AnimationContainer>
                        </Col>
                        <Col md={3}>
                            <AnimationContainer animation="fadeInDown" delay={500}>
                                <ServiceElement>
                                    <ServiceNumber>
                                        03
                                    </ServiceNumber>
                                    <ServiceHeading>
                                        Live Event
                                    </ServiceHeading>
                                    <ServiceSeparator/>
                                    <ServiceText>
                                        
                                    </ServiceText>
                                </ServiceElement>
                            </AnimationContainer>
                        </Col>
                        <Col md={3}>
                            <AnimationContainer animation="fadeInDown" delay={500}>
                                <ServiceElement>
                                    <ServiceNumber>
                                        04
                                    </ServiceNumber>
                                    <ServiceHeading>
                                        TOP SECRET
                                    </ServiceHeading>
                                    <ServiceSeparator/>
                                    <ServiceText>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                                    </ServiceText>
                                </ServiceElement>
                            </AnimationContainer>
                        </Col>
                    </ServiceRow>
                </Container>
            </Section>
        )
    }

}

export default ServicesTwo