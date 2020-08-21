import { Alert } from '@vkontakte/vkui';
import React from 'react';
import { useRouter } from '@happysanta/router';

export function Confirm() {
	const router = useRouter();
	return <Alert
		actions={[{
			title: 'Отмена',
			autoclose: true,
			mode: 'cancel',
		}, {
			title: 'Перевести',
			autoclose: true,
		}]}
		onClose={() => router.popPage()}
	>
		<h2>Подтвердите действие</h2>
		<p>Вы переводите много деняк, вы уверены?</p>
	</Alert>;
}
