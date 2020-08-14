import React from "react";
import { useRoutes } from "hookrouter";
import LandingPage from "./Components/LandingPage";
import Create from "./Components/Create";
import Edit from "./Components/Edit";
import View from "./Components/View";
import ViewPost from "./Components/ViewPost";

const routes = {
  "/": () => <LandingPage />,
  "/create": () => <Create />,
  "/view": () => <View />,
  "/edit/:id": ({ id }) => <Edit id={id} />,
  "/view/:id": ({ id }) => <ViewPost id={id} />

};

const App = () => {
  const pages = useRoutes(routes);
  return (
    <div className="relative bg-gray-200 min-h-screen pb-24">
      {pages}
      {!pages && (
        <div className="flex justify-center py-16">
          Error 404: Page not found
        </div>
      )}
    </div>
  );
};

export default App;
