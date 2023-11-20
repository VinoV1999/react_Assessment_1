import React, { useState } from "react";

import { PrimaryVariant, SecondaryVariant } from "@/constants/constant";
import { motion } from "framer-motion";
import { AngleUpArrow } from "@/icons/icon";

interface EditSubVariantsProps {
  handlePVInputChange?: (variant: PrimaryVariant, pvIndex: number) => void;
  handleSvInputChange: (
    variant: SecondaryVariant,
    pvIndex: number,
    svIndex: number
  ) => void;
  removePVIndex?: (pvIndex: number) => void;
  removeSVIndex: (pvIndex: number, svIndex: number) => void;
  handlePVNewRow: (index:number) => void;
  pvIndex: number;
  svIndex?: number;
  variant: PrimaryVariant | SecondaryVariant;
}

const EditSubVariants = ({
  handlePVInputChange,
  handleSvInputChange,
  removePVIndex,
  removeSVIndex,
  pvIndex,
  svIndex,
  variant,
  handlePVNewRow
}: EditSubVariantsProps) => {
  const [variantValue, setVariantValue] = useState<
    PrimaryVariant | SecondaryVariant
  >(variant);
  const [isOpen, setIsopen] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setVariantValue((pre) => {
      const newVariant = {
        ...pre,
        [event.target.name]:
          event.target.name === "active"
            ? event.target.checked
            : event.target.value,
      };
      if (
        event.target.name === "active" &&
        "active" in variantValue &&
        handlePVInputChange
      )
        handlePVInputChange(variantValue, pvIndex);
      return newVariant;
    });
  };

  const handleOnblurEvent = () => {
    if ("active" in variantValue && handlePVInputChange)
      handlePVInputChange(variantValue, pvIndex);
    else if (svIndex !== undefined)
      handleSvInputChange(variantValue, pvIndex, svIndex);
  };

  return (
    <>
      <motion.div
        key={`${variant?.name} ${pvIndex} ${svIndex ? svIndex : ""}`}
        initial={{
          height: 40,
        }}
        animate={{
          height: isOpen ? "auto" : 40,
        }}
        transition={{
          ease: "linear",
        }}
        className="w-[90%] overflow-hidden flex flex-wrap border-2 rounded-md border-gray-500 mt-5 py-2 opacity-100 justify-center items-center relative"
      >
        <div
          className={`text-sm text-textColor font-semibold w-full flex gap-5 items-center  ${
            "active" in variantValue ? "mx-10" : "mx-8"
          }`}
        >
          {"active" in variantValue
            ? `primary Variant ${pvIndex + 1}`
            : `Seconday Variant ${svIndex ? svIndex + 1 : "1"}`}
          <motion.div
            onClick={() => {
              setIsopen((pre) => !pre);
            }}
            initial={{ rotate: 180 }}
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ ease: "linear" }}
            className="z-30"
          >
            <AngleUpArrow className={"w-3 h-auto hover:cursor-pointer z-30"} />
          </motion.div>
          {/* {svIndex !== undefined && svIndex===0 && <div
            onClick={() =>{ handlePVNewRow(pvIndex) }}
            className="rounded-full h-6 w-6 z-50 bg-btnbg text-white flex items-center justify-center hover:cursor-pointer"
          >
            +
          </div>} */}
        </div>
        <div
          onClick={() => {
            removePVIndex
              ? removePVIndex(pvIndex)
              : svIndex && removeSVIndex(pvIndex, svIndex);
          }}
          className="absolute right-0 top-0 h-10 w-10 flex items-center justify-center hover:cursor-pointer hover:text-red-500"
        >
          x
        </div>
        <div
          className={`w-[40%] flex items-center justify-center gap-5 text-sm text-textColor font-semibold my-2 ${
            "active" in variant ? "mx-10" : "mx-8"
          }`}
        >
          <label className="w-1/3">Name</label>
          <input
            className="w-2/3 h-10 px-2 font-normal bg-gray-50 border-2 border-gray-200 rounded-md focus:outline-none focus:border-gray-400"
            value={variantValue.name}
            {...{ name: "name" }}
            placeholder="Enter Name"
            onChange={handleChange}
            onBlur={handleOnblurEvent}
          />
        </div>
        <div
          className={`w-[40%] flex items-center justify-center gap-5 text-sm text-textColor font-semibold my-2 ${
            "active" in variant ? "mx-10" : "mx-8"
          }`}
        >
          <label className="w-1/3">Price </label>
          <input
            className="w-2/3 h-10 px-2 font-normal bg-gray-50 border-2 border-gray-200 rounded-md focus:outline-none focus:border-gray-400"
            value={variantValue.price}
            {...{ name: "price" }}
            placeholder="Enter Price"
            onChange={handleChange}
            onBlur={handleOnblurEvent}
          />
        </div>
        <div
          className={`w-[40%] flex items-center justify-center gap-5 text-sm text-textColor font-semibold my-2 ${
            "active" in variant ? "mx-10" : "mx-8"
          }`}
        >
          <label className="w-1/3">Discount Percentage </label>
          <input
            className="w-2/3 h-10 px-2 font-normal bg-gray-50 border-2 border-gray-200 rounded-md focus:outline-none focus:border-gray-400"
            value={variantValue.discountPercentage}
            {...{ name: "discountPercentage" }}
            placeholder="Enter Discount %"
            onChange={handleChange}
            onBlur={handleOnblurEvent}
          />
        </div>
        <div
          className={`w-[40%] flex items-center justify-center gap-5 text-sm text-textColor font-semibold my-2 ${
            "active" in variant ? "mx-10" : "mx-8"
          }`}
        >
          <label className="w-1/3">Inventory </label>
          <input
            className="w-2/3 h-10 px-2 font-normal bg-gray-50 border-2 border-gray-200 rounded-md focus:outline-none focus:border-gray-400"
            value={variantValue.inventory}
            {...{ name: "inventory" }}
            placeholder="Enter Inventory"
            onChange={handleChange}
            onBlur={handleOnblurEvent}
          />
        </div>
        {"active" in variantValue && (
          <>
            {" "}
            <div
              className={`w-[40%] flex items-center justify-center gap-5 text-sm text-textColor font-semibold my-2 ${
                "active" in variant ? "mx-10" : "mx-8"
              }`}
            >
              <label className="w-1/3">Acitve </label>
              <div className="w-2/3 h-10 px-2 flex items-center">
                <input
                  className=""
                  type="checkbox"
                  checked={variantValue.active}
                  {...{ name: "active" }}
                  onChange={handleChange}
                  onBlur={handleOnblurEvent}
                />
              </div>
            </div>
            <div
              className={`w-[40%] flex items-center justify-center gap-5 text-sm text-textColor font-semibold my-2 ${
                "active" in variant ? "mx-10" : "mx-8"
              }`}
            ></div>
          </>
        )}
        {"active" in variant &&
          variant.secondary_variants.map((sv, index) => (
            <EditSubVariants
              variant={sv}
              removeSVIndex={removeSVIndex}
              handleSvInputChange={handleSvInputChange}
              svIndex={index}
              pvIndex={pvIndex}
              handlePVNewRow={handlePVNewRow}
            />
          ))}
      </motion.div>
    </>
  );
};

export default EditSubVariants;
