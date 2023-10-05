import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import MainContainer from "./components/MainContainer";
import WatchVideo from "./pages/WatchVideo";
import Demo from "./pages/Demo";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <h1>Error Component</h1>,
    children: [
      {
        path: "/",
        element: <MainContainer />,
      },
      {
        path: "/watch",
        element: <WatchVideo />,
      },
      {
        path: "/demo",
        element: <Demo />,
      },
    ],
  },
]);

function App() {
  return (
    <div>
      <Header />
      <RouterProvider router={appRouter} />
    </div>
  );
}

export default App;
