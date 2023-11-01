import { Menu, Navbar } from "react-daisyui";
import { Link, NavLink, Outlet } from "react-router-dom";

export default function Layout() {
	return (
		<div>
			{/* A "layout route" is a good place to put markup you want to
          share across all the pages on your site, like navigation. */}

			<Navbar>
				<div className="flex-1">
					<Link to="/">React Intro</Link>
				</div>
				<div className="flex-none">
					<Menu horizontal={true} className="px-1">
						<Menu.Item>
							<NavLink to="/">Home</NavLink>
						</Menu.Item>
						<Menu.Item>
							<NavLink to="/contact">Contact</NavLink>
						</Menu.Item>
					</Menu>
				</div>
			</Navbar>

			{/* An <Outlet> renders whatever child route is currently active,
          so you can think about this <Outlet> as a placeholder for
          the child routes we defined above. */}
			<Outlet />
		</div>
	);
}
