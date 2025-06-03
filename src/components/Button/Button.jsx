import React from 'react';
import './Button.css'; 

export default function Button({
	children,
	variant = 'primary',
	size = '14', 
	icon, 
	chevron,
	...props 
}) {
	return (
		<button className={`btn btn-${variant} btn-${size}`} {...props}>
			{icon && <span className="icon">{icon}</span>}
			{children}
			{chevron && <span className="chevron">{chevron}</span>}
		</button>
	);
}
