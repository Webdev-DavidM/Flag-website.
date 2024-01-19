import { MantineProvider } from '@mantine/core';
import { render, screen } from '@testing-library/react';
import Flag from './Flag';
import data from '../../data.json';
import { theme } from '@/theme';

const setup = () => {
  render(
    <MantineProvider theme={theme}>
      <Flag flag={data[22]} />
    </MantineProvider>
  );
};

describe('Flag component', () => {
  test('renders flag image', () => {
    setup();
    const flagImage = screen.getByAltText('Belize');
    expect(flagImage).toBeInTheDocument();
  });

  test('renders flag name', () => {
    setup();
    const flagName = screen.getByText('Belize');
    expect(flagName).toBeInTheDocument();
  });

  test('renders flag population', () => {
    setup();
    const flagPopulation = screen.getByText('Population:');
    expect(flagPopulation).toBeInTheDocument();
  });

  test('renders flag region', () => {
    setup();
    const flagRegion = screen.getByText('Region:');
    expect(flagRegion).toBeInTheDocument();
  });

  test('renders flag capital', () => {
    setup();
    const flagCapital = screen.getByText('Capital:');
    expect(flagCapital).toBeInTheDocument();
  });
});
