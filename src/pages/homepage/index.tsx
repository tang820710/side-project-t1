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
  getThreeOnSale
} from "../../api/homepage";
import "../../assets/styles.css";
import Header from "../../components/header";
import Banner from "../../components/banner";
import PanelBar from "../../components/panelbar";
import Ad from "../../components/ad";
import SignList from "../../components/signlist";
import ThreeOnSale from "../../components/three-onsale";

const Homepage: React.FC = () => {
  const { data: m24API } = useSWR(API("H24_MOBILE", getTime()), fetchAPI);
  const [serverTime, setServerTime] = useState("");
  const { data: bannerAPI } = useSWR(API("BANNER"), fetchAPI);
  const [banner1, setBanner1] = useState({});
  const { data: circleAPI } = useSWR(API("CIRCLE", serverTime), fetchAPI);
  const [circle, setCircle] = useState({});
  const [ad, setAd] = useState({});
  const { data: categoryAPI } = useSWR(API("CATEGORY"), fetchAPI);
  const [category, setCategory] = useState({});
  const { data: threeOnSaleAPI } = useSWR(API("THREEONSALE", getOnSaleTime(m24API)), fetchAPI);
  const [threeOnSale, setThreeOnSale] = useState({});

  useEffect(() => {
    if (m24API) {
      setServerTime(getServerTime(m24API)); // 拿時間
      setAd(getAd(m24API)); // 拿橫幅廣告
    }
    if (bannerAPI) {
      setBanner1(getBanner(bannerAPI, 0)); // 拿Banner
    }
    if (circleAPI) {
      setCircle(getCircle(circleAPI)); // 拿八顆廣告
    }
    if (categoryAPI) {
      setCategory(getCategory(categoryAPI)); // 拿分類
    }
    if (threeOnSaleAPI) {
      setThreeOnSale(getThreeOnSale(threeOnSaleAPI, m24API.DateTime.substr(-8, 2))); // 拿三賞
    }
  }, [m24API, bannerAPI, circleAPI, categoryAPI, categoryAPI, threeOnSaleAPI]);

  return (
    <div className="bg-gray-100 overflow-x-hidden">
      <Header />
      <Banner data={banner1} />
      <PanelBar data={circle} />
      <Ad data={ad} />
      <SignList data={category} />
      <ThreeOnSale data={threeOnSale} />
    </div>
  );
};

export default Homepage;
