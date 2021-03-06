import './Persik.css';
import React from 'react';
import PropTypes from 'prop-types';
import { Button, Div, IOS, platform } from '@vkontakte/vkui';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import PanelHeaderButton from '@vkontakte/vkui/dist/components/PanelHeaderButton/PanelHeaderButton';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';
import persik from '../img/persik.png';
import { useRouter } from '@happysanta/router';
import { PAGE_ABOUT, PAGE_INFO } from '../routers';

const osName = platform();

const Persik = props => {
	const router = useRouter();
	return <Panel id={props.id}>
		<PanelHeader
			left={<PanelHeaderButton onClick={() => router.popPage()}>
				{osName === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
			</PanelHeaderButton>}
		>
			Persik
		</PanelHeader>
		<img className="Persik" src={persik} alt="Persik The Cat"/>
		<Div>
			<Button mode="tertiary" onClick={() => router.pushPage(PAGE_ABOUT)} size="xl">About</Button>
			<br/>
			<Button size="xl" level="2" mode="secondary" onClick={() => router.pushPage(PAGE_INFO)}>
				Info
			</Button>
		</Div>
	</Panel>;
};

Persik.propTypes = {
	id: PropTypes.string.isRequired,
};

export default Persik;
