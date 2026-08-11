import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import { I18nProvider } from '@/i18n/I18nProvider';
import { LOCALES } from '@/i18n/config';
import { PAGES, pathFor, type PageKey } from '@/i18n/routes';
import type { ComponentType } from 'react';
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
import AiSdr from "./pages/AiSdr";

const queryClient = new QueryClient();

const COMPONENTS: Record<PageKey, ComponentType> = {
  home: Index,
  services: Services,
  recursos: Recursos,
  gestaoRedesSociais: GestaoRedesSociais,
  criacaoConteudo: CriacaoConteudo,
  designAutomatizado: DesignAutomatizado,
  estrategiasPersonalizadas: EstrategiasPersonalizadas,
  analiseDados: AnalyseDados,
  seoInteligente: SEOInteligente,
  socialMedia: SocialMedia,
  emailMarketing: EmailMarketing,
  otimizacaoImagens: OtimizacaoImagens,
  sobreNos: SobreNos,
  carreiras: Carreiras,
  blog: Blog,
  casosSucesso: CasosSucesso,
  parcerias: Parcerias,
  termosUso: TermosUso,
  politicaPrivacidade: PoliticaPrivacidade,
  cookies: Cookies,
  studio: Studio,
  sitesIa: SitesIA,
  aiSdr: AiSdr,
};

/** One route per (page, locale), plus legacy aliases so existing links keep working. */
const localizedRoutes = LOCALES.flatMap((locale) =>
  PAGES.flatMap((page) => {
    const Component = COMPONENTS[page.key];
    const routes = [{ path: pathFor(page.key, locale), key: `${locale}-${page.key}` }];
    (page.aliases?.[locale] || []).forEach((alias) => {
      const prefix = locale === 'pt-BR' ? '' : `/${locale}`;
      routes.push({ path: `${prefix}/${alias}`, key: `${locale}-${page.key}-${alias}` });
    });
    return routes.map((r) => <Route key={r.key} path={r.path} element={<Component />} />);
  }),
);

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <I18nProvider>
            <Routes>
              {localizedRoutes}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </I18nProvider>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
