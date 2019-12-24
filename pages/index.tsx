import { NextPage } from "next";
import fetch from "isomorphic-unfetch";

import Layout from "../components/Layout";
import Prices from "../components/Prices";

interface IIndex {
  bpi: any;
}

const Index: NextPage<IIndex> = ({ bpi }) => {
  return (
    <Layout>
      <h1>Welcome to BitzPrice!</h1>
      <Prices bpi={bpi} />
    </Layout>
  );
};

Index.getInitialProps = async function() {
  const res = await fetch("https://api.coindesk.com/v1/bpi/currentprice.json");
  const data = await res.json();

  return {
    bpi: data
  };
};

export default Index;
