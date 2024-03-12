document.addEventListener('DOMContentLoaded', () => {
  const feedbackForm = document.querySelector('.feedback-form');

  const savedFormData = JSON.parse(localStorage.getItem('feedback-form-state'));

  if (savedFormData) {
    feedbackForm.elements.email.value = savedFormData.email.trim() || '';
    feedbackForm.elements.message.value = savedFormData.message.trim() || '';
  }

  feedbackForm.addEventListener('input', (event) => {
    if (event.target.name === 'email' || event.target.name === 'message') {
      const formData = {
        email: feedbackForm.elements.email.value.trim(),
        message: feedbackForm.elements.message.value.trim(),
      };

      localStorage.setItem('feedback-form-state', JSON.stringify(formData));
    }
  });

  feedbackForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const trimmedEmail = feedbackForm.elements.email.value.trim();
    const trimmedMessage = feedbackForm.elements.message.value.trim();

    if (trimmedEmail && trimmedMessage) {
      const formData = {
        email: trimmedEmail,
        message: trimmedMessage,
      };

      console.log('Form data submitted:', formData);

      feedbackForm.reset();
      localStorage.removeItem('feedback-form-state');
    } else {
      alert('Both email and message fields must be filled.');
    }
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const emailInput = document.querySelector('.emailInputFild');

  emailInput.addEventListener('focus', (event) => {
    if (event.target.value.trim() === '') {
      event.target.setAttribute('placeholder', 'Enter your email');
    }
  });

  emailInput.addEventListener('blur', (event) => {
    if (event.target.value.trim() === '') {
      event.target.removeAttribute('placeholder');
    }
  });
});
