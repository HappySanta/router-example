import './Persik.css';
import React from 'react';
import PropTypes from 'prop-types';
import { IOS, Placeholder, platform } from '@vkontakte/vkui';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import PanelHeaderButton from '@vkontakte/vkui/dist/components/PanelHeaderButton/PanelHeaderButton';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';
import { useRouter } from '@happysanta/router';

const osName = platform();

const About = props => {
	const router = useRouter();
	return <Panel id={props.id}>
		<PanelHeader
			left={<PanelHeaderButton onClick={() => router.popPage()}>
				{osName === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
			</PanelHeaderButton>}
		>
			About
		</PanelHeader>
		<Placeholder>
			@happysanta/router
		</Placeholder>
	</Panel>;
};

About.propTypes = {
	id: PropTypes.string.isRequired,
};

export default About;
