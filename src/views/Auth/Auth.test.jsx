import {
render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { setupServer } from 'msw/node';
import { rest } from 'msw';
import { MemoryRouter, Route, Switch } from 'react-router-dom';
import { UserProvider } from '../../context/UserContext';

