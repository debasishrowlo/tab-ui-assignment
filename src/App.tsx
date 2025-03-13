import Tabs from "./pages/Tabs"
import tabData from "./data/tabs"

function App () {
  return (
    <div className="h-screen bg-sky-50 pt-80">
      <div className="mx-auto max-w-1024">
        <p className="text-center text-14 font-semibold text-sky-800 uppercase">Lorem ipsum dolor sit amet</p>
        <h1 className="text-center text-40 font-bold text-sky-950">consectetur, adipisicing elit</h1>
        <p className="mt-24 text-center text-18 text-sky-950">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis corporis fugiat assumenda sed tempora doloremque vel dolor, corrupti doloribus ab adipisci, ipsum ad nam culpa voluptatum. Officia odio sequi eos.
        </p>
        <Tabs tabs={tabData} />
      </div>
    </div>
  )
}

export default App