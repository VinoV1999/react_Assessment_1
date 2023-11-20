import { QrCode, SearchIcon } from "@/icons/icon";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Loading from "../Loading";
import { BASEURL, ProductInterface } from "../../constants/constant.ts";
import ProductList from "./ProductList.tsx";

const Inventroy = () => {
  const headersArray: String[] = [
    "Stock",
    "WHS",
    "Discount%",
    "Colour",
    "Sizes",
    "Inventory",
    "LeadTime",
  ];

  let storedProducts: string | null = null;
  if (typeof window !== "undefined") {
    storedProducts = localStorage.getItem("products");
  }
  const initialProducts: ProductInterface[] = storedProducts
    ? JSON.parse(storedProducts)
    : [];
  const [products, setProducts] = useState<ProductInterface[]>(initialProducts);
  const [searchText, setSearchText] = useState<string>("");
  const FilteredProducts: ProductInterface[] = products.filter((item) =>
    item.title.toLowerCase().includes(searchText.toLowerCase())
  );

  const fetchProducts = async () => {
    fetch(`${BASEURL}/products`, {
      method: "GET",
      headers: { "content-type": "application/json" },
    })
      .then((res) => {
        if (res.ok) return res.json();
      })
      .then((products) => {
        localStorage.setItem("products", JSON.stringify(products));
        setProducts(products);
      })
      .catch((error) => {
        console.log("Error : ", error);
      });
  };

  const handleReload = () => {
    const storedProducts = localStorage.getItem("products");
    const refetchProducts: ProductInterface[] = storedProducts
      ? JSON.parse(storedProducts)
      : [];
    setProducts(refetchProducts);
  };

  const updProducts = (product: ProductInterface[]) => {
    setProducts(product);
  };
  useEffect(() => {
    if (products.length === 0) fetchProducts();
  }, []);
  return (
    <motion.section
      initial={{
        opacity: 0,
        y: 10,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      exit={{
        opacity: 0,
        y: 10,
      }}
      transition={{
        ease: "easeInOut",
      }}
      className="h-full w-full flex flex-col items-center justify-center"
    >
      <div className="w-full flex items-center">
        <div className="w-[35%] flex relative">
          <div
            id="Reload"
            onClick={handleReload}
            className="absolute top-0 right-0 w-5 h-5 opacity-0"
          >
            reload
          </div>
          <div className="border-2 w-[70%] border-borderBlue p-3 ml-2 gap-3 flex">
            <SearchIcon className={"w-6 h-auto opacity-50"} />
            <input
              className="focus:outline-none w-full text-sm"
              placeholder="Search All Orders "
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
            <QrCode className={"w-6 h-auto opacity-70"} />
          </div>
        </div>
        <div className="w-[65%] h-full pl-2 ml-2 flex justify-between items-center">
          {headersArray.map((header, index) => (
            <span
              key={`${header}_${index}`}
              className="flex justify-center w-full text-sm text-textColor font-semibold"
            >
              {" "}
              {header}{" "}
            </span>
          ))}
        </div>
      </div>
      {products.length === 0 ? (
        <div className="w-full flex items-center justify-center">
          <Loading />
        </div>
      ) : (
        <>
          {FilteredProducts.map((product) => {
            const {
              id,
              title,
              price,
              discountPercentage,
              inventory,
              active,
              leadTime,
              image,
              primary_variant_name,
              secondary_variant_name,
              primary_variants,
            } = product;
            const colors = primary_variants.map((item) => item.name);
            return (
              <div key={id} className="w-full flex items-center">
                <ProductList
                  id={id}
                  whs={price}
                  discount={discountPercentage}
                  colors={colors}
                  inventory={inventory}
                  leadTime={leadTime}
                  title={title}
                  url={image}
                  primaryVariantName={primary_variant_name}
                  secondaryVariantName={secondary_variant_name}
                  active={active}
                  primaryVariants={primary_variants}
                  updProducts={updProducts}
                  type="prod"
                />
              </div>
            );
          })}
        </>
      )}
    </motion.section>
  );
};

export default Inventroy;
