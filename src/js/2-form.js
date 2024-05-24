import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

let formData = {
  email: '',
  message: '',
};

const saveToLocalStorage = () => {
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
};

// Функція для завантаження даних з локального сховища
const loadFromLocalStorage = () => {
  const savedData = localStorage.getItem('feedback-form-state');
  if (savedData) {
    formData = JSON.parse(savedData);
    document.querySelector('.feedback-form [name="email"]').value =
      formData.email;
    document.querySelector('.feedback-form [name="message"]').value =
      formData.message;
  }
};

// Функція для оновлення formData при зміні поля
const updateFormData = event => {
  formData[event.target.name] = event.target.value;
  saveToLocalStorage();
};

// Функція для очищення локального сховища і форми
const clearForm = () => {
  localStorage.removeItem('feedback-form-state');
  formData = { email: '', message: '' };
  document.querySelector('.feedback-form').reset();
};

document
  .querySelector('.feedback-form')
  .addEventListener('input', updateFormData);

// Обробка події submit форми
document.querySelector('.feedback-form').addEventListener('submit', event => {
  event.preventDefault();
  if (!formData.email || !formData.message) {
    alert('Fill please all fields');
    return;
  }
  console.log(formData);
  clearForm();
});

// Завантаження даних з локального сховища при завантаженні сторінки
document.addEventListener('DOMContentLoaded', loadFromLocalStorage);
