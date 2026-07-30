const projectData = {
  tile: {
    title: '瓷砖缺陷检测算法与软件开发',
    date: '2023.09 — 2025.01 / 校企联合项目',
    image: 'https://s21.ax1x.com/2025/01/31/pEZ9NzF.png',
    summary: '面向大幅面、多色系、微小缺陷等复杂工业场景，完成从 AI 算法研究、硬件平台对接、PyQt 检测客户端到 Web 微服务管理系统的端到端解决方案。',
    tech: ['YOLOv8', 'PyTorch', 'PyQt5', 'Vue', 'SpringCloud', 'Nacos', 'Kafka', 'Redis'],
    results: ['发表 CCF-T2 期刊论文 2 篇', '完成检测软件与 Web 管理系统', '授权软件著作权 3 项并协助项目结项']
  },
  paint: {
    title: '漆膜分级算法与软件开发',
    date: '2023.04 — 2023.08 / 工业质量检测',
    image: 'https://s21.ax1x.com/2025/01/31/pEZ9rIx.png',
    summary: '研究并开发基于图像处理和机器学习的漆膜表面质量自动分级方案，覆盖数据预处理、模型训练、本地检测客户端及 Web 服务化调用。',
    tech: ['OpenCV', 'VGG16', 'Python', 'PyQt5', 'Flask', 'SpringBoot', 'Vue'],
    results: ['完成漆膜分级算法研究与标准建立', '开发可直接调用算法的桌面客户端', '封装检测微服务并集成 Web 管理端']
  },
  campus: {
    title: '智慧校园点歌平台',
    date: '2021.07 — 2022.06 / 校园产品实践',
    image: 'https://s1.ax1x.com/2020/05/13/Ydpg0I.png',
    summary: '为校园广播站设计的移动点歌与 PC 管理平台，支持歌曲试听、点歌投稿、评论管理，并接入人脸登录、语音合成与敏感词过滤能力。',
    tech: ['Vue', 'SpringBoot', 'MyBatis', 'MySQL', 'Redis', 'Elasticsearch', '腾讯云 API'],
    results: ['获评优秀毕业论文，成绩 95 分', '发表论文 1 篇，授权软著 2 项', '获中国大学生计算机设计大赛全国三等奖']
  },
  classroom: {
    title: '智慧教室项目',
    date: '2021.07 — 2021.10 / IoT 教务系统',
    image: 'https://s1.ax1x.com/2020/05/13/YdS4y9.jpg',
    summary: '结合 Web 管理系统和物联网设备的智慧教室方案，支持人员、课表、设备管理，移动端控制教室设备，以及环境信息查看与安全检测。',
    tech: ['SpringBoot', 'Vue', 'MQTT', '阿里云 IoT', 'MySQL', 'Redis', 'Shiro', '消息队列'],
    results: ['负责后端 API、部分前端与云平台交互', '设计高频设备数据读写分离方案', '协助项目成功完成路演']
  },
  circle: {
    title: 'CircleChat · 圈聊软件',
    date: '2020.07 — 2021.01 / 实时社交产品',
    image: 'https://s21.ax1x.com/2025/01/31/pEZ9zoq.png',
    summary: '以地理位置为核心的即时聊天软件：用户可在地图上创建圆形区域，邀请圈内用户聊天或发布寻人寻物信息，实现“圈随人动”的社交体验。',
    tech: ['SpringBoot', 'WebSocket', 'JWT', 'Redis', 'RocketMQ', 'Nginx', 'uni-app', '百度地图'],
    results: ['累计用户达 3000，最高 DAU 达 350', '完成实时通信、位置圈选与并发消息处理', '获中国大学生创意智能小程序大赛全国三等奖']
  }
};

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.14 });
document.querySelectorAll('.reveal').forEach((element) => revealObserver.observe(element));

const countObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    const element = entry.target;
    const target = Number(element.dataset.target);
    const duration = 1250;
    const start = performance.now();
    const frame = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      element.textContent = Math.round(target * eased);
      if (progress < 1) requestAnimationFrame(frame);
    };
    requestAnimationFrame(frame);
    countObserver.unobserve(element);
  });
}, { threshold: .7 });
document.querySelectorAll('.count').forEach((element) => countObserver.observe(element));

const navLinks = [...document.querySelectorAll('.nav-link')];
const navSections = navLinks.map((link) => document.querySelector(link.getAttribute('href'))).filter(Boolean);
const navObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    navLinks.forEach((link) => link.classList.toggle('is-active', link.getAttribute('href') === `#${entry.target.id}`));
  });
}, { rootMargin: '-35% 0px -56% 0px' });
navSections.forEach((section) => navObserver.observe(section));

const filters = document.querySelectorAll('.filter-btn');
const projects = document.querySelectorAll('.project-card');
filters.forEach((button) => button.addEventListener('click', () => {
  filters.forEach((item) => item.classList.remove('is-selected'));
  button.classList.add('is-selected');
  const filter = button.dataset.filter;
  projects.forEach((project) => {
    const visible = filter === 'all' || project.dataset.category.includes(filter);
    project.classList.toggle('is-hidden', !visible);
  });
}));

const dialog = document.querySelector('.project-dialog');
const dialogImage = document.querySelector('#dialog-image');
const dialogDate = document.querySelector('#dialog-date');
const dialogTitle = document.querySelector('#dialog-title');
const dialogSummary = document.querySelector('#dialog-summary');
const dialogTech = document.querySelector('#dialog-tech');
const dialogResults = document.querySelector('#dialog-results');
const openProject = (card) => {
  const project = projectData[card.dataset.project];
  if (!project) return;
  dialogImage.src = project.image;
  dialogImage.alt = `${project.title} 项目截图`;
  dialogDate.textContent = project.date;
  dialogTitle.textContent = project.title;
  dialogSummary.textContent = project.summary;
  dialogTech.innerHTML = project.tech.map((item) => `<span>${item}</span>`).join('');
  dialogResults.innerHTML = project.results.map((item) => `<li>${item}</li>`).join('');
  dialog.showModal();
};
projects.forEach((card) => {
  card.addEventListener('click', () => openProject(card));
  card.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') openProject(card);
  });
  card.setAttribute('tabindex', '0');
});
document.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', (event) => {
  if (event.target === dialog) dialog.close();
});

const glow = document.querySelector('.cursor-glow');
window.addEventListener('pointermove', (event) => {
  if (event.pointerType === 'touch') return;
  glow.style.left = `${event.clientX}px`;
  glow.style.top = `${event.clientY}px`;
}, { passive: true });

const menuToggle = document.querySelector('.menu-toggle');
menuToggle.addEventListener('click', () => {
  const active = menuToggle.getAttribute('aria-expanded') === 'true';
  menuToggle.setAttribute('aria-expanded', String(!active));
  document.body.classList.toggle('menu-open', !active);
});

navLinks.forEach((link) => link.addEventListener('click', () => {
  menuToggle.setAttribute('aria-expanded', 'false');
  document.body.classList.remove('menu-open');
}));

const particleCanvas = document.querySelector('.particle-canvas');
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if (particleCanvas && !reducedMotion) {
  const context = particleCanvas.getContext('2d');
  const pointer = { x: -9999, y: -9999 };
  let particles = [];
  let width = 0;
  let height = 0;
  const createParticle = () => ({
    x: Math.random() * width,
    y: Math.random() * height,
    vx: (Math.random() - .5) * .18,
    vy: (Math.random() - .5) * .18,
    size: Math.random() * 1.35 + .35
  });
  const resizeCanvas = () => {
    const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
    width = window.innerWidth;
    height = window.innerHeight;
    particleCanvas.width = width * pixelRatio;
    particleCanvas.height = height * pixelRatio;
    context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
    const particleCount = Math.min(80, Math.max(28, Math.round(width / 22)));
    particles = Array.from({ length: particleCount }, createParticle);
  };
  const drawNetwork = () => {
    context.clearRect(0, 0, width, height);
    particles.forEach((particle, index) => {
      particle.x += particle.vx;
      particle.y += particle.vy;
      if (particle.x < -10 || particle.x > width + 10) particle.vx *= -1;
      if (particle.y < -10 || particle.y > height + 10) particle.vy *= -1;
      for (let targetIndex = index + 1; targetIndex < particles.length; targetIndex += 1) {
        const target = particles[targetIndex];
        const dx = particle.x - target.x;
        const dy = particle.y - target.y;
        const distance = Math.hypot(dx, dy);
        if (distance < 132) {
          context.beginPath();
          context.strokeStyle = `rgba(76, 247, 255, ${.11 * (1 - distance / 132)})`;
          context.lineWidth = .55;
          context.moveTo(particle.x, particle.y);
          context.lineTo(target.x, target.y);
          context.stroke();
        }
      }
      const pointerDistance = Math.hypot(particle.x - pointer.x, particle.y - pointer.y);
      if (pointerDistance < 160) {
        context.beginPath();
        context.strokeStyle = `rgba(168, 125, 255, ${.28 * (1 - pointerDistance / 160)})`;
        context.lineWidth = .7;
        context.moveTo(particle.x, particle.y);
        context.lineTo(pointer.x, pointer.y);
        context.stroke();
      }
      context.beginPath();
      context.fillStyle = 'rgba(111, 234, 255, .58)';
      context.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
      context.fill();
    });
    requestAnimationFrame(drawNetwork);
  };
  window.addEventListener('resize', resizeCanvas, { passive: true });
  window.addEventListener('pointermove', (event) => {
    pointer.x = event.clientX;
    pointer.y = event.clientY;
  }, { passive: true });
  resizeCanvas();
  drawNetwork();
}
