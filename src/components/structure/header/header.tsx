import { Suspense } from "react";
import { Header as HeaderClient } from "./header.client";
import { Header as HeaderServer } from "./header.server";

export const Header: React.FC = () => {
  return (
    <Suspense fallback={<HeaderServer />}>
      <HeaderClient />
    </Suspense>
  );
};
