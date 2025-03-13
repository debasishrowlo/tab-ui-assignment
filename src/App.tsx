import { useState } from "react"
import classnames from "classnames"

type Tab = {
  buttonText: string,
  heading: string,
  paragraph: string,
}

const Tabs = ({ tabs } : { tabs: Tab[] }) => {
  const [activeTabIndex, setActiveTabIndex] = useState(0)
  const activeTab = tabs[activeTabIndex]

  const handleClick = (index:number) => {
    setActiveTabIndex(index)
  }

  return (
    <>
      <div className="mt-32 flex" role="tablist">
        {tabs.map((tab, index) => {
          const isActive = activeTabIndex === index

          // TODO: move focus out of tablist when a tab is focussed
          // TODO: Arrow key navigation as per https://www.w3.org/WAI/ARIA/apg/patterns/tabs/#keyboardinteraction

          return (
            <button 
              type="button"
              onClick={() => handleClick(index)}
              key={index}
              className={classnames("w-1/3 pt-25 pb-20 pl-28 border border-sky-900/20 border-b-5 hover:border-b-sky-800 focus:outline-4 focus:outline-dotted outline-sky-800 active:bg-indigo-100 text-left font-bold text-18 text-sky-950 shadow-md first:rounded-l-16 last:rounded-r-16 cursor-pointer transition-all duration-300", {
                "border-b-transparent": !isActive,
                "border-b-sky-800": isActive,
              })}
              role="tab"
              aria-selected={isActive}
            >
              {tab.buttonText}
            </button>
          )
        })}
      </div>
      <div className="mt-48" role="tabpanel">
        <p className="text-center text-32 font-bold text-sky-950">{activeTab.heading}</p>
        <p className="mt-24 text-center text-18 text-sky-950">{activeTab.paragraph}</p>
      </div>
    </>
  )
}

function App() {
  const tabs = [
    {
      buttonText: "Tab One",
      heading: "Heading One",
      paragraph: "Pargraph One. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam minima laboriosam possimus accusantium beatae impedit voluptatibus tenetur dolorem, sequi voluptatem a quae, modi aliquid aut iusto id eligendi provident pariatur.",
    },
    {
      buttonText: "Tab Two",
      heading: "Heading Two",
      paragraph: "Pargraph Two. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam minima laboriosam possimus accusantium beatae impedit voluptatibus tenetur dolorem, sequi voluptatem a quae, modi aliquid aut iusto id eligendi provident pariatur.",
    },
    {
      buttonText: "Tab Three",
      heading: "Heading Three",
      paragraph: "Pargraph Three. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam minima laboriosam possimus accusantium beatae impedit voluptatibus tenetur dolorem, sequi voluptatem a quae, modi aliquid aut iusto id eligendi provident pariatur.",
    },
  ]

  return (
    <div className="h-screen bg-sky-50 pt-80">
      <div className="mx-auto max-w-1024">
        <p className="text-center text-14 font-semibold text-sky-800 uppercase">Lorem ipsum dolor sit amet</p>
        <h1 className="text-center text-40 font-bold text-sky-950">consectetur, adipisicing elit</h1>
        <p className="mt-24 text-center text-18 text-sky-950">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis corporis fugiat assumenda sed tempora doloremque vel dolor, corrupti doloribus ab adipisci, ipsum ad nam culpa voluptatum. Officia odio sequi eos.
        </p>
        <Tabs tabs={tabs} />
      </div>
    </div>
  )
}

export default App