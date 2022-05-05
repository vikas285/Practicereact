import logo from "./logo.svg";
import "./App.css";
// import Button from "./Component/Button";
// import Prop from "./Component/prop";
// import Input from "./Component/Input";
// import Newinput from "./Component/Newinput";
// import Stopwatch from "./Component/Stopwatch";
import Watch from "./Component/Watch";
function App() {
  function Timer() {
    return (
      <div>
        <button>start</button>
        <h3>0</h3>
        <button>stop</button>
      </div>
    );
  }

  return (
    <div>
      <Watch data={Timer} />
    </div>
  );
}

// function App() {
//   return (
//     <div>
//       <Button name="pirthiviraj chuhan" />
//       <Prop
//         name="vikas yadav"
//         email="vikas@123"
//         other={{ class: "8th", mobileno: "8920775907" }}
//       />
//       <Prop
//         name="yuvika yadav"
//         email="YUVIKA@123"
//         other={{ class: "10th", mobileno: "965545532" }}
//       />
//       <Prop
//         name="rajman yadav"
//         email="RAJMANs@123"
//         other={{ class: "11th", mobileno: "9923554435" }}
//       />
//       <Prop
//         name="vishvas yadav"
//         email="vishvass@123"
//         other={{ class: "11th", mobileno: "9923554435" }}
//       />

//       {/* <Input /> */}

//       <Newinput/>
//     </div>
//   );
// }

export default App;
