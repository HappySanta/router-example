import { MODAL_PAGE } from '../routers';
import { ModalCard } from '@vkontakte/vkui';
import React from 'react';
import { useRouter } from '@happysanta/router';

export function Card({ id }) {
	const router = useRouter();
	return <ModalCard
		id={id}
		onClose={() => router.popPage()}
		header="Отправляйте деньги друзьям, используя банковскую карту"
		caption="Номер карты получателя не нужен — он сам решит, куда зачислить средства."
		actions={[{
			title: 'Попробовать',
			mode: 'primary',
			action: () => router.replaceModal(MODAL_PAGE),
		}]}
	/>;
}
