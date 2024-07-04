import React from "react";
import EditJobForm from "@/components/EditJobForm";
import { getSingleJobAction } from "@/utils/actions";

import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
const JobDetailPage = async ({ params }: { params: { id: string } }) => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["job", params.id],
    queryFn: () => getSingleJobAction(params.id),
  });
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <EditJobForm jobId={params.id} />
    </HydrationBoundary>
  );
};

export default JobDetailPage;
