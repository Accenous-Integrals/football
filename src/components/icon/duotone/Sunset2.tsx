import React, { SVGProps } from 'react';

const SvgSunset2 = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<path
					d='M8.535 14A3.998 3.998 0 0112 12c1.48 0 2.773.804 3.465 2h-6.93zM16 16H8h8zM4 16h16a1 1 0 010 2H4a1 1 0 010-2z'
					fill='currentColor'
				/>
				<path
					d='M16.06 8.871l1.061-1.06a1.5 1.5 0 012.122 2.121l-1.061 1.06a1.5 1.5 0 01-2.121-2.12zM12 4.5A1.5 1.5 0 0113.5 6v1.5a1.5 1.5 0 01-3 0V6A1.5 1.5 0 0112 4.5zM4.81 7.81a1.5 1.5 0 012.122 0l1.06 1.061a1.5 1.5 0 01-2.12 2.122L4.81 9.932a1.5 1.5 0 010-2.121z'
					fill='currentColor'
					opacity={0.3}
				/>
			</g>
		</svg>
	);
};

export default SvgSunset2;
