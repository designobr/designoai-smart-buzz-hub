
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="min-h-[70vh] flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
 className="text-center px-4"
        >
          <h1 className="text-8xl md:text-9xl font-heading font-bold text-foreground mb-4">404</h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">Página não encontrada</p>
          <Link to="/">
            <Button size="lg">
              <Home className="mr-2 w-5 h-5" />
              Voltar ao Início
            </Button>
          </Link>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;
