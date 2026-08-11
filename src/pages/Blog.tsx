
import { useEffect } from 'react';
import SubpageLayout from '@/components/SubpageLayout';
import { blogSchema } from '@/lib/seo-schemas';
import { BookOpen, TrendingUp, Users, Video, Download, Podcast } from 'lucide-react';
import { motion } from 'framer-motion';
import { useI18n } from '@/i18n/I18nProvider';

const Blog = () => {
  const { t, tList } = useI18n();
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const categoryIcons = [BookOpen, TrendingUp, Users];
  const categories = tList<{ title: string; description: string }>('company.blog.categories').map((c, i) => ({ ...c, icon: categoryIcons[i] }));
  const articles = tList<string>('company.blog.articles');
  const resourceIcons = [Download, Video, Podcast];
  const resources = tList<{ title: string; description: string }>('company.blog.resources').map((r, i) => ({ ...r, icon: resourceIcons[i] }));

  return (
    <SubpageLayout
      title={t('company.blog.seo.title')}
      subtitle={t('company.blog.subtitle')}
      badge={t('company.blog.badge')}
      seoPath="/blog"
      seoDescription={t('company.blog.seo.description')}
      seoType="article"
      jsonLd={blogSchema(t('company.blog.schemaName'), t('company.blog.schemaDescription'), '/blog')}
    >

      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <h2 className="text-2xl font-heading font-bold text-center text-foreground mb-10">{t('company.blog.categoriesTitle')}</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {categories.map((c, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
 className="card-surface rounded-2xl p-6 text-center group hover:border-primary/20 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <c.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-foreground mb-1">{c.title}</h3>
                <p className="text-sm text-muted-foreground">{c.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h2 className="text-2xl font-heading font-bold text-center text-foreground mb-10">{t('company.blog.featuredArticlesTitle')}</h2>
          <div className="card-surface rounded-2xl p-6 md:p-8">
            <div className="grid md:grid-cols-2 gap-4">
              {articles.map((a, i) => (
                <div key={i} className="flex items-start p-3 rounded-xl bg-primary/5 border border-primary/10 hover:border-primary/20 transition-colors">
                  <BookOpen className="w-4 h-4 text-primary mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">{a}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <h2 className="text-2xl font-heading font-bold text-center text-foreground mb-10">{t('company.blog.exclusiveResourcesTitle')}</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {resources.map((r, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
 className="card-surface rounded-2xl p-6 text-center group hover:border-primary/20 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <r.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-foreground mb-1">{r.title}</h3>
                <p className="text-sm text-muted-foreground">{r.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </SubpageLayout>
  );
};

export default Blog;
