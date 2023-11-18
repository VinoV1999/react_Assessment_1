import React, { useState } from "react";
import { PrimaryVariant, ProductInterface, SecondaryVariant } from "@/constants/constant";
import Image from "next/image";
import { AngleUpArrow, EditPencil } from "../../icons/icon.js";
import { motion } from "framer-motion";
import EditProducts from "./EditProducts.tsx";
import { MouseEventHandler } from 'react';

interface productProps {
  id:number;
  stock?: number;
  whs?: number;
  discount: number;
  colors?: string[];
  sizes?: string[];
  inventory: number;
  leadTime?: string;
  title: string;
  url?: string;
  primaryVariantName: string;
  secondaryVariantName: string;
  active?: Boolean;
  primaryVariants?: PrimaryVariant[];
  SecondaryVariants?: SecondaryVariant[];
  updProducts?:(products:ProductInterface[]) => void,
  type: string;
}

const ProductList = ({
  id,
  stock,
  whs,
  discount,
  colors,
  sizes,
  inventory,
  leadTime,
  title,
  url,
  primaryVariantName,
  secondaryVariantName,
  active,
  primaryVariants,
  SecondaryVariants,
  updProducts,
  type,
}: productProps) => {
  const [isChildOpen, setIsChildOpen] = useState<Boolean>(false);
  const [inEditMode, setInEditMode] = useState<Boolean>(false);

  const getColorComponent = (colors: string[]) => (
    <>
      {colors.slice(0, 2).map((color, index) => (
        <div
          key={color + index}
          className="h-5 w-5 ml-1 rounded-full shadow-inner shadow-gray-200"
          style={{ backgroundColor: color }}
        ></div>
      ))}
      {colors.length > 2 && <p className="ml-1">{`+${colors.length - 2}`}</p>}
    </>
  );

  const USD = new Intl.NumberFormat("en-us", {
    style: "currency",
    currency: "USD",
  });

  const getSizeFormat = (sizes: string[]) => (
    <>
      {sizes.slice(0, 2).join(", ")}
      {sizes.length > 2 && <p className="ml-1">{`, +${sizes.length - 2}`}</p>}
    </>
  );

  const setInEditModeFunc  = (inEditMode:Boolean) => { setInEditMode(inEditMode) }
  return (
    <div className="w-full flex flex-col">
      {inEditMode && <EditProducts prodId={id} updProducts={updProducts} setInEditModeFunc={setInEditModeFunc} />}
      <div className="w-full flex items-center hover:bg-borderBlue">
        <div className="w-[35%] flex pl-5 my-2">
          <div
            className={`w-[70%] p-3 gap-3 flex items-center relative z-30 ${
              type==='prod' ? "ml-2" : type==='primary' ? "ml-10" : type==="secondary" && "ml-20"
            }`}
          >
            {type==='prod' && <motion.div
              initial={{opacity:0}}
               whileHover={{ opacity: 1 }}
              className="absolute flex justify-end w-full h-full items-center z-0"
              >
              <motion.button
                className="text-sm text-btnbg font-semibold flex items-center justify-center z-20"
                whileHover={{ opacity: 1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => {
                  setInEditMode(true);
                }}
              >
                <EditPencil className={'w-3 h-auto mr-1'} fill={'#1c01de'}/>
                <p>Edit</p>
              </motion.button>
            </motion.div>}
            {url != undefined && (
              <div className="rounded-full shadow-md shadow-gray-500 outline-1 outline-black p-1 h-10 w-10 overflow-hidden flex items-center justify-center">
                <Image
                  src={url}
                  alt={title}
                  width={20}
                  height={20}
                  className="w-auto h-auto rounded-full shadow-md shadow-gray-500 outline-1 outline-black"
                  onContextMenu={(e) => e.preventDefault()}
                />
              </div>
            )}
            <h2 className="text-sm text-textColor font-semibold">
              {title.length <= 15 ? title : `${title.slice(0, 15)}...`}
            </h2>
            {primaryVariantName &&
              primaryVariants &&
              primaryVariants?.length > 0 && (
                <>
                  <p className="text-xs text-textColor">{`${primaryVariants?.length} ${primaryVariantName}`}</p>
                  <motion.div
                    onClick={() => setIsChildOpen((pre) => !pre)}
                    initial={{ rotate: 180 }}
                    animate={{ rotate: isChildOpen ? 180 : 0 }}
                    transition={{ ease: "linear" }}
                    className="z-30"
                  >
                    <AngleUpArrow
                      className={"w-3 h-auto hover:cursor-pointer z-30"}
                    />
                  </motion.div>
                </>
              )}
            {secondaryVariantName &&
              SecondaryVariants &&
              SecondaryVariants?.length > 0 && (
                <>
                  <p className="text-xs text-textColor z-30">{`${SecondaryVariants?.length} ${secondaryVariantName}`}</p>
                  <motion.div
                    onClick={() => setIsChildOpen((pre) => !pre)}
                    initial={{ rotate: 180 }}
                    animate={{ rotate: isChildOpen ? 180 : 0 }}
                    transition={{ ease: "linear" }}
                    className="z-30"
                  >
                    <AngleUpArrow
                      className={"w-3 h-auto hover:cursor-pointer z-30"}
                    />
                  </motion.div>
                  {active && (
                    <div className="px-3 py-1 rounded-full text-xs font-semibold bg-activeColor text-white">
                      Active
                    </div>
                  )}
                </>
              )}
            
          </div>
        </div>
        <div className="w-[65%] h-full pl-2 ml-2 flex justify-between items-center">
          <span className="flex justify-center w-full text-sm text-textColor font-semibold hover:cursor-pointer">
            {stock ? stock : " "}{" "}
          </span>
          <span className="flex justify-center w-full text-sm text-textColor font-semibold hover:cursor-pointer">
            {whs ? USD.format(whs) : " "}{" "}
          </span>
          <span className="flex justify-center w-full text-sm text-textColor font-semibold hover:cursor-pointer">
            {discount ? discount : " "}{" "}
          </span>
          <span className="flex justify-center w-full text-sm text-textColor font-semibold hover:cursor-pointer">
            {colors ? getColorComponent(colors) : " "}{" "}
          </span>
          <span className="flex justify-center w-full text-sm text-textColor font-semibold hover:cursor-pointer">
            {sizes ? getSizeFormat(sizes) : " "}{" "}
          </span>
          <span className="flex justify-center w-full text-sm text-textColor font-semibold hover:cursor-pointer">
            {inventory ? inventory : " "}{" "}
          </span>
          <span className="flex justify-center w-full text-sm text-textColor font-semibold hover:cursor-pointer">
            {leadTime ? leadTime : " "}{" "}
          </span>
        </div>
      </div>
      {primaryVariants &&
        primaryVariants.length > 0 &&
        primaryVariants.map((primaryVariant, index) => {
          const {
            name,
            price,
            discountPercentage,
            inventory,
            active,
            secondary_variants,
          } = primaryVariant;
          const sizes = secondary_variants.map((item) =>
            item.name
              .split(" ")
              .map((item) => item[0])
              .join("")
          );
          return (
            <motion.div
              initial={{
                height: "0px",
                opacity: 0,
                y: -20,
              }}
              animate={{
                height: isChildOpen ? "auto" : "0px",
                opacity: isChildOpen ? 1 : 0,
                y: 0,
              }}
              key={name + index}
              className="w-full flex items-center overflow-hidden"
            >
              <ProductList
                id={index}
                whs={price}
                discount={discountPercentage}
                inventory={inventory}
                sizes={sizes}
                title={name}
                primaryVariantName={primaryVariantName}
                secondaryVariantName={secondaryVariantName}
                active={active}
                SecondaryVariants={secondary_variants}
                type="primary"
              />
            </motion.div>
          );
        })}
      {SecondaryVariants &&
        SecondaryVariants.length > 0 &&
        SecondaryVariants.map((secondaryvariant, index) => {
          const { name, price, discountPercentage, inventory } =
            secondaryvariant;
          return (
            <motion.div
              initial={{
                height: "0px",
                opacity: 0,
              }}
              animate={{
                height: isChildOpen ? "auto" : "0px",
                opacity: isChildOpen ? 1 : 0,
              }}
              key={name + index}
              className="w-full flex items-center overflow-hidden"
            >
              <ProductList
                id={index}
                whs={price}
                discount={discountPercentage}
                inventory={inventory}
                title={name}
                primaryVariantName={primaryVariantName}
                secondaryVariantName={secondaryVariantName}
                type="secondary"
              />
            </motion.div>
          );
        })}
    </div>
  );
};

export default ProductList;
