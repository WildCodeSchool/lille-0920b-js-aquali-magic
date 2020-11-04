/*
import {device} from "./Device.jsx";
import styled from 'styled-components';

const All = styled.div`
    text-decoration: none;
`

const Footer = styled.div`
    background: #303036;
    color: #d3d3d3;
    height: 400px;
    position: relative;
`

const FooterContent = styled.div`
    display: flex;
    height: 350px;
`

const FooterSection1 = styled.div`
    flex: 1;
    padding: 20px;
    border: 1px solid white;
`

const SpanSection1 = styled.span`
    display: block;
    font-size: 1.1em;
    margin-bottom: 8px;
`

const ASection1 = styled.a`
    color: gray;
    width: 2vw;
    height: 3.3vh;
    margin-right: 2vw;
    text-align: center;
    justify-content: center;
    align-items: center;
    display: inline-block;
    font-size: 1.8em;
    border: 1px solid gray;
    border-radius: 10%;
    &:hover {
        border: 1px solid white;
        color: white;
        transition: 0.6s ease;
      }
    @media ${device.mobile}{
        display: none;
    }
`
const FooterContentSocials = styled.li`
    margin-bottom: 20px;
    font-size: 1.2em;
    transition: 0.6s ease;
    margin-left: 40px;
    color: #686868;
    &:hover {
        color: white;
        transition: 0.6s ease;
        margin-left: 50px;
      }
`

const FooterBottom = styled.div`
    background: #343a40;
    color: #686868;
    height: 25px;
    width: 100%;
    text-align: center;
    position: absolute;
    bottom: 0;
    left: 0;
    padding-top: 24px;
`
const Form = styled.div`
    background: #272727;
    color: #bebdbd;
    margin-bottom: 10px;
    line-height: 1.5rem;
    padding: 0.7rem 1.2rem;
    height: 30px;
    border: none;
    width: 90%;
    display: flex;
    flex-direction: column;
    height: 100%
`

const Test = styled.a`
    text-decoration: none;
`

const Title = styled.h1`
      margin-bottom: 0;
`

const Footer2 = () => {
    return (
        <All>
            <Footer className='footer'>
                <FooterContent className='Footer-content'>
                    <FooterSection1 className='footer-section about'>
                        <h1 className='logo-text'>Magic the gathering</h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis facilis enim autem tempora? Corporis magni placeat facilis ipsum, consequatur eaque, pariatur laudantium molestiae vitae aut recusandae nulla, reiciendis accusantium voluptate!
                        </p>
                        <div className='contact'>
                            <br/>
                            <SpanSection1><i class="fas fa-phone"></i>&nbsp; 253-152-374</SpanSection1>
                            <br/>
                            <SpanSection1><i class="fas fa-envelope"></i>&nbsp; MarmiWild@gmail.com</SpanSection1>
                        </div>
                        <br/>
                        <div className='socials'>
                            <ASection1 href="#"><i class="fab fa-facebook"></i></ASection1>
                            <ASection1 href="#"><i class="fab fa-instagram"></i></ASection1>
                            <ASection1 href="#"><i class="fab fa-twitter"></i></ASection1>
                            <ASection1 href="#"><i class="fab fa-youtube"></i></ASection1>
                        </div>
                    </FooterSection1>
                    <FooterSection1 className='footer-section links'>
                        <Title>Links</Title>
                        <br/>
                        <ul>
                            <Test href="#">
                                <FooterContentSocials>Conditions generales</FooterContentSocials>
                            </Test>
                            <Test href="#">
                                <FooterContentSocials>Code de confidentialité</FooterContentSocials>
                            </Test>
                            <Test href="#">
                                <FooterContentSocials>Events</FooterContentSocials>
                            </Test>
                            <Test href="#">
                                <FooterContentSocials>Equipe</FooterContentSocials>
                            </Test>
                            <Test href="#">
                                <FooterContentSocials>Règles</FooterContentSocials>
                            </Test>
                        </ul>
                    </FooterSection1>
                    <FooterSection1 className='footer-section contact-form'>
                        <Title>Contact us</Title>
                        <br/>
                        <form action="">
                            <Form>
                            <input type="email" name="email" class="text-input contact-input" placeholder="Type your adress..."/>
                            <textarea name="message" class="text-input contact-input" id="" cols="30" rows="10" placeholder="Type your message..."></textarea>
                            </Form>
                            <button type="submit" class="btn btn-big">
                                <i class="fas fa-envelope"></i>
                                send
                            </button>
                        </form>
                    </FooterSection1>
                </FooterContent>

                <FooterBottom className='footer-bottom'>
                    &copy; Wildcodeschool.com | Designed by Magicians
                </FooterBottom>
            </Footer>
        </All>
    )};


export default Footer2;

*/