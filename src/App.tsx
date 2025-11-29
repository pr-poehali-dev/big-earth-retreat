
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import DarkRetreat from "./pages/DarkRetreat";
import RetreatSilence from "./pages/RetreatSilence";
import BanyaRetreat from "./pages/retreats/BanyaRetreat";
import MassageRetreat from "./pages/retreats/MassageRetreat";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/retreat/dark" element={<DarkRetreat />} />
          <Route path="/retreat/silence" element={<RetreatSilence />} />
          <Route path="/retreat/banya" element={<BanyaRetreat />} />
          <Route path="/retreat/massage" element={<MassageRetreat />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;