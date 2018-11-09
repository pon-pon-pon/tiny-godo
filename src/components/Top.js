import React from 'react';
import styled from 'styled-components';
import LOGO_IMAGE from '../assets/logo.png';
import JUMBOTRON_IMAGE from '../assets/jumbotron.png';

function clickEntry(e){
    e.preventDefault();
    window.open('https://twipla.jp/events/343022', '_blank');
}

const Top = (props) => {

  const JumbotronWrapper = styled.div`
    position: relative;
    widht: 100%;
    height: 600px;
  `;

  const JumbotronImage = styled.div`
    content: '';
    background-image: url(${JUMBOTRON_IMAGE});
    background-position: center center;
    background-size: cover;
    filter: brightness(70%) sepia(50%) blur(10px);
    width: 100%;
    height: 100%;
    z-index: -100;
  `;

  const JumbptronContent = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    margin: 0px;
    padding: 0px;
    width: 80%;
  `;

  const EntryLink = styled.a`
    cursor: pointer;
    display: inline-block;
    padding: 0.5em 1em;
    text-decoration: none;
    background: #3d2a3f;
    color: #FFF !important;
    border-bottom: solid 4px #0d090e;
    border-radius: 3px;
    &:active {
      transform: translateY(4px);/*下に動く*/
      box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.2);/*影を小さく*/
      border-bottom: none
    }
  `;

  const FlavorText = styled.p`
    font-size: 20px;
    font-weight: 30;
  `;

  const Logo = styled.img`
    max-width: 100%;
  `;

    return (
      <JumbotronWrapper id="Top">
        <JumbotronImage/>
        <JumbptronContent>
          <Logo src={LOGO_IMAGE} />
          <FlavorText>手乗りサイズにちっちゃくなった東方キャラクターとの生活を描いた漫画，イラスト，小説の合同誌</FlavorText>
          <EntryLink onClick={clickEntry}>参加する</EntryLink>
          <div style={{margin: '20px'}}><a href="https://twitter.com/share?ref_src=twsrc%5Etfw" class="twitter-share-button" data-size="large" data-text="" data-url="http://www.tiny-friends-godo.net/" data-hashtags="ちっちゃいこのいる日常合同" data-show-count="false">Tweet</a></div>
        </JumbptronContent>
      </JumbotronWrapper>
    );
  };

export default Top;