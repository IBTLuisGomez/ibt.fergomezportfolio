        // Lógica de navegación entre pestañas
        function switchTab(tabId, btn) {
            document.querySelectorAll('.view-section').forEach(section => {
                section.classList.remove('active');
            });
            document.querySelectorAll('.tab-btn').forEach(btn => {
                btn.classList.remove('active');
            });
            document.getElementById(tabId).classList.add('active');
            if (btn) btn.classList.add('active');
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        // Sistema de Idioma
        function setLanguage(lang) {
            document.body.className = `lang-${lang}`;
            document.documentElement.lang = lang;
            document.querySelectorAll('.lang-btn').forEach(btn => {
                btn.classList.remove('active');
                if(btn.innerText.toLowerCase() === lang) {
                    btn.classList.add('active');
                }
            });
            
            const modal = document.getElementById('detailModal');
            if(modal.classList.contains('show') && currentCardElement) {
                updateModalContent(currentCardElement, lang);
            }
        }

        // Lógica del Modal
        let currentCardElement = null;

        function openModal(cardElement) {
            currentCardElement = cardElement;
            const currentLang = document.body.className.split('-')[1] || 'es'; 
            updateModalContent(cardElement, currentLang);
            
            const modal = document.getElementById('detailModal');
            modal.querySelector('.modal-content').classList.toggle('wide', cardElement.classList.contains('showcase-card'));
            modal.classList.add('show');
            document.body.style.overflow = 'hidden';
        }

        function updateModalContent(cardElement, lang) {
            const titleSpan = cardElement.querySelector(`h3 span[data-lang="${lang}"], h4 span[data-lang="${lang}"]`);
            const title = titleSpan ? titleSpan.innerText : (cardElement.querySelector('h3, h4') || {innerText:''}).innerText;
            
            const detailsDiv = cardElement.querySelector(`.hidden-details div[data-lang="${lang}"]`);
            const detailsHtml = detailsDiv ? detailsDiv.innerHTML : cardElement.querySelector('.hidden-details').innerHTML;

            document.getElementById('modalTitle').innerText = title;
            document.getElementById('modalBody').innerHTML = detailsHtml;
        }

        function closeModal() {
            const modal = document.getElementById('detailModal');
            modal.classList.remove('show');
            document.body.style.overflow = 'auto';
            currentCardElement = null;
        }

        function closeModalOnOutsideClick(event) {
            const modal = document.getElementById('detailModal');
            if (event.target === modal) {
                closeModal();
            }
        }
        // Cerrar modal con Escape
        document.addEventListener('keydown', e => {
            if (e.key === 'Escape' && document.getElementById('detailModal').classList.contains('show')) closeModal();
        });

        // Carrusel Antes / Después (delegado: funciona dentro del modal)
        (function(){
            function go(c,n){const sl=c.querySelectorAll('.ba-slide'),dt=c.querySelectorAll('.ba-dot');n=(n+sl.length)%sl.length;c.dataset.i=n;
                sl.forEach((x,k)=>x.classList.toggle('active',k===n));dt.forEach((x,k)=>{x.classList.toggle('active',k===n);x.setAttribute('aria-selected',k===n)});
                const cur=c.querySelector('.ba-cur');if(cur)cur.textContent=n+1;}
            document.addEventListener('click',function(e){const b=e.target.closest('.ba-carousel [data-go], .ba-carousel [data-dir]');if(!b)return;e.stopPropagation();
                const c=b.closest('.ba-carousel');const i=+c.dataset.i||0;go(c,b.dataset.go!==undefined?+b.dataset.go:i+(+b.dataset.dir));});
            let x0=null;document.addEventListener('touchstart',e=>{if(e.target.closest('.ba-slides'))x0=e.touches[0].clientX;},{passive:true});
            document.addEventListener('touchend',e=>{if(x0===null)return;const c=e.target.closest('.ba-carousel');const dx=e.changedTouches[0].clientX-x0;x0=null;if(c&&Math.abs(dx)>50)go(c,(+c.dataset.i||0)+(dx<0?1:-1));},{passive:true});
        })();

        // Tarjetas de "Archivos de Proyectos": abren el detalle del proyecto enlazado
        function openLinked(name){
            const card=[...document.querySelectorAll('.showcase-card')].find(c=>{const t=c.querySelector('h3 span[data-lang="es"]');return t&&t.textContent.trim()===name;});
            if(card) openModal(card);
        }
