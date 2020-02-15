import React, { useState, useEffect } from "react";
import useSWR from "swr";
import {API} from "../../constants/api";
import {fetchAPI} from "../../utils/fetch";
import {getTime} from "../../utils/common";
import {getServerTime, getBanner, getCircle} from "../../api/homepage";
import "../../assets/styles.css";
import Header from "../../components/header";
import Banner from "../../components/banner";
import PanelBar from "../../components/panelbar";

const Homepage: React.FC = () => {
  const { data: serverTimeAPI } = useSWR(API('H24_MOBILE', getTime()), fetchAPI);
  const [serverTime, setServerTime] = useState('');
  const { data: bannerAPI } = useSWR(API('BANNER'), fetchAPI);
  const [banner1, setBanner1] = useState({});
  const { data: circleAPI } = useSWR(API('CIRCLE', serverTime), fetchAPI);
  const [circle, setCircle] = useState({});

  useEffect(() => {
    if (serverTimeAPI) {
      setServerTime(getServerTime(serverTimeAPI));
    }
    if (bannerAPI) {
      setBanner1(getBanner(bannerAPI, 0));
    }
    if (circleAPI) {
      setCircle(getCircle(circleAPI));
    }
  }, [serverTimeAPI, bannerAPI, circleAPI])

  return (
    <div>
      <Header />
      <Banner data={banner1} />
      <PanelBar data={circle} />
    </div>
  );
};

export default Homepage;
