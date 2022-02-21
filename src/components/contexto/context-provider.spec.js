import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useContext } from 'react';
import { Context, ContextProvider } from './context-provider';
import * as api from '../../services/apiLocal';

jest.mock('../../services/apiLocal');

test('Context-provider', async () => {
  api.getAllFav.mockResolvedValue({});
  api.SetFav.mockResolvedValue({});

  function TestComponent() {
    const { addMovie } = useContext(Context);
    return (
      <>
        <p>Componente</p>
        <button type="button" onClick={() => addMovie({})}>
          Add
        </button>
      </>
    );
  }

  render(
    <ContextProvider>
      <TestComponent />
    </ContextProvider>
  );

  const btn = screen.getByText(/Add/i);
  userEvent.click(btn);
  expect(api.SetFav).toHaveBeenCalled();
});
