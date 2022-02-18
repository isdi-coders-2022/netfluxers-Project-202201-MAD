import { render, screen } from '@testing-library/react';
import { FavoriteMovie } from '../favourites/fav-movie';
import '../favourites/style-fav-list.scss';



test('Render FavoriteMovie', () => {
    render(<FavoriteMovie />);
    const elementFavourites = screen.getByRole('heading', { name: /favorite movies/i });
    expect(elementFavourites).toBeInTheDocument();
    const elementFavouritesMap = screen.getByText(/\{moviesfav\.map\(\(movie\) => \(/i)
    expect(elementFavouritesMap).toBeInTheDocument();
    
    
  });
  