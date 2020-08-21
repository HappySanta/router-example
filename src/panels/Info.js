import './Persik.css';
import React from 'react';
import PropTypes from 'prop-types';
import { Placeholder } from '@vkontakte/vkui';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import PanelHeaderButton from '@vkontakte/vkui/dist/components/PanelHeaderButton/PanelHeaderButton';
import { useRouter } from '@happysanta/router';
import Button from '@vkontakte/vkui/dist/components/Button/Button';
import { MODAL_CARD } from '../routers';

const Info = props => {
	const router = useRouter();
	return <Panel id={props.id}>
		<PanelHeader
			left={<PanelHeaderButton onClick={() => router.popPage()}>
				Отмена
			</PanelHeaderButton>}
		>
			Info
		</PanelHeader>
		<Placeholder>
			2020
		</Placeholder>
		<br/>
		<Button size="xl" level="2" mode="overlay_primary" onClick={() => router.pushModal(MODAL_CARD)}>
			Modal card
		</Button>
	</Panel>;
};

Info.propTypes = {
	id: PropTypes.string.isRequired,
};

export default Info;
