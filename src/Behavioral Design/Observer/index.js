import './style.css';

// observer 대상 node
const target = document.getElementById('target');

// observe 설정 (MutationObserverInit)
const config = { attributes: true, childList: true };

// observer 인스턴스
const observer = new MutationObserver((mutations) => {
  console.log('mutations', mutations);

  const currentAction = mutations[0]; // 들어오는 변화의 첫 번째 것만 감지
  // 해당 코드에서 Make Rea 만 attributes 이기 때문에 이렇게 작성했당.
  if (currentAction.type === 'attributes') {
    target.textContent = 'trigger';
  }
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
