import { render, screen } from '@testing-library/react';
import Users from './pages/Users';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom';

test('Render halaman Users dengan benar', () => {
    render(
    <MemoryRouter>
        <Users />
    </MemoryRouter>);

    //mencari tombol tertentu
    //pastikan button kita memiliki role="button"
    const btn = screen.getByRole('button');
    expect(btn).toBeInTheDocument();
    expect(btn).toHaveTextContent('Back to Home');
});