import React, { useState } from "react";
import {
  PrimaryVariant,
  ProductInterface,
  SecondaryVariant,
} from "@/constants/constant";
import { motion } from "framer-motion";
import { AngleUpArrow } from "@/icons/icon";
import EditSubVariants from "./EditSubVariants.tsx";

interface EditProductsPropsInterface {
  setInEditModeFunc: (inEditMode: Boolean) => void;
  prodId?: number;
  updProducts?: (products: ProductInterface[]) => void;
}

const EditProducts = ({
  setInEditModeFunc,
  prodId,
  updProducts,
}: EditProductsPropsInterface) => {
  const secondaryvariantDefaultValues = {
    price: 0,
    discountPercentage: 0,
    inventory: 0,
    name: "",
  };
  const primaryVariantDefaultValue = {
    name: "",
    price: 0,
    discountPercentage: 0,
    inventory: 0,
    active: false,
    secondary_variants: [secondaryvariantDefaultValues],
  };
  const productDefaultValue = {
    id: Date.now(),
    title: "",
    price: 0,
    discountPercentage: 0,
    inventory: 0,
    active: false,
    leadTime: "",
    description: "",
    category: "",
    image: "",
    primary_variant_name: "",
    secondary_variant_name: "",
    primary_variants: [primaryVariantDefaultValue],
  };

  const storedProducts = localStorage.getItem("products");
  const isvaluePresent =
    storedProducts &&
    JSON.parse(storedProducts).some(
      (item: ProductInterface) => item.id === prodId
    );
  const EditProduct: ProductInterface =
    isvaluePresent && storedProducts
      ? isvaluePresent
        ? JSON.parse(storedProducts).filter(
            (item: ProductInterface) => item.id === prodId
          )[0]
        : productDefaultValue
      : productDefaultValue;

  const [product, setProduct] = useState<ProductInterface>(EditProduct);
  const [ispvOpen, setIspvOpen] = useState<Boolean>(true);
  const [render, setRender] = useState<boolean>(true);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (storedProducts) {
      const prodList: ProductInterface[] = JSON.parse(storedProducts);
      if (!prodId) {
        prodList.push(product);
        if (prodList) {
          if (updProducts) updProducts(prodList);
          setInEditModeFunc(false);
          localStorage.setItem("products", JSON.stringify(prodList));
          document.getElementById("Reload")?.click();
          return;
        }
      }
      const newprodList = prodList.map((proditem: ProductInterface) =>
        proditem.id === product.id ? product : proditem
      );
      if (newprodList) {
        if (updProducts) updProducts(newprodList);
        setInEditModeFunc(false);
        localStorage.setItem("products", JSON.stringify(newprodList));
      }
    }
  };
  const handleProductInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setProduct((pre) => ({
      ...pre,
      [event.target.name]:
        event.target.name === "active"
          ? event.target.checked
          : event.target.value,
    }));
  };

  const handlePVInputChange = (variant: PrimaryVariant, pvIndex: number) => {
    setProduct((pre) => {
      const prePV = pre.primary_variants;
      const updatedPVItems = prePV.map((item, itemIndex) =>
        itemIndex === pvIndex ? variant : item
      );
      return { ...pre, primary_variants: updatedPVItems };
    });
  };

  const handleSVInputChange = (
    variant: SecondaryVariant,
    pvIndex: number,
    svIndex: number
  ) => {
    setProduct((pre) => {
      const prePV = pre.primary_variants;
      const updatedPVItems = prePV.map((pvitem, pvitemIndex) =>
        pvitemIndex === pvIndex
          ? {
              ...pvitem,
              secondary_variants: pvitem.secondary_variants.map(
                (svitem, svitemIndex) =>
                  svitemIndex === svIndex ? variant : svitem
              ),
            }
          : pvitem
      );
      return { ...pre, primary_variants: updatedPVItems };
    });
  };

  const handlePVNewRow = (pvIndex?: number) => {
    if (!pvIndex)
      setProduct((pre) => {
        const newprod = pre;
        newprod.primary_variants = [...pre.primary_variants, primaryVariantDefaultValue];
        return newprod;
      });
    else
    setProduct((pre) => {
      const newprod = pre;
      newprod.primary_variants[pvIndex].secondary_variants = [...pre.primary_variants[pvIndex].secondary_variants, secondaryvariantDefaultValues];
      return newprod;
    });
    setRender(pre=>!pre);

  };

  const removePVIndex = (pvIndex: number) => {
    setProduct((pre) => {
      const prePV = pre.primary_variants;
      const updatedPVItems = prePV.filter(
        (_, itemIndex) => itemIndex != pvIndex
      );

      return { ...pre, primary_variants: updatedPVItems };
    });
  };

  const removeSVIndex = (pvIndex: number, svIndex: number) => {
    setProduct((pre) => {
      const prePV = pre.primary_variants;
      const updatedPVItems = prePV.map((pvitem, pvitemIndex) =>
        pvitemIndex === pvIndex
          ? {
              ...pvitem,
              secondary_variants: pvitem.secondary_variants.filter(
                (_, svItemIndex) => svItemIndex != svIndex
              ),
            }
          : pvitem
      );
      return { ...pre, primary_variants: updatedPVItems };
    });
  };

  const removeProduct = (prodId: number | undefined) => {
    if (storedProducts) {
      const prodList: ProductInterface[] = JSON.parse(storedProducts);
      const newprodList = prodList.filter(
        (proditem: ProductInterface) => proditem.id !== prodId
      );
      if (newprodList) {
        if (updProducts) updProducts(newprodList);
        setInEditModeFunc(false);
        localStorage.setItem("products", JSON.stringify(newprodList));
      }
    }
  };

  return (
    <div
      className="z-50 min-h-screen min-w-screen w-full h-full opacity-90 bg-gray-50 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  flex items-center justify-center"
      onClick={() => setInEditModeFunc(false)}
    >
      {
        <div
          onClick={(e) => e.stopPropagation()}
          className="w-2/3 h-2/3 overflow-y-auto flex items-center bg-white shadow-md shadow-black rounded-md m-5 opacity-100 backdrop-blur-3xl"
        >
          {!isvaluePresent && prodId ? (
            <div className="flex items-center justify-center w-full">
              No Data Found...
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="h-full p-4 w-full gap-5 items-center justify-center"
            >
              <div className="w-full flex items-center justify-start gap-2 text-sm text-textColor font-bold">
                <h2> Product Details</h2>
              </div>
              <div className="reltive w-full flex flex-wrap opacity-100 justify-center items-center border-2 border-gray-500 mt-5 py-2 rounded-md">
                <div
                  onClick={() => {
                    removeProduct(prodId);
                  }}
                  className="absolute right-3 top-14 h-10 w-10 flex items-center justify-center hover:cursor-pointer hover:text-red-500"
                >
                  x
                </div>
                <div className="w-[40%] flex items-center justify-center gap-5 text-sm text-textColor font-semibold mx-10 my-2">
                  <label className="w-1/3">Title </label>
                  <input
                    className="w-2/3 h-10 px-2 font-normal bg-gray-50 border-2 border-gray-200 rounded-md focus:outline-none focus:border-gray-400"
                    value={product?.title}
                    {...{ name: "title" }}
                    placeholder="Enter Title"
                    onChange={handleProductInputChange}
                  />
                </div>
                <div className="w-[40%] flex items-center justify-center gap-5 text-sm text-textColor font-semibold mx-10 my-2">
                  <label className="w-1/3">Price </label>
                  <input
                    className="w-2/3 h-10 px-2 font-normal bg-gray-50 border-2 border-gray-200 rounded-md focus:outline-none focus:border-gray-400"
                    value={product?.price}
                    {...{ name: "price" }}
                    placeholder="Enter price"
                    onChange={handleProductInputChange}
                  />
                </div>
                <div className="w-[40%] flex items-center justify-center gap-5 text-sm text-textColor font-semibold mx-10 my-2">
                  <label className="w-1/3">Discount Percentage </label>
                  <input
                    className="w-2/3 h-10 px-2 font-normal bg-gray-50 border-2 border-gray-200 rounded-md focus:outline-none focus:border-gray-400"
                    value={product?.discountPercentage}
                    {...{ name: "discountPercentage" }}
                    placeholder="Enter Discount %"
                    onChange={handleProductInputChange}
                  />
                </div>
                <div className="w-[40%] flex items-center justify-center gap-5 text-sm text-textColor font-semibold mx-10 my-2">
                  <label className="w-1/3">Inventory </label>
                  <input
                    className="w-2/3 h-10 px-2 font-normal bg-gray-50 border-2 border-gray-200 rounded-md focus:outline-none focus:border-gray-400"
                    value={product?.inventory}
                    {...{ name: "inventory" }}
                    placeholder="Enter inventory"
                    onChange={handleProductInputChange}
                  />
                </div>
                <div className="w-[40%] flex items-center justify-center gap-5 text-sm text-textColor font-semibold mx-10 my-2">
                  <label className="w-1/3">Acitve </label>
                  <div className="w-2/3 h-10 px-2 flex items-center">
                    <input
                      className=""
                      type="checkbox"
                      checked={product?.active}
                      {...{ name: "active" }}
                      onChange={handleProductInputChange}
                    />
                  </div>
                </div>
                <div className="w-[40%] flex items-center justify-center gap-5 text-sm text-textColor font-semibold mx-10 my-2">
                  <label className="w-1/3">LeadTime </label>
                  <input
                    className="w-2/3 h-10 px-2 font-normal bg-gray-50 border-2 border-gray-200 rounded-md focus:outline-none focus:border-gray-400"
                    value={product?.leadTime}
                    {...{ name: "leadTime" }}
                    placeholder="Enter LeadTime"
                    onChange={handleProductInputChange}
                  />
                </div>
                <div className="w-[40%] flex items-center justify-center gap-5 text-sm text-textColor font-semibold mx-10 my-2">
                  <label className="w-1/3">Description </label>
                  <input
                    className="w-2/3 h-10 px-2 font-normal bg-gray-50 border-2 border-gray-200 rounded-md focus:outline-none focus:border-gray-400"
                    value={product?.description}
                    {...{ name: "description" }}
                    placeholder="Enter Description"
                    onChange={handleProductInputChange}
                  />
                </div>
                <div className="w-[40%] flex items-center justify-center gap-5 text-sm text-textColor font-semibold mx-10 my-2">
                  <label className="w-1/3">Category </label>
                  <input
                    className="w-2/3 h-10 px-2 font-normal bg-gray-50 border-2 border-gray-200 rounded-md focus:outline-none focus:border-gray-400"
                    value={product?.category}
                    {...{ name: "category" }}
                    placeholder="Enter Category"
                    onChange={handleProductInputChange}
                  />
                </div>
                <div className="w-[40%] flex items-center justify-center gap-5 text-sm text-textColor font-semibold mx-10 my-2">
                  <label className="w-1/3">Image URL </label>
                  <input
                    className="w-2/3 h-10 px-2 font-normal bg-gray-50 border-2 border-gray-200 rounded-md focus:outline-none focus:border-gray-400"
                    value={product?.image}
                    {...{ name: "image" }}
                    placeholder="Enter Image URl"
                    onChange={handleProductInputChange}
                  />
                </div>
                <div className="w-[40%] flex items-center justify-center gap-5 text-sm text-textColor font-semibold mx-10 my-2">
                  <label className="w-1/3">Primary Variant Name </label>
                  <input
                    className="w-2/3 h-10 px-2 font-normal bg-gray-50 border-2 border-gray-200 rounded-md focus:outline-none focus:border-gray-400"
                    value={product?.primary_variant_name}
                    {...{ name: "primary_variant_name" }}
                    placeholder="Enter Primary Variant Name"
                    onChange={handleProductInputChange}
                  />
                </div>
                <div className="w-[40%] flex items-center justify-center gap-5 text-sm text-textColor font-semibold mx-10 my-2">
                  <label className="w-1/3">Secondary Variant Name </label>
                  <input
                    className="w-2/3 h-10 px-2 font-normal bg-gray-50 border-2 border-gray-200 rounded-md focus:outline-none focus:border-gray-400"
                    value={product?.secondary_variant_name}
                    {...{ name: "secondary_variant_name" }}
                    placeholder="Enter Secondary Variant Name"
                    onChange={handleProductInputChange}
                  />
                </div>
                <div className="w-[40%] flex items-center justify-center gap-5 text-sm text-textColor font-semibold mx-10 my-2"></div>
              </div>
              <div className="w-full flex items-center justify-start gap-4 text-sm text-textColor font-bold py-2 overflow-hidden">
                <h2> Primary Varients Details</h2>
                <motion.div
                  onClick={() => {
                    setIspvOpen((pre) => !pre);
                  }}
                  initial={{ rotate: 180 }}
                  animate={{ rotate: ispvOpen ? 180 : 0 }}
                  transition={{ ease: "linear" }}
                  className="z-30"
                >
                  <AngleUpArrow
                    className={"w-3 h-auto hover:cursor-pointer z-30"}
                  />
                </motion.div>
                {/* <div
                  onClick={()=>handlePVNewRow}
                  className="rounded-full h-6 w-6 z-50 bg-btnbg text-white flex items-center justify-center m-3 hover:cursor-pointer"
                >
                  +
                </div> */}
              </div>
              <motion.div
                initial={{
                  height: "0px",
                  opacity: 0,
                  y: 20,
                  display: "none",
                }}
                animate={{
                  height: ispvOpen ? "auto" : "0px",
                  opacity: ispvOpen ? 1 : 0,
                  display: ispvOpen ? "flex" : "none",
                  y: 0,
                }}
                className="w-full flex flex-col gap-1 rounded-lg items-center justify-center"
              >
                {product?.primary_variants?.length > 0 &&
                  product?.primary_variants.map((pv, pvindex) => (
                    <EditSubVariants
                      handlePVInputChange={handlePVInputChange}
                      handleSvInputChange={handleSVInputChange}
                      removePVIndex={removePVIndex}
                      removeSVIndex={removeSVIndex}
                      pvIndex={pvindex}
                      variant={pv}
                      handlePVNewRow={handlePVNewRow}
                    />
                  ))}
              </motion.div>
              <div className="w-full flex items-center py-5 justify-end">
                <button className="mx-5 py-2 px-4 font-semibold text-white text-sm bg-btnbg rounded-full">
                  Submit
                </button>
              </div>
            </form>
          )}
        </div>
      }
    </div>
  );
};

export default EditProducts;
