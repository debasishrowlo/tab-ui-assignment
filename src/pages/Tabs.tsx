import { useState } from "react"

import { TabProps } from "../types"
import Tab from "../components/Tab"
import Heading from "../components/Heading"
import Paragraph from "../components/Paragraph"

const Tabs = ({ tabs } : { tabs: TabProps[] }) => {
  const [activeTabIndex, setActiveTabIndex] = useState(0)
  const activeTab = tabs[activeTabIndex]

  const handleClick = (index:number) => {
    setActiveTabIndex(index)
  }

  return (
    <>
      <div className="mt-32 flex" role="tablist">
        {tabs.map((tab, index) => (
          <Tab 
            key={index}
            isActive={activeTabIndex === index}
            handleClick={() => handleClick(index)}
          >
            {tab.buttonText}
          </Tab>
        ))}
      </div>
      <div className="mt-48" role="tabpanel">
        <Heading>{activeTab.heading}</Heading>
        <Paragraph>{activeTab.paragraph}</Paragraph>
      </div>
    </>
  )
}

export default Tabs