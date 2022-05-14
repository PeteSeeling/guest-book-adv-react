import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { setupServer } from 'msw/node';
import { rest } from 'msw';
import App from './App';
import { MemoryRouter } from 'react-router-dom';
import { UserProvider } from './context/UserContext';
import { data } from './services/data';

const server = setupServer( 
  rest.post(
  'https://ezwbsacoojmonmiqffad.supabase.co/auth/v1/token',
  (req, res, ctx) => res(ctx.json({access_token: 'MOCKED_ACCESS_TOKEN',
  token_type: 'bearer',
  expires_in: 3600,
  refresh_token: 'MOCKED_REFRESH_TOKEN',
  user: {
    id: '211',
    aud: 'authenticated',
    role: 'authenticated',
    email: 'test@gmail.com',
    email_confirmed_at: '2021-12-30T22:38:38.811933Z',
    phone: '',
    confirmation_sent_at: '2021-12-30T22:38:27.275189Z',
    confirmed_at: '2021-12-30T22:38:38.811933Z',
    recovery_sent_at: '2022-05-01T01:46:20.103383Z',
    last_sign_in_at: '2022-05-04T22:02:21.608591647Z',
    app_metadata: {
      provider: 'email',
      providers: ['email'],
    },
    user_metadata: {},
    identities: [
      {
        id: '211',
        guest_id: 'MOCK_ID_19999',
        identity_data: {
          sub: 'MOCK_ID_19999',
        },
        provider: 'email',
        last_sign_in_at: '2021-12-30T22:38:27.273692Z',
        created_at: '2021-12-30T22:38:27.273734Z',
        updated_at: '2021-12-30T22:38:27.273734Z',
      },
    ],
    created_at: '2021-12-30T22:38:27.271807Z',
    updated_at: '2022-05-04T22:02:21.609699Z',
  },
})
)
),


rest.get(
  'https://ezwbsacoojmonmiqffad.supabase.co/rest/v1/entries',
  (req, res, ctx) => res(ctx.json(data))
)
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

  server.use(
    rest.get('https://ezwbsacoojmonmiqffad.supabase.co/rest/v1/entries', (req, res, ctx) =>
      res(ctx.json(data))
    )
  );

describe('Testing behavior', () => {
    it('logs in, displays list of guestbook entries and adds one new entry', async () => {
        render(
            <MemoryRouter>
                <UserProvider>
                    <App />
                </UserProvider>
            </MemoryRouter>
       );
    
const password = screen.getByPlaceholderText(/password/i)
userEvent.type(password, 'password1')

const email = screen.getByPlaceholderText(/email/i)
 userEvent.type(email, 'test@gmail.com')

const signIn = screen.getByLabelText(/Sign-in/i)
userEvent.click(signIn)

const guestbook = screen.getByLabelText(/guestbook/i)
userEvent.click(guestbook)

await screen.getByText(/Signed in with/i)
    
     
     const addEntryButton= await screen.findByLabelText(/add entry button/i)

    expect(addEntryButton).toBeInTheDocument()

 await screen.findByText(/Please Pass/i)
 await screen.findByText(/let it work/)

    
 const entryBox = screen.findByLabelText(/add entry/i)

 const submitEntry = screen.getByLabelText(/add entry button/i)
 userEvent.click(submitEntry)

screen.getByText(/test entryBox/i)

    });


})
