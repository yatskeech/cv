import Divider from "./components/Divider";
import Header from "./components/Header";
import Info from "./components/Info";
import Languages from "./components/Languages";
import Socials from "./components/Socials";

function App() {
  return (
    <div className="w-full min-h-screen bg-gray-darker">
      <div className="container">
        <div className="flex gap-4 text-white">
          <div className="w-[360px] min-h-screen bg-primary-darkest">
            <div className="flex flex-col gap-8 p-8">
              <Header />
              <Divider />
              <Info />
              <Divider />
              <Socials />
              <Divider />
              <Languages />
            </div>
          </div>
          <div>content</div>
        </div>
      </div>
    </div>
  );
}

export default App;
