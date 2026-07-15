import './style.css'
import { projects, skills } from './data'

document.addEventListener('DOMContentLoaded', () => {
  // 1. スキルの描画
  const skillsList = document.getElementById('skills-list');
  if (skillsList) {
    skills.forEach(skill => {
      const li = document.createElement('li');
      li.textContent = skill;
      li.className = 'skill-item';
      skillsList.appendChild(li);
    });
  }

  // 2. 実績（Works）の描画
  const worksGrid = document.getElementById('works-grid');
  if (worksGrid) {
    projects.forEach(project => {
      const card = document.createElement('div');
      card.className = 'work-card';
      
      card.innerHTML = `
        <div class="work-image-container">
          <img src="${project.image}" alt="${project.title}" class="work-image" loading="lazy" />
        </div>
        <div class="work-content">
          <h3>${project.title}</h3>
          <p>${project.description}</p>
          <div class="work-tags">
            ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
          </div>
        </div>
      `;
      worksGrid.appendChild(card);
    });
  }

  // 3. スムーススクロールの実装
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const href = this.getAttribute('href');
      if (!href) return;
      
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });

  // 4. モバイルメニューの開閉
  const menuToggle = document.getElementById('menu-toggle');
  const navMenu = document.getElementById('nav-menu');
  const navItemLinks = document.querySelectorAll('.nav-links a');

  if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
      menuToggle.classList.toggle('active');
      navMenu.classList.toggle('active');
    });

    // リンクをクリックしたらメニューを閉じる
    navItemLinks.forEach(link => {
      link.addEventListener('click', () => {
        menuToggle.classList.remove('active');
        navMenu.classList.remove('active');
      });
    });
  }
});
