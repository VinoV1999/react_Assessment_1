import React from "react";
import { motion } from "framer-motion";
import { ExportCSV, Puzle, Plus } from "../icons/icon.js";

const Header = ({
  currentSection,
  updateCurrentSection,
  setInEditModeFunc
}: {
  currentSection: string;
  updateCurrentSection: (
    selectedSection: "Inventory" | "Collections" | "Analytics"
  ) => void;
  setInEditModeFunc: (inEditMode: Boolean) => void;
}) => {
  const updateCurrentSectionValue = (e: React.MouseEvent<HTMLSpanElement>) => {
    const nameAttributeValue = e.currentTarget.getAttribute("name");
    updateCurrentSection(
      nameAttributeValue as "Inventory" | "Collections" | "Analytics"
    );
  };
  return (
    <header className="w-full justify-between items-center flex border-b-2 pb-4 border-gray-300">
      <nav className="w-[38%] h-full flex items-center justify-between">
        <motion.span
          initial={{
            opacity: currentSection === "Inventory" ? 1 : 0.25,
            fontWeight : currentSection === "Inventory" ? 600 : 400
          }}
          animate={{
            opacity: currentSection === "Inventory" ? 1 : 0.25,
            fontWeight : currentSection === "Inventory" ? 600 : 400
          }}
          transition={{
            duration: .5,
          }}
          className={`hover:cursor-pointer text-3xl tracking-wide`}
          {...{ name: "Inventory" }}
          onClick={updateCurrentSectionValue}
        >
          Inventory
        </motion.span>
        <motion.span
          initial={{
            opacity: currentSection === "Collections" ? 1 : 0.25,
            fontWeight : currentSection === "Collections" ? 600 : 400
          }}
          animate={{
            opacity: currentSection === "Collections" ? 1 : 0.25,
            fontWeight : currentSection === "Collections" ? 600 : 400
          }}
          transition={{
            duration: .5,
          }}
          className={`hover:cursor-pointer text-3xl tracking-wide `}
          {...{ name: "Collections" }}
          onClick={updateCurrentSectionValue}
        >
          Collections
        </motion.span>
        <motion.span
          initial={{
            opacity: currentSection === "Analytics" ? 1 : 0.25,
            fontWeight : currentSection === "Analytics" ? 600 : 400
          }}
          animate={{
            opacity: currentSection === "Analytics" ? 1 : 0.25,
            fontWeight : currentSection === "Analytics" ? 600 : 400
          }}
          transition={{
            duration: .5,
          }}
          className={`hover:cursor-pointer text-3xl tracking-wide `}
          {...{ name: "Analytics" }}
          onClick={updateCurrentSectionValue}
        >
          Analytics
        </motion.span>
      </nav>
      <div className="w-[35%] h-full flex justify-between items-center">
        <button 
            className={`bg-btnbg text-white py-2 px-4 rounded-full flex justify-around items-center outline-none gap-2 focus:outline-none font-medium text-sm ${currentSection!=='Inventory'? 'opacity-50' :'opacity-100' }`}
            disabled={currentSection!=='Inventory'}
            onClick={()=>setInEditModeFunc(true)}
        > 
          <Plus className={"w-4 h-auto opacity-90"}/>
          <p className="font-medium text-sm opacity-90">Add New Product</p>
        </button>
        <button 
            className="bg-white my-2 mx-3 rounded-full flex justify-between items-center outline-none gap-2 focus:outline-none opacity-50 font-medium text-sm"
            onClick={()=>console.log('Impl Import Function')}
        > 
          <Puzle className={"w-4 h-auto"}/>
          Import Data
        </button>
        <button 
            className="bg-white my-2 mx-3 rounded-full flex justify-between items-center outline-none gap-2 focus:outline-none opacity-50 font-medium text-sm"
            onClick={()=>console.log('Impl Export Function')}
        > 
          <ExportCSV className={"w-4 h-auto"}/>
          Export CSV
        </button>
      </div>
    </header>
  );
};

export default Header;
