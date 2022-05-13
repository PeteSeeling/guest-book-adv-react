import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { setupServer } from 'msw/node';
import { rest } from 'msw';
import EntryList from './views/Auth/EntryList/EntryList';
import App from './App';
import { MemoryRouter } from 'react-router-dom';
import { UserProvider } from './context/UserContext';


const server = setupServer( 
  rest.post(
  'https://ezwbsacoojmonmiqffad.supabase.co/auth/v1/token',
  (req, res, ctx) => res(ctx.json(data))
),

rest.get(
  'https://ezwbsacoojmonmiqffad.supabase.co/rest/v1/entries',
  (req, res, ctx) => res(ctx.json(data))
)
);

// beforeAll(() => server.listen());
// afterEach(() => server.resetHandlers());
// afterAll(() => server.close());
const data = [
    {
      "id": 211,
      "guest_id": "MOCK_ID_19999",
      "content": "let it work",
      "created_at": ""
    },
    {
      "id": 212,
      "guest_id": "MOCK_ID_19999",
      "content": "test entryBox",
      "created_at": ""
    },
    {
      "id": 213,
      "guest_id": "MOCK_ID_19999",
      "content": "Please Pass",
      "created_at": ""
    }
  ]; 

  server.use(
    rest.get('https://ezwbsacoojmonmiqffad.supabase.co/rest/v1/entries', (req, res, ctx) =>
      res(ctx.json(data))
    )
  );
  
  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

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
userEvent.type(password, 'password')
const email = screen.getByPlaceholderText(/email/i)
userEvent.type(email, 'test@gmail.com')
const signIn = screen.getByLabelText(/Sign-in/i)
userEvent.click(signIn)

const guestbook = screen.getByLabelText(/guestbook/i)
userEvent.click(guestbook)

screen.findByText(/Signed in with/i)
    
     
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