document.addEventListener('DOMContentLoaded', () => {
  const feedbackForm = document.querySelector('.feedback-form');

  const savedFormData = JSON.parse(localStorage.getItem('feedback-form-state'));

  if (savedFormData) {
    feedbackForm.elements.email.value = savedFormData.email || '';
    feedbackForm.elements.message.value = savedFormData.message || '';
  }

  feedbackForm.addEventListener('input', event => {
    if (event.target.name === 'email' || event.target.name === 'message') {
      const formData = {
        email: feedbackForm.elements.email.value,
        message: feedbackForm.elements.message.value,
      };

      localStorage.setItem('feedback-form-state', JSON.stringify(formData));
    }
  });

  feedbackForm.addEventListener('submit', event => {
    event.preventDefault();

    const formData = {
      email: feedbackForm.elements.email.value,
      message: feedbackForm.elements.message.value,
    };

    console.log('Form data submitted:', formData);

    feedbackForm.reset();
    localStorage.removeItem('feedback-form-state');
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const emailInput = document.querySelector('.emailInputFild');

  emailInput.addEventListener('focus', event => {
    if (event.target.value.trim() === '') {
      event.target.setAttribute('placeholder', 'Enter your email');
    }
  });

  emailInput.addEventListener('blur', event => {
    if (event.target.value.trim() === '') {
      event.target.removeAttribute('placeholder');
    }
  });
});
