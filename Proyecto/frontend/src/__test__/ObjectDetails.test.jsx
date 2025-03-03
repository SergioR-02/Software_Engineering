/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-env jest */
import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import ObjectDetails from '../templates/objectDetails/ObjectDetails';

// Mock de los componentes
jest.mock('../organisms/header/Header', () => {
  const Header = () => <div data-testid='mock-header'>Header</div>;
  Header.displayName = 'Header';
  return Header;
});

jest.mock('../organisms/objectCard/ObjectCard', () => {
  const ObjectCard = (props) => (
    <div data-testid='mock-object-card'>
      <img
        data-testid='object-image'
        src={props.imageSrc}
        alt={props.imageAlt}
      />
      <h1 data-testid='object-title'>{props.title}</h1>
      <div data-testid='object-details'>
        <p>Categoría: {props.category}</p>
        <p>Estado: {props.state}</p>
        <p>Ubicación: {props.location}</p>
        <p>Fecha: {props.date}</p>
        <p>Descripción: {props.description}</p>
        <p>Contacto: {props.contactInfo}</p>
      </div>
      <button data-testid='claim-button'>Reclamar Objeto</button>
    </div>
  );
  ObjectCard.displayName = 'ObjectCard';
  return ObjectCard;
});

jest.mock('../organisms/footer/Footer', () => {
  const Footer = () => <div data-testid='mock-footer'>Footer</div>;
  Footer.displayName = 'Footer';
  return { Footer };
});

describe('ObjectDetails Component', () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <ObjectDetails />
      </BrowserRouter>,
    );
  });

  test('renders header and footer', () => {
    expect(screen.getByTestId('mock-header')).toBeInTheDocument();
    expect(screen.getByTestId('mock-footer')).toBeInTheDocument();
  });

  test('renders object card with details', () => {
    expect(screen.getByTestId('mock-object-card')).toBeInTheDocument();
    expect(screen.getByTestId('object-image')).toBeInTheDocument();
    expect(screen.getByTestId('object-title')).toBeInTheDocument();
    expect(screen.getByTestId('object-details')).toBeInTheDocument();
    expect(screen.getByTestId('claim-button')).toBeInTheDocument();
  });

  test('displays correct object information', () => {
    expect(screen.getByText(/LLaves de toallin/)).toBeInTheDocument();
    expect(screen.getByText(/Categoría: llaves/)).toBeInTheDocument();
    expect(screen.getByText(/Estado: Perdido/)).toBeInTheDocument();
    expect(screen.getByText(/Ubicación: Biblioteca/)).toBeInTheDocument();
  });
});
