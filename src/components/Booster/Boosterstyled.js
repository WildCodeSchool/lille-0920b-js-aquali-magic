import styled from "styled-components";

export const Gallery = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 2vh;
    margin-right: 17vh;
    margin-left: 23vh;
    padding-bottom: 8vh;   

`

export const CallApi = styled.div`
    text-align: center;
    margin-bottom: 8vh;
    color: white
`

export const Title = styled.h1`
    margin-top: 0;
    padding-top: 10vh
`

export const BgImage = styled.div`
    background-image: url("https://cameronscookware.com/wp-content/uploads/2019/12/magic-the-gathering-wallpaper-hd-fresh-magic-the-gathering-wallpapers-this-week-of-magic-the-gathering-wallpaper-hd.jpg");
    background-repeat: no-repeat;
    background-size: cover;
`