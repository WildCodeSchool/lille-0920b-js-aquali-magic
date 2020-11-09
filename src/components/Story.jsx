import React from 'react';
import styled from 'styled-components';

const ColorText = styled.div`
    color: black;
`

const Img1 = styled.img`
    width: 90vw;
    heigth: 40vh;
    margin-left:4.5vw;
`

const Title = styled.h1`
    text-align:center;
    font-size: 4em;
    padding-top: 1vh;
    margin: 0;
`

const Text = styled.p`
    font-size:1.3em;
    padding: 0 4vw 0 4vw;
`

const Story = () => {
    return (
        <ColorText>
            <Title>Ere Dominaria</Title>
                <Text>
                Les dix premières années de Magic sont centrées sur le plan de Dominaria mais également sur ceux, plus mineurs, de Rajh, d'Ulgothra, du Royaume de Serra et de Mercadia qui tournent autour du premier (y'a Rabiah aussi, mais celui-là, on s'en fout). La quasi-totalité de l'histoire de cette époque est racontée soit dans des romans, soit directement dans les cartes.
                </Text>
                <Img1 src='https://media.wizards.com/2018/images/daily/7UiWFNy1SI_%208TtRE0aGpX.jpg' alt='Carte du monde magic'></Img1>

            <Title>Antiquities</Title>
            <Text>
                La guerre des frères, ou La Guerre des Antiquités, oppose les artificiers Urza, seigneur grand-artificier, le premier héro de Magic, à son frère Mishra, prodige artificier, sur le continent de Terisiare, sur Dominaria. Au terme de la guerre, Urza découvre que son frère a été corrompu par les Phyrexians (une race venue du plan de Phyrexia). Il décide donc d'utiliser le Golgothian Sylex pour anéantir les deux armées. Au moment où il devrait mourir dans l'explosion, son Étincelle de planeswalker s'embrase, lui offrant des pouvoirs divins et la faculté de voyager entre les plans.
                La suite de l'histoire d'Urza ne sera racontée que dans le bloc Epopée d'Urza en 98, les extensions suivantes décrivant la suite de l'histoire du plan de Dominaria.
            </Text>
            <img src="http://www.smfcorp.net/images/artworks/big/9882.jpg" alt="Urza qui déclenche le sylex et ravage Terisiare alors que son étincelle s'active.
"/>
        </ColorText>
    )
}

export default Story;