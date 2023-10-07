import React from "react";
import Layout from "./../components/Layout/Layout";
import { useAuth } from "../context/auth";
import { Link } from "react-router-dom";

const HomePage = () => {
  const [auth, setAuth] = useAuth();
  return (
    <Layout title={"Best offers "}>
      <h1 className="text-center p-3 border ">HomePage</h1>
      <div class="container text-center border justify-center item-center">
        <div class=" row grid gap-2 p-2">
          <div class="col border p-5 ">
            <h1 >student login</h1>
            <Link to='/login'><button className="btn btn-outline-dark p-2 ">login</button></Link>
          </div>
          <div class="col border p-5">
            <h1>organisation login</h1>
            <Link to='/orglogin'><button className="btn btn-outline-dark p-2">login</button></Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;
