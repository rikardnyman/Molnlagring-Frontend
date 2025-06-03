function handleButtonClick(e) {
	const button = e.currentTarget;
	const action = button.dataset.action;

	switch (action) {
		case 'submit-form':
			document.querySelector('form')?.requestSubmit();
			break;

		case 'open-modal':
			document.querySelector('#myModal')?.classList.add('open');
			break;

		case 'toggle-dropdown':
			document.querySelector('#myDropdown')?.classList.toggle('open');
			break;

		case 'navigate':
			const eventId = button.dataset.id;
			if (eventId) {
				window.location.href = `/events/EventDetails?id=${eventId}`;
			}
			break;

		default:
			console.log('No action defined');
			break;
	}
}
export default handleButtonClick;
