// Initialize Lucide Icons
lucide.createIcons();

// Shopping Cart State
let cart = [];

// UI Element References
const cartDrawer = document.getElementById('cart-drawer');
const cartOverlay = document.getElementById('cart-drawer-overlay');
const openCartBtn = document.getElementById('open-cart-btn');
const closeCartBtn = document.getElementById('close-cart-btn');
const cartItemsContainer = document.getElementById('cart-items-container');
const cartCountEl = document.getElementById('cart-count');
const cartSubtotalEl = document.getElementById('cart-subtotal');
const cartTotalEl = document.getElementById('cart-total');

// Toggle Mobile Menu
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
mobileMenuBtn.addEventListener('click', () => {
    const open = mobileMenu.classList.toggle('hidden') === false;
    mobileMenuBtn.setAttribute('aria-expanded', open);
});

// Open Cart Drawer
function openCart() {
    cartDrawer.classList.remove('translate-x-full');
    cartDrawer.removeAttribute('inert');
    closeCartBtn.focus();
    cartOverlay.classList.remove('opacity-0', 'pointer-events-none');
    renderCart();
}

// Close Cart Drawer
function closeCart() {
    cartDrawer.classList.add('translate-x-full');
    cartDrawer.setAttribute('inert', '');
    cartOverlay.classList.add('opacity-0', 'pointer-events-none');
}

openCartBtn.addEventListener('click', openCart);
closeCartBtn.addEventListener('click', closeCart);
cartOverlay.addEventListener('click', closeCart);

const IMG = {
    duo: 'images/produtos/duo.jpg',
    box6: 'images/produtos/box6.jpg',
    kit: 'images/produtos/kit.jpg',
    'bolo-chocolate-intenso': 'images/produtos/bolo-chocolate-intenso.jpg',
    'bolo-cenoura-ganache': 'images/produtos/bolo-cenoura-ganache.jpg',
    'red-velvet': 'images/produtos/red-velvet.jpg',
    'bolo-limao-frutas-vermelhas': 'images/produtos/bolo-limao-frutas-vermelhas.jpg',
    'bolo-pistache-v2': 'images/produtos/bolo-pistache-v2.jpg',
    'bolo-doce-de-leite': 'images/produtos/bolo-doce-de-leite.jpg',
    'cheesecake-limao': 'images/produtos/cheesecake-limao.jpg',
    'brigadeiro-gourmet': 'images/produtos/brigadeiro-gourmet.jpg',
    'brigadeiro-pistache': 'images/produtos/brigadeiro-pistache.jpg',
    'beijinho-coco': 'images/produtos/beijinho-coco.jpg',
    'bombom-morango': 'images/produtos/bombom-morango.jpg',
    'bombom-pao-de-mel': 'images/produtos/bombom-pao-de-mel.jpg',
    'mousse-chocolate': 'images/produtos/mousse-chocolate.jpg',
    'mousse-maracuja': 'images/produtos/mousse-maracuja.jpg',
    'petit-gateau': 'images/produtos/petit-gateau.jpg',
    'croissant-queijo': 'images/produtos/croissant-queijo.jpg',
    'cinnamon-roll': 'images/produtos/cinnamon-roll.jpg',
    'cookie-chocolate': 'images/produtos/cookie-chocolate.jpg',
    'brownie': 'images/produtos/brownie.jpg',
    'muffin-blueberry': 'images/produtos/muffin-blueberry.jpg',
    'croissant-creme-chocolate': 'images/produtos/croissant-creme-chocolate.jpg',
    'croissant-tradicional': 'images/produtos/croissant-tradicional.jpg',
    'quiche-alho-poro': 'images/produtos/quiche-alho-poro.jpg',
    'empada-frango': 'images/produtos/empada-frango.jpg',
    'pao-de-queijo': 'images/produtos/pao-de-queijo.jpg',
    'toast-queijo-tomate': 'images/produtos/toast-queijo-tomate.jpg',
    'sanduiche-natural': 'images/produtos/sanduiche-natural.jpg',
    'espresso': 'images/produtos/espresso.jpg',
    'macchiato': 'images/produtos/macchiato.jpg',
    'cappuccino': 'images/produtos/cappuccino.jpg',
    'latte': 'images/produtos/latte.jpg',
    'mocha': 'images/produtos/mocha.jpg',
    'chocolate-quente': 'images/produtos/chocolate-quente.jpg',
    'smoothie-morango': 'images/produtos/smoothie-morango.jpg',
    'cha': 'images/produtos/cha.jpg',
    'matcha-latte': 'images/produtos/matcha-latte.jpg',
    'suco-laranja': 'images/produtos/suco-laranja.jpg',
    'caixa-12-brigadeiros': 'images/produtos/caixa-12-brigadeiros.jpg',
    'ovo-simples-chocolate-100': 'images/produtos/ovo-simples-chocolate-100.jpg',
    'ovo-simples-chocolate-leite': 'images/produtos/ovo-simples-chocolate-leite.jpg',
    'ovo-simples-chocolate-branco': 'images/produtos/ovo-simples-chocolate-branco.jpg',
    'ovo-recheado-avela': 'images/produtos/ovo-recheado-avela.jpg',
    'ovo-recheado-doce-de-leite': 'images/produtos/ovo-recheado-doce-de-leite.jpg',
    'ovo-recheado-pistache': 'images/produtos/ovo-recheado-pistache.jpg',
    'ovo-recheado-branco-morango': 'images/produtos/ovo-recheado-branco-morango.jpg',
    'kit-presente-duo': 'images/produtos/kit-presente-duo.jpg',
    'kit-presente-trio': 'images/produtos/kit-presente-trio.jpg',
    'kit-presente-selecao-zella': 'images/produtos/kit-presente-selecao-zella.jpg',
    'banoffee': 'images/produtos/banoffee.jpg',
    'torta-maca-canela': 'images/produtos/torta-maca-canela.jpg',
    'agua-sem-gas': 'images/produtos/agua-sem-gas.jpg',
    'agua-com-gas': 'images/produtos/agua-com-gas.jpg',
    'refrigerante-zero-acucar': 'images/produtos/refrigerante-zero-acucar.jpg',
    'kit-festa-gourmet': 'images/produtos/kit-festa-gourmet.jpg',
    'kit-festa-infantil': 'images/produtos/kit-festa-infantil.jpg',
    'kit-presente-1': 'images/produtos/kit-presente-1.jpg',
    'kit-presente-2': 'images/produtos/kit-presente-2.jpg',
    'kit-casamento': 'images/produtos/kit-casamento.jpg',
    'kit-corporativo': 'images/produtos/kit-corporativo.jpg',
    'kit-aniversario': 'images/produtos/kit-aniversario.jpg',
};
const CATS = [['todos','Todos'],['bolos','Bolos e fatias'],['doces','Doces'],['sobremesas','Sobremesas'],['cafeteria','Cafeteria'],['tortas','Tortas'],['salgados','Salgados'],['cafes','Cafés'],['bebidas','Bebidas'],['presentes','Presentes'],['kits','Kits'],['pascoa','Páscoa']];
const ICON = { pascoa:'egg', bolos:'cake-slice', doces:'candy', sobremesas:'ice-cream-bowl', cafeteria:'croissant', tortas:'cake-slice', salgados:'sandwich', cafes:'coffee', bebidas:'cup-soda', presentes:'gift', kits:'package' };
const CATNAME = Object.fromEntries(CATS);
const QUOTE_NOTE = '<div class="max-w-2xl mx-auto -mt-4 mb-8 flex items-start gap-3 rounded-xl bg-gold/10 border border-gold/40 px-4 py-3 text-xs text-charcoal/90"><i data-lucide="message-circle" class="w-4 h-4 mt-0.5 shrink-0 text-gold-dark"></i><p><strong class="text-burgundy">Encomenda com atendente.</strong> Escolha os sabores e doces, adicione à sacola e envie pelo WhatsApp. Uma atendente faz o seu orçamento e explica como funciona a encomenda.</p></div>';
const CAT_NOTE = { presentes: QUOTE_NOTE, kits: QUOTE_NOTE };
// cat, nome, observação, zero açúcar, foto, recorte [x%, y%, zoom]. price: null = a definir
const MENU = [
['pascoa','Ovo Simples — Chocolate 100%','',1,'ovo-simples-chocolate-100'],['pascoa','Ovo Simples — Chocolate ao Leite','',1,'ovo-simples-chocolate-leite'],['pascoa','Ovo Simples — Chocolate Branco','',1,'ovo-simples-chocolate-branco'],['pascoa','Ovo Chocolate & Avelã','',1,'ovo-recheado-avela'],['pascoa','Ovo Chocolate & Doce de Leite','',1,'ovo-recheado-doce-de-leite'],['pascoa','Ovo Chocolate & Pistache','',1,'ovo-recheado-pistache'],['pascoa','Ovo Chocolate Branco & Morango','',1,'ovo-recheado-branco-morango'],['pascoa','Kit Presente Duo','2 ovos',1,'kit-presente-duo'],['pascoa','Kit Presente Trio','3 ovos',1,'kit-presente-trio'],['pascoa','Kit Presente Seleção Zella','4 ovos',1,'kit-presente-selecao-zella'],
['bolos','Bolo de Chocolate Intenso','',1,'bolo-chocolate-intenso'],['bolos','Bolo de Cenoura com Ganache','',1,'bolo-cenoura-ganache'],['bolos','Red Velvet','',1,'red-velvet'],['bolos','Bolo de Limão com Frutas Vermelhas','',0,'bolo-limao-frutas-vermelhas'],['bolos','Bolo de Pistache','',0,'bolo-pistache-v2'],['bolos','Bolo de Doce de Leite','',1,'bolo-doce-de-leite'],['bolos','Cheesecake de Limão','',0,'cheesecake-limao'],
['doces','Brigadeiro Gourmet','',1,'brigadeiro-gourmet'],['doces','Brigadeiro de Pistache','',0,'brigadeiro-pistache'],['doces','Beijinho de Coco','',0,'beijinho-coco'],['doces','Bombom de Morango','',0,'bombom-morango'],['doces','Bombom de Pão de Mel','',1,'bombom-pao-de-mel'],
['sobremesas','Petit Gâteau','',1,'petit-gateau'],['sobremesas','Mousse de Chocolate','',0,'mousse-chocolate'],['sobremesas','Mousse de Maracujá','',0,'mousse-maracuja'],
['cafeteria','Croissant de Queijo','',0,'croissant-queijo'],['cafeteria','Cinnamon Roll','',1,'cinnamon-roll'],['cafeteria','Cookie de Chocolate','',0,'cookie-chocolate'],['cafeteria','Brownie','Com ou sem Sorvete',0,'brownie'],['cafeteria','Muffin de Blueberry','',0,'muffin-blueberry'],['cafeteria','Croissant com Creme de Chocolate','',1,'croissant-creme-chocolate'],
['tortas','Banoffee','',1,'banoffee'],['tortas','Torta de Maçã com Canela','',0,'torta-maca-canela'],
['salgados','Croissant Tradicional','',0,'croissant-tradicional'],['salgados','Quiche de Alho-Poró','',0,'quiche-alho-poro'],['salgados','Empada de Frango','',0,'empada-frango'],['salgados','Pão de Queijo','',0,'pao-de-queijo'],['salgados','Toast de Queijo e Tomate','',0,'toast-queijo-tomate'],['salgados','Sanduíche Natural','',0,'sanduiche-natural'],
['cafes','Espresso','',0,'espresso'],['cafes','Macchiato','',0,'macchiato'],['cafes','Cappuccino','',0,'cappuccino'],['cafes','Latte','',0,'latte'],['cafes','Mocha','',1,'mocha'],
['bebidas','Chocolate Quente','',1,'chocolate-quente'],['bebidas','Smoothie','Morango com Banana, Manga, Açaí, Melancia, Banana com Cacau e Detox',0,'smoothie-morango'],['bebidas','Chá','Hortelã, Camomila, Amora Mirtilo, Baunilha e Gengibre com Especiarias',0,'cha'],['bebidas','Matcha Latte','',0,'matcha-latte'],['bebidas','Suco Natural','Maracujá, Laranja, Limão, Morango, Abacaxi com Hortelã e Amora',0,'suco-laranja'],['bebidas','Água sem Gás','',0,'agua-sem-gas'],['bebidas','Água com Gás','',0,'agua-com-gas'],['bebidas','Refrigerantes Zero Açúcar','Coca-Cola, Fanta, Guaraná ou Soda',1,'refrigerante-zero-acucar'],
['presentes','Caixa com 6 Brigadeiros','',0,'box6'],['presentes','Caixa com 12 Brigadeiros','',0,'caixa-12-brigadeiros'],['presentes','Kit Presente 1','',0,'kit-presente-1'],['presentes','Kit Presente 2','',0,'kit-presente-2'],['kits','Kit de Aniversário','',0,'kit-aniversario'],['kits','Kit Festa Infantil','',0,'kit-festa-infantil'],['kits','Kit Festa Gourmet','',0,'kit-festa-gourmet'],['kits','Kit Casamento','',0,'kit-casamento'],['kits','Kit Corporativo','',0,'kit-corporativo']
].map(([cat, name, note, zero, img, crop]) => ({ cat, name, note, zero: !!zero, img, crop, price: null }));
const brl = v => v.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
const checkoutBtn = document.getElementById('checkout-btn');
const grid = document.getElementById('products-grid');
const tabs = document.getElementById('filter-container');
let currentCat = 'todos';

document.querySelectorAll('[data-img]').forEach(el => el.src = IMG[el.dataset.img]);

function addToCart(name, price, details) {
    const it = cart.find(i => i.name === name && i.details === details);
    if (it) it.qty += 1; else cart.push({ id: Date.now() + Math.random(), name, price, details, qty: 1 });
    renderCart(); openCart();
}
function removeFromCart(id) { cart = cart.filter(i => i.id !== id); renderCart(); }
function changeQty(id, d) {
    const it = cart.find(i => i.id === id); if (!it) return;
    it.qty += d; if (it.qty < 1) cart = cart.filter(i => i.id !== id);
    renderCart();
}
function renderCart() {
    let sub = 0, n = 0, pending = false;
    cartItemsContainer.innerHTML = cart.length ? '' : `
        <div class="text-center py-12 text-charcoal/75 space-y-3">
            <i data-lucide="shopping-bag" class="w-12 h-12 mx-auto text-burgundy/30"></i>
            <p class="font-serif-title text-lg font-semibold text-burgundy">Sua sacola está vazia</p>
            <p class="text-xs">Escolha itens do cardápio para montar seu pedido.</p>
        </div>`;
    cart.forEach(item => {
        n += item.qty;
        if (item.price == null) pending = true; else sub += item.price * item.qty;
        const el = document.createElement('div');
        el.className = 'p-3 bg-cream-light rounded-xl border border-cream-border shadow-sm';
        el.innerHTML = `
            <div class="flex items-start justify-between gap-2">
                <div><h4 class="font-serif-title font-bold text-burgundy text-base">${item.name}</h4>
                ${item.details ? `<ul class="text-xs text-charcoal/75 space-y-0.5 mt-1">${item.details.split(' · ').map(d => `<li>${d}</li>`).join('')}</ul>` : ''}</div>
                <button onclick="removeFromCart(${item.id})" aria-label="Remover ${item.name}" class="text-charcoal/60 hover:text-burgundy p-1"><i data-lucide="trash-2" class="w-4 h-4"></i></button>
            </div>
            <div class="flex items-center justify-between mt-3">
                <div class="inline-flex items-center border border-cream-border rounded-full">
                    <button onclick="changeQty(${item.id}, -1)" aria-label="Diminuir quantidade" class="w-8 h-8 text-burgundy">−</button>
                    <span class="w-6 text-center text-sm font-semibold">${item.qty}</span>
                    <button onclick="changeQty(${item.id}, 1)" aria-label="Aumentar quantidade" class="w-8 h-8 text-burgundy">+</button>
                </div>
                <span class="text-sm font-semibold text-burgundy">${item.price == null ? (DETAILS[item.name] && DETAILS[item.name].quote ? 'Orçamento com atendente' : 'Valor a confirmar') : brl(item.price * item.qty)}</span>
            </div>`;
        cartItemsContainer.appendChild(el);
    });
    if (cart.some(i => DETAILS[i.name] && DETAILS[i.name].quote)) {
        const nt = document.createElement('div');
        nt.className = 'flex items-start gap-3 rounded-xl bg-gold/10 border border-gold/40 px-4 py-3 text-xs text-charcoal/90';
        nt.innerHTML = '<i data-lucide="message-circle" class="w-4 h-4 mt-0.5 shrink-0 text-gold-dark"></i><p><strong class="text-burgundy">Próximo passo:</strong> ao enviar o pedido pelo WhatsApp, uma atendente faz o seu orçamento e explica como funciona a encomenda.</p>';
        cartItemsContainer.appendChild(nt);
    }
    cartCountEl.textContent = n; cartCountEl.classList.toggle('hidden', !n);
    cartSubtotalEl.textContent = cartTotalEl.textContent = !n ? brl(0) : pending ? 'A confirmar' : brl(sub);
    checkoutBtn.disabled = !n;
    lucide.createIcons();
}
function sendOrder() {
    const lines = cart.map(i => `- ${i.qty}x ${i.name}` + (i.details ? '\n' + i.details.split(' · ').map(d => '   • ' + d.replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>')).join('\n') : ''));
    const text = 'Olá! Quero fazer este pedido:\n' + lines.join('\n') + '\n\nGostaria do orçamento (valores, disponibilidade e prazo) e de entender como funciona a encomenda.';
    window.open('https://wa.me/5511945712524?text=' + encodeURIComponent(text), '_blank', 'noopener');
}
let toastTimer;
function toast(msg) {
    const t = document.getElementById('toast'); t.textContent = msg; t.classList.remove('opacity-0');
    clearTimeout(toastTimer); toastTimer = setTimeout(() => t.classList.add('opacity-0'), 3500);
}

function card(p, i) {
    const media = p.img
        ? `<img src="${IMG[p.img]}" alt="${p.name}" loading="lazy" class="w-full h-full object-cover" ${p.crop ? `style="transform-origin:${p.crop[0]}% ${p.crop[1]}%;transform:scale(${p.crop[2]})"` : ''}>`
        : `<div class="w-full h-full bg-burgundy flex items-center justify-center"><div class="w-24 h-24 rounded-full border border-gold/40 flex items-center justify-center text-gold"><i data-lucide="${ICON[p.cat]}" class="w-9 h-9" stroke-width="1.25"></i></div></div>`;
    return `<article class="bg-cream-light rounded-2xl border border-cream-border overflow-hidden flex flex-col">
        <div class="aspect-square overflow-hidden">${media}</div>
        <div class="p-4 flex flex-col flex-grow gap-1">
            <p class="text-xs text-gold-dark font-semibold">${CATNAME[p.cat]}${p.zero ? ' · Zero açúcar' : ''}</p>
            <h3 class="font-serif-title font-bold text-lg text-burgundy leading-tight">${p.name}</h3>
            ${(DETAILS[p.name] ? DETAILS[p.name].desc : p.note) ? `<p class="text-xs text-charcoal/75">${DETAILS[p.name] ? DETAILS[p.name].desc : p.note}</p>` : ''}
            <div class="mt-auto pt-3 flex items-center justify-between gap-2">
                <span class="text-xs text-charcoal/75">${p.price == null ? (DETAILS[p.name] && DETAILS[p.name].quote ? 'Orçamento com atendente' : 'Valor a confirmar') : brl(p.price)}</span>
                <button data-add="${i}" class="bg-burgundy text-cream text-sm font-medium px-4 py-2 rounded-full hover:bg-burgundy-light">${DETAILS[p.name] && DETAILS[p.name].quote ? 'Montar meu kit' : DETAILS[p.name] && DETAILS[p.name].groups ? 'Escolher opções' : 'Adicionar'}</button>
            </div>
        </div></article>`;
}
const MENU_CATS = CATS.filter(([k]) => k !== 'todos');

// Opções escolhidas ao adicionar à sacola: por nome do item (tem prioridade) ou por categoria.
// prefix = texto que aparece antes da escolha na sacola e no pedido do WhatsApp.
const OPTION_SETS = {
    byName: {
        'Smoothie': { title: 'Escolha o sabor', prefix: 'Sabor: ', choices: ['Morango com Banana', 'Manga', 'Açaí', 'Melancia', 'Banana com Cacau', 'Detox'] },
        'Suco Natural': { title: 'Escolha o sabor', prefix: 'Sabor: ', choices: ['Maracujá', 'Laranja', 'Limão', 'Morango', 'Abacaxi com Hortelã', 'Amora'] },
        'Refrigerantes Zero Açúcar': { title: 'Escolha o refrigerante', prefix: '', choices: ['Coca-Cola', 'Fanta', 'Guaraná', 'Soda'] }
    },
    byCat: {
        bolos: { title: 'Fatia ou bolo inteiro?', prefix: '', choices: ['Fatia', 'Bolo inteiro'] },
        tortas: { title: 'Fatia ou torta inteira?', prefix: '', choices: ['Fatia', 'Torta inteira'] }
    }
};
// ===== Detalhes de kits, presentes e Páscoa (abrem no pop-up) =====
const CAKE_FLAVORS = ['Chocolate Intenso', 'Cenoura com Ganache', 'Red Velvet', 'Limão com Frutas Vermelhas', 'Pistache', 'Doce de Leite'];
const EGG_FLAVORS = ['Simples — Chocolate 100%', 'Simples — Chocolate ao Leite', 'Simples — Chocolate Branco', 'Recheado — Chocolate & Avelã', 'Recheado — Chocolate & Doce de Leite', 'Recheado — Chocolate & Pistache', 'Recheado — Chocolate Branco & Morango'];
const BRIGADEIRO_FLAVORS = ['Brigadeiro Gourmet', 'Brigadeiro de Pistache', 'Beijinho de Coco'];
const KIT_DISCLAIMER = 'Imagem ilustrativa. A disposição dos produtos pode variar, mantendo a quantidade e a composição informadas. O rendimento é aproximado e pode variar de acordo com o tamanho das porções.';
const cakeGroup = (what = 'bolo') => ({ type: 'radio', title: `Escolha o sabor do ${what}`, prefix: `Sabor do ${what}: `, choices: CAKE_FLAVORS });
const eggGroups = n => Array.from({ length: n }, (_, k) => ({ type: 'select', title: `Ovo ${k + 1} – Escolha o sabor`, prefix: `Ovo ${k + 1}: `, choices: EGG_FLAVORS }));
const DOCES = ['Brigadeiro Gourmet', 'Brigadeiro de Pistache', 'Beijinho de Coco', 'Bombom de Morango', 'Bombom de Pão de Mel'];
const BOMBONS = ['Bombom de Morango', 'Bombom de Pão de Mel'];
const POTES = ['Mousse de Chocolate', 'Mousse de Maracujá'];

// desc = texto curto do card | items = composição (**negrito**) | short = resumo para sacola/WhatsApp
// serves = rendimento (tile e sacola) | yv = rendimento no detalhe | groups = escolhas obrigatórias
const DETAILS = {
    'Kit de Aniversário': { desc: 'Uma seleção completa para deixar a comemoração ainda mais especial.',
        items: ['**1 bolo de 2,5 kg**, com sabor à escolha do cliente', '**24** brigadeiros/doces Zella', '**6** doces especiais', '**1** embalagem presenteável'],
        short: ['Bolo 2,5 kg', '24 brigadeiros/doces Zella', '6 doces especiais', '1 embalagem presenteável'],
        serves: 'Serve até 25 pessoas', yv: 'até 25 pessoas', groups: [cakeGroup()], disclaimer: KIT_DISCLAIMER },
    'Kit Festa Infantil': { desc: 'Um kit completo e divertido para comemorações infantis.',
        items: ['**1 bolo de 3 kg**, com sabor à escolha do cliente', '**30** docinhos variados', '**12** doces decorados', '**6** brigadeiros gourmet'],
        short: ['Bolo 3 kg', '30 docinhos variados', '12 doces decorados', '6 brigadeiros gourmet'],
        serves: 'Serve até 30 pessoas', yv: 'até 30 pessoas', groups: [cakeGroup()], disclaimer: KIT_DISCLAIMER },
    'Kit Festa Gourmet': { desc: 'Uma seleção sofisticada de sabores Zella para compartilhar.',
        items: ['**1 bolo de 2 kg**, com sabor à escolha do cliente', '**24** brigadeiros gourmet', '**12** bombons ou doces especiais', '**2** potes de doces/cremes Zella'],
        short: ['Bolo 2 kg', '24 brigadeiros gourmet', '12 bombons ou doces especiais', '2 potes de doces/cremes Zella'],
        serves: 'Serve até 20 pessoas', yv: 'até 20 pessoas', groups: [cakeGroup()], disclaimer: KIT_DISCLAIMER },
    'Kit Casamento': { desc: 'Uma seleção especial de doces e sabores para pequenas celebrações.',
        items: ['**1 bolo de 4 kg**, com sabor à escolha do cliente', '**30** doces finos', '**20** brigadeiros gourmet', '**12** bombons especiais', 'Apresentação presenteável'],
        short: ['Bolo 4 kg', '30 doces finos', '20 brigadeiros gourmet', '12 bombons especiais', 'apresentação presenteável'],
        serves: 'Serve até 40 pessoas', yv: 'até 40 pessoas', groups: [cakeGroup()], disclaimer: KIT_DISCLAIMER },
    'Kit Corporativo': { desc: 'Uma opção sofisticada para presentes, eventos e ações corporativas.',
        items: ['**1 bolo de 3 kg**, com sabor à escolha do cliente', '**24** brigadeiros gourmet', '**12** bombons/doces Zella', '**2** caixas presenteáveis'],
        short: ['Bolo 3 kg', '24 brigadeiros gourmet', '12 bombons/doces Zella', '2 caixas presenteáveis'],
        serves: 'Serve até 30 pessoas', yv: 'até 30 pessoas', groups: [cakeGroup()], disclaimer: KIT_DISCLAIMER,
        note: 'Para eventos corporativos com maior número de pessoas, consulte opções personalizadas e quantidades especiais.' },
    'Kit Presente 1': { desc: 'Uma seleção Zella criada para transformar o presente em uma experiência.',
        items: ['**1 mini bolo de aproximadamente 800 g**, com sabor à escolha', '**12** brigadeiros gourmet', '**2** potes de doces/cremes Zella', '**4** doces embalados individualmente'],
        short: ['Mini bolo ~800 g', '12 brigadeiros gourmet', '2 potes de doces/cremes Zella', '4 doces embalados individualmente'],
        serves: 'Serve aprox. 4 a 6 pessoas', yv: 'aproximadamente 4 a 6 pessoas', groups: [cakeGroup('mini bolo')], disclaimer: KIT_DISCLAIMER },
    'Kit Presente 2': { desc: 'Uma seleção completa de sabores Zella para presentear e compartilhar.',
        items: ['**1 bolo de aproximadamente 1,5 kg**, com sabor à escolha', '**12** brigadeiros gourmet', '**6** bombons ou doces especiais', '**2** potes de doces/cremes Zella', 'Itens presenteáveis'],
        short: ['Bolo ~1,5 kg', '12 brigadeiros gourmet', '6 bombons ou doces especiais', '2 potes de doces/cremes Zella', 'itens presenteáveis'],
        serves: 'Serve aprox. 8 a 12 pessoas', yv: 'aproximadamente 8 a 12 pessoas', groups: [cakeGroup()], disclaimer: KIT_DISCLAIMER },
    'Caixa com 6 Brigadeiros': { desc: 'Uma seleção com 6 brigadeiros gourmet zero açúcar.', lead: 'O que vem na caixa',
        items: ['**6** brigadeiros gourmet zero açúcar, em sabores selecionados da Zella'],
        short: ['6 brigadeiros gourmet zero açúcar'],
        serves: 'Ideal para 1 a 2 pessoas', yv: 'ideal para 1 a 2 pessoas', groups: [], disclaimer: KIT_DISCLAIMER },
    'Caixa com 12 Brigadeiros': { desc: 'Uma seleção com 12 brigadeiros gourmet zero açúcar.', lead: 'O que vem na caixa',
        items: ['**12** brigadeiros gourmet zero açúcar, com possibilidade de combinação entre os sabores disponíveis'],
        short: ['12 brigadeiros gourmet zero açúcar'],
        serves: 'Ideal para 2 a 4 pessoas', yv: 'ideal para 2 a 4 pessoas', groups: [], disclaimer: KIT_DISCLAIMER },
    // Páscoa
    'Ovo Chocolate & Avelã': { desc: 'Chocolate zero açúcar com recheio intenso e cremoso de avelã.', lead: 'O que vem no ovo',
        items: ['Ovo de chocolate zero açúcar com **recheio cremoso de chocolate e avelã**, finalizado com avelãs e elementos crocantes.'],
        short: ['Recheio cremoso de chocolate e avelã (1 unidade)'], qty: 'Quantidade: 1 unidade' },
    'Ovo Chocolate & Doce de Leite': { desc: 'Chocolate zero açúcar com recheio cremoso de doce de leite.', lead: 'O que vem no ovo',
        items: ['Ovo de chocolate zero açúcar com **recheio cremoso de chocolate e doce de leite**, com acabamento gourmet.'],
        short: ['Recheio cremoso de chocolate e doce de leite (1 unidade)'], qty: 'Quantidade: 1 unidade' },
    'Ovo Chocolate & Pistache': { desc: 'Chocolate zero açúcar com recheio cremoso de pistache.', lead: 'O que vem no ovo',
        items: ['Ovo de chocolate zero açúcar com **creme de pistache**, finalizado com pistaches e elementos crocantes.'],
        short: ['Creme de pistache (1 unidade)'], qty: 'Quantidade: 1 unidade' },
    'Ovo Chocolate Branco & Morango': { desc: 'Chocolate branco zero açúcar com creme e morango.', lead: 'O que vem no ovo',
        items: ['Ovo de chocolate branco zero açúcar com **recheio cremoso e morangos**, finalizado com pedaços da fruta.'],
        short: ['Recheio cremoso e morangos (1 unidade)'], qty: 'Quantidade: 1 unidade' },
    'Kit Presente Duo': { desc: 'Uma caixa especial com dois sabores da Páscoa Zella.',
        items: ['**2 ovos de Páscoa** zero açúcar, com sabores à escolha entre as opções disponíveis'],
        short: ['2 ovos de Páscoa zero açúcar'],
        serves: 'Serve aprox. 2 a 4 pessoas', yv: 'aproximadamente 2 a 4 pessoas', groups: eggGroups(2), disclaimer: KIT_DISCLAIMER },
    'Kit Presente Trio': { desc: 'Três sabores para presentear ou compartilhar.',
        items: ['**3 ovos de Páscoa** zero açúcar, com sabores à escolha'],
        short: ['3 ovos de Páscoa zero açúcar'],
        serves: 'Serve aprox. 4 a 6 pessoas', yv: 'aproximadamente 4 a 6 pessoas', groups: eggGroups(3), disclaimer: KIT_DISCLAIMER },
    'Kit Presente Seleção Zella': { desc: 'Uma seleção premium com quatro sabores da Páscoa Zella.',
        items: ['**4 ovos de Páscoa** zero açúcar, permitindo combinar diferentes sabores da linha'],
        short: ['4 ovos de Páscoa zero açúcar'],
        serves: 'Serve aprox. 6 a 8 pessoas', yv: 'aproximadamente 6 a 8 pessoas', groups: eggGroups(4), disclaimer: KIT_DISCLAIMER }
};
// Escolha de doces (opcional) por item do kit: at = posição do item em "short"; a soma deve fechar a quantidade do kit
const addMix = (name, at, choices) => {
    const d = DETAILS[name], t = d.short[at], total = parseInt(t, 10);
    d.groups.push({ type: 'mix', optional: true, at, total, unit: t.replace(/^\d+\s*/, ''), title: `Escolha os ${t}`, choices });
};
addMix('Kit de Aniversário', 1, DOCES); addMix('Kit de Aniversário', 2, DOCES);
addMix('Kit Festa Infantil', 1, DOCES); addMix('Kit Festa Infantil', 2, DOCES); addMix('Kit Festa Infantil', 3, BRIGADEIRO_FLAVORS);
addMix('Kit Festa Gourmet', 1, BRIGADEIRO_FLAVORS); addMix('Kit Festa Gourmet', 2, DOCES); addMix('Kit Festa Gourmet', 3, POTES);
addMix('Kit Casamento', 1, DOCES); addMix('Kit Casamento', 2, BRIGADEIRO_FLAVORS); addMix('Kit Casamento', 3, BOMBONS);
addMix('Kit Corporativo', 1, BRIGADEIRO_FLAVORS); addMix('Kit Corporativo', 2, DOCES);
addMix('Kit Presente 1', 1, BRIGADEIRO_FLAVORS); addMix('Kit Presente 1', 2, POTES); addMix('Kit Presente 1', 3, DOCES);
addMix('Kit Presente 2', 1, BRIGADEIRO_FLAVORS); addMix('Kit Presente 2', 2, DOCES); addMix('Kit Presente 2', 3, POTES);
addMix('Caixa com 6 Brigadeiros', 0, BRIGADEIRO_FLAVORS);
addMix('Caixa com 12 Brigadeiros', 0, BRIGADEIRO_FLAVORS);
// kits e caixas: cotação final feita pela loja
Object.values(DETAILS).forEach(d => { if (d.disclaimer) d.quote = true; });
const esc = t => t.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const specFor = p => {
    if (DETAILS[p.name]) return DETAILS[p.name];
    const set = OPTION_SETS.byName[p.name] || OPTION_SETS.byCat[p.cat];
    return set ? { groups: [{ type: 'radio', ...set }] } : null;
};
const rich = t => t.replace(/\*\*(.+?)\*\*/g, '<strong class="text-burgundy font-semibold">$1</strong>');

const optOverlay = document.getElementById('opt-overlay');
const optModal = document.getElementById('opt-modal');
const optScroll = document.getElementById('opt-scroll');
const optMedia = document.getElementById('opt-media');
const optBody = document.getElementById('opt-body');
const optHint = document.getElementById('opt-hint');
const optConfirm = document.getElementById('opt-confirm');
let optPending = null, optTrigger = null, optState = [];

const REQ = '<span class="text-burgundy" aria-hidden="true">*</span>';
function groupHTML(g, gi) {
    if (g.type === 'select') {
        return `<div class="mt-4"><label for="opt-sel-${gi}" class="block text-sm font-semibold text-charcoal mb-1.5">${g.title} ${REQ}</label>
            <select id="opt-sel-${gi}" data-g="${gi}" class="w-full rounded-xl border border-cream-border bg-cream-light px-4 py-3 text-sm text-charcoal">
            <option value="">Selecione o sabor…</option>${g.choices.map((c, k) => `<option value="${k}">${c}</option>`).join('')}</select></div>`;
    }
    if (g.type === 'mix') {
        return `<fieldset class="mt-5 border-0 p-0 m-0"><legend class="w-full flex items-center justify-between gap-3 text-sm font-semibold text-charcoal mb-2"><span>${g.title}</span><span id="opt-mix-count-${gi}" class="text-xs font-medium text-burgundy">0 de ${g.total}</span></legend>
            <div class="grid gap-2">${g.choices.map((c, k) => `
                <div class="flex items-center justify-between gap-3 px-4 py-2 rounded-xl border border-cream-border bg-cream-light text-sm text-charcoal"><span>${c}</span>
                    <div class="inline-flex items-center border border-cream-border rounded-full bg-cream">
                        <button type="button" data-mix="${gi}" data-k="${k}" data-d="-1" aria-label="Diminuir ${c}" class="w-8 h-8 text-burgundy">−</button>
                        <span id="opt-mix-${gi}-${k}" class="w-7 text-center font-semibold">0</span>
                        <button type="button" data-mix="${gi}" data-k="${k}" data-d="1" aria-label="Aumentar ${c}" class="w-8 h-8 text-burgundy">+</button>
                    </div></div>`).join('')}</div>
            ${g.optional ? '<p class="text-xs text-charcoal/70 mt-2">Opcional: escolha quantos quiser. O que ficar em branco, a atendente combina com você.</p>' : ''}</fieldset>`;
    }
    return `<fieldset class="mt-5 border-0 p-0 m-0"><legend class="text-sm font-semibold text-charcoal mb-2">${g.title} ${REQ}</legend>
        <div class="grid sm:grid-cols-2 gap-2">${g.choices.map((c, k) => `
            <label class="opt-choice flex items-center gap-3 px-4 py-3 rounded-xl border border-cream-border bg-cream-light cursor-pointer text-sm text-charcoal">
                <input type="radio" name="opt-g${gi}" data-g="${gi}" value="${k}" class="accent-[#581825] w-4 h-4"><span>${c}</span>
            </label>`).join('')}</div></fieldset>`;
}
function tile(icon, text) {
    return `<div class="flex flex-col items-center justify-center gap-1.5 text-center rounded-xl bg-burgundy/5 border border-gold/30 px-2 py-3 text-[11px] sm:text-xs font-semibold text-burgundy leading-tight"><i data-lucide="${icon}" class="w-5 h-5 text-gold-dark"></i><span>${text}</span></div>`;
}
function openOptModal(p, spec, trigger) {
    optPending = { p, spec };
    optTrigger = trigger || null;
    const groups = spec.groups || [];
    optState = groups.map(g => g.type === 'mix' ? g.choices.map(() => 0) : null);
    optMedia.innerHTML = spec.items && IMG[p.img] ? `<img src="${IMG[p.img]}" alt="${p.name} — imagem ilustrativa" class="w-full h-44 sm:h-56 object-cover">` : '';
    const lead = spec.lead || 'O que vem no kit';
    let h = `<h2 id="opt-name" class="font-serif-title font-bold text-2xl text-burgundy leading-tight pr-8">${p.name}</h2>`;
    if (spec.desc) h += `<p class="text-sm text-charcoal/80 mt-1">${spec.desc}</p>`;
    if (spec.items) {
        const second = spec.serves || spec.qty;
        h += `<div class="grid ${groups.length && second ? 'grid-cols-3' : 'grid-cols-2'} gap-2 mt-4">${tile('package', lead)}${second ? tile(spec.qty ? 'egg' : 'users', second) : ''}${groups.length ? tile('sparkles', groups.some(g => g.type === 'mix') ? (groups.some(g => g.type !== 'mix') ? 'Escolha sabores e doces' : 'Escolha os sabores') : 'Escolha seu sabor') : ''}</div>`;
        h += `<h3 class="font-serif-title font-bold text-lg text-burgundy mt-5 mb-2">${lead}</h3>
            <ul class="space-y-2 text-sm text-charcoal/90">${spec.items.map(t => `<li class="flex items-start gap-2.5"><span class="mt-0.5 w-5 h-5 shrink-0 rounded-full bg-gold/20 text-gold-dark text-[11px] font-bold flex items-center justify-center">✓</span><span>${rich(t)}</span></li>`).join('')}</ul>`;
        if (spec.yv) h += `<p class="mt-3 text-sm text-charcoal/90"><strong class="text-burgundy font-semibold">Rendimento:</strong> ${spec.yv}</p>`;
        if (spec.note) h += `<p class="mt-3 text-xs italic text-charcoal/80 bg-gold/10 border border-gold/30 rounded-lg px-3 py-2">${spec.note}</p>`;
    }
    if (spec.quote) h += `<div class="mt-5 rounded-xl bg-gold/10 border border-gold/40 px-4 py-4 text-xs text-charcoal/90">
        <div class="flex items-center gap-2 text-sm font-semibold text-burgundy"><i data-lucide="message-circle" class="w-4 h-4 text-gold-dark"></i>Como funciona a encomenda</div>
        <ol class="mt-2 space-y-1.5 list-decimal pl-5">
            <li>${groups.length ? 'Escolha o sabor' + (groups.some(g => g.type === 'mix') ? ' e os doces' : '') + ' abaixo e adicione à sacola.' : 'Adicione à sacola.'}</li>
            <li>Envie o pedido pelo WhatsApp.</li>
            <li><strong class="text-burgundy">Uma atendente faz o seu orçamento</strong>, confirma disponibilidade e prazo e explica como funciona a encomenda.</li>
        </ol></div>`;
    if (spec.quote && groups.length) h += `<h3 class="font-serif-title font-bold text-lg text-burgundy mt-6">Monte o seu kit</h3><p class="text-xs text-charcoal/75 mt-0.5">${groups.some(g => g.type === 'mix') ? 'Escolha o sabor e, se quiser, os doces de cada item. O que ficar em branco, a atendente combina com você.' : 'Escolha o sabor abaixo.'}</p>`;
    h += groups.map(groupHTML).join('');
    if (spec.quote) h += `<div class="mt-5"><label for="opt-obs" class="block text-sm font-semibold text-charcoal mb-1.5">Observações (opcional)</label><textarea id="opt-obs" rows="2" maxlength="200" placeholder="Ex.: tema da festa, dedicatória, restrições alimentares…" class="w-full rounded-xl border border-cream-border bg-cream-light px-4 py-3 text-sm text-charcoal"></textarea></div>`;
    if (spec.disclaimer) h += `<p class="mt-6 text-[11px] leading-relaxed text-charcoal/65 border-t border-cream-border pt-3">${spec.disclaimer}</p>`;
    optBody.innerHTML = h;
    lucide.createIcons();
    optScroll.scrollTop = 0;
    optModal.removeAttribute('inert');
    optOverlay.classList.remove('opacity-0', 'pointer-events-none');
    optModal.classList.remove('opacity-0', 'pointer-events-none');
    optRefresh();
    const first = optBody.querySelector('input, select');
    (first || document.getElementById('opt-close')).focus({ preventScroll: true });
}
function closeOptModal() {
    optModal.setAttribute('inert', '');
    optOverlay.classList.add('opacity-0', 'pointer-events-none');
    optModal.classList.add('opacity-0', 'pointer-events-none');
    optPending = null;
    if (optTrigger && document.contains(optTrigger)) optTrigger.focus();
    optTrigger = null;
}
function optRefresh() {
    if (!optPending) return;
    let hint = '', info = '';
    (optPending.spec.groups || []).forEach((g, gi) => {
        if (g.type === 'mix') {
            const sum = optState[gi].reduce((a, b) => a + b, 0);
            document.getElementById(`opt-mix-count-${gi}`).textContent = `${sum} de ${g.total}`;
            optBody.querySelectorAll(`[data-mix="${gi}"][data-d="1"]`).forEach(b => b.disabled = sum >= g.total);
            if (!info && sum !== 0 && sum < g.total) info = `Faltam ${g.total - sum} ${g.unit}: a atendente completa com você`;
        } else if (!hint && optState[gi] === null) hint = `Obrigatório: ${g.title}`;
    });
    optHint.textContent = hint || info;
    optConfirm.disabled = !!hint;
}
optBody.addEventListener('change', e => {
    const el = e.target.closest('[data-g]'); if (!el || !optPending) return;
    optState[+el.dataset.g] = el.value === '' ? null : +el.value;
    optRefresh();
});
optBody.addEventListener('click', e => {
    const b = e.target.closest('[data-mix]'); if (!b || !optPending) return;
    const gi = +b.dataset.mix, k = +b.dataset.k, g = optPending.spec.groups[gi];
    const counts = optState[gi], sum = counts.reduce((a, c) => a + c, 0), d = +b.dataset.d;
    if (d > 0 && sum >= g.total) return;
    counts[k] = Math.max(0, counts[k] + d);
    document.getElementById(`opt-mix-${gi}-${k}`).textContent = counts[k];
    optRefresh();
});
optConfirm.addEventListener('click', () => {
    if (!optPending || optConfirm.disabled) return;
    const { p, spec } = optPending;
    const lines = spec.short ? [...spec.short] : [], head = [];
    (spec.groups || []).forEach((g, gi) => {
        if (g.type === 'mix') {
            const picked = g.choices.map((c, k) => optState[gi][k] ? `${optState[gi][k]}x ${c}` : null).filter(Boolean).join(', ');
            if (spec.short && g.at != null) { const sum = optState[gi].reduce((a, b) => a + b, 0); lines[g.at] = picked ? `${lines[g.at]}: ${picked}${sum < g.total ? ' + restante a definir com a atendente' : ''}` : `${lines[g.at]} (a definir com a atendente)`; }
            else head.push(picked ? g.prefix + picked : g.emptyText);
        } else head.push(g.prefix + g.choices[optState[gi]]);
    });
    const obsEl = document.getElementById('opt-obs');
    const obs = obsEl ? esc(obsEl.value.replace(/\s+/g, ' ').replace(/ · /g, ' - ').trim()) : '';
    const detail = spec.short
        ? [lines[0], ...head, ...lines.slice(1), spec.serves, obs && `Obs.: ${obs}`].filter(Boolean).join(' · ')
        : head.join(' · ');
    closeOptModal();
    addToCart(p.name, p.price, detail);
});
document.getElementById('opt-cancel').addEventListener('click', closeOptModal);
document.getElementById('opt-close').addEventListener('click', closeOptModal);
optOverlay.addEventListener('click', closeOptModal);
optModal.addEventListener('keydown', e => {
    if (e.key !== 'Tab') return;
    const f = [...optModal.querySelectorAll('input, select, textarea, button:not([disabled])')].filter(x => x.offsetParent !== null);
    if (!f.length) return;
    const first = f[0], last = f[f.length - 1];
    if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
});

function renderMenu() {
    grid.innerHTML = MENU_CATS.map(([key, label], idx) => {
        const items = MENU.map((p, i) => ({ p, i })).filter(({ p }) => p.cat === key);
        if (!items.length) return '';
        const divider = idx === 0 ? '' : '<div class="max-w-xs mx-auto my-12 sm:my-16 flex items-center gap-3 text-gold/60" aria-hidden="true"><span class="flex-1 h-px bg-gold/30"></span><span class="text-xs tracking-[0.3em]">•</span><span class="flex-1 h-px bg-gold/30"></span></div>';
        return `${divider}<section id="cat-${key}" class="scroll-mt-40">
            <div class="flex items-center justify-center gap-3 mb-8">
                <i data-lucide="${ICON[key]}" class="w-5 h-5 text-gold-dark"></i>
                <h3 class="font-serif-title text-2xl sm:text-3xl font-bold text-burgundy text-center">${label}</h3>
            </div>
            ${CAT_NOTE[key] || ''}
            <div class="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
                ${items.map(({ p, i }) => card(p, i)).join('')}
            </div>
        </section>`;
    }).join('');
    lucide.createIcons();
}

function goToCat(key) {
    const el = document.getElementById(`cat-${key}`);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

const tabPill = document.createElement('span');
tabPill.id = 'tab-pill';
tabPill.className = 'absolute top-0 left-0 h-full rounded-full bg-burgundy transition-all duration-300 ease-out pointer-events-none';
tabPill.style.width = '0px';
tabPill.style.opacity = '0';
tabs.appendChild(tabPill);
tabs.insertAdjacentHTML('beforeend', MENU_CATS.map(([k, l]) => `<button data-category="${k}" class="filter-btn relative z-10 px-5 py-2 rounded-full text-sm font-medium border border-transparent text-burgundy hover:text-burgundy-light transition-colors duration-300" aria-pressed="false">${l}</button>`).join(''));

function movePill(btn) {
    if (!btn) { tabPill.style.opacity = '0'; return; }
    tabPill.style.left = btn.offsetLeft + 'px';
    tabPill.style.top = btn.offsetTop + 'px';
    tabPill.style.width = btn.offsetWidth + 'px';
    tabPill.style.height = btn.offsetHeight + 'px';
    tabPill.style.opacity = '1';
}
function setActiveTab(key) {
    tabs.querySelectorAll('button[data-category]').forEach(b => {
        const on = b.dataset.category === key;
        b.setAttribute('aria-pressed', on);
        b.classList.toggle('text-cream', on);
        b.classList.toggle('text-burgundy', !on);
    });
    movePill(tabs.querySelector(`[data-category="${key}"]`));
}
tabs.addEventListener('click', e => { const b = e.target.closest('button[data-category]'); if (b) goToCat(b.dataset.category); });
window.addEventListener('resize', () => movePill(tabs.querySelector('button[aria-pressed="true"]')));

function syncFilterBarOffset() {
    const h = document.getElementById('main-header').offsetHeight;
    document.getElementById('filter-bar').style.top = h + 'px';
}
syncFilterBarOffset();
window.addEventListener('resize', syncFilterBarOffset);
grid.addEventListener('click', e => {
    const b = e.target.closest('[data-add]'); if (!b) return;
    const p = MENU[b.dataset.add];
    const spec = specFor(p);
    if (spec) openOptModal(p, spec, b); else addToCart(p.name, p.price, p.note);
});
document.querySelectorAll('[data-filter]').forEach(a => a.addEventListener('click', (e) => {
    e.preventDefault(); goToCat(a.dataset.filter); mobileMenu.classList.add('hidden'); mobileMenuBtn.setAttribute('aria-expanded', 'false');
}));
document.addEventListener('keydown', e => { if (e.key === 'Escape') { if (optPending) closeOptModal(); else closeCart(); } });

renderMenu();

let scrollSpyTicking = false;
function updateActiveFromScroll() {
    scrollSpyTicking = false;
    const filterBar = document.getElementById('filter-bar');
    const refLine = filterBar.getBoundingClientRect().bottom + 8;
    let current = MENU_CATS[0][0];
    for (const [key] of MENU_CATS) {
        const el = document.getElementById(`cat-${key}`);
        if (!el) continue;
        if (el.getBoundingClientRect().top <= refLine) current = key;
    }
    setActiveTab(current);
}
window.addEventListener('scroll', () => {
    if (!scrollSpyTicking) { scrollSpyTicking = true; requestAnimationFrame(updateActiveFromScroll); }
}, { passive: true });
window.addEventListener('resize', updateActiveFromScroll);
updateActiveFromScroll();
renderCart();
