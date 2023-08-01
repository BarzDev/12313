import { useEffect, useState } from "react";
import api from "./api";
import Store from "@/components/elements/Store/store";
import Layout from "@/components/layouts/Layout";
import style from "@/styles/Home.module.css";


export default function Home() {
  const [product, setProduct] = useState([]);

  const fectchData = async () => {
    const response = await api.get();
    const data = await response.data.products;
    setProduct(data);
  };

  useEffect(() => {
    fectchData();
  }, []);
  return (
    <Layout>
      <h1 style={{ fontWeight:"bolder", fontSize:"larger", color: "#292c4b" }}>PRODUCT LIST</h1>
      <div className={style.Home}>
        <Store products={product}/>

      </div>
    </Layout>
  );
}
