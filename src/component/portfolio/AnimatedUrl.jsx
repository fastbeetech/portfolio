import { AnimatePresence } from "framer-motion";
import { Routes, Route, useLocation } from "react-router-dom";

const AnimatedUrl = ({ routes }) => {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        {routes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            element={<route.main />}
          />
        ))}
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedUrl;
