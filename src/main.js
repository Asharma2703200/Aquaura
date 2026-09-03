import './style.css'

const assetBase = import.meta.env?.BASE_URL ?? '../'

document.querySelector('#app').innerHTML = `
<header class="site-header"><a class="brand" href="#top" aria-label="Aquara home"><span class="drop-mark">♢</span><span>AQUAURA</span></a><nav><a href="#story">Our story</a><a href="#services">Services</a><a href="#planet">Our planet</a><a href="#sizes">Sizes</a><a href="#contact">Contact</a></nav><button class="header-button quick-open" type="button">Order now <span>↗</span></button></header>
<main id="top">
  <section class="hero" id="story"><div class="bottle-scene"><img src="${assetBase}combine.png" alt="Aquaura natural mineral water bottles and product details"></div></section>
  <section class="story"><p class="kicker">THE AQUAURA STANDARD</p><h2>Pure, because<br><em>nature knows best.</em></h2><p>Born in the pristine Himalayas and bottled at source, Aquaura brings a naturally balanced taste to every table.</p><div class="eco-note"><span>↻</span><div><strong>Better for the planet</strong><small>Our bottles are reusable and easily recyclable, so great water leaves a lighter footprint.</small></div></div><a href="#contact" class="outline-button">Discover our source <span>↗</span></a></section>
  <section class="eco-section business-section" id="planet"><div class="business-intro"><p class="kicker">OUR PLANET PROMISE</p><h2>Good water.<br><em>Better bottle.</em></h2><p>Every Aquaura bottle is designed to be part of a longer life, not a single-use moment.</p></div><div class="business-cards"><article><span>01</span><h3>Reusable by design</h3><p>Use it again and again at home, at work, or around the table. A bottle made to keep in the rotation.</p></article><article><span>02</span><h3>Easy to recycle</h3><p>When it reaches the end of its useful life, the bottle can be sorted and recycled with confidence.</p></article><article><span>03</span><h3>Less waste, more value</h3><p>Longer use means fewer replacements and a more thoughtful choice for everyday hydration.</p></article></div></section>
  <section class="range-section" id="sizes"><div class="range-copy"><p class="kicker">THE COMPLETE RANGE</p><h2>Find your<br><em>perfect pour.</em></h2><p>Three considered sizes, made for everyday refreshment, shared tables, and everything in between.</p><div class="size-picker"><button class="size-option active" data-size="250ml">250ml</button><button class="size-option" data-size="500ml">500ml</button><button class="size-option" data-size="1L">1L</button></div><p class="size-detail" aria-live="polite">Compact and convenient for welcome trays, meetings, and on-the-go moments.</p><div class="range-stats"><span><b>100%</b><small>Natural mineral water</small></span><span><b>3</b><small>Sizes for every moment</small></span></div></div><div class="range-image"><img src="${assetBase}seperate.png" alt="Aquaura 250ml, 500ml and 1L bottle sizes"></div></section>
  <section class="services" id="services"><div class="services-heading"><p class="kicker">SERVICES WE PROVIDE</p><h2>Water that<br><em>carries your name.</em></h2><p>From private celebrations to hotel tables, we make every bottle feel like it belongs there.</p></div><div class="service-list"><article><span class="service-number">01</span><div><h3>Customized bottle names</h3><p>Put your brand, event, or personal name on every bottle with elegant custom labels made for your occasion.</p><a href="#contact" class="service-action" data-service="Customized bottle names">Create your label <span>↗</span></a></div></article><article><span class="service-number">02</span><div><h3>Pure mineral water</h3><p>Healthy, refreshing water with naturally occurring minerals and a clean taste you can feel good about serving.</p><a href="#contact" class="service-action" data-service="Pure mineral water">Learn about our water <span>↗</span></a></div></article><article><span class="service-number">03</span><div><h3>Business &amp; event supply</h3><p>Reliable quantities and flexible delivery for hotels, cafés, offices, weddings, meetings, and special events.</p><a href="#contact" class="service-action" data-service="Business &amp; event supply">Plan your supply <span>↗</span></a></div></article></div></section>
  <section class="business-section"><div class="business-intro"><p class="kicker">MADE FOR THE WAY BUSINESS MOVES</p><h2>A better bottle<br>for every <em>occasion.</em></h2><p>From first impression to final sip, Aquaura helps your business serve something memorable.</p></div><div class="business-cards"><article><span>01</span><h3>Brand presence</h3><p>Turn every table into a quiet brand moment with your name beautifully presented.</p></article><article><span>02</span><h3>Reliable supply</h3><p>Clear quantities, dependable delivery, and a team that keeps your plans moving.</p></article><article><span>03</span><h3>Made to return</h3><p>Reusable and easily recyclable bottles help reduce waste while keeping every serve beautifully considered.</p></article></div></section>
  <section class="faq-section"><div><p class="kicker">GOOD TO KNOW</p><h2>Questions,<br><em>answered.</em></h2></div><div class="faq-list"><details open><summary>Can I add my own name or logo?</summary><p>Yes. We create custom labels for personal names, brands, celebrations, and special campaigns.</p></details><details><summary>Which bottle sizes are available?</summary><p>Our range includes 250ml, 500ml, and 1L bottles. We can help you choose the right mix.</p></details><details><summary>How do I request a callback?</summary><p>Open the “Let’s connect” button, choose “Request a callback,” and share your preferred contact details.</p></details></div></section>
  <section class="contact-band" id="contact"><div><p class="kicker">BRING AQUAURA TO YOUR TABLE</p><h2>Make every<br><em>moment pure.</em></h2></div><div class="contact-links"><p>Ready when you are.</p><button class="dark-button quick-open" type="button">Talk to our team <span>↗</span></button></div></section>
</main><footer><div class="footer-brand"><a class="brand" href="#top"><span class="drop-mark">♢</span><span>AQUAURA</span></a><p>Pure by nature.<br>Made for every moment.</p></div><div class="footer-column"><span>Explore</span><a href="#story">Our story</a><a href="#services">Services</a><a href="#sizes">Our range</a></div><div class="footer-column"><span>Start a conversation</span><button class="footer-action quick-open" data-service="Request a callback" type="button">Request a callback <b>↗</b></button><button class="footer-action quick-open" data-service="Customized bottle names" type="button">Ask about custom labels <b>↗</b></button></div><div class="footer-bottom"><span>© 2026 AQUAURA</span><span>PURE BY NATURE</span><span>Designed for better hydration</span></div></footer><button class="connect-launcher" type="button" aria-expanded="false" aria-controls="connect-menu"><span class="launcher-dot"></span><span>Let's connect</span><b>↗</b></button><div class="connect-menu" id="connect-menu" aria-hidden="true"><div><p class="kicker">QUICK CONTACT</p><strong>Choose how to connect</strong></div><a href="mailto:aakash27032000@gmail.com"><span class="contact-icon">@</span><span><b>Email</b><small>Send us a message</small></span><i>↗</i></a><a href="tel:8619832063"><span class="contact-icon">⌕</span><span><b>Phone</b><small>Speak with our team</small></span><i>↗</i></a><a href="https://wa.me/918619832063" target="_blank" rel="noreferrer"><span class="contact-icon">◌</span><span><b>WhatsApp</b><small>Chat with us directly</small></span><i>↗</i></a></div><dialog class="enquiry-dialog"><button class="dialog-close" aria-label="Close enquiry">×</button><p class="kicker">START YOUR ENQUIRY</p><h2>Let's make it<br><em>personal.</em></h2><form><label>How can we help?<select name="service"><option>Customized bottle names</option><option>Pure mineral water</option><option>Business &amp; event supply</option><option>Request a callback</option></select></label><label>Your name<input name="name" placeholder="Your name" required></label><label class="contact-label">Phone number<input name="contact" type="tel" placeholder="Your phone or WhatsApp number" required></label><button class="dark-button" type="submit">Send enquiry <span>↗</span></button><p class="dialog-message" role="status"></p></form></dialog>`

const enquiryDialog = document.querySelector('.enquiry-dialog')
const enquiryForm = enquiryDialog.querySelector('form')
document.querySelectorAll('.service-action').forEach((action) => action.addEventListener('click', () => {
  enquiryForm.elements.service.value = action.dataset.service
  enquiryForm.reset()
  enquiryForm.elements.service.value = action.dataset.service
  enquiryDialog.showModal()
}))
document.querySelector('.dialog-close').addEventListener('click', () => enquiryDialog.close())
document.querySelectorAll('.quick-open').forEach((button) => button.addEventListener('click', () => {
  if (button.dataset.service) enquiryForm.elements.service.value = button.dataset.service
  enquiryDialog.showModal()
}))
const connectMenu = document.querySelector('.connect-menu')
const closeConnectMenu = () => {
  connectMenu.classList.remove('is-open')
  document.querySelector('.connect-launcher').setAttribute('aria-expanded', 'false')
  connectMenu.setAttribute('aria-hidden', 'true')
}
document.querySelector('.connect-launcher').addEventListener('click', (event) => {
  event.stopPropagation()
  const isOpen = connectMenu.classList.toggle('is-open')
  document.querySelector('.connect-launcher').setAttribute('aria-expanded', String(isOpen))
  connectMenu.setAttribute('aria-hidden', String(!isOpen))
})
connectMenu.addEventListener('click', (event) => event.stopPropagation())
document.addEventListener('click', closeConnectMenu)
document.addEventListener('scroll', closeConnectMenu, { passive: true })
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') closeConnectMenu()
})
document.querySelectorAll('a:not(.connect-menu a), .quick-open').forEach((element) => element.addEventListener('click', closeConnectMenu))
enquiryForm.elements.service.addEventListener('change', () => {
  const isCallback = enquiryForm.elements.service.value === 'Request a callback'
  enquiryForm.querySelector('.contact-label').firstChild.textContent = isCallback ? 'Callback phone number' : 'Phone number'
  enquiryForm.querySelector('.dark-button').innerHTML = isCallback ? 'Request callback <span>↗</span>' : 'Send enquiry <span>↗</span>'
})
const sizeDetails = { '250ml': 'Compact and convenient for welcome trays, meetings, and on-the-go moments.', '500ml': 'The everyday choice for desks, dining tables, and shared experiences.', '1L': 'Made to anchor tables, events, and generous moments of hospitality.' }
document.querySelectorAll('.size-option').forEach((option) => option.addEventListener('click', () => {
  document.querySelectorAll('.size-option').forEach((item) => item.classList.remove('active'))
  option.classList.add('active')
  document.querySelector('.size-detail').textContent = sizeDetails[option.dataset.size]
}))
enquiryForm.addEventListener('submit', (event) => {
  event.preventDefault()
  enquiryForm.querySelector('.dialog-message').textContent = 'Thank you. We will be in touch shortly.'
})

