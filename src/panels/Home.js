import React from 'react';
import PropTypes from 'prop-types';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import Button from '@vkontakte/vkui/dist/components/Button/Button';
import Group from '@vkontakte/vkui/dist/components/Group/Group';
import Div from '@vkontakte/vkui/dist/components/Div/Div';
import { MODAL_CARD, PAGE_INFO, PAGE_PERSIK, PAGE_PRODUCT } from '../routers';
import { useRouter } from '@happysanta/router';

const Home = ({ id }) => {
	const router = useRouter()

	return <Panel id={id}>
		<PanelHeader>Example</PanelHeader>
		<Group title="Navigation Example">
			<Div>
				<Button size="xl" level="2" onClick={() => router.pushPage(PAGE_PERSIK)}>
					Show me the Persik, please
				</Button>
				<br/>
				<Button size="xl" level="2" mode="secondary" onClick={() => router.pushPage(PAGE_INFO)}>
					Info page
				</Button>
				<br/>
				<Button size="xl" level="2" mode="overlay_primary"
						onClick={() => router.pushModal(MODAL_CARD)}>
					Modal card
				</Button>
				<br/>
				<br/>
				<Button mode="commerce"
						onClick={() => router.pushPage(PAGE_PRODUCT, { id: '1' })}>
					Product #1
				</Button>
				<br/>
				<br/>
				<Button mode="commerce"
						onClick={() => router.pushPage(PAGE_PRODUCT, { id: '2' })}>
					Product #2
				</Button>
				<br/>
				<br/>
				<Button mode="commerce"
						onClick={() => router.pushPage(PAGE_PRODUCT, { id: '295' })}>
					Product #295
				</Button>
			</Div>
		</Group>
	</Panel>
}

Home.propTypes = {
	id: PropTypes.string.isRequired,
};

export default Home;
