
import { getSingleApplication } from "@/utils/fetcher"
import SinglePageContent from "./_components/SinglePageContent"

const SinglePage = async ({ params }) => {
  const { seriel } = params;
  const applic = await getSingleApplication(seriel);

  return <SinglePageContent applic={applic} />;
};

export default SinglePage;


