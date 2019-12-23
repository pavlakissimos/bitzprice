import Head from "next/head";

import Navbar from "./Navbar";

import "../assets/app.scss";

interface Props {
  children: JSX.Element[] | JSX.Element;
}

const Layout: React.FC<Props> = ({ children }: Props) => {
  return (
    <div>
      <Head>
        <title>BitzPrice</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        ></meta>
      </Head>
      <Navbar />
      <div className="section">
        <div className="container">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
