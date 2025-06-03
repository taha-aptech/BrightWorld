const starsContainer = document.getElementById('stars');
    let selectedRating = 0;

    function createStars() {
      for (let i = 1; i <= 5; i++) {
        const star = document.createElement('span');
        star.textContent = '☆';
        star.dataset.index = i;
        starsContainer.appendChild(star);
      }
    }

    function highlightStars(rating) {
      const stars = starsContainer.querySelectorAll('span');
      stars.forEach((star, index) => {
        star.textContent = index < rating ? '★' : '☆';
      });
    }

    starsContainer.addEventListener('mouseover', (e) => {
      if (e.target.tagName === 'SPAN') {
        const index = parseInt(e.target.dataset.index);
        highlightStars(index);
      }
    });

    starsContainer.addEventListener('mouseout', () => {
      highlightStars(selectedRating);
    });

    starsContainer.addEventListener('click', (e) => {
      if (e.target.tagName === 'SPAN') {
        selectedRating = parseInt(e.target.dataset.index);
        highlightStars(selectedRating);
      }
    });

    createStars();
    highlightStars(0);
  
  function switchImage(src) {
    document.getElementById("mainImage").src = src;
  }

  const qtyInput = document.getElementById('qtyInput');

  function changeQty(amount) {
    let current = parseInt(qtyInput.value, 10) || 1;
    current += amount;
    if (current < 1) current = 1;
    qtyInput.value = current;
  }

  function validateQty() {
    let val = parseInt(qtyInput.value, 10);
    if (isNaN(val) || val < 1) {
      qtyInput.value = 1;
    }
  }

  qtyInput.addEventListener('keydown', function (e) {
    if (!((e.key >= '0' && e.key <= '9') || ['Backspace', 'ArrowLeft', 'ArrowRight'].includes(e.key))) {
      e.preventDefault();
    }
  });



    const addToCartBtn = document.getElementById('addToCartBtn');
    const offcanvasCart = document.getElementById('offcanvasCart');
    const overlay = document.getElementById('overlay');
    const closeCart = document.getElementById('closeCart');

    const quantityInput = document.getElementById('quantityInput');
    const decreaseBtn = document.getElementById('decreaseBtn');
    const increaseBtn = document.getElementById('increaseBtn');
    const subtotal = document.getElementById('subtotal');
    const total = document.getElementById('total');

    const price = 399;

    addToCartBtn.addEventListener('click', () => {
      offcanvasCart.classList.add('active');
      overlay.classList.add('active');
    });

    closeCart.addEventListener('click', () => {
      offcanvasCart.classList.remove('active');
      overlay.classList.remove('active');
    });

    overlay.addEventListener('click', () => {
      offcanvasCart.classList.remove('active');
      overlay.classList.remove('active');
    });

    increaseBtn.addEventListener('click', () => {
      let qty = parseInt(quantityInput.value);
      quantityInput.value = qty + 1;
      updateTotals();
    });

    decreaseBtn.addEventListener('click', () => {
      let qty = parseInt(quantityInput.value);
      if (qty > 1) {
        quantityInput.value = qty - 1;
        updateTotals();
      }
    });

    quantityInput.addEventListener('change', () => {
      let qty = parseInt(quantityInput.value);
      if (isNaN(qty) || qty < 1) {
        quantityInput.value = 1;
      }
      updateTotals();
    });

    function updateTotals() {
      const qty = parseInt(quantityInput.value);
      subtotal.textContent = total.textContent = price * qty;
    }