import { useState, type FormEvent } from 'react';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { toast } from 'sonner';
import { EmptyState, PageHeader, Panel } from './AppLayout';
import { NETWORKS, STATUS_LABEL } from './domain';

const NUM = [
  ['monthly_videos', 'Vídeos/mês'], ['monthly_carousels', 'Carrosséis/mês'], ['monthly_static', 'Artes/mês'],
  ['posts_per_week', 'Publicações/semana'], ['generation_limit', 'Limite de gerações'], ['monthly_credits', 'Créditos/mês'],
] as const;

function PlansAdmin() {
  const qc = useQueryClient();
  const plans = useQuery({ queryKey: ['admin-plans'], queryFn: async () => (await supabase.from('plans').select('*').order('sort_order')).data || [] });
  const empty = { name: '', slug: '', description: '', ...Object.fromEntries(NUM.map(([k]) => [k, '0'])) } as Record<string, string>;
  const [form, setForm] = useState<Record<string, string>>(empty);
  const [nets, setNets] = useState<string[]>([]);
  const [editing, setEditing] = useState<string | null>(null);

  const save = async (e: FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !/^[a-z0-9-]+$/.test(form.slug)) return toast.error('Informe nome e um identificador (letras minúsculas, números e hífen).');
    const payload: any = { name: form.name.trim(), slug: form.slug, description: form.description || null, allowed_networks: nets,
      ...Object.fromEntries(NUM.map(([k]) => [k, Math.max(0, parseInt(form[k] || '0', 10) || 0)])) };
    const res = editing ? await supabase.from('plans').update(payload).eq('id', editing) : await supabase.from('plans').insert(payload);
    if (res.error) return toast.error(res.error.message);
    toast.success('Plano salvo.'); setForm(empty); setNets([]); setEditing(null);
    qc.invalidateQueries({ queryKey: ['admin-plans'] });
  };
  const toggleActive = async (p: any) => {
    await supabase.from('plans').update({ is_active: !p.is_active }).eq('id', p.id);
    qc.invalidateQueries({ queryKey: ['admin-plans'] });
  };

  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_380px]">
      <div className="grid gap-4">
        {!(plans.data || []).length && <EmptyState title="Nenhum plano" text="Cadastre o primeiro plano ao lado." />}
        {(plans.data || []).map((p: any) => (
          <Panel key={p.id}>
            <div className="flex flex-wrap justify-between gap-2">
              <p className="font-medium text-foreground">{p.name} <span className="text-xs text-muted-foreground">({p.slug})</span></p>
              <div className="flex gap-2">
                <Button size="sm" variant="outline" className="rounded-full" onClick={() => { setEditing(p.id); setNets(p.allowed_networks || []); setForm({ name: p.name, slug: p.slug, description: p.description || '', ...Object.fromEntries(NUM.map(([k]) => [k, String(p[k])])) }); }}>Editar</Button>
                <Button size="sm" variant="ghost" className="rounded-full" onClick={() => toggleActive(p)}>{p.is_active ? 'Desativar' : 'Ativar'}</Button>
              </div>
            </div>
            <p className="mt-2 text-xs text-muted-foreground">{NUM.map(([k, l]) => `${l}: ${p[k]}`).join(' · ')}</p>
            <p className="mt-1 text-xs text-muted-foreground">Redes: {(p.allowed_networks || []).join(', ') || 'nenhuma'}</p>
          </Panel>
        ))}
      </div>
      <Panel>
        <form onSubmit={save} className="space-y-4">
          <p className="font-medium text-foreground">{editing ? 'Editar plano' : 'Novo plano'}</p>
          {[['name', 'Nome'], ['slug', 'Identificador'], ['description', 'Descrição']].map(([k, l]) => (
            <div key={k} className="space-y-1.5"><Label htmlFor={k}>{l}</Label><Input id={k} className="rounded-xl" value={form[k]} onChange={(e) => setForm({ ...form, [k]: e.target.value })} maxLength={300} /></div>
          ))}
          <div className="grid grid-cols-2 gap-3">
            {NUM.map(([k, l]) => <div key={k} className="space-y-1.5"><Label htmlFor={k} className="text-xs">{l}</Label><Input id={k} type="number" min={0} className="rounded-xl" value={form[k]} onChange={(e) => setForm({ ...form, [k]: e.target.value })} /></div>)}
          </div>
          <div className="flex flex-wrap gap-2">
            {NETWORKS.map((n) => (
              <button type="button" key={n.key} onClick={() => setNets(nets.includes(n.key) ? nets.filter((x) => x !== n.key) : [...nets, n.key])}
                className={`rounded-full border px-3 py-1 text-xs ${nets.includes(n.key) ? 'border-foreground text-foreground' : 'border-border text-muted-foreground'}`}>{n.label}</button>
            ))}
          </div>
          <div className="flex gap-2">
            <Button type="submit" className="rounded-full">Salvar</Button>
            {editing && <Button type="button" variant="ghost" className="rounded-full" onClick={() => { setEditing(null); setForm(empty); setNets([]); }}>Cancelar</Button>}
          </div>
        </form>
      </Panel>
    </div>
  );
}

function ClientsAdmin() {
  const qc = useQueryClient();
  const companies = useQuery({ queryKey: ['admin-companies'], queryFn: async () => (await supabase.from('companies').select('id,name,website,status,publishing_mode,created_at').order('created_at', { ascending: false })).data || [] });
  const toggle = async (c: any) => {
    const status = c.status === 'suspended' ? 'active' : 'suspended';
    const { error } = await supabase.from('companies').update({ status }).eq('id', c.id);
    if (error) return toast.error(error.message);
    qc.invalidateQueries({ queryKey: ['admin-companies'] });
  };
  if (!(companies.data || []).length) return <EmptyState title="Nenhum cliente" text="As empresas cadastradas aparecerão aqui." />;
  return (
    <Panel className="p-0 overflow-x-auto">
      <table className="w-full text-sm">
        <thead><tr className="text-left text-xs text-muted-foreground border-b border-border">{['Empresa', 'Site', 'Modo', 'Status', ''].map((h) => <th key={h} className="px-5 py-3 font-normal">{h}</th>)}</tr></thead>
        <tbody>{companies.data!.map((c: any) => (
          <tr key={c.id} className="border-b border-border last:border-0">
            <td className="px-5 py-3 text-foreground">{c.name}</td><td className="px-5 py-3 text-muted-foreground">{c.website}</td>
            <td className="px-5 py-3 text-muted-foreground">{c.publishing_mode === 'automatic' ? 'Automático' : 'Assistido'}</td>
            <td className="px-5 py-3 text-muted-foreground">{STATUS_LABEL[c.status] || c.status}</td>
            <td className="px-5 py-3 text-right"><Button size="sm" variant="outline" className="rounded-full" onClick={() => toggle(c)}>{c.status === 'suspended' ? 'Reativar' : 'Suspender'}</Button></td>
          </tr>))}
        </tbody>
      </table>
    </Panel>
  );
}

export function AdminPage() {
  return (
    <>
      <PageHeader title="Administração DesignoAI" description="Clientes, planos e operação da plataforma." />
      <Tabs defaultValue="clients">
        <TabsList className="rounded-full"><TabsTrigger value="clients" className="rounded-full">Clientes</TabsTrigger><TabsTrigger value="plans" className="rounded-full">Planos</TabsTrigger></TabsList>
        <TabsContent value="clients" className="mt-6"><ClientsAdmin /></TabsContent>
        <TabsContent value="plans" className="mt-6"><PlansAdmin /></TabsContent>
      </Tabs>
    </>
  );
}
