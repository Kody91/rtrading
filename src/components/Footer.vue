<template>
  <div class="page">
    <header class="hero">
      <div class="container">
        <p class="eyebrow">Join Our Community</p>
        <h1>Admissions</h1>
        <div class="line"></div>
      </div>
    </header>

    <main class="container main">
      <section class="admission-cards">
        <article class="card">
          <div class="card-icon">🗏</div>
          <h2>Admission Process</h2>
          <ol class="step-list">
            <li>Submit online application form via the student portal.</li>
            <li>Take the CPU Placement Examination.</li>
            <li>Undergo interview with department heads (if applicable).</li>
            <li>Pay enrollment fees and register for classes.</li>
          </ol>
          <a href="#">Learn more ➜</a>
        </article>

        <article class="card">
          <div class="card-icon document-icon">🗐</div>
          <h2>Requirements</h2>
          <ul class="check-list">
            <li>Original Form 138 (Report Card)</li>
            <li>Certificate of Good Moral Character</li>
            <li>PSA Birth Certificate (Photocopy)</li>
            <li>2x2 ID Pictures with white background</li>
            <li>Transfer Credentials (for Transferees)</li>
          </ul>
          <a href="#">View full checklist ➜</a>
        </article>

        <article class="card">
          <div class="card-icon">🎓︎</div>
          <h2>Programs Offered</h2>
          <p>We offer a wide range of programs catering to different educational stages:</p>
          <ul class="program-list">
            <li>Kindergarten & Elementary</li>
            <li>Junior & Senior High School</li>
            <li>Undergraduate Programs</li>
            <li>School of Graduate Studies</li>
          </ul>
        </article>
      </section>
    </main>

    <footer class="site-footer">
      © 2026 University Name. All rights reserved.
    </footer>
  </div>
</template>

<style scoped>
* {
  box-sizing: border-box;
}

.page {
  min-height: 50vh;
  background: linear-gradient(135deg, #f9f5ef 0%, #f3ead8 100%);
  color: #2b1a52;
  font-family: Arial, Helvetica, sans-serif;
  margin-left: 120px;
  margin-right: 120px;
  border-radius: 18px;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
  text-align: center;
}

.hero {
  padding: 40px 0;
}

.eyebrow {
  margin: 0 0 8px;
  color: #b8912a;
  font-size: 13px;
  letter-spacing: 0.05em;
  text-transform: uppercase;
}

.hero h1 {
  margin: 0 0 12px;
  color: #2b1a52;
  font-family: Georgia, 'Times New Roman', serif;
  font-size: 32px;
}

.line {
  width: 70px;
  height: 2px;
  margin: 0 auto;
  background-color: #c8a100;
}

.main {
  padding: 8px 24px 40px;
}

.admission-cards {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 24px;
}

.card {
  padding: 24px;
  border: 1px solid rgba(43,26,82,0.08);
  border-radius: 8px;
  background: linear-gradient(180deg, #ffffff 0%, #f7f1e8 100%);
  text-align: left;
}

.card-icon {
  display: grid;
  place-items: center;
  width: 46px;
  height: 46px;
  margin-bottom: 22px;
  border-radius: 50%;
  background: linear-gradient(135deg, rgba(200,161,0,0.18), rgba(43,26,82,0.10));
  color: #2b1a52;
  font-size: 24px;
}

.document-icon {
  background: linear-gradient(135deg, rgba(200,161,0,0.14), rgba(43,26,82,0.08));
  color: #b8912a;
}

.card h2 {
  margin: 0 0 14px;
  color: #2b1a52;
  font-family: Georgia, 'Times New Roman', serif;
  font-size: 18px;
}

.card p {
  margin: 0 0 12px;
  font-size: 13px;
  line-height: 1.5;
}

.card a {
  display: inline-block;
  margin-top: 16px;
  color: #2b1a52;
  font-size: 13px;
  font-weight: 700;
  text-decoration: none;
}

.card a:hover {
  text-decoration: underline;
}

.step-list,
.check-list,
.program-list {
  margin: 0;
  padding: 0;
  list-style: none;
  font-size: 13px;
}

.step-list {
  counter-reset: admission-step;
}

.step-list li,
.check-list li {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  margin-bottom: 12px;
  line-height: 1.45;
}

.step-list li::before {
  display: grid;
  flex: 0 0 17px;
  place-items: center;
  width: 17px;
  height: 17px;
  border-radius: 50%;
  background: linear-gradient(135deg, #c8a100 0%, #d7b447 100%);
  color: #2b1a52;
  content: counter(admission-step);
  counter-increment: admission-step;
  font-size: 10px;
  font-weight: 700;
}

.check-list li::before {
  color: #22c55e;
  content: '\2713';
  font-weight: 700;
}

.program-list li {
  margin-top: 8px;
  padding: 11px 10px;
  border: 1px solid rgba(43,26,82,0.08);
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(15, 23, 42, 0.04);
  color: #2b1a52;
  font-weight: 600;
}

.site-footer {
  padding: 24px;
  border-top: 1px solid rgba(200,161,0,0.25);
  background: linear-gradient(135deg, #1f1236 0%, #2b1a52 100%);
  color: #f5d56b;
  font-size: 13px;
  text-align: center;
}

@media (max-width: 800px) {
  .admission-cards {
    grid-template-columns: 1fr;
  }
}
</style>
