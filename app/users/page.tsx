import React from "react";
import ProductCard from "../_components/AppSidebar";
import Link from "next/link";

const UsersPage = () => {
  return (
    <div>
      <ProductCard />
      UsersPage
      <Link href="/users/new">New User Page</Link>
    </div>
  );
};

export default UsersPage;
