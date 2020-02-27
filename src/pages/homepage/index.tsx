import React, { useState, useEffect } from "react";
import useSWR from "swr";
import { API } from "../../constants/api";
import { fetchAPI } from "../../utils/fetch";
import { getTime, getOnSaleTime } from "../../utils/common";
import {
  getServerTime,
  getBanner,
  getCircle,
  getAd,
  getCategory,
  getThreeOnSale,
  getCrazyOnSale,
  getScrollText
} from "../../api/homepage";
import "../../assets/styles.css";
import Header from "../../components/header";
import Banner from "../../components/banner";
import PanelBar from "../../components/panelbar";
import Ad from "../../components/ad";
import SignList from "../../components/signlist";
import ThreeOnSale from "../../components/three-onsale";
import CrazyOnSale from "../../components/crazy-onsale";
import SlideBar from "../../components/slide-bar";

const Homepage: React.FC = () => {
  const { data: m24API } = useSWR(API("H24_MOBILE", getTime()), fetchAPI);
  const [serverTime, setServerTime] = useState("");
  const { data: adAPI } = useSWR(API("AD"), fetchAPI);
  const [banner, setBanner] = useState({});
  const { data: circleAPI } = useSWR(API("CIRCLE", serverTime), fetchAPI);
  const [circle, setCircle] = useState({});
  const [ad1, setAd1] = useState({});
  const { data: categoryAPI } = useSWR(API("CATEGORY"), fetchAPI);
  const [category, setCategory] = useState({});
  const { data: threeOnSaleAPI } = useSWR(API("THREE_ONSALE", getOnSaleTime(m24API)), fetchAPI);
  const [threeOnSale, setThreeOnSale] = useState({});
  const { data: crazyOnsaleAPI } = useSWR(API("CRAZY_ONSALE", getOnSaleTime(m24API)), fetchAPI);
  const [crazyOnSale, setCrazyOnSale] = useState({});
  const [scrollText, setScrollText] = useState({});
  const [ad2, setAd2] = useState({});

  useEffect(() => {
    if (m24API) {
      setServerTime(getServerTime(m24API)); // 拿時間
      setAd1(getAd(m24API)); // 拿第一個橫幅廣告
    }
    if (adAPI) {
      setBanner(getBanner(adAPI, 0)); // 拿Banner
      setScrollText(getScrollText(adAPI)); // 拿大聲公
      setAd2(getBanner(adAPI, 1)); // 拿第二個橫幅廣告
    }
    if (circleAPI) {
      setCircle(getCircle(circleAPI)); // 拿八顆廣告
    }
    if (categoryAPI) {
      setCategory(getCategory(categoryAPI)); // 拿分類
    }
    if (threeOnSaleAPI) {
      setThreeOnSale(getThreeOnSale(threeOnSaleAPI, parseInt(m24API.DateTime.substr(-8, 2)))); // 拿三賞
    }
    if (crazyOnsaleAPI) {
      setCrazyOnSale(getCrazyOnSale(crazyOnsaleAPI, parseInt(m24API.DateTime.substr(-8, 2)))); // 拿瘋殺
    }
  }, [m24API, adAPI, circleAPI, categoryAPI, categoryAPI, threeOnSaleAPI, crazyOnsaleAPI]);

  return (
    <div className="bg-gray-100 overflow-hidden">
      <Header />
      <Banner data={banner} />
      <PanelBar data={circle} />
      <Ad data={ad1} />
      <SignList data={category} />
      <ThreeOnSale data={threeOnSale} />
      <CrazyOnSale data={crazyOnSale} />
      <SlideBar data={scrollText} />
      <Ad data={ad2} />
    </div>
  );
};

export default Homepage;
