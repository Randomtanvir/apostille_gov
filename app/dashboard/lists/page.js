import React from "react";
import { getAllApplications } from "./../../../utils/fetcher";
import CertificateCard from "./_components/CertificateCard";

const ListsPage = async () => {
  const appli = await getAllApplications();
  return (
    <div>
      {appli?.applications?.length > 0 &&
        appli?.applications?.map((application) => (
          <CertificateCard key={application._id} application={application} />
        ))}
    </div>
  );
};
export default ListsPage;
