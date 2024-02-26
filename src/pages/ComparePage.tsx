import React from "react";
import ScreenLayout from "../layout/ScreenLayout";
import AppNavBar from "../Components/AppNavBar/AppNavBar";
import AppCompareTable from "../Components/AppCompareTable/AppCompareTable";

const ComparePage = () => {
  return (
    <ScreenLayout navBar={<AppNavBar />}>
      <AppCompareTable />
    </ScreenLayout>
  );
};

export default ComparePage;
