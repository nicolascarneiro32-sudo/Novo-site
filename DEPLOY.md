# Guia de Deploy - Landing Page Psicólogo Junguiano

## 🚀 Deploy no GitHub Pages

### Passo 1: Preparar o Repositório

1. **Criar repositório no GitHub:**
   - Acesse [github.com](https://github.com)
   - Clique em "New repository"
   - Nome sugerido: `psicologo-landing-page`
   - Marque como público
   - Não inicialize com README (já temos um)

2. **Fazer upload dos arquivos:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Landing page psicólogo junguiano"
   git branch -M main
   git remote add origin https://github.com/SEU_USUARIO/psicologo-landing-page.git
   git push -u origin main
   ```

### Passo 2: Configurar GitHub Pages

1. **Acessar configurações do repositório:**
   - Vá para Settings > Pages
   - Source: Deploy from a branch
   - Branch: main
   - Folder: / (root)
   - Clique em Save

2. **Aguardar o deploy:**
   - O site ficará disponível em: `https://SEU_USUARIO.github.io/psicologo-landing-page`
   - Pode levar alguns minutos para ficar online

## 🌐 Deploy no Netlify (Recomendado)

### Opção 1: Deploy via GitHub

1. **Conectar repositório:**
   - Acesse [netlify.com](https://netlify.com)
   - Clique em "New site from Git"
   - Conecte sua conta GitHub
   - Selecione o repositório

2. **Configurar build:**
   - Build command: `pnpm run build`
   - Publish directory: `dist`
   - Clique em "Deploy site"

### Opção 2: Deploy via Drag & Drop

1. **Fazer build local:**
   ```bash
   pnpm run build
   ```

2. **Upload da pasta dist:**
   - Acesse [netlify.com/drop](https://netlify.com/drop)
   - Arraste a pasta `dist` para a área de upload
   - Aguarde o deploy automático

## 🔧 Deploy no Vercel

1. **Conectar repositório:**
   - Acesse [vercel.com](https://vercel.com)
   - Clique em "New Project"
   - Importe o repositório do GitHub

2. **Configurações automáticas:**
   - Framework: Vite
   - Build command: `pnpm run build`
   - Output directory: `dist`
   - Clique em "Deploy"

## 📱 Configurações Importantes

### Domínio Personalizado

Para usar um domínio próprio (ex: `www.psicologojunguiano.com.br`):

1. **Netlify/Vercel:**
   - Vá em Domain Settings
   - Add custom domain
   - Configure os DNS do seu provedor

2. **DNS Records necessários:**
   ```
   Type: CNAME
   Name: www
   Value: seu-site.netlify.app (ou vercel.app)
   ```

### SSL/HTTPS

- **GitHub Pages**: SSL automático para domínios .github.io
- **Netlify/Vercel**: SSL automático (Let's Encrypt)

### Analytics

Para adicionar Google Analytics:

1. **Criar conta no Google Analytics**
2. **Adicionar o código de tracking no `index.html`:**
   ```html
   <!-- Google Analytics -->
   <script async src="https://www.googletagmanager.com/gtag/js?id=GA_TRACKING_ID"></script>
   <script>
     window.dataLayer = window.dataLayer || [];
     function gtag(){dataLayer.push(arguments);}
     gtag('js', new Date());
     gtag('config', 'GA_TRACKING_ID');
   </script>
   ```

## 🎯 SEO e Performance

### Meta Tags Importantes

Adicionar no `index.html`:

```html
<meta name="description" content="Psicólogo Junguiano especializado em autoconhecimento. Atendimento online e presencial em São Paulo.">
<meta name="keywords" content="psicólogo, junguiano, terapia, autoconhecimento, São Paulo">
<meta name="author" content="Nome do Psicólogo">

<!-- Open Graph -->
<meta property="og:title" content="Psicólogo Junguiano - Terapia Online e Presencial">
<meta property="og:description" content="Transforme sua jornada interior com psicologia junguiana">
<meta property="og:image" content="/assets/foto-principal.jpg">
<meta property="og:url" content="https://seu-dominio.com">

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Psicólogo Junguiano">
<meta name="twitter:description" content="Transforme sua jornada interior">
<meta name="twitter:image" content="/assets/foto-principal.jpg">
```

### Google Search Console

1. **Verificar propriedade:**
   - Acesse [search.google.com/search-console](https://search.google.com/search-console)
   - Adicione a URL do site
   - Verifique via HTML tag ou DNS

2. **Enviar sitemap:**
   - Criar arquivo `sitemap.xml` na pasta public
   - Enviar via Search Console

## 📊 Monitoramento

### Ferramentas Recomendadas

- **Google Analytics**: Tráfego e comportamento
- **Google Search Console**: Performance no Google
- **Hotjar**: Heatmaps e gravações de sessão
- **Google PageSpeed Insights**: Performance e SEO

## 🔄 Atualizações

Para atualizar o site:

1. **Fazer alterações localmente**
2. **Testar com `pnpm run dev`**
3. **Fazer commit e push:**
   ```bash
   git add .
   git commit -m "Atualização: descrição das mudanças"
   git push
   ```
4. **Deploy automático** (se configurado)

## 📞 Suporte

Para dúvidas sobre o deploy:
- Documentação do GitHub Pages
- Documentação do Netlify
- Documentação do Vercel
- Comunidade do React/Vite

