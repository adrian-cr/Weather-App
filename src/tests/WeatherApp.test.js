import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import WeatherApp from '../components/WeatherApp';

describe('WeatherApp', () => {
  beforeEach(() => {
    global.fetch = jest.fn()
    .mockImplementationOnce(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve({
          name: 'London',
          main: { temp: 20, humidity: 50 },
          weather: [{ main: 'Clear' }],
          wind: { speed: 5 },
        })
      })
    )
    .mockImplementationOnce(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve({
          list: Array(40).fill().map((_, i) => ({
            dt: Date.now() / 1000 + i * 3600,
            main: { temp: 18 + i % 5 },
            weather: [{ main: 'Clouds' }],
          }))
        })
      })
    );
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  test('renders loading state', () => {
    render(<WeatherApp />);
    expect(screen.getByText(/loading weather data/i)).toBeInTheDocument();
  });

  test('renders weather data on success', async () => {
    render(<WeatherApp />);

    await waitFor(() => {
      expect(screen.getByRole('heading', { name: /London/i })).toBeInTheDocument();
      expect(screen.getByText(/Clear/i)).toBeInTheDocument();
      expect(screen.getByText(/Humidity:/i)).toBeInTheDocument();
    });
  });

  test('renders error message on API failure', async () => {
    // Fail both fetch calls
    global.fetch = jest.fn()
      .mockImplementationOnce(() => Promise.resolve({ ok: false }))
        .mockImplementationOnce(() => Promise.resolve({ ok: false }));
    render(<WeatherApp />);

    await waitFor(() => {
      expect(screen.getByText(/Error:/i)).toBeInTheDocument();
    });
  });
});
