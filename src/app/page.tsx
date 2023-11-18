"use client"
import { useState } from "react";
import Header from "@/components/Header.tsx";
import Inventroy from "@/components/inventory/Inventroy.tsx";
import Collections from "@/components/collections/Collections.tsx";
import Analytics from "@/components/analytics/Analytics.tsx";
import { AnimatePresence } from "framer-motion";
import EditProducts from "@/components/inventory/EditProducts";

export default function Home() {

  const [currentSection, setCurrentSection] = useState<
    "Inventory" | "Collections" | "Analytics"
  >(() => "Inventory");
  const [inEditMode, setInEditMode] = useState<Boolean>(false);

  const updateCurrentSection = (
    selectedSection: "Inventory" | "Collections" | "Analytics"
  ) => {
    setCurrentSection(selectedSection);
  };
  const setInEditModeFunc  = (inEditMode:Boolean) => { setInEditMode(inEditMode) }

  return (
    <div className="relative min-h-screen w-full bg-white flex flex-col p-10">
      {inEditMode && <EditProducts setInEditModeFunc={setInEditModeFunc}  />}
      <Header
        currentSection={currentSection}
        updateCurrentSection={updateCurrentSection}
        setInEditModeFunc={setInEditModeFunc}
      />
      <AnimatePresence>
        {currentSection === "Inventory" && <Inventroy />}
        {currentSection === "Collections" && <Collections />}
        {currentSection === "Analytics" && <Analytics />}
      </AnimatePresence>
    </div>
  );
}
