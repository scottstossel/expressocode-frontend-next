import { useEffect } from "react";
import Router from "next/dist/client/router";
import { isAuth } from "../../actions/auth";

const Admin = ({children}) => {
  useEffect(() => {
    if (!isAuth()) {
      Router.push(`signin`);
    } else if (isAuth().role !== 1) {
      Router.push(`/`);
    }
  }, [])

  return (
    <>
      {children}
    </>
  )
}

export default Admin;