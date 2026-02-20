
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import Index from "./pages/Index";
import Services from "./pages/Services";
import Recursos from "./pages/Recursos";
import GestaoRedesSociais from "./pages/GestaoRedesSociais";
import CriacaoConteudo from "./pages/CriacaoConteudo";
import DesignAutomatizado from "./pages/DesignAutomatizado";
import EstrategiasPersonalizadas from "./pages/EstrategiasPersonalizadas";
import SEOInteligente from "./pages/SEOInteligente";
import NotFound from "./pages/NotFound";
import SocialMedia from "./pages/SocialMedia";
import EmailMarketing from "./pages/EmailMarketing";
import AnalyseDados from "./pages/AnalyseDados";
import SobreNos from "./pages/SobreNos";
import Carreiras from "./pages/Carreiras";
import Blog from "./pages/Blog";
import CasosSucesso from "./pages/CasosSucesso";
import Parcerias from "./pages/Parcerias";
import TermosUso from "./pages/TermosUso";
import PoliticaPrivacidade from "./pages/PoliticaPrivacidade";
import Cookies from "./pages/Cookies";
import OtimizacaoImagens from "./pages/OtimizacaoImagens";
import Studio from "./pages/Studio";
import SitesIA from "./pages/SitesIA";
const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/servicos" element={<Services />} />
          <Route path="/services" element={<Services />} />
          <Route path="/recursos" element={<Recursos />} />
          <Route path="/gestao-redes-sociais" element={<GestaoRedesSociais />} />
          <Route path="/criacao-conteudo" element={<CriacaoConteudo />} />
          <Route path="/design-automatizado" element={<DesignAutomatizado />} />
          <Route path="/estrategias-personalizadas" element={<EstrategiasPersonalizadas />} />
          <Route path="/analise-dados" element={<AnalyseDados />} />
          <Route path="/seo-inteligente" element={<SEOInteligente />} />
          <Route path="/social-media" element={<SocialMedia />} />
          <Route path="/email-marketing" element={<EmailMarketing />} />
          <Route path="/otimizacao-imagens" element={<OtimizacaoImagens />} />
          <Route path="/sobre-nos" element={<SobreNos />} />
          <Route path="/carreiras" element={<Carreiras />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/casos-sucesso" element={<CasosSucesso />} />
          <Route path="/parcerias" element={<Parcerias />} />
          <Route path="/termos-uso" element={<TermosUso />} />
          <Route path="/politica-privacidade" element={<PoliticaPrivacidade />} />
          <Route path="/cookies" element={<Cookies />} />
          <Route path="/studio" element={<Studio />} />
          <Route path="/sites-ia" element={<SitesIA />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
  </HelmetProvider>
);

export default App;
