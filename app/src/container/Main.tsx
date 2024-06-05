//for routing

import { useEffect, useState } from "react";
import * as fetchapi from "../components/fetcher/fetchApi";
import { EnergyInsight } from "../components/model/insightsinterface";
import D3app1 from "../d3Js/D3app1";

const Main = () => {
  const [data, setData] = useState<EnergyInsight[]>();

  useEffect(() => {
    async function getInsight() {
      try {
        const fetchedinfo = await fetchapi.getAllInsights();
        setData(fetchedinfo);
      } catch (error) {
        console.error(error);
      }
    }
    getInsight();
  }, []);

  return (
    <>
      <div>
        <D3app1 />
      </div>

      {data &&
        data.map((insight, index) => (
          <div key={index}>
            <p>Title: {insight.title}</p>
            {/* Display other insight properties here */}
          </div>
        ))}
    </>
  );
};

export default Main;
