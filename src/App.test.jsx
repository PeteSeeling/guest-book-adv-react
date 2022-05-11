import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { setupServer } from 'msw/node';
import { rest } from 'msw';
import EntryList from './views/Auth/EntryList/EntryList';
import { MemoryRouter } from 'react-router-dom';
import { UserProvider } from './context/UserContext';


const server = setupServer();


beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
const dataThreeEntries = [
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

  // server.use instance with 3 entry data
  server.use(
    rest.get('https://ezwbsacoojmonmiqffad.supabase.co/rest/v1/entries', (req, res, ctx) =>
      res(ctx.json(dataThreeEntries))
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
                    <EntryList />
                </UserProvider>
            </MemoryRouter>
        );

     
     const addEntryButton= await screen.findByLabelText(/add entry button/i)

    expect(addEntryButton).toBeInTheDocument()

 await screen.findByText(/Please Pass/i)
 await screen.findByText(/let it work/)

    
 const entryBox = screen.findByLabelText(/add entry/i)

//  userEvent.type(entryBox, 'test entryBox')

 const submitEntry = screen.getByLabelText(/add entry button/i)
 userEvent.click(submitEntry)

screen.getByText(/test entryBox/i)
    });


})