import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import styled, { css } from 'styled-components';
import { ReactComponent as StoreUncolor } from '../../assets/images/storeuncolor.svg';
import ChargerUncolor from '../../assets/images/chargeruncolor.svg';
import SettingUncolor from '../../assets/images/settinguncolor.svg';
import { ReactComponent as MyThemeColor } from '../../assets/images/mythemecolor.svg';

interface NavBarProps {
  serviceType: 'STORE' | 'CHARGE' | 'MYTHEME' | 'SETTING';
}

const NavBar: React.FC<NavBarProps> = props => {
  const [isStore, setIsStore] = useState<boolean>(false);
  const [isCharge, setIsCharge] = useState<boolean>(false);
  const [isMyTheme, setIsMyTheme] = useState<boolean>(false);
  const [isSetting, setIsSetting] = useState<boolean>(false);
  const navigator = useNavigate();

  const clickStore = () => {
    setIsStore(true);
    navigator('/store');
  };

  const clickCharger = () => {
    setIsCharge(true);
    navigator('/charge');
  };

  const clickMyTheme = () => {
    setIsMyTheme(true);
    navigator('/mytheme');
  };

  const clickSetting = () => {
    setIsSetting(true);
    navigator('/setting');
  };

  useEffect(() => {
    if (props.serviceType === 'STORE') {
      setIsStore(true);
    }
    if (props.serviceType === 'CHARGE') {
      setIsCharge(true);
    }
    if (props.serviceType === 'MYTHEME') {
      setIsMyTheme(true);
    }
    if (props.serviceType === 'SETTING') {
      setIsSetting(true);
    }
  }, []);

  return (
    <PageNaviator>
      {/* <NavContainer>
        <MainContentsPage onClick={clickStore}>
          {isStore ? '' : <StoreUnColor />}
        </MainContentsPage>
        <MainContentPageSpan isStore={isStore}>스토어</MainContentPageSpan>
      </NavContainer>

      <NavContainer>
        <MainContentsPage onClick={clickCharger}>
          {isCharge ? '' : <ChargerUncolor />}
        </MainContentsPage>
        <MainContentPageSpan isCharger={isCharge}>충전소</MainContentPageSpan>
      </NavContainer> */}

      <NavContainer>
        <MainContentsPage onClick={clickMyTheme}>
          {isMyTheme ? <MyThemeColor /> : ''}
        </MainContentsPage>
        <MainContentPageSpan isMyTheme={isMyTheme}>MY테마</MainContentPageSpan>
      </NavContainer>

      {/* <NavContainer>
        <MainContentsPage onClick={clickSetting}>
          {isSetting ? '' : <SettingUncolor />}
        </MainContentsPage>
        <MainContentPageSpan isSetting={isSetting}>설정</MainContentPageSpan>
      </NavContainer> */}
    </PageNaviator>
  );
};

export default NavBar;

const PageNaviator = styled.div`
  width: 100%;
  height: 56px;
  display: flex;
  /* box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2); */
`;

const NavContainer = styled.div`
  border: 1px solid black;
`;

const MainContentsPage = styled.div`
  width: 28px;
  height: auto;
  margin: 0 auto;
`;

const MainContentPageSpan = styled.div<{
  isStore?: boolean;
  isCharger?: boolean;
  isMyTheme?: boolean;
  isSetting?: boolean;
}>`
  width: 30px;
  height: 15px;
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 500;
  font-size: 10px;
  line-height: 16px;
  margin: 0 auto;
  ${props =>
    props.isStore === true &&
    css`
      color: #ff417d;
    `}
  ${props =>
    props.isCharger === true &&
    css`
      color: #ff417d;
    `}
  ${props =>
    props.isMyTheme === true &&
    css`
      color: #ff417d;
    `}
  ${props =>
    props.isSetting === true &&
    css`
      color: #ff417d;
    `}
`;