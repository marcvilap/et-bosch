import gsap from 'gsap'
import ScrollSmoother from 'gsap/ScrollSmoother'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollSmoother, ScrollTrigger)

const smoother = ScrollSmoother.create({ smooth: 1.25, normalizeScroll: true })

document.querySelectorAll<HTMLDialogElement>('dialog[popover]').forEach(dialog => {
	dialog.addEventListener('toggle', event => {
		smoother.paused(event.newState === 'open')
	})
})

gsap.utils.toArray<HTMLElement>('[data-parallax-y]').forEach(element => {
	const offset = Number(element.dataset.parallaxY || 6)
	gsap.fromTo(element, { y: `${offset}rem` }, { y: `${offset * -1}rem`, ease: 'none', scrollTrigger: { trigger: element.parentElement, scrub: true } })
})

gsap.utils.toArray<HTMLElement>('[data-img-zoom-in]').forEach(element => {
	const targets = element.querySelectorAll('img,svg')
	gsap.from(targets, {
		scale: 0.8,
		opacity: 0,
		duration: 0.8,
		stagger: 0.1,
		ease: 'power2.out',
		scrollTrigger: { trigger: element, start: 'top 80%', toggleActions: 'play none none reverse' },
	})
})

gsap.utils.toArray<HTMLElement>('[data-txt-fade-up]').forEach(element => {
	const targets = element.querySelectorAll('h1,h2,h3,h4,p')
	gsap.from(targets, {
		y: 128,
		opacity: 0,
		duration: 0.8,
		stagger: 0.1,
		ease: 'power2.out',
		scrollTrigger: { trigger: element, start: 'top 80%', toggleActions: 'play none none reverse' },
	})
})
