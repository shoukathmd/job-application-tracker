import CreateJobForm from "@/components/CreateJobForm";
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query";

function AddJobPage() {
  const queryClient = new QueryClient();

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <CreateJobForm />;
    </HydrationBoundary>
  );
}
export default AddJobPage;
