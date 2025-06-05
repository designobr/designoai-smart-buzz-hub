
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Services from "./pages/Services";
import Recursos from "./pages/Recursos";
import CriacaoConteudo from "./pages/CriacaoConteudo";
import AnalyseDados from "./pages/AnalyseDados";
import DesignAutomatizado from "./pages/DesignAutomatizado";
import GestaoRedesSociais from "./pages/GestaoRedesSociais";
import SEOInteligente from "./pages/SEOInteligente";
import EstrategiasPersonalizadas from "./pages/EstrategiasPersonalizadas";
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
          <Route path="/services" element={<Services />} />
          <Route path="/recursos" element={<Recursos />} />
          <Route path="/criacao-conteudo" element={<CriacaoConteudo />} />
          <Route path="/analyse-dados" element={<AnalyseDados />} />
          <Route path="/design-automatizado" element={<DesignAutomatizado />} />
          <Route path="/gestao-redes-sociais" element={<GestaoRedesSociais />} />
          <Route path="/seo-inteligente" element={<SEOInteligente />} />
          <Route path="/estrategias-personalizadas" element={<EstrategiasPersonalizadas />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
