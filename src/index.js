import './style.css';

// observer 대상 node
const target = document.getElementById('target');

// observe 설정 (MutationObserverInit)
const config = { attributes: true, childList: true };

// observer 인스턴스
const observer = new MutationObserver((mutations) => {
  console.log('mutations', mutations);
});

// observe 대상 및 설정 전달
document.querySelector('.start').addEventListener('click', () => {
  console.log('Start Observe');
  observer.observe(target, config);
});

// observe 중지
document.getElementById('disconnect').addEventListener('click', () => {
  console.log('Disconnect Observer');
  observer.disconnect();
});

document.getElementById('attributes').addEventListener('click', () => {
  target.setAttribute('class', 'red');
});

document.getElementById('childList').addEventListener('click', () => {
  target.textContent = '변경'; // eotkddp
});

document.getElementById('reset').addEventListener('click', () => {
  target.removeAttribute('class', 'red');
  target.textContent = '';
});
