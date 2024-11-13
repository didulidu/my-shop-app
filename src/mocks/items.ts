import { CartItem } from '../types';

export const items: CartItem[] = [
	{
		id: 2,
		name: 'Mechanical Keyboard',
		price: 80,
		description:
			'A high-quality mechanical keyboard with customizable RGB lighting, offering a tactile and responsive typing experience for both gaming and professional use.',
		features: [
			'Customizable RGB Lighting: Personalize your keyboard with millions of colors and various lighting effects.',
			'Tactile Switches: Enjoy the satisfying click and tactile feedback with each keystroke.',
			'Durable Build: Constructed with a sturdy aluminum frame for long-lasting durability.',
			'Full Key Rollover: Ensures every keypress is registered, even during intense gaming sessions.',
			'Programmable Macros: Customize and record macros for complex commands.',
			'Ergonomic Design: Comes with a detachable wrist rest for added comfort.'
		],
		specifications: {
			'Switch Type': 'Mechanical',
			Lighting: 'RGB',
			'Connection Type': 'Wired (USB)',
			Dimensions: '17.5 x 5.5 x 1.5 inches',
			Weight: '2.3 pounds',
			Compatibility: ['Windows', 'macOS']
		},
		additionalInformation: {
			Warranty: '2-year limited warranty',
			'In the Box': [
				'Mechanical Keyboard',
				'Detachable Wrist Rest',
				'User Manual'
			]
		},
		quantity: 0
	},
	{
		id: 1,
		name: 'Wireless Mouse',
		price: 20,
		description:
			'The Wireless Mouse is designed for comfort and efficiency, offering a sleek and ergonomic design that fits perfectly in your hand. Ideal for both everyday use and professional environments, this mouse provides the freedom of wireless connectivity with the reliability of a wired device.',
		features: [
			'Ergonomic Design: The contoured shape and soft rubber grips ensure that your hand remains comfortable, even after long hours of use.',
			'Wireless Connectivity: Enjoy the convenience of wireless technology with a reliable connection up to 10 meters (33 feet) away.',
			'High Precision: With a 1600 DPI optical sensor, this mouse delivers smooth and accurate tracking on almost any surface.',
			'Long Battery Life: The mouse uses a single AA battery (included) and can last up to 12 months before needing a replacement.',
			'Plug-and-Play: Simply plug the USB receiver into your computer’s USB port and start using your mouse right away, without the need for additional software.',
			'Portable Size: Lightweight and compact, it’s easy to take this mouse with you wherever you go.'
		],
		specifications: {
			DPI: 1600,
			'Connection Type': 'Wireless (2.4 GHz)',
			'Operating Range': 'Up to 10 meters (33 feet)',
			Battery: '1 x AA (included)',
			Dimensions: '4.4 x 2.5 x 1.5 inches',
			Weight: '3.2 ounces',
			Compatibility: ['Windows', 'macOS', 'Linux']
		},
		additionalInformation: {
			Warranty: '1-year limited warranty',
			'In the Box': ['Wireless Mouse', 'USB Receiver', '1 x AA Battery']
		},
		quantity: 1
	}
];
