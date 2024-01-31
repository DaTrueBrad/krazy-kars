import React, { Suspense } from "react";
import {
  Await,
  useNavigation,
  useRouteLoaderData,
  useAsyncValue,
} from "react-router-dom";
import KarCard from "./elements/KarCard";

function RenderAwaitedData() {
  let data = useAsyncValue();

  return (
    <div className="kar-container">
      {data.map((kar) => (
        <KarCard kar={kar} key={kar.id} />
      ))}
    </div>
  );
}

const AllKars = () => {
  const data = useRouteLoaderData("karRoot");

  return (
    <>
      <h1>Welcome to our Kars</h1>
      <Suspense fallback={<h1> Loading...</h1>}>
        <Await resolve={data.kars}>
          <RenderAwaitedData />
        </Await>
      </Suspense>
    </>
  );
};


export default AllKars;
