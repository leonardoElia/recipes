import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from '../renderWithRouter';
import ContextProvider from '../Context/ContextProvider';
import { placeholderEmail, placeholderSenha, email } from './dataBase';

describe('Testes tela de login', () => {
  test('Testando se há os elementos na tela', () => {
    renderWithRouter(
      <ContextProvider>
        <App />
        ,
      </ContextProvider>,

    );
    expect(screen.getByRole('button', { name: 'Login' }));
    expect(screen.getByPlaceholderText(placeholderEmail)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(placeholderSenha)).toBeInTheDocument();
  });

  test('Testando se o botão fica valido ao ao escrever email e senhas corretas', () => {
    renderWithRouter(
      <ContextProvider>
        <App />
        ,
      </ContextProvider>,

    );
    const button = screen.getByRole('button', { name: 'Login' });
    const inputEmail = screen.getByPlaceholderText(placeholderEmail);
    const inputSenha = screen.getByPlaceholderText(placeholderSenha);
    expect(button).toBeDisabled();
    userEvent.type(inputEmail, email);
    userEvent.type(inputSenha, '1234567');
    expect(button).toBeEnabled();
  });

  test('Testando se o botão fica invalido ao ao escrever email incorreto', () => {
    renderWithRouter(
      <ContextProvider>
        <App />
        ,
      </ContextProvider>,

    );

    const button = screen.getByRole('button', { name: 'Login' });
    const inputEmail = screen.getByPlaceholderText(placeholderEmail);
    const inputSenha = screen.getByPlaceholderText(placeholderSenha);

    userEvent.type(inputEmail, 'leonardoelias80gmail.com');
    userEvent.type(inputSenha, '1234567');

    expect(button).toBeDisabled();
  });

  test('Testando se o botão fica invalido ao ao escrever senha incorreta', () => {
    renderWithRouter(
      <ContextProvider>
        <App />
        ,
      </ContextProvider>,

    );

    const button = screen.getByRole('button', { name: 'Login' });
    const inputEmail = screen.getByPlaceholderText(placeholderEmail);
    const inputSenha = screen.getByPlaceholderText(placeholderSenha);

    userEvent.type(inputEmail, email);
    userEvent.type(inputSenha, '1234');

    expect(button).toBeDisabled();
  });
});
