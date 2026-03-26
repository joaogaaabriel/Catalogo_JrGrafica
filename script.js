/* ============================================
   JR GRÁFICA — SCRIPT.JS
   ============================================ */

// ============================================
// 1. DADOS — Centralizados aqui para fácil manutenção
// ============================================

const WHATSAPP_NUMBER = '5500000000000'; // Altere para o número real

const categorias = [
  { id: 'todos',      nome: 'Todos',        emoji: '🗂️', desc: 'Ver tudo'          },
  { id: 'banners',    nome: 'Banners',      emoji: '🖼️', desc: 'Impressão grande'  },
  { id: 'cartoes',    nome: 'Cartões',      emoji: '🪪',  desc: 'Visita & ID'       },
  { id: 'panfletos',  nome: 'Panfletos',    emoji: '📄',  desc: 'Divulgação'        },
  { id: 'adesivos',   nome: 'Adesivos',     emoji: '🏷️', desc: 'Corte e vinil'    },
  { id: 'outros',     nome: 'Outros',       emoji: '✨',  desc: 'Mais produtos'     },
];

const produtos = [
  // ── BANNERS ─────────────────────────────────────────────────────────────
  {
    id: 1,
    nome: 'Banner Pequeno',
    categoria: 'banners',
    emoji: '🖼️',
    descricao: 'Ideal para eventos, promoções e divulgação interna. Impressão de alta resolução em lona 440g com acabamento reforçado.',
    destaque: 'Mais vendido',
    tamanhos: [
      { label: '43×61 cm',  preco: 25 },
    ],
  },
  {
    id: 2,
    nome: 'Banner Grande',
    categoria: 'banners',
    emoji: '🖼️',
    descricao: 'Perfeito para fachadas, eventos e pontos de venda. Alta visibilidade com cores vivas e resistência ao tempo.',
    destaque: null,
    tamanhos: [
      { label: '60×90 cm',  preco: 40 },
      { label: '90×120 cm', preco: 65 },
      { label: '1×2 m',     preco: 90 },
    ],
  },

  // ── CARTÕES DE VISITA ────────────────────────────────────────────────────
  {
    id: 3,
    nome: 'Cartão Simples',
    categoria: 'cartoes',
    emoji: '🪪',
    descricao: 'Frente colorida + verso preto e branco com verniz. Tamanho padrão 9×5 cm. 1000 unidades.',
    destaque: null,
    tamanhos: [
      { label: '1000 unid. — 9×5 cm', preco: 130 },
    ],
  },
  {
    id: 4,
    nome: 'Cartão 4×4 Colorido',
    categoria: 'cartoes',
    emoji: '🪪',
    descricao: 'Frente e verso coloridos + verniz na frente. Acabamento premium, tamanho 9×5 cm. 1000 unidades.',
    destaque: 'Mais vendido',
    tamanhos: [
      { label: '1000 unid. — 9×5 cm', preco: 170 },
    ],
  },
  {
    id: 5,
    nome: 'Cartão BOPP',
    categoria: 'cartoes',
    emoji: '🪪',
    descricao: 'Frente e verso coloridos + verniz localizado + plastificação fosca. Acabamento sofisticado, 9×5 cm. 1000 unidades.',
    destaque: 'Premium',
    tamanhos: [
      { label: '1000 unid. — 9×5 cm', preco: 220 },
    ],
  },

  // ── PANFLETOS 4/0 (Colorido Frente) ─────────────────────────────────────
  {
    id: 6,
    nome: 'Panfleto 4/0 — Colorido Frente',
    categoria: 'panfletos',
    emoji: '📄',
    descricao: 'Impressão colorida somente na frente (4/0). Papel couchê, alta qualidade gráfica. 5000 unidades.',
    destaque: null,
    tamanhos: [
      { label: '10×15 cm — 5000 unid.', preco: 320 },
      { label: '15×15 cm — 5000 unid.', preco: 420 },
      { label: '15×20 cm — 5000 unid.', preco: 495 },
    ],
  },

  // ── PANFLETOS 4/1 (Frente Colorido + Verso P&B) ──────────────────────────
  {
    id: 7,
    nome: 'Panfleto 4/1 — Frente Color + Verso P&B',
    categoria: 'panfletos',
    emoji: '📋',
    descricao: 'Frente colorida + verso em preto e branco (4/1). Ótimo custo-benefício para divulgação completa. 5000 unidades.',
    destaque: null,
    tamanhos: [
      { label: '10×15 cm — 5000 unid.', preco: 350 },
      { label: '15×20 cm — 5000 unid.', preco: 570 },
    ],
  },

  // ── PANFLETOS 4/4 (Frente e Verso Colorido) ─────────────────────────────
  {
    id: 8,
    nome: 'Panfleto 4/4 — Frente e Verso Colorido',
    categoria: 'panfletos',
    emoji: '🗞️',
    descricao: 'Frente e verso totalmente coloridos (4/4). Máximo impacto visual, ideal para cardápios e promoções. 5000 unidades.',
    destaque: 'Destaque',
    tamanhos: [
      { label: '10×15 cm — 5000 unid.', preco: 395 },
      { label: '15×20 cm — 5000 unid.', preco: 620 },
    ],
  },

  // ── ADESIVOS ─────────────────────────────────────────────────────────────
  {
    id: 9,
    nome: 'Adesivo Vinil',
    categoria: 'adesivos',
    emoji: '🏷️',
    descricao: 'Adesivo vinil com impressão colorida, resistente à água e ao sol. Acabamento brilhoso ou laminado fosco.',
    destaque: null,
    tamanhos: [
      { label: 'Pequeno (até 10 cm)',  preco: 10 },
      { label: 'Médio (11–25 cm)',     preco: 25 },
      { label: 'Grande (26–50 cm)',    preco: 45 },
    ],
  },
  {
    id: 10,
    nome: 'Etiqueta Personalizada',
    categoria: 'adesivos',
    emoji: '🔖',
    descricao: 'Etiquetas em bobina ou folha. Ideais para produtos, embalagens e identificações. Acabamento profissional.',
    destaque: null,
    tamanhos: [
      { label: '500 unid.',  preco: 35 },
      { label: '1000 unid.', preco: 60 },
    ],
  },

  // ── OUTROS ───────────────────────────────────────────────────────────────
  {
    id: 11,
    nome: 'Folder A4 Dobrado',
    categoria: 'outros',
    emoji: '📁',
    descricao: 'Folder no formato A4 com dobra dupla (tipo sanfona ou Z). Perfeito para apresentações e material institucional.',
    destaque: null,
    tamanhos: [
      { label: '100 unid.',  preco: 70  },
      { label: '500 unid.',  preco: 190 },
      { label: '1000 unid.', preco: 300 },
    ],
  },
  {
    id: 12,
    nome: 'Calendário Personalizado',
    categoria: 'outros',
    emoji: '📅',
    descricao: 'Calendário anual com a identidade do seu negócio. Ótima opção de brinde corporativo com alta visibilidade.',
    destaque: 'Destaque',
    tamanhos: [
      { label: '50 unid.',  preco: 150 },
      { label: '100 unid.', preco: 250 },
    ],
  },
];

// ============================================
// 2. ESTADO DA APLICAÇÃO
// ============================================

const estado = {
  categoriaAtiva: 'todos',
  busca: '',
  ordenacao: '',
  tamanhoSelecionado: null,
};

// ============================================
// 3. RENDERIZAÇÃO — CATEGORIAS
// ============================================

function renderCategorias() {
  const grid = document.getElementById('categoriasGrid');
  grid.innerHTML = '';

  categorias.forEach((cat, i) => {
    const card = document.createElement('div');
    card.className = `categoria-card fade-in ${cat.id === estado.categoriaAtiva ? 'ativa' : ''}`;
    card.style.transitionDelay = `${i * 60}ms`;
    card.innerHTML = `
      <span class="categoria-card__emoji">${cat.emoji}</span>
      <div class="categoria-card__nome">${cat.nome}</div>
      <div class="categoria-card__desc">${cat.desc}</div>
    `;
    card.addEventListener('click', () => {
      estado.categoriaAtiva = cat.id;
      renderCategorias();
      renderProdutos();
      document.getElementById('produtos').scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
    grid.appendChild(card);
  });

  // Renderiza as tags de filtro em sincronia
  renderFiltroTags();
  observeFadeIns();
}

// ============================================
// 4. RENDERIZAÇÃO — FILTRO TAGS
// ============================================

function renderFiltroTags() {
  const container = document.getElementById('filtroTags');
  container.innerHTML = '';

  categorias.forEach(cat => {
    const btn = document.createElement('button');
    btn.className = `tag-btn ${cat.id === estado.categoriaAtiva ? 'ativo' : ''}`;
    btn.textContent = cat.nome;
    btn.addEventListener('click', () => {
      estado.categoriaAtiva = cat.id;
      renderCategorias();
      renderProdutos();
    });
    container.appendChild(btn);
  });
}

// ============================================
// 5. FILTRAGEM E ORDENAÇÃO
// ============================================

function getProdutosFiltrados() {
  let lista = [...produtos];

  // Filtro por categoria
  if (estado.categoriaAtiva !== 'todos') {
    lista = lista.filter(p => p.categoria === estado.categoriaAtiva);
  }

  // Busca por nome
  if (estado.busca.trim()) {
    const termo = estado.busca.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    lista = lista.filter(p => {
      const nome = p.nome.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
      const desc = p.descricao.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
      return nome.includes(termo) || desc.includes(termo);
    });
  }

  // Ordenação
  if (estado.ordenacao === 'asc') {
    lista.sort((a, b) => a.tamanhos[0].preco - b.tamanhos[0].preco);
  } else if (estado.ordenacao === 'desc') {
    lista.sort((a, b) => b.tamanhos[0].preco - a.tamanhos[0].preco);
  } else if (estado.ordenacao === 'nome') {
    lista.sort((a, b) => a.nome.localeCompare(b.nome));
  }

  return lista;
}

// ============================================
// 6. RENDERIZAÇÃO — PRODUTO CARD
// ============================================

function criarCardProduto(produto) {
  const precoMinimo = Math.min(...produto.tamanhos.map(t => t.preco));
  const temVariacao = produto.tamanhos.length > 1;

  const card = document.createElement('div');
  card.className = 'produto-card fade-in';

  card.innerHTML = `
    ${produto.destaque ? `<div class="produto-card__badge">${produto.destaque}</div>` : ''}
    <div class="produto-card__img">
      <div class="produto-card__img-inner">${produto.emoji}</div>
      <div class="produto-card__img-overlay"></div>
    </div>
    <div class="produto-card__body">
      <div class="produto-card__cat">${getNomeCategoria(produto.categoria)}</div>
      <div class="produto-card__nome">${produto.nome}</div>
      <div class="produto-card__desc">${produto.descricao}</div>
      <div class="produto-card__footer">
        <div class="produto-card__preco">
          <span class="preco-desde">${temVariacao ? 'a partir de' : 'preço'}</span>
          <span class="preco-valor">R$ ${precoMinimo}</span>
        </div>
        <div class="btn-ver" aria-label="Ver produto">→</div>
      </div>
    </div>
  `;

  card.addEventListener('click', () => abrirModal(produto));
  return card;
}

function getNomeCategoria(id) {
  const cat = categorias.find(c => c.id === id);
  return cat ? cat.nome : id;
}

// ============================================
// 7. RENDERIZAÇÃO — PRODUTOS GRID
// ============================================

function renderProdutos() {
  const grid = document.getElementById('produtosGrid');
  const emptyState = document.getElementById('emptyState');
  const lista = getProdutosFiltrados();

  grid.innerHTML = '';
  emptyState.style.display = 'none';

  if (lista.length === 0) {
    emptyState.style.display = 'block';
    return;
  }

  lista.forEach((produto, i) => {
    const card = criarCardProduto(produto);
    card.style.transitionDelay = `${i * 40}ms`;
    grid.appendChild(card);
  });

  observeFadeIns();
}

// ============================================
// 8. MODAL
// ============================================

function abrirModal(produto) {
  const overlay = document.getElementById('modalOverlay');
  const content = document.getElementById('modalContent');

  // Define primeiro tamanho como selecionado por padrão
  estado.tamanhoSelecionado = produto.tamanhos[0];

  content.innerHTML = `
    <div class="modal__img">${produto.emoji}</div>
    <div class="modal__body">
      <div class="modal__cat">${getNomeCategoria(produto.categoria)}</div>
      <h2 class="modal__nome">${produto.nome}</h2>
      <p class="modal__desc">${produto.descricao}</p>

      <div class="modal__tamanhos">
        <h4>Escolha a opção</h4>
        <div class="tamanhos-grid" id="tamanhoGrid">
          ${produto.tamanhos.map((t, i) => `
            <button
              class="tamanho-btn ${i === 0 ? 'selecionado' : ''}"
              data-index="${i}"
              data-label="${t.label}"
              data-preco="${t.preco}"
            >
              <span class="tamanho-btn__label">${t.label}</span>
              <span class="tamanho-btn__preco">R$ ${t.preco}</span>
            </button>
          `).join('')}
        </div>
      </div>

      <div class="modal__preco-destaque" id="precoDestaque">
        <span>Total selecionado</span>
        <strong id="precoValor">R$ ${produto.tamanhos[0].preco}</strong>
      </div>

      <button
        class="btn btn--whatsapp"
        id="btnWhatsApp"
        onclick="chamarWhatsApp('${produto.nome}', '${produto.tamanhos[0].label}')"
      >
        <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
          <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.118 1.527 5.845L.057 23.882l6.187-1.45A11.944 11.944 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.817 9.817 0 01-5.007-1.37l-.36-.213-3.722.872.938-3.63-.234-.373A9.818 9.818 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182c5.43 0 9.818 4.388 9.818 9.818 0 5.43-4.388 9.818-9.818 9.818z"/>
        </svg>
        Solicitar no WhatsApp
      </button>
    </div>
  `;

  // Eventos dos botões de tamanho
  const tamanhoGrid = content.querySelector('#tamanhoGrid');
  tamanhoGrid.querySelectorAll('.tamanho-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      tamanhoGrid.querySelectorAll('.tamanho-btn').forEach(b => b.classList.remove('selecionado'));
      btn.classList.add('selecionado');

      const label = btn.dataset.label;
      const preco = btn.dataset.preco;
      const nomeProduto = produto.nome;

      document.getElementById('precoValor').textContent = `R$ ${preco}`;
      document.getElementById('btnWhatsApp').setAttribute(
        'onclick',
        `chamarWhatsApp('${nomeProduto}', '${label}')`
      );
    });
  });

  // Abre o modal
  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function fecharModal() {
  const overlay = document.getElementById('modalOverlay');
  overlay.classList.remove('open');
  document.body.style.overflow = '';
}

// ============================================
// 9. WHATSAPP
// ============================================

function chamarWhatsApp(nomeProduto, tamanho) {
  const mensagem = encodeURIComponent(
    `Olá, tenho interesse no ${nomeProduto} - ${tamanho}. Poderia me passar mais informações?`
  );
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${mensagem}`, '_blank');
}

// ============================================
// 10. EVENTOS
// ============================================

function iniciarEventos() {
  // Header scroll
  window.addEventListener('scroll', () => {
    const header = document.getElementById('header');
    header.classList.toggle('scrolled', window.scrollY > 20);
  }, { passive: true });

  // Hamburger menu
  document.getElementById('hamburger').addEventListener('click', () => {
    document.getElementById('navDrawer').classList.add('open');
    document.getElementById('navOverlay').classList.add('open');
    document.body.style.overflow = 'hidden';
  });

  // Fechar drawer
  const fecharDrawer = () => {
    document.getElementById('navDrawer').classList.remove('open');
    document.getElementById('navOverlay').classList.remove('open');
    document.body.style.overflow = '';
  };
  document.getElementById('navClose').addEventListener('click', fecharDrawer);
  document.getElementById('navOverlay').addEventListener('click', fecharDrawer);

  // Links do drawer fecham ao clicar
  document.querySelectorAll('.drawer-link').forEach(link => {
    link.addEventListener('click', fecharDrawer);
  });

  // Busca com debounce
  let debounceTimer;
  document.getElementById('searchInput').addEventListener('input', e => {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
      estado.busca = e.target.value;
      renderProdutos();
    }, 280);
  });

  // Ordenação
  document.getElementById('ordenarSelect').addEventListener('change', e => {
    estado.ordenacao = e.target.value;
    renderProdutos();
  });

  // Fechar modal
  document.getElementById('modalClose').addEventListener('click', fecharModal);
  document.getElementById('modalOverlay').addEventListener('click', e => {
    if (e.target === document.getElementById('modalOverlay')) fecharModal();
  });

  // Fechar modal com ESC
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') fecharModal();
  });

  // Links do nav suavizam scroll e fecham drawer
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const target = document.querySelector(a.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
}

// ============================================
// 11. FUNÇÃO GLOBAL PARA RESET DE FILTROS
// ============================================

function resetFiltros() {
  estado.categoriaAtiva = 'todos';
  estado.busca = '';
  estado.ordenacao = '';
  document.getElementById('searchInput').value = '';
  document.getElementById('ordenarSelect').value = '';
  renderCategorias();
  renderProdutos();
}

// ============================================
// 12. ANIMAÇÕES — Intersection Observer
// ============================================

function observeFadeIns() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -30px 0px' });

  document.querySelectorAll('.fade-in:not(.visible)').forEach(el => observer.observe(el));
}

// ============================================
// 13. INICIALIZAÇÃO
// ============================================

document.addEventListener('DOMContentLoaded', () => {
  renderCategorias();
  renderProdutos();
  iniciarEventos();
  observeFadeIns();

  // Stagger inicial do hero
  setTimeout(observeFadeIns, 300);
});