"use client";
import { QueryClientProvider } from "@tanstack/react-query";
import { QueryClient } from "@tanstack/react-query";
type props = {
  children: React.ReactNode;
};
const client = new QueryClient();
const ReactQueryProvider = ({ children }: props) => {
  return <QueryClientProvider client={client}>{children}</QueryClientProvider>;
};
export default ReactQueryProvider;
