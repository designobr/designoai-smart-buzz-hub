
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Services from "./pages/Services";
import Recursos from "./pages/Recursos";
import GestaoRedesSociais from "./pages/GestaoRedesSociais";
import CriacaoConteudo from "./pages/CriacaoConteudo";
import DesignAutomatizado from "./pages/DesignAutomatizado";
import EstrategiasPersonalizadas from "./pages/EstrategiasPersonalizadas";
import AnalyseDados from "./pages/AnalyseDados";
import SEOInteligente from "./pages/SEOInteligente";
import NotFound from "./pages/NotFound";
import Checkout from "./pages/Checkout";
import PaymentSuccess from "./pages/PaymentSuccess";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/servicos" element={<Services />} />
          <Route path="/recursos" element={<Recursos />} />
          <Route path="/gestao-redes-sociais" element={<GestaoRedesSociais />} />
          <Route path="/criacao-conteudo" element={<CriacaoConteudo />} />
          <Route path="/design-automatizado" element={<DesignAutomatizado />} />
          <Route path="/estrategias-personalizadas" element={<EstrategiasPersonalizadas />} />
          <Route path="/analise-dados" element={<AnalyseDados />} />
          <Route path="/seo-inteligente" element={<SEOInteligente />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/payment-success" element={<PaymentSuccess />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
