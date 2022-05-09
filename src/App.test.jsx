import { render, screen } from '@testing-library/react';
import userEvent from `@testing-library/user-event`;
import { setupServer } from 'msw/node';
import { rest } from 'msw';
import App from'./App';
import { MemoryRouter } from 'react-router-dom';
import { UserProvider } from './context/UserContext';


describe('Testing behavior', () => {
    it('logs in, displays list of guestbook entries and adds one new entry', async () => {
        render(
            <MemoryRouter>
                <UserProvider>
                    <App />
                </UserProvider>
            </MemoryRouter>
        );

        const typeEmail = screen.getByPlaceholderText(/email/i)
        userEvent.type(typeEmail, 'user1@user.com')

        const typePassword = screen.getByPlaceholderText(/password/i)
        userEvent.type(typePassword, 'password')

        const signUpButton = screen.getByLabelText(/Sign-up/i)
    });
    userEvent.click(signUpButton)

    await screen.find

})