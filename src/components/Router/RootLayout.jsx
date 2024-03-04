import { Fragment } from "react";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <Fragment>
      <main>
        {/* {navigation.state === 'loading' && <p>Loading...</p>} */}
        <Outlet />
      </main>
    </Fragment>
  );
};

export default RootLayout;
