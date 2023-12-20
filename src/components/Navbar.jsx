import { Disclosure } from '@headlessui/react';

// imagenes:
import logoGiphy from '../assets/img/giphy_logo.png';

export const Navbar = () => {
	return (
		<Disclosure as="nav" className="bg-gray-400">
			{() => (
				<>
					<div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
						<div className="relative flex h-16 items-center justify-between">
							<div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
								<div className="flex flex-shrink-0 items-center">
									<img
										className="h-24 w-auto"
										src={logoGiphy}
									/>
								</div>
							</div>
						</div>
					</div>
				</>
			)}
		</Disclosure>
	);
};
