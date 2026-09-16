window.CURSO_AULA1 = {
  logo: "https://www.publicsoft.com.br/assets/Logo-01.b76c9c03.png",
  titulo: "IA no dia a dia da PublicSoft",
  meta: "Aula 1 · 16/09/2026 · 17h30",
  mensagem: {
    titulo: "A IA não vai dominar o mundo. Quem não souber usar é que fica para trás.",
    sub: "Nunca houve tanta janela aberta de oportunidade. Ferramenta certa + pedido certo + revisão humana.",
    foto: "assets/ia-dominar-mundo.jpg",
    fotoAlt: "Humor de abertura: foto com o Exterminador e telas da Skynet",
    fotoLegenda: "Relaxa: a IA não vai dominar o mundo. (Mas quem não souber usar… aí complica.)",
    pontos: [
      "A ferramenta sozinha não resolve — quem pede e quem revisa decide o resultado.",
      "Janela aberta agora: texto, imagem, áudio, vídeo e agentes no dia a dia.",
      "Regra da aula: use com critério, sem dado sensível, sempre revise antes de enviar."
    ]
  },
  futuro: [
    {t:"Trabalho", p:"Menos digitação braçal. Mais critério, revisão e responsabilidade.", img:"assets/slides/futuro-trabalho.jpg", imgAlt:"Pessoa revisando conteúdo no laptop com julgamento humano"},
    {t:"Janelas abertas", p:"Atendimento, conteúdo, planilha, vídeo, áudio, pesquisa e suporte interno.", img:"assets/slides/futuro-janelas.jpg", imgAlt:"Mesa com laptop, monitor e celular — várias janelas abertas"},
    {t:"Gestão", p:"Mais informação em menos tempo — o julgamento humano continua no centro.", img:"assets/slides/futuro-gestao.jpg", imgAlt:"Documentos e gráficos com decisão humana"},
    {t:"Cuidados", p:"Sem dado sensível. Sem inventar prazo. Sempre revisar antes de enviar.", img:"assets/slides/futuro-cuidados.jpg", imgAlt:"Cadeado e teclado — segurança e revisão antes de enviar"}
  ],

  inspiracao: {
    titulo: "Quem usa IA para resolver problema na PublicSoft?",
    sub: "Três colegas transformaram tarefas manuais do dia a dia em app — com IA, critério e revisão humana.",
    pessoas: [
      {
        id: "paulo",
        nome: "Paulo",
        foto: "assets/inspiracao/paulo-rosto.jpg",
        app: "GeoPlanner",
        lead: "Mapeamento e cadastro urbano 100% online",
        desc: "Cadastro territorial, PGV e cálculo integrado com Google Maps — o que era processo manual vira fluxo no mapa.",
        tela: "assets/inspiracao/paulo-geoplanner.jpg",
        telaAlt: "Tela do GeoPlanner com mapa satélite e painel de cadastro"
      },
      {
        id: "junior",
        nome: "Junior Aranha",
        foto: "assets/inspiracao/junior-rosto.jpg",
        app: "Fisk + Painel de Acesso Rápido",
        lead: "App para alunos da Fisk e painel de suporte no dia a dia",
        desc: "Facilitou a rotina dos alunos (marca Fisk) e montou o Painel de Acesso Rápido & Suporte: links, scripts e atalhos com 1 clique.",
        tela: "assets/inspiracao/junior-painel.jpg",
        telaAlt: "Painel de Acesso Rápido & Suporte com cards e atalhos"
      },
      {
        id: "finizola",
        nome: "Finizola",
        foto: "assets/inspiracao/finizola-rosto.jpg",
        app: "TempoServ Declarações",
        lead: "Declaração de tempo de serviço e contribuição para o INSS",
        desc: "Emissão de declarações de RH com busca por nome ou CPF — base local, pronta para o atendimento.",
        tela: "assets/inspiracao/finizola-temposerv.jpg",
        telaAlt: "Tela do TempoServ Declarações — RH"
      }
    ]
  },
  ias: [
    {
      id:"chatgpt", icone:"assets/ias/chatgpt.svg", cena:"assets/slides/ia-chatgpt.jpg", cenaAlt:"Celular com mensagem de suporte — rascunho rápido no WhatsApp", tipo:"texto", nome:"ChatGPT",
      lead:"Rascunho rápido do dia a dia",
      desc:"WhatsApp, e-mail, brainstorm e respostas estruturadas.",
      url:"https://chatgpt.com",
      comoAbrir:"Abra chatgpt.com → novo chat → cole o prompt → Enter.",
      pratica:"Ticket anonimizado → mensagem WhatsApp com os 5 blocos (máx. 6 linhas).",
      promptExemplo:`Contexto: Sou analista de suporte da PublicSoft. Cliente no WhatsApp perguntou por que o status do processo não atualiza no Contrata Public (sem nome nem dado sensível).

Objetivo: Mensagem clara para enviar ao cliente.

Restrições: Máx. 6 linhas; linguagem simples; sem culpar o usuário; não inventar prazo.

Formato: Texto pronto para WhatsApp + 1 pergunta de confirmação no fim.

Exemplo de tom: “Entendi sua dúvida. Vou te orientar no passo a passo…”`
    },
    {
      id:"claude", icone:"assets/ias/claude.svg", cena:"assets/slides/ia-claude.jpg", cenaAlt:"Documento profissional sendo reescrito com tom humano", tipo:"texto", nome:"Claude",
      lead:"Texto com critério e tom profissional",
      desc:"Revisar, textos longos e deixar a mensagem mais humana.",
      url:"https://claude.ai",
      comoAbrir:"Abra claude.ai → novo chat → cole o prompt → envie.",
      pratica:"Revise a resposta do ChatGPT: mais humana, sem prometer prazo.",
      promptExemplo:`Contexto: Sou da PublicSoft. Abaixo está um rascunho de resposta a um cliente (suporte).

Rascunho:
“O sistema às vezes demora. Atualize a página. Se não resolver, abra chamado.”

Objetivo: Reescrever com tom humano e profissional.

Restrições: Sem prometer prazo; sem jargão técnico; máx. 5 linhas; não inventar causa.

Formato: Mensagem final pronta para WhatsApp.

Exemplo de tom: claro, empático, objetivo.`
    },
    {
      id:"deepseek", icone:"assets/ias/deepseek.svg", cena:"assets/slides/ia-deepseek.jpg", cenaAlt:"Checklist e notas de diagnóstico no caderno", tipo:"texto", nome:"DeepSeek",
      lead:"Raciocínio e custo baixo",
      desc:"Lógica, checklist, causas possíveis e perguntas de diagnóstico.",
      url:"https://chat.deepseek.com",
      comoAbrir:"Abra chat.deepseek.com → novo chat → cole o prompt → envie.",
      pratica:"5 causas para status não atualiza + pergunta do suporte em cada uma.",
      promptExemplo:`Contexto: Sou suporte da PublicSoft. Sintoma: no Contrata Public o status do processo “não atualiza” na tela do cliente.

Objetivo: Lista de diagnóstico para o analista.

Restrições: Não inventar bugs; foco em causas comuns; sem dado sensível.

Formato:
1) 5 causas possíveis (uma linha cada)
2) Para cada causa, 1 pergunta que o suporte deve fazer ao cliente
3) 1 checklist rápido de verificação no sistema

Exemplo: causa “cache do navegador” → pergunta “Você já tentou atualizar com Ctrl+F5?”`
    },
    {
      id:"gemini", icone:"assets/ias/gemini.svg", cena:"assets/slides/ia-gemini.jpg", cenaAlt:"Visual institucional escuro com hex/gradiente da marca", tipo:"imagem", nome:"Gemini · Nano Banana Pro",
      lead:"Texto + imagem no Google",
      desc:"Brief → banner/imagem e trabalho multimodal com referência visual.",
      url:"https://gemini.google.com",
      comoAbrir:"Abra gemini.google.com → ative geração de imagem (Nano Banana Pro, se disponível) → cole o prompt.",
      pratica:"Gere 1 imagem institucional com Nano Banana Pro.",
      promptExemplo:`Crie uma imagem institucional para a PublicSoft (software de gestão pública).

Estilo: moderno, elegante, fundo escuro.
Paleta: laranja #F08C3C → magenta #CC24CC → violeta #7C3AED.
Motivo: colmeia/hexágonos suaves (identidade da marca), sem texto na imagem.
Formato: horizontal 16:9, limpo, sem logo inventado, sem rostos.`
    },
    {
      id:"kimi", icone:"assets/ias/kimi.svg", cena:"assets/slides/ia-kimi.jpg", cenaAlt:"Pilha de documentos / contexto longo na tela", tipo:"agente", nome:"Kimi",
      lead:"Documento longo e entrega completa",
      desc:"Contexto enorme, pesquisa, planilha/PPT. Modo Agent é ponte para o 2º encontro.",
      url:"https://www.kimi.com",
      comoAbrir:"Abra kimi.com → novo chat → cole o prompt → envie (depois explore o modo Agent no 2º encontro).",
      pratica:"Resumo estruturado de texto longo ou esboço de planilha.",
      promptExemplo:`Contexto: Sou da gestão da PublicSoft. Preciso organizar o acompanhamento de licitações da semana.

Objetivo: Estrutura de planilha pronta para preencher.

Restrições: Não inventar editais reais; só o modelo; status realistas.

Formato: Tabela Markdown com colunas:
órgão | número | objeto | data de abertura | valor estimado | status | responsável

Depois liste 5 status úteis para a equipe (ex.: “em análise”, “aguardando documentos”).`
    },
    {
      id:"grok", icone:"assets/ias/grok.svg", cena:"assets/slides/ia-grok.jpg", cenaAlt:"Dois modos: conversa no chat e ação com apps", tipo:"agente", nome:"Grok",
      lead:"Atualidade + Grok Bot",
      desc:"Chat direto; Grok Bot conecta apps e roda rotinas com aprovação.",
      url:"https://grok.com",
      comoAbrir:"Abra grok.com → novo chat → cole o prompt → envie. (Grok Bot fica para o 2º encontro.)",
      pratica:"Resposta direta. Grok Bot aprofunda no 2º encontro.",
      promptExemplo:`Contexto: Sou instrutor do curso interno de IA da PublicSoft (Suporte e gestão).

Objetivo: Explicar em linguagem simples a diferença entre “chat que responde” e “agente que age”.

Restrições: Máx. 8 linhas; sem jargão; 1 exemplo do dia a dia de suporte; sem medo nem hype.

Formato:
1) Definição em 1 frase cada
2) 1 exemplo prático
3) 1 cuidado (aprovação humana)`
    },
    {
      id:"suno", icone:"assets/ias/suno.svg", cena:"assets/slides/ia-suno.jpg", cenaAlt:"Estúdio e waveform — vinheta de abertura do curso", tipo:"musica", nome:"Suno",
      lead:"Trilha e vinheta por texto",
      desc:"Música para vídeo interno, abertura de treinamento e podcast curto.",
      url:"https://suno.com",
      comoAbrir:"Abra suno.com → Create → cole o prompt no campo de estilo/descrição → gere.",
      pratica:"Vinheta: abertura do curso de IA da PublicSoft.",
      promptExemplo:`Create a short 12-second corporate intro jingle for an internal AI training at a Brazilian public-sector software company (PublicSoft).

Mood: modern, optimistic, clean tech.
Style: light electronic + soft pads, no vocals (or only soft “ooh” pads).
Tempo: mid-tempo. No lyrics. Suitable as course opening sting.`
    },
    {
      id:"flow", icone:"assets/ias/flow.svg", cena:"assets/slides/ia-flow.jpg", cenaAlt:"Produção de vídeo cinematográfica / clipe curto", tipo:"video", nome:"Google Flow",
      lead:"Texto/imagem → vídeo (Veo)",
      desc:"Clipe curto e UGC no ecossistema Gemini — boa cota para demo em aula.",
      url:"https://labs.google/fx/tools/flow",
      comoAbrir:"Abra labs.google/fx/tools/flow → novo projeto → cole o prompt (ou use imagem) → gere clipe curto.",
      pratica:"Brief ou imagem → clipe vertical curto.",
      promptExemplo:`Vertical 9:16, 8 seconds. Soft cinematic office scene for PublicSoft internal training.

Dark elegant desk, subtle orange-to-magenta light accents, honeycomb motif faintly in the background (abstract, not a logo copy). Camera slow push-in. No readable text on screens. No faces close-up. Calm, professional, modern.`
    },
    {
      id:"fish", icone:"assets/ias/fish.svg", cena:"assets/slides/ia-fish.jpg", cenaAlt:"Microfone — clonagem de voz só com autorização", tipo:"audio", nome:"Fish Audio",
      lead:"Clonar voz (camada gratuita)",
      desc:"~10–15 s de amostra. Plano free sem cartão. Só com autorização de quem cedeu a voz.",
      url:"https://fish.audio/voice-clone/",
      comoAbrir:"Abra fish.audio/voice-clone → (com autorização) clone 10–15 s → cole a frase abaixo para gerar o áudio.",
      pratica:"Com autorização, clone 10–15 s e gere uma frase institucional.",
      extra:"https://fish.audio/plan/",
      promptExemplo:`Bem-vindos ao curso de Inteligência Artificial da PublicSoft. Hoje vamos aprender a usar as ferramentas com critério, revisão humana e zero dado sensível.`
    }
  ],
  extras: [
    {nome:"Kling · vídeo (extra)", url:"https://kling.ai"},
    {nome:"MiniMax / Hailuo · vídeo (extra)", url:"https://hailuoai.video"}
  ],
  promptBlocos: [
    {n:1, t:"Contexto", d:"Quem você é e a situação"},
    {n:2, t:"Objetivo", d:"O que precisa sair"},
    {n:3, t:"Restrições", d:"Tom, tamanho, limites"},
    {n:4, t:"Formato", d:"Lista, tabela, mensagem"},
    {n:5, t:"Exemplo", d:"Modelo do que é bom"}
  ],
  slidesImgs: {
    futuroTrabalho: "assets/slides/futuro-trabalho.jpg",
    futuroJanelas: "assets/slides/futuro-janelas.jpg",
    futuroGestao: "assets/slides/futuro-gestao.jpg",
    futuroCuidados: "assets/slides/futuro-cuidados.jpg",
    promptBlocos: "assets/slides/prompt-blocos.jpg",
    labSuporte: "assets/slides/lab-suporte.jpg",
    labGestao: "assets/slides/lab-gestao.jpg",
    proximoAgentes: "assets/slides/proximo-agentes.jpg",
    desafio: "assets/slides/desafio.jpg"
  },
  labSuporte: `Contexto: Sou analista de suporte da PublicSoft. O cliente perguntou no WhatsApp por que o status do processo não atualiza no Contrata Public.

Objetivo: Resposta clara para enviar ao cliente.

Restrições: Linguagem simples; máx. 6 linhas; sem culpar o usuário; não inventar prazo; sem dado sensível.

Formato: Mensagem pronta para WhatsApp, com pergunta de confirmação no fim.

Exemplo de tom: “Entendi sua dúvida. Vou te orientar no passo a passo…”`,
  labGestao: `Contexto: Sou da gestão / comercial da PublicSoft.

Objetivo: Modelo de planilha de acompanhamento de licitações.

Restrições: Só as colunas pedidas; status realistas; não inventar editais.

Formato: Tabela Markdown.

Colunas: órgão | número | objeto | data de abertura | valor estimado | status | responsável

Peça também 5 status úteis para a equipe.`
};
