import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { FooterDesktop } from './components/footer/footer-desktop';
import { NavDesktop } from './components/nav/nav-desktop';
import { ContainerHome } from './components/container-home/container-home';
import { ContainerFav } from './components/container-fav/container-fav';
import { ContainerDetails } from './components/container-details/container-details';
import { DetailsTrailer } from './components/details-web/details-trailer';
import { App } from './App';

jest.mock('./components/container-home/container-home');
jest.mock('./components/nav/nav-desktop');
jest.mock('./components/footer/footer-desktop');
jest.mock('./components/container-fav/container-fav');
jest.mock('./components/container-details/container-details');
jest.mock('./components/details-web/details-trailer');

describe('Tests for App Router', () => {
  test('Should render page header and Home on default route', () => {
    NavDesktop.mockImplementation(() => <div> NavDesktopMock</div>);
    ContainerHome.mockImplementation(() => <div>ContainerHomeMock</div>);
    FooterDesktop.mockImplementation(() => <div>FooterDesktopMock</div>);
    ContainerDetails.mockImplementation(() => <div>ContainerDetailsMock</div>);
    ContainerFav.mockImplementation(() => <div>ContainerFavMock</div>);
    DetailsTrailer.mockImplementation(() => <div>DetailsTrailerMock</div>);

    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    expect(screen.getByText('NavDesktopMock')).toBeInTheDocument();
    expect(screen.getByText('ContainerHomeMock')).toBeInTheDocument();
    expect(screen.getByText('FooterDesktopMock')).toBeInTheDocument();
  });
});
