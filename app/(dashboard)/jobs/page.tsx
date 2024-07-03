import { Suspense } from "react";
import SearchForm from "@/components/SearchForm";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { getAllJobsAction } from "@/utils/actions";
import JobsList from "@/components/JobList";

async function AllJobsPage() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["jobs", "", "all", 1],
    queryFn: () => getAllJobsAction({}),
  });
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Suspense fallback={<div>Loading...</div>}>
        <SearchForm />
        <JobsList />
      </Suspense>
    </HydrationBoundary>
  );
}

export default AllJobsPage;
