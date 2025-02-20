import TopNavbar from "./components/navbar/Navbar";
import SoftwareEngineerProfile from "./components/SelfIntro/SelfIntroCantaner";
import WorkExperiance from "./components/WorkExperiance/workExperiance";
import ExampleProject from "./components/ExProject/ExampleProject";
import Contact from "./components/Contact/Contact";
import BookmarkIcon from "./icons/reactIcon";
// import "./index.css";

function App() {
  return (
    <div className="Asad relative">
      <TopNavbar />
      <SoftwareEngineerProfile />
      <WorkExperiance />

      <ExampleProject />
      <Contact children={"asadmulla@241097@gmail.com"} />
      <BookmarkIcon />
    </div>
  );
}

export default App;
