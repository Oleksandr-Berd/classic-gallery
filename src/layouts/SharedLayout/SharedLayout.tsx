import { Suspense } from "react";
import { DNA } from "react-loader-spinner";

import Header from "../Header/Header";

type Props = {
  children: React.ReactNode;
};

const SharedLayout: React.FC<Props> = ({ children }) => {
  return (
    <main>
      <Header />
      <Suspense
        fallback={
          <DNA
            visible={true}
            height="80"
            width="80"
            ariaLabel="dna-loading"
            wrapperStyle={{}}
            wrapperClass="dna-wrapper"
          />
        }
      >
        {children}
      </Suspense>
    </main>
  );
};

export default SharedLayout;
