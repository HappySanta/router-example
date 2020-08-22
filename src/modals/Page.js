import { Button, Cell, Div, InfoRow, List, ModalPage, ModalPageHeader, PanelHeaderButton } from '@vkontakte/vkui';
import React from 'react';
import { useRouter } from '@happysanta/router';
import { POPOUT_CONFIRM } from '../routers';

export function Page({ id }) {
	const router = useRouter();
	return <ModalPage
		id={id}
		header={
			<ModalPageHeader left={<PanelHeaderButton onClick={() => router.popPage()}>Закрыть</PanelHeaderButton>}>
				Перевод деняк
			</ModalPageHeader>
		}
		settlingHeight={80}
	>
		<List>
			<Cell>
				<InfoRow header="Когда">
					30 января 1993
				</InfoRow>
			</Cell>
			<Cell>
				<InfoRow header="Куда">
					Ереван
				</InfoRow>
			</Cell>
			<Cell>
				<InfoRow header="Кому">
					Команда ВКонтакте
				</InfoRow>
			</Cell>
		</List>
		<Div>
			<Button size="xl" level="2" onClick={() => {
				router.replacePopup(POPOUT_CONFIRM)
			}}>
				Отправить деньги
			</Button>
		</Div>
	</ModalPage>;
}
