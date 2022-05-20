import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  //1-Arreglar -creado variable-importaciones
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  //2-Actuar
  expect(linkElement).toBeInTheDocument();
});
