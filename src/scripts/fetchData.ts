// ## Fetch Data

// - typically axios and React Query (or both 🚀🚀🚀)
// - we won't set any state values

import { z } from "zod";

const url = "https://www.course-api.com/react-tours-project";

const tourSchema = z.object({
  id: z.string(),
  name: z.string(),
  info: z.string(),
  image: z.string(),
  price: z.string(),
});

type Tour = z.infer<typeof tourSchema>;

// type Tour = {
//   id: string;
//   name: string;
//   info: string;
//   image: string;
//   price: string;
// };

async function fetchData(url: string): Promise<Tour[]> {
  try {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error(`http error status: ${res.status}`);
    }

    const rawData: Tour[] = await res.json();

    const result = tourSchema.array().safeParse(rawData);
    if (!result.success) {
      throw new Error("invalid data: ");
    }
    console.log(result.data);
    return result.data;
  } catch (error) {
    const errMsg =
      error instanceof Error ? error.message : "There was an error";
    console.log(errMsg);
    return [];
  }
}

const tours = await fetchData(url);

tours.map((tour) => {
  console.log(tour.name);
});
