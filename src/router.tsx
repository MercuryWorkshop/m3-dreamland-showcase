import { Redirect, Route, Router } from 'dreamland-router';
import Home from './routes/home.jsx';
export const router = new Router(
	<Route>
		<Route path="/" show={<Home />} />
	</Route>
);
