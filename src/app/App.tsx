import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "../shared/api/query-client";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div></div>
    </QueryClientProvider>
  );
}

export default App;
