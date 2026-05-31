import './style.css'

const starter = {
  name: 'Vertruvo',
  badge: 'Fork-ready SaaS starter',
  headline: 'Turn this repository into the product you want to launch next.',
  summary:
    'The source repository referenced in the issue is not available here, so this fork now ships as a neutral, buildable shell that is ready for your own positioning, features, and workflows.',
  pillars: [
    {
      title: 'Product framing',
      description:
        'Swap in your market, customer, and value proposition without untangling product-specific copy.',
    },
    {
      title: 'Build-ready stack',
      description:
        'Use the lightweight Vite + TypeScript setup as the foundation for dashboards, portals, or AI-assisted SaaS experiences.',
    },
    {
      title: 'Launch checklist',
      description:
        'Start with a clear shell, then layer in auth, billing, data models, and the feature set that fits this fork.',
    },
  ],
  checklist: [
    'Rename the starter to your new product.',
    'Replace the placeholder pillars with your first core workflows.',
    'Add the integrations, auth, and billing flows your SaaS needs.',
  ],
}

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <main class="shell">
    <section class="hero">
      <p class="badge">${starter.badge}</p>
      <h1>${starter.headline}</h1>
      <p class="summary">${starter.summary}</p>

      <div class="hero-actions">
        <a class="button primary" href="https://vite.dev/" target="_blank" rel="noreferrer">Build with Vite</a>
        <a class="button secondary" href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer">TypeScript docs</a>
      </div>
    </section>

    <section class="grid" aria-label="Starter pillars">
      ${starter.pillars
        .map(
          (pillar) => `
            <article class="card">
              <p class="eyebrow">${starter.name}</p>
              <h2>${pillar.title}</h2>
              <p>${pillar.description}</p>
            </article>
          `,
        )
        .join('')}
    </section>

    <section class="card checklist" aria-labelledby="launch-checklist-title">
      <div>
        <p class="eyebrow">Next steps</p>
        <h2 id="launch-checklist-title">Keep the shell, decide the SaaS later.</h2>
      </div>
      <ol>
        ${starter.checklist.map((item) => `<li>${item}</li>`).join('')}
      </ol>
      <p class="footnote">Customize <code>src/main.ts</code> and <code>src/style.css</code> to define the business.</p>
    </section>
  </main>
`
