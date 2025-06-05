import "@testing-library/jest-dom";

// Configuración global para pruebas
window.ResizeObserver = class ResizeObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
};
