# Evolução visual das imagens da DesignoAI

## Objetivo
Preservar todas as imagens, textos principais, páginas, proporções e estrutura atuais. Apenas adicionar tratamento editorial sobre as imagens, com boa leitura, navegação real e comportamento responsivo.

## O que será alterado
- Transformar a fotografia principal da home em um criativo editorial com marca, mensagem curta e botão “Solicitar proposta” ligado ao WhatsApp oficial.
- Aplicar às duas imagens de destaque da home uma camada discreta com título, apoio e ação contextual, sem trocar ou editar os arquivos originais.
- Evoluir os seis cards de serviços existentes, preservando nomes, descrições e destinos. O card inteiro, sua área visual e “Saber mais” abrirão a página localizada correta.
- Tratar as oito imagens da galeria Studio como peças editoriais clicáveis, mantendo cada imagem atual e direcionando a ação para o WhatsApp, sem inventar páginas.
- Preservar as fotos pequenas dos depoimentos sem sobreposição, pois texto sobre rostos em miniaturas prejudicaria a leitura; manter apenas o acabamento visual do card.
- Repetir os novos textos nas traduções em português, inglês, espanhol e francês.

## Direção visual
- Preto, branco e tons neutros, com contraste localizado sobre cada foto.
- Camada escura suave somente na região necessária à legibilidade.
- Tipografia Inter, hierarquia curta, cantos arredondados e sombras discretas.
- Microanimações de escala, seta e contraste, com suporte a redução de movimento.
- Textos protegidos em uma área segura para não cortar no celular ou encobrir o foco principal.

## Detalhes técnicos
- Criar um componente reutilizável para a camada editorial das imagens.
- Usar somente os arquivos de imagem já importados pelo site.
- Manter `LocaleLink` nos serviços para preservar o idioma ativo.
- Usar links reais para páginas existentes e WhatsApp oficial onde não há página específica.
- Verificar home e Studio em celular e desktop, além de erros de compilação e console.
