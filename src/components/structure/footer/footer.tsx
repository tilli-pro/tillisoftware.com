import { Suspense } from "react";
import { Footer as FooterClient } from "./footer.client";
import { Footer as FooterServer } from "./footer.server";

export const Footer: React.FC = () => {
  return (
    <Suspense fallback={<FooterServer />}>
      <FooterClient />
    </Suspense>
  );
};
