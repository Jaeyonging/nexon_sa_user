import { SAUserProvider } from "../../api/fetchHooks";
import ApiErrorBoundary from "../../component/ApiErrorBoundary";
import HomeContainer from "../../component/Home/HomeContainer";

export const Home = () => {
  return (
    <>
      <ApiErrorBoundary>
        <SAUserProvider nickname="美남">
          <HomeContainer />
        </SAUserProvider>
      </ApiErrorBoundary>
    </>
  );
};
