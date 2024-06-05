import { EnergyInsight } from "../model/insightsinterface";
import { ConflictError, UnauthorizedError } from "../zErrors/http-errors";

const insightLink = "api/insights/";

// common fetcher.
async function fetchData(input: RequestInfo, init?: RequestInit) {
  const res = await fetch(input, init);

  if (res.ok) return res;
  else {
    const errorBody = await res.json();
    const errormessage = errorBody.error;

    if (res.status === 401) throw new UnauthorizedError(errormessage);
    else if (res.status === 409) throw new ConflictError(errormessage);
    else
      throw Error(
        "request failed with status: " + res.status + " message " + errormessage
      );
  }
}

// get all insights
export async function getAllInsights(): Promise<EnergyInsight[]> {
  const res = await fetchData(insightLink, { method: "GET" });
  return res.json();
}
